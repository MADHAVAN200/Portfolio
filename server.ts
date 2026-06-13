import express from "express";
import path from "path";
import os from "os";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { logToSupabase } from "./src/lib/supabase";
import nodemailer from "nodemailer";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

// Load configuration
dotenv.config();

// Initialize Nodemailer SMTP Transporter
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
const emailPort = Number(process.env.EMAIL_PORT) || 465;
const emailSecure = process.env.EMAIL_SECURE !== "false"; // default to true

let transporter: nodemailer.Transporter | null = null;

if (emailUser && emailPass) {
  console.log("Configuring email transporter for SMTP:", emailHost, emailPort);
  transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailSecure,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
} else {
  console.warn("SMTP credentials not fully configured. Email notifications will be skipped.");
}

async function sendContactNotificationEmail(
  name: string,
  email: string,
  subject: string,
  company: string,
  message: string
) {
  if (!transporter) {
    console.warn("Email notification skipped: Transporter not configured.");
    return;
  }

  const notificationEmails = process.env.NOTIFICATION_EMAIL || emailUser || "madhavannadar23@gmail.com";

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #f6f9fc;
          color: #333333;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid #eef2f5;
        }
        .header {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          padding: 30px 40px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .content {
          padding: 40px;
        }
        .field-list {
          margin-bottom: 30px;
          border-bottom: 1px solid #f0f3f6;
          padding-bottom: 20px;
        }
        .field-row {
          display: flex;
          margin-bottom: 12px;
        }
        .field-label {
          width: 120px;
          font-weight: 600;
          color: #64748b;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          flex: 1;
          color: #1e293b;
          font-size: 15px;
        }
        .message-box {
          background-color: #f8fafc;
          border-left: 4px solid #6366f1;
          border-radius: 4px;
          padding: 20px;
          margin-top: 20px;
        }
        .message-title {
          font-weight: 600;
          color: #475569;
          font-size: 14px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .message-text {
          color: #334155;
          font-size: 15px;
          line-height: 1.6;
          white-space: pre-wrap;
          margin: 0;
        }
        .footer {
          background-color: #f8fafc;
          padding: 20px 40px;
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          border-top: 1px solid #f0f3f6;
        }
        .footer a {
          color: #6366f1;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Message Received</h1>
        </div>
        <div class="content">
          <div class="field-list">
            <div class="field-row">
              <div class="field-label">Sender</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></div>
            </div>
            ${company ? `
            <div class="field-row">
              <div class="field-label">Company</div>
              <div class="field-value">${company}</div>
            </div>
            ` : ""}
            <div class="field-row">
              <div class="field-label">Subject</div>
              <div class="field-value">${subject || "No Subject"}</div>
            </div>
          </div>
          <div class="message-box">
            <div class="message-title">Message</div>
            <p class="message-text">${message}</p>
          </div>
        </div>
        <div class="footer">
          This message was sent from the contact form on your <a href="https://madhavannadar.dev">Portfolio Website</a>.
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Notification" <${emailUser}>`,
      to: notificationEmails,
      subject: `[Portfolio Contact] ${subject || "New Message from " + name}`,
      text: `New contact submission received from: ${name} (${email})\nCompany: ${company || "N/A"}\nSubject: ${subject || "None"}\n\nMessage:\n${message}`,
      html: htmlContent,
    });
    console.log("Email notification sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error;
  }
}

// Initialize Gemini AI Client lazily or safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

const app = express();
app.use(express.json());

// Export app for serverless environments (like Vercel)
export default app;

  // In-memory cache for GitHub API data to avoid rate limits
  let githubCache: any = null;
  let githubCacheTime = 0;
  const GITHUB_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  app.get("/api/github", async (req, res) => {
    const now = Date.now();
    if (githubCache && (now - githubCacheTime < GITHUB_CACHE_DURATION)) {
      return res.json(githubCache);
    }

    try {
      const headers: Record<string, string> = {
        "User-Agent": "aistudio-build-portfolio",
      };
      if (process.env.GITHUB_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
      }

      console.log("Fetching live data from GitHub API...");
      const [profileRes, reposRes, eventsRes1, eventsRes2] = await Promise.all([
        fetch("https://api.github.com/users/MADHAVAN200", { headers }).then(r => r.json()),
        fetch("https://api.github.com/users/MADHAVAN200/repos?per_page=100", { headers }).then(r => r.json()),
        fetch("https://api.github.com/users/MADHAVAN200/events?per_page=100&page=1", { headers }).then(r => r.json()),
        fetch("https://api.github.com/users/MADHAVAN200/events?per_page=100&page=2", { headers }).then(r => r.json()),
      ]);

      // If rate limited, throw error to trigger cached fallback
      if (
        (profileRes && profileRes.message && profileRes.message.includes("rate limit")) ||
        (reposRes && reposRes.message && reposRes.message.includes("rate limit"))
      ) {
        throw new Error("GitHub API rate limit exceeded");
      }

      const data = {
        profile: profileRes,
        repos: Array.isArray(reposRes) ? reposRes : [],
        events: [
          ...(Array.isArray(eventsRes1) ? eventsRes1 : []),
          ...(Array.isArray(eventsRes2) ? eventsRes2 : [])
        ],
        timestamp: now,
      };

      githubCache = data;
      githubCacheTime = now;
      return res.json(data);
    } catch (error: any) {
      console.warn("GitHub API fetch failing/rate-limited, serving stale cache or empty defaults:", error.message);
      if (githubCache) {
        return res.json(githubCache);
      }
      return res.json({
        profile: { followers: 12, public_repos: 24 },
        repos: [],
        events: [],
        timestamp: now,
        error: error.message
      });
    }
  });

// Prebaked high-fidelity, emoji-free static technology mapping summaries
const STATIC_RECOMMENDATIONS: Record<string, string> = {
  "python": `### Technology Overview
Python is a high-level general-purpose programming language celebrated for its simple syntax, versatility, and vast ecosystem. It is the global benchmark for artificial intelligence, machine learning, data engineering pipelines, and backend microservice development, allowing developers to construct highly maintainable and scalable systems.`,

  "react": `### Technology Overview
React is a declarative and flexible JavaScript library used for building dynamic, stateful user interfaces. It powers high-performance client web applications by managing view-state layers with a highly efficient virtual DOM and modular component lifecycles.`,

  "typescript": `### Technology Overview
TypeScript is a strongly typed superset of JavaScript that adds static types to enable exceptional editor tooling and code validation at modern enterprise scale. It compiles down to clean, standard JavaScript for execute-anywhere flexibility.`,

  "deep learning": `### Technology Overview
Deep Learning utilizes multi-layered artificial neural networks to decode complex, high-dimensional patterns in imagery, audio, and text, powering state-of-the-art vision models and cognitive language applications.`,

  "llm": `### Technology Overview
Large Language Models are deep neural architectures capable of parsing, translating, and generating sophisticated human-like text or computer code, transforming how modern software automates reasoning tasks.`,

  "rag": `### Technology Overview
Retrieval-Augmented Generation is an architecture that optimizes language model responses by fetching facts from external databases back into the model's active context window, providing up-to-date and highly specific answers.`,

  "flutter": `### Technology Overview
Flutter is Google's open-source UI software development kit for crafting beautiful, natively compiled cross-platform software from a single, unified codebase across mobile, web, and desktop.`,

  "node.js": `### Technology Overview
Node.js is an open-source, asynchronous event-driven JavaScript runtime environment built on Chrome's V8 engine, optimizing the execution of highly scalable backend network microservices and APIs.`,

  "express": `### Technology Overview
Express is a minimal and flexible web application framework for Node.js, providing a robust, highly extensible set of features to build single-page, multi-page, and fast RESTful backend APIs.`,

  "fastapi": `### Technology Overview
FastAPI is a modern, high-speed web framework for compiling APIs with Python, based on standard type hints and powered by Starlette and Pydantic for automated validation.`,

  "aws": `### Technology Overview
Amazon Web Services is a comprehensive and secure cloud platform offering scalable, on-demand compute infrastructure, managed database warehousing, serverless execution layers, and fully integrated AI tools.`,

  "firebase": `### Technology Overview
Firebase is a suite of cloud services and SDKs developed by Google, allowing developers to quickly build mobile and web applications with real-time synchronized collections, secure auth, and cloud functions.`,

  "docker": `### Technology Overview
Docker is an open system for packaging, distributing, and running apps inside unified containers, aligning local development setups perfectly with production server environments.`,

  "postgresql": `### Technology Overview
PostgreSQL is an advanced, enterprise-grade object-relational database system known for its exceptional query capabilities, strict SQL standards adherence, high reliability, and powerful indexing mechanisms.`,

  "langchain": `### Technology Overview
LangChain is an open-source orchestrator framework designed to simplify the construction and chaining of autonomous applications utilizing Large Language Models and external tools.`,

  "llama": `### Technology Overview
LLaMA is Meta's class-leading open-weights large language model family, designed to run highly specialized text analysis, classification, and reasoning tasks efficiently on flexible hardware.`,

  "groq": `### Technology Overview
Groq is an innovative platform for real-time AI processing, utilizing a custom-designed processor architecture to execute large models with ultra-low latency and explosive throughput.`,

  "flower framework": `### Technology Overview
Flower is a developer-friendly federated learning framework designed to train machine learning models securely across distributed edges like user devices or remote server installations without exposing private data.`,

  "pandas": `### Technology Overview
Pandas is a foundational data analysis library for Python, providing flexible and high-performance data structures designed to make working with structured, tabular, and labeled data intuitive and powerful.`,

  "numpy": `### Technology Overview
NumPy is the fundamental package for scientific computing in Python, providing high-performance multidimensional array objects and optimized mathematical functions to execute fast matrix operations.`,

  "analytics": `### Technology Overview
Data Analytics is the business practice of evaluating structured historical datasets to identify trends, inform logical decisions, and build predictive model indicators.`,

  "big data": `### Technology Overview
Big Data represents massive scales of structured and unstructured information that require parallel cluster systems, advanced stream buffering, and specialized distributed query pipelines to parse.`,

  "tailwind": `### Technology Overview
Tailwind CSS is an efficient, utility-first CSS framework that allows developers to compose custom layouts and responsive web interfaces directly in markup without writing repetitive styled sheets.`
};

// Return a tailored fallback summary if an offline event occurs
function getStaticFallback(skill: string): string {
  const norm = skill.toLowerCase().trim();
  if (norm.includes("pandas")) return STATIC_RECOMMENDATIONS["pandas"];
  if (norm.includes("numpy")) return STATIC_RECOMMENDATIONS["numpy"];
  if (norm.includes("python")) return STATIC_RECOMMENDATIONS["python"];
  if (norm.includes("react")) return STATIC_RECOMMENDATIONS["react"];
  if (norm.includes("typescript") || norm === "ts") return STATIC_RECOMMENDATIONS["typescript"];
  if (norm.includes("tailwind")) return STATIC_RECOMMENDATIONS["tailwind"];
  if (norm.includes("node")) return STATIC_RECOMMENDATIONS["node.js"];
  if (norm.includes("express")) return STATIC_RECOMMENDATIONS["express"];
  if (norm.includes("fastapi")) return STATIC_RECOMMENDATIONS["fastapi"];
  if (norm.includes("deep learning") || norm.includes("cnn") || norm.includes("nlp") || norm.includes("reinforcement")) return STATIC_RECOMMENDATIONS["deep learning"];
  if (norm.includes("llm") || norm.includes("hugging")) return STATIC_RECOMMENDATIONS["llm"];
  if (norm.includes("rag")) return STATIC_RECOMMENDATIONS["rag"];
  if (norm.includes("flutter")) return STATIC_RECOMMENDATIONS["flutter"];
  if (norm.includes("aws")) return STATIC_RECOMMENDATIONS["aws"];
  if (norm.includes("firebase")) return STATIC_RECOMMENDATIONS["firebase"];
  if (norm.includes("docker")) return STATIC_RECOMMENDATIONS["docker"];
  if (norm.includes("postgres") || norm.includes("sql") || norm.includes("mysql") || norm.includes("sqlite") || norm.includes("dynamo")) return STATIC_RECOMMENDATIONS["postgresql"];
  if (norm.includes("langchain")) return STATIC_RECOMMENDATIONS["langchain"];
  if (norm.includes("llama")) return STATIC_RECOMMENDATIONS["llama"];
  if (norm.includes("groq")) return STATIC_RECOMMENDATIONS["groq"];
  if (norm.includes("flower")) return STATIC_RECOMMENDATIONS["flower framework"];

  // Default clean general portfolio mapping representation
  return `### Technology Overview
${skill} is a key technology in modern computer science and software development, enabling engineers to build robust integrations, automate core systems, and scale advanced workflows cleanly.`;
}

// Strictly strips emojis, icons, and reveals of model names (Groq, Gemini, Llama)
function cleanResponseText(text: string): string {
  if (!text) return "";
  let cleaned = text;

  // 1. Strip emojis and graphical symbols
  cleaned = cleaned.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '');

  // 2. Erase model/vendor names to maintain a clean generic assistant tone
  cleaned = cleaned.replace(/\b(groq|gemini|llama|llama3|claude|openai|chatgpt)\b/gi, 'portfolio engine');
  cleaned = cleaned.replace(/\b(gemini-3\.5-flash|llama-3\.3-70b-versatile|llama-3\.1-8b-instant)\b/gi, 'advanced analysis core');

  // 3. Extract ONLY "Technology Overview" section
  const lower = cleaned.toLowerCase();
  const techIndex = lower.indexOf("technology overview");
  if (techIndex !== -1) {
    const startIndex = cleaned.lastIndexOf("###", techIndex);
    const startPos = startIndex !== -1 ? startIndex : techIndex;
    
    // Find if any other sections follow (e.g. "### Next-Gen", "### Architectural", etc.)
    const nextSectionIndex = cleaned.indexOf("###", techIndex + 19);
    if (nextSectionIndex !== -1) {
      cleaned = cleaned.substring(startPos, nextSectionIndex);
    } else {
      // Look for any regular next-heading pattern
      const nextHeadingRegex = /\n(###|##)?\s*(next-gen|architectural|project|practice|patterns)/i;
      const match = cleaned.substring(techIndex + 19).match(nextHeadingRegex);
      if (match && match.index !== undefined) {
        cleaned = cleaned.substring(startPos, techIndex + 19 + match.index);
      } else {
        cleaned = cleaned.substring(startPos);
      }
    }
  }

  return cleaned.trim();
}

  // API Route: AI recommendations proxy (Gemini as primary, Groq as fallback)
  app.get("/api/recommendations", async (req, res) => {
    try {
      const skill = req.query.skill;
      if (!skill || typeof skill !== "string") {
        return res.status(400).json({ error: "Skill parameter is required." });
      }

      // 1. Secure Gemini request
      const geminiClient = getGeminiClient();
      if (geminiClient) {
        try {
          console.log(`Processing Gemini recommendation for skill: ${skill}`);
          const systemInstruction = "You are an elite, highly professional Senior AI Architect. Provide a constructive, executive technology overview of the specified technology skill on behalf of Madhavan Nadar's tech portfolio. You MUST write only a single section starting with '### Technology Overview' (a clear, professional visual explanation of what this technology is, what it is used for, and why it is important so that a non-technical reader immediately gets the idea). Do NOT generate any other sections (like Next-Gen Projects or Architectural Practice) under any circumstances. CRITICAL DIRECTIVES: 1. Do NOT use any emojis or graphical icons anywhere in your response. 2. Do NOT mention any AI model names, API names, Groq, Gemini, or developer/assistant signatures. 3. Bold key terms for emphasis, but do NOT use bulleted lists. 4. Keep the total response short, cohesive, and dense (60 to 100 words), with no greetings.";
          const response = await geminiClient.models.generateContent({
            model: "gemini-3.5-flash",
            contents: `Analyze technical skill "${skill}" for Madhavan's advanced engineering dashboard.`,
            config: {
              systemInstruction,
              temperature: 0.6,
            }
          });

          const content = response.text;
          if (content) {
            const cleaned = cleanResponseText(content);
            logToSupabase("skill_queries", {
              skill: skill,
              recommendations: cleaned,
              model_used: "gemini-3.5-flash",
              created_at: new Date().toISOString()
            }).catch(e => console.error("Logged to Supabase (skill_queries) failed asynchronously:", e));
            return res.json({ recommendations: cleaned, model: "gemini-core" });
          }
        } catch (gemIniErr: any) {
          console.error("Gemini failed, falling back to Groq...", gemIniErr.message || gemIniErr);
        }
      }

      // 2. Secure Groq fallback
      const apiKey = process.env.GROQ_API_KEY;
      if (apiKey) {
        const models = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "llama3-8b-8192"];
        for (const model of models) {
          try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model,
                messages: [
                  {
                    role: "system",
                    content: "You are an elite, highly professional Senior AI Architect. Provide a constructive, executive technology overview of the specified technology skill on behalf of Madhavan Nadar's tech portfolio. You MUST write only a single section starting with '### Technology Overview' (a clear, professional visual explanation of what this technology is, what it is used for, and why it is important so that a non-technical reader immediately gets the idea). Do NOT generate any other sections (like Next-Gen Projects or Architectural Practice) under any circumstances. CRITICAL DIRECTIVES: 1. Do NOT use any emojis or graphical icons anywhere in your response. 2. Do NOT mention any AI model names, API names, Groq, Gemini, or developer/assistant signatures. 3. Bold key terms for emphasis, but do NOT use bulleted lists. 4. Keep the total response short, cohesive, and dense (60 to 100 words), with no greetings.",
                  },
                  {
                    role: "user",
                    content: `Analyze technical skill "${skill}" for Madhavan's advanced engineering dashboard.`,
                  },
                ],
                temperature: 0.6,
                max_tokens: 300,
              }),
            });

            if (response.ok) {
              const data = await response.json();
              const content = data.choices?.[0]?.message?.content;
              if (content) {
                const cleaned = cleanResponseText(content);
                logToSupabase("skill_queries", {
                  skill: skill,
                  recommendations: cleaned,
                  model_used: model,
                  created_at: new Date().toISOString()
                }).catch(e => console.error("Logged to Supabase (skill_queries) failed asynchronously:", e));
                return res.json({ recommendations: cleaned, model });
              }
            } else {
              const errText = await response.text();
              console.error(`Groq error response with model ${model}:`, errText);
            }
          } catch (err: any) {
            console.error(`Fetch exception with model ${model}:`, err);
          }
        }
      }

      // 3. Absolute robust failover to prebaked dictionary definitions
      console.log(`Using static portfolio failover recommendations dictionary for skill: ${skill}`);
      const staticContent = getStaticFallback(skill);
      logToSupabase("skill_queries", {
        skill: skill,
        recommendations: staticContent,
        model_used: "static-portfolio-fallback",
        created_at: new Date().toISOString()
      }).catch(e => console.error("Logged to Supabase (skill_queries) failed asynchronously:", e));
      return res.json({ recommendations: staticContent, model: "static-portfolio-fallback" });

    } catch (error: any) {
      console.warn("Caught top-level recommendations error, executing safety lookup:", error);
      const fallbackSkill = req.query.skill as string || "general";
      const staticContent = getStaticFallback(fallbackSkill);
      logToSupabase("skill_queries", {
        skill: fallbackSkill,
        recommendations: staticContent,
        model_used: "static-portfolio-fallback",
        created_at: new Date().toISOString()
      }).catch(e => console.error("Logged to Supabase (skill_queries) failed asynchronously:", e));
      return res.json({ recommendations: staticContent, model: "static-portfolio-fallback" });
    }
  });

  // API Route: Process and persist interactive contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, company, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }

      const result = await logToSupabase("contact_submissions", {
        name,
        email,
        subject: subject || "",
        company: company || "",
        message,
        created_at: new Date().toISOString()
      });

      // Asynchronously trigger notification email
      sendContactNotificationEmail(name, email, subject || "", company || "", message)
        .catch((e) => console.error("Logged contact email notification failed asynchronously:", e));

      return res.json({ success: true, logged: result.success });
    } catch (err: any) {
      console.error("Failed to process contact submission:", err);
      return res.status(500).json({ error: "Internal server error." });
    }
  });

  // API Route: Log interactive terminal developer commands
  app.post("/api/terminal_log", async (req, res) => {
    try {
      const { command, response_preview } = req.body;
      if (!command) {
        return res.status(400).json({ error: "Command parameter is required." });
      }

      const result = await logToSupabase("terminal_commands", {
        command,
        response_preview: response_preview || "",
        created_at: new Date().toISOString()
      });

      return res.json({ success: true, logged: result.success });
    } catch (err: any) {
      console.error("Failed to process terminal log command:", err);
      return res.status(500).json({ error: "Internal server error." });
    }
  });

  // API Route: Securely proxy resume PDF from private Supabase S3 bucket
  app.get("/api/resume", async (req, res) => {
    try {
      const s3Client = new S3Client({
        endpoint: process.env.SUPABASE_S3_ENDPOINT || "https://swkzswokhwbarufiswrz.storage.supabase.co/storage/v1/s3",
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY || "",
          secretAccessKey: process.env.SUPABASE_S3_SECRET_KEY || "",
        },
        region: "us-east-1",
        forcePathStyle: true,
      });

      const bucket = process.env.SUPABASE_S3_BUCKET || "resumes";
      const key = process.env.SUPABASE_S3_FILE || "Resume.pdf";

      const command = new GetObjectCommand({
        Bucket: bucket,
        Key: key,
      });

      const s3Response = await s3Client.send(command);
      
      // Set headers for PDF viewing/downloading
      res.setHeader("Content-Type", s3Response.ContentType || "application/pdf");
      res.setHeader("Content-Disposition", 'inline; filename="Resume.pdf"');

      // Consume stream into a buffer for robust serverless response delivery
      const stream = s3Response.Body as any;
      if (stream) {
        const chunks: any[] = [];
        for await (const chunk of stream) {
          chunks.push(chunk);
        }
        const pdfBuffer = Buffer.concat(chunks);
        return res.send(pdfBuffer);
      } else {
        res.status(500).json({ error: "S3 response body is empty." });
      }
    } catch (err: any) {
      console.error("Failed to fetch resume from Supabase Storage S3:", err);
      // Fallback: If S3 fails, check if a local fallback is present
      const localFallback = path.join(process.cwd(), "Resume.pdf");
      if (fs.existsSync(localFallback)) {
        console.log("Serving local fallback Resume.pdf");
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'inline; filename="Resume.pdf"');
        return res.sendFile(localFallback);
      }
      return res.status(500).json({ error: "Resume file not found." });
    }
  });


async function setupViteAndListen() {
  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Loading Vite dev middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else if (!process.env.VERCEL) {
    console.log("Serving production build from dist...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Only listen on a port if we're not deploying inside Vercel Serverless environment
  if (!process.env.VERCEL) {
    const startPort = Number(process.env.PORT) || 3000;
    const listen = (port: number) => {
      const server = app.listen(port, "0.0.0.0", () => {
        // Resolve all active network IPs and print them
        const nets = os.networkInterfaces();
        const ips: string[] = [];
        for (const iface of Object.values(nets)) {
          for (const addr of iface ?? []) {
            if (addr.family === "IPv4" && !addr.internal) {
              ips.push(addr.address);
            }
          }
        }

        console.log(`\n  🚀  Server is running!\n`);
        console.log(`  Local:    http://localhost:${port}`);
        for (const ip of ips) {
          console.log(`  Network:  http://${ip}:${port}`);
        }
        console.log();

        // Ping each detected IP to confirm reachability
        ips.forEach((ip) => {
          const { execSync } = require("child_process");
          try {
            const result = execSync(
              process.platform === "win32"
                ? `ping -n 1 ${ip}`
                : `ping -c 1 ${ip}`,
              { encoding: "utf8", timeout: 5000 }
            );
            const lines = result.split("\n").filter((l: string) => l.trim());
            console.log(`  📡 Ping ${ip}:`, lines[lines.length - 2] ?? lines[lines.length - 1]);
          } catch {
            console.log(`  📡 Ping ${ip}: unreachable`);
          }
        });
      });

      server.on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.warn(`Port ${port} is already in use. Retrying on port ${port + 1}...`);
          server.close();
          listen(port + 1);
        } else {
          console.error("Critical: Failed to boot express server:", err);
        }
      });
    };

    listen(startPort);
  }
}

setupViteAndListen().catch((err) => {
  console.error("Critical: Failed to boot express server:", err);
});
