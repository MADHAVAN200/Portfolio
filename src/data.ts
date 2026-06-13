export const profile = {
  name: "Madhavan Nadar",
  headline: "AI & Data Science Engineer • Full-Stack Developer",
  location: "Mumbai, Maharashtra, India",
  bio: "Driven professional passionate about leveraging data and AI to solve complex problems and create impactful business solutions.",
  followers: 245,
  following: 180,
  cgpa: 8.68,
};

export const summary = {
  text: "I am a driven professional passionate about leveraging data and AI to solve complex problems and create impactful business solutions. I aspire to be a visionary leader who inspires teams, drives strategic innovation, and bridges the gap between advanced technology and business growth. My goal is to lead projects and organizations towards scalable success by fostering collaboration, strategic thinking, and delivering high-value solutions that make a real difference.",
};

export const education = [
  {
    institute: "SIES Graduate School of Technology",
    year: "2022 - 2026",
    degree: "B.E. - Artificial Intelligence and Data Science",
    detail: "CGPA: 8.68 / 10 | Focused on Deep Learning, Big Data Analytics, and Cloud Computing.",
    modules: [
      "Deep Learning & Neural Networks",
      "Data Warehousing & Mining",
      "Advanced Algorithms",
      "Cloud Computing & Microservices",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Big Data Analytics",
    ],
    achievements: [
      {
        title: "Technical Head — AI & DS Student Council",
        desc: "Elected to lead technical initiatives and curate hands-on workshops. Organized dynamic hackathons and code labs covering NLP, Deep Learning, and computer vision pipelines for 200+ students.",
      },
      {
        title: "Winner — Inter-College Hackathon 2023",
        desc: "Designed and prototyped an automated ML emergency triage priority routing framework, winning 1st place among 40+ engineering groups.",
      },
      {
        title: "Published Researcher — Construction AI",
        desc: "Authored and published a research study on integrating predictive machine learning modeling and automated natural language auditing to optimize construction project delays and safety constraints.",
      },
    ],
  },
  {
    institute: "SIES College of Arts, Science and Commerce, Mumbai",
    year: "2022",
    degree: "Higher Secondary Certificate (HSC)",
    detail: "12th | HSC | Percentage: 54.67 / 100",
  },
  {
    institute: "Our Lady Of Good Counsel High School, Mumbai",
    year: "2020",
    degree: "Secondary School Certificate (SSC)",
    detail: "10th | SSC | Percentage: 81.40 / 100",
  },
];

export const internships = [
  {
    company: "MitrasAI Inc",
    domain: "AI & NLP Applications",
    role: "AI/ML Intern",
    technologies: [
      "LLMs",
      "RAG / NLP",
      "Python",
      "Speech-to-Text",
      "Prompt Engineering",
      "Fine-Tuning",
      "Model Evaluation"
    ],
    handledAreas: [
      "LLM Application Eng",
      "NLP Feature Integration",
      "Model Accuracy & Eval"
    ],
    summary:
      "Optimized LLM-powered applications used by Westcliff University, UC, and NYU to improve scalability and performance.",
    details: [
      "Designed and optimized LLM prompts to enhance response accuracy by 35% in production clients.",
      "Integrated advanced NLP features, including Speech-to-Text and automated report summary compile pipelines.",
      "Evaluated model performance and accuracy, converting educational business needs into low-latency AI solutions."
    ],
    duration: "Sep 2025 - Jan 2026",
    outcomes:
      "Successfully launched scalable LLM architectures and speech processing modules for major universities.",
    metrics: { institutions: "3 Unis", inference_boost: "+35%", reporting_effort: "-70%" },
    impact: [
      "Shipped production LLM applications for Westcliff, UC, and NYU.",
      "Reduced report compilation effort by 70% via dynamic context builders."
    ],
  },
  {
    company: "KloudKraft",
    domain: "E-Learning & Cloud Tech",
    role: "Software Developer Intern",
    technologies: [
      "React",
      "Express",
      "MySQL",
      "AWS (EC2, RDS, Lambda)",
      "REST APIs",
      "UI/UX Design"
    ],
    handledAreas: [
      "Full-Stack Development",
      "AWS Deployments",
      "Production Reliability"
    ],
    summary:
      "Engineered LabsKraft, an industry e-learning tracking SaaS serving over 1,000 daily active trainees.",
    details: [
      "Built full-stack trainee workflow modules covering skill mapping and performance progress metrics.",
      "Deployed and automated serverless cloud infrastructure on AWS utilizing EC2, RDS, and Lambda.",
      "Secured cross-device responsive UI accessibility and active production bug resolution."
    ],
    duration: "Sep 2025 - March 2026",
    outcomes:
      "Launched full trainee-management portal with sub-second page delivery under concurrent usage.",
    metrics: { active_users: "1,000+", deployment: "On-Time", uptime: "99.9%" },
    impact: [
      "Digitized career training and evaluation workflows for 1,000+ daily active users.",
      "Maintained zero-downtime reliability through proactive queries tuning."
    ],
    links: [
      { label: "LabsKraft Login", url: "https://www.labskraft.com/login", type: "globe" }
    ]
  },
  {
    company: "MANO PPL (Mano Project Pvt. Ltd.)",
    domain: "Construction & HR Tech",
    role: "Full-Stack Dev & AI Engineer Intern",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "React Native",
      "Flutter",
      "RAG / NLP",
      "AWS (EC2, RDS)"
    ],
    handledAreas: [
      "Full-Stack Engineering",
      "RAG Chatbots",
      "Mobile Applications"
    ],
    summary:
      "Built a corporate web ecosystem, AI ERP, custom HRM, and mobile clients serving over 500 daily users.",
    details: [
      "Redesigned the responsive firm portal featuring liquid glass visual panels and Express backend routing.",
      "Shipped full-stack HRM platform and companion attendance mobile apps (React Native & Flutter) to store fronts.",
      "Implemented a RAG-based server chatbot for natural-language questioning over database log metrics."
    ],
    duration: "April 2025 - April 2026",
    outcomes:
      "Automated corporate and HR pipelines, shifting key tracking tasks from manual labor to software.",
    metrics: { daily_users: "500+", cloud_uptime: "99.9%", manual_tasks: "-70%" },
    impact: [
      "Slashed administrative scheduling overhead by 70% with active automation utilities.",
      "Delivered 4 production-grade systems securely hosted on AWS EC2 & RDS."
    ],
    links: [
       { label: "Company Website", url: "https://www.mano.co.in/", type: "globe" },
       { label: "HRM Platform Web", url: "https://attendance.mano.co.in/", type: "globe" },
       { label: "iOS App Store", url: "https://apps.apple.com/ie/app/mano-attendance/id6760896400", type: "appstore" },
       { label: "Android Play Store", url: "https://play.google.com/store/apps/details?id=co.mano.attendance", type: "playstore" }
    ]
  },
];

export const projects = [
  {
    slug: "text2viz-ai-analytics-visualization-platform",
    title: "Natural Language Analytics & Visualisation Platform",
    link: "https://github.com/MADHAVAN200/Text-to-Visualisation",
    tech: ["React (TypeScript)", "Express.js", "Python FastAPI", "LLaMA-3 (Groq API)", "SQLite / MySQL / PostgreSQL", "Web Speech API", "Recharts", "Tailwind CSS"],
    description:
      "An intelligent workspace that enables non-technical users to query SQL databases in plain English or spoken voice, instantly executing queries, auto-generating charts, and providing AI-driven business insights.",
    detailedDescription:
      "Voice2Viz is a voice-enabled visual analytics platform that translates English questions and spoke transcripts into structured, secure read-only SQL queries. Using the Web Speech API for voice matching and LLaMA-3 pipelines for schema parsing, the application executes commands against SQLite, MySQL, or PostgreSQL engines. It auto-identifies appropriate coordinates to render charts (Bar, Line, Pie, Area, Scatter, Heatmap, or Treemap) and produces AI business summaries.",
    features: [
      "Voice & Text Workspace: Transcribes spoke queries instantly via Web Speech APIs and pairs them with natural-language text inputs.",
      "Smart Catalog Synchronization: Analyzes and maps table schemas, data fields, and primary/foreign key relations into an interactive local directory.",
      "Auto-Visualization Engine: Recommends and configures appropriate coordinate axes and layout types based on returned dataset structures.",
      "Real-Time Business Summarizer: Generates clear text summaries highlighting trends, peak metrics, and performance ratios from SQL responses.",
      "Strict Transaction Security: Sanitizes generated queries before submission, explicitly blocking modifying commands to preserve read-only selectivity.",
      "Interactive Dashboard Studio: Saves generated visualization blocks into real-time custom layouts with fully adjustable grid boxes.",
    ],
    stats: { query_mode: "Voice &\nText", auto_viz_chart: "AI Auto-\nSelect", execution: "Safe Read-\nOnly SELECT" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "React SPA UI & Web Speech SDK",
      "Express.js Backend & Auth Service",
      "FastAPI Python SQL Execution Engine",
      "Groq Cloud API with LLaMA-3 Pipelines",
      "Adaptive Relational Database Connectors",
    ],
    workflow: [
      "System scans the selected target database to cache schemas, relations, and table outlines.",
      "Users speak or type queries into the workspace, initiating speech-to-text transcription hooks.",
      "FastAPI agents parse the schema metadata using LLaMA-3 logic chains to formulate SQL queries.",
      "SQL security modules inspect syntax lists, discarding unsafe or modifying transaction commands.",
      "Safe queries run against active databases, and dataset results trigger auto-charting blocks with bulleted insights.",
    ],
    challenges: [
      "Tolerating spoken voice typos and acoustic variations to map transcripts to correct database table names.",
      "Developing robust regex patterns to block harmful prompt injection maneuvers without affecting valid SELECT operations.",
      "Mapping diverse relational datasets to correct dimensions for Bar, Line, Scatter, or Treemap graphs.",
    ],
    outcomes: [
      "Designed and deployed a dual-input analytics solution successfully translating speech directly to SQL queries.",
      "Built a secure database proxy checking execution logs and blocking destructive updates, inserts, or deletes.",
      "Automated technical data analysis workflows by compiling instant text insights alongside interactive visual blocks.",
    ],
  },
  {
    slug: "labskraft-assessment-learning-cloud-platform",
    title: "LabsKraft - Cloud Learning & Assessment Platform",
    link: "",
    tech: ["Node.js", "Express", "MySQL", "AWS Cognito", "AWS S3", "Knex.js", "React 19", "Vite 7", "Framer Motion", "Tailwind CSS"],
    description:
      "A high-performance cloud-based assessment and learning platform for technical education, enabling custom multi-round exams (SQL, MCQ, code environments), live proctoring, and cloud lab gateways.",
    detailedDescription:
      "LabsKraft is an enterprise scholastic engine built for deploying, taking, and reviewing technical evaluations. It supports structured assessment runs including live schema deployment on MySQL, adaptive multi-choice database pooling, proctoring tracks with cameras or screen captures, and direct gateway connections to real cloud resources like virtual machines, console terminals, and interactive labs.",
    features: [
      "Multi-Round Assessment Engine: Drag-and-drop orchestration of custom exams merging SQL tasks, MCQ datasets, file uploads, and online repositories in sequential order.",
      "Execution Runner with Live Sandbox: Integrated browser consoles running active candidates' queries on sandboxed SQL schema layouts with instant feedback loops.",
      "Real-Time Candidate Proctoring: Automated workspace activity trackers utilizing webcam scans and system focus flags to secure evaluation credibility.",
      "Dynamic Media & Dataset Injectors: Multi-format parsing engines generating live database schemas on MySQL, tag classifications, and customized difficulty banks.",
      "High-Fidelity Virtual Machine Control: Secure client console terminals supporting instant provisioning, runtime checks, and lifecycle tasks on AWS compute nodes.",
      "Role-Based Analytics Suites: Comprehensive dashboards mapping performance statistics, user progress matrices, downloadable spreadsheets, and audit journals.",
    ],
    stats: { assessments: "Active", challenge_types: "4 Modular\nFormats", proctoring: "Webcam/\nScreen" },
    category: "Enterprise & Full-Stack Systems",
    architecture: [
      "Express API with Knex & SQL Services",
      "MySQL 8 & AWS Web Services (Cognito, S3)",
      "React 19, Vite 7 & Tailwind CSS",
      "AWS Virtual Machine & Cloud Console integration",
    ],
    workflow: [
      "Staff define round constraints, assign target cohorts, and deploy live MySQL schemas via zip configurations.",
      "Candidates initiate assessments, and their browser terminal schedules query evaluations against actual server backends.",
      "Background proctor monitors register webcam activity snapshots and track focus events on active windows.",
      "Knex services capture marks, compile total outcomes, and export CSV scorecards for trainer review.",
      "Integrations dynamically spin up AWS lab VMs and route user commands directly to secure shell runtimes.",
    ],
    challenges: [
      "Dynamically mapping and creating isolated, sandboxed MySQL table definitions from arbitrary user zip assets.",
      "Enforcing frame-rate proctoring checks across different browsers without lagging user execution lines.",
      "Coordinating state preservation and countdown timers smoothly during transitions between asynchronous round types.",
    ],
    outcomes: [
      "Delivered an end-to-end full-stack learning and assessment ecosystem tailored for high-volume recruitment pipelines.",
      "Reduced evaluator assessment overhead by 80% by automating SQL queries testing, MCQ banks parsing, and grading runs.",
      "Engineered a premium responsive glassmorphic interface with micro-animations and custom responsive themes.",
    ],
  },
  {
    slug: "aws-manager-automated-cloud-optimization-billing-suite",
    title: "AWS Manager - Automated Cloud Optimization & Billing Suite",
    link: "",
    tech: ["Python Flask", "Boto3 AWS SDK", "React (Vite)", "SQLite", "gspread (Google Sheets)", "APScheduler", "Fernet Cryptography"],
    description:
      "An enterprise-grade cloud optimization and cost control platform designed to monitor EC2 fleets, audit resource usage, enforce auto-stop scheduling, and stream costing reports directly to Google Sheets.",
    detailedDescription:
      "AWS Manager is a robust enterprise dashboard built during the KloudKraft tenure to bring central oversight and fiscal savings to distributed cloud environments. By implementing precise idle metrics scanners, checking CPU utilization patterns through CloudWatch, and linking into Cost Explorer, the platform automatically halts inactive non-whitelisted assets. Featuring regional AWS resource discovery (S3, RDS, EBS, Lambda) alongside automated Google Sheets synchronization, it eliminates resource leakage, lowers bills, and streamlines cost tracking.",
    features: [
      "Dashboard command deck with real-time counters, active node grids, and manual bulk start/stop actions.",
      "Idle-stop automation engine tracking CPU utilization metrics (<4%) and uptime scopes.",
      "Comprehensive action logger and scan history table tracking state changes with detailed criteria.",
      "Detailed organizational cohort group managers executing actions on schedule blocks.",
      "Regional resource maps identifying untagged RDS, S3, Lambdas, and orphaned EBS blocks.",
      "Costing views displaying month-to-date regional spend figures alongside synchronized Google Sheets charts.",
    ],
    stats: { automation_rate: "70%", average_savings: "30%+", multi_region: "Active" },
    category: "Enterprise & Full-Stack Systems",
    architecture: [
      "Boto3 AWS Resource & Billing SDK",
      "Python Flask API with APScheduler",
      "React UI running on custom Vite bundles",
      "Fernet-encrypted SQLite Config Engine",
      "Google Sheets API Integration (gspread)",
    ],
    workflow: [
      "Boto3 handlers inspect all defined regional endpoints to discover active instances.",
      "Cron schedulers compute rolling resource idle percentages via CloudWatch telemetry logs.",
      "Secure whitelists bypass automated stop signals for protected mission-critical instances.",
      "Financial reports are generated, formatted, and written directly into client Spreadsheet cells.",
      "Administrators view consolidated status maps, audit traces, and billing logs from the control deck.",
    ],
    challenges: [
      "Safely managing secure cross-region IAM keys while scanning numerous disjointed accounts.",
      "Retrieving and aggregating cost dimensions in real-time from Cost Explorer APIs efficiently.",
      "Structuring unified, granular tables mapping disparate AWS service resources cleanly.",
    ],
    outcomes: [
      "Engineered automated cost control architectures lowering test environment cloud spendings significantly.",
      "Streamlined technical audits and reports by mapping asset data feeds directly to active Google Sheets.",
      "Built resilient, high-productivity DevOps portals utilizing unified UI grids and bulk task schedules.",
    ],
  },
  {
    slug: "ai-powered-b2b-scraper-analytics-platform",
    title: "AI-Powered B2B Scraper & Analytics Platform",
    link: "https://github.com/MADHAVAN200/AI-Powered-B2B-Scraper-Analytics-Platform",
    tech: ["Python", "Groq AI LLaMA-3.1", "SQLite", "Flask", "Chart.js", "BeautifulSoup", "HTML Heurist Parsing"],
    description:
      "An end-to-end B2B catalog collection, extraction, and analytical platform that crawls major marketplaces (IndiaMart, Alibaba, TradeIndia), standardizes attributes using Llama-3.1, and presents real-time analytics on a premium web dashboard.",
    detailedDescription:
      "A robust enterprise-grade B2B market intelligence platform containing stateful scraping engines, heuristic HTML scrapers, rotated user-agents, and automated Llama-3.1 classifiers. The backend utilizes SQL relational schemas (Products, Suppliers, and many-to-many lookups), while the front-end features high-density interactive dashboards with Chart.js visualization cards and live macOS-inspired log terminals driven by HTML5 Server-Sent Events (SSE).",
    features: [
      "Dynamic Multi-Platform Crawlers: Targeted extraction rules for catalog showrooms (IndiaMart, Alibaba, TradeIndia) complete with randomized sleep intervals, header rotation, and polite polling policies.",
      "Resilient AI-Fallback Generator: Auto-switches to real-time synthetic listing engines to generate category-precise catalog item prices and regions if scrapers get rate-limited or blocked by Cloudflare capchas.",
      "Groq LLaMA Standardization: Automatically cleans supplier suffixes, standardizes missing fields, classifies items into structured categories, and maps coordinates using Groq with robust local regex fallbacks.",
      "Relational SQLite Database Schema: Cleans and resets logs on active pipeline runs, persisting data into normalized Products, Suppliers, and product-supplier relationship schemas.",
      "High-Density Dashboard Visualizations: Renders 5 active Chart.js interactive widgets covering price brackets, category breakdown, keyword counts, and region density with zero dependencies on image charts.",
      "SSE Log Terminal Streamer: Provides execution outputs line-by-line via Server-Sent-Events (SSE) displayed within a retro high-fidelity macOS terminal design.",
    ],
    stats: { products_processed: "239+", categories: "12+", charts_active: "5" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "Python Multi-Platform Scraper Engine",
      "Groq LLaMA-3.1 Classifier Pipe",
      "SQLite Entity-Relation Database",
      "Flask Server-Sent Events log streamer",
      "HTML5 High-Density Client Dashboard",
    ],
    workflow: [
      "Operators type query keywords or paste direct B2B catalog showroom URLs inside web consoles.",
      "Python scrapers rotate headers to extract cards, or execute sandbox fallbacks to ensure uninterrupted stream workflows.",
      "Batched data payloads undergo Llama-3.1 context parsing to format company profiles, item pricing, and regional names.",
      "Transactional SQLite databases flush historical caches, loading current catalog segments cleanly.",
      "Dynamic dashboards trigger real-time Chart.js transitions and stream output traces directly to client terminal components.",
    ],
    challenges: [
      "Avoiding aggressive bot defenses (captchas, status 403, and geoblocking) cleanly without interrupting pipeline progression.",
      "Correcting unstructured, incomplete seller profiles and country tags into uniform geographic standards.",
      "Synchronizing live thread execution blocks to stream line-by-line logs reliably to standard web interfaces via SSE.",
    ],
    outcomes: [
      "Engineered end-to-end automated B2B scraping and formatting pipelines connecting directly with LLMs and relational databases.",
      "Built resilient hybrid parsers ensuring continuous dashboard visual performance using adaptive sandbox synthetic fallback data generators.",
      "Developed a clean, responsive analytics control desk containing interactive charts and terminal logs.",
    ],
  },
  {
    slug: "ai-ppt-presentation-generator",
    title: "AI PPT Presentation Generator",
    link: "https://github.com/MADHAVAN200/AI-PPT-Generator",
    tech: ["React 19", "Express.js", "Gemini API", "Groq LLaMA", "PptxGenJS", "Supabase", "Tailwind CSS"],
    description:
      "A complete full-stack presentation orchestrator that transforms brief topic prompts into professional, multi-slide PowerPoint decks with AI-synthesized content, theme layouts, and export-ready slides.",
    detailedDescription:
      "AI PPT Presentation Generator is a high-performance full-stack web application that leverages structured LLM synthesis to instantly create beautifully formatted, presentation-ready PowerPoint (.pptx) slide decks from single prompts. Integrating React 19, Express.js on Node.js, and multi-tier AI execution (Groq LLaMA 3.3 for lightning-fast presentation outlines and structures, Gemini for specialized vector graphics and dynamic imagery), the platform offers custom typographic themes, interactive slide editors, responsive layout canvases, and a local json flat-file database fallback when Supabase persistence is unconfigured.",
    features: [
      "AI Presentation Outline Generator: High-speed structured slide plan drafting with Groq LLaMA 3.3 and automatic failovers to Gemini 3.5 Flash.",
      "Custom Graphic Synthesis: Dynamic visual generation delivering professional AI stock imagery and color-themed vector SVG graphics on-the-fly.",
      "Professional Theme Pairings: Eleven beautifully designed creative categories with precise font pairings, content ratios, and responsive layouts.",
      "Direct pptx Compilation: XML-based presentation compilation via pptxgenjs translating state definitions directly into pure Microsoft .pptx files.",
      "Dual Hybrid Persistence: Seamless SQL schema reads and writes with Supabase, paired with automatic flat-file db.json fallbacks.",
      "Secure Token-Based Authentication: Multi-tier secure login with encrypted JWT session management and user isolation rules.",
    ],
    stats: { generations: "1,500+", outline_speed: "<3s", design_count: "11+" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "React 19 SPA Frontend",
      "Express.js REST API Server",
      "Groq & Gemini Core Orchestrator",
      "PptxGenJS XML Binary Compiler",
      "Supabase & Hybrid JSON DB Layer",
    ],
    workflow: [
      "Operators submit high-level topics, selecting specific slide limits, target audience styles, and core design theme profiles.",
      "Groq or Gemini systems synthesize comprehensive, structured slide nodes detailing individual point structures and lists.",
      "Visual engines concurrently produce vector SVG blueprints and tailored thematic imagery to embed into slide templates.",
      "The local canvas visualizes fully responsive layouts, letting users adjust, review, and download pure compiled office-ready binaries.",
    ],
    challenges: [
      "Securing clean, fully formatted JSON structures from prompt models under varied, non-standard text inputs.",
      "Rendering consistent 16:9 canvas dimensions adaptively across heavily fragmented responsive web viewports.",
      "Converting nested React state objects into valid Open Office XML boundaries containing custom pixel constraints.",
    ],
    outcomes: [
      "Designed and deployed responsive presentation builder compiling native, fully formatted Microsoft PowerPoint .pptx downloads.",
      "Integrated dual-redundant AI fallback engines ensuring continuous generation capabilities under various API token limitations.",
      "Engineered automated fallback database modules maintaining 100% active operational uptime without throwing service errors.",
    ],
  },
  {
    slug: "mano-workforce-intelligence-platform",
    title: "Mano Workforce Intelligence Platform",
    link: "https://github.com/MADHAVAN200/Attendance-Web",
    liveLink: "https://attendance.mano.co.in/",
    playStoreLink: "https://play.google.com/store/apps/details?id=co.mano.attendance",
    appStoreLink: "https://apps.apple.com/ie/app/mano-attendance/id6760896400",
    tech: ["React 18", "Express 5.x", "Socket.io", "Redis", "Knex.js", "MySQL", "Groq Cloud", "Transformers"],
    description:
      "Mano is an industry-grade, high-density workforce monitoring, attendance tracking, and administrative intelligence platform designed for enterprise-grade team management, daily activity reporting, and organizational collaboration.",
    detailedDescription:
      "Mano is a high-density corporate workforce tracking, team communication, and HR administration ecosystem. Optimized with a specialized Obsidian dark aesthetic scaled to a compact 80%-equivalent layout for low visual fatigue during extended monitoring sessions, it encapsulates fine-grained multi-role JWT security, location-validated geofenced check-ins with polygon boundary analysis, real-time encrypted Direct & Group messaging powered by a custom Socket.io hub, end-to-end recruitment pipelines with AI PDF resume parsing, automated HR contract and CTC document compilers, and RAG-driven daily activity log analysis.",
    features: [
      "High-Density Industrial UI: Ultra-compact 'Obsidian' dark theme with 80% equivalent global zoom and 13px bases for maximum screen real estate.",
      "Multi-Tenant JWT Authentication: Robust cookie sessions supporting Super-Admin, Org-Admin, HR staff, and general Employee access rights.",
      "Real-Time Geofenced Monitoring: Instant check-in/out logging with GPS boundary verification and automated out-of-boundary fraud detection.",
      "Full Chat & Collaboration Hub: High-throughput Socket.io direct & group channels with encrypted logs and removed-member access checks.",
      "Careers & AI Parser Portal: Advanced applicant recruitment tracker containing an AI Job Description generator and candidate resume scorer.",
      "HR Document Generation Studio: Automatic document automation compiling Appointment/Offer Letters with full monthly and annual CTC calculators.",
      "Holidays & Leave Management: Multi-category request system with team-wide calendar details, balances calculation, and HR approval paths.",
      "Mano Copilot & AI Chatbot: Groq LLaMA and Xenova all-MiniLM embedding pipelines powering landing widget and internal context guide.",
    ],
    stats: { active_users: "500+", layout_scale: "80%", latency: "<30ms" },
    category: "Enterprise & Full-Stack Systems",
    architecture: [
      "Obsidian High-Density React UI",
      "Express 5.x REST API Server",
      "Socket.io Direct & Group Messaging Bus",
      "Redis Cache & Queue Server",
      "Knex.js & MySQL Relational Core",
      "Groq & Xenova AI RAG Pipelines",
    ],
    workflow: [
      "Staff log GPS-verified attendances and list structured task cards on local workspaces.",
      "WebSocket signals instantly alert coordinators of check-ins or unread chat channel activities.",
      "AI pipelines parse incoming candidate PDFs while document studios auto-generate CTC matrices.",
      "Administrative consoles display real-time analytics, database queries tracks, and system alerts.",
    ],
    challenges: [
      "Orchestrating high-density, low-fatigue responsive layouts spanning numerous administrative modules in 13px base fonts.",
      "Designing atomic data sovereignty isolating tenant organization logs and credentials securely.",
      "Controlling real-time direct/group typing states and removed-member timeline visibility cleanly over Socket.io.",
    ],
    outcomes: [
      "Delivered production-grade HRM system live-tested at attendance.mano.co.in with 500+ daily members.",
      "Slashed manual resume analysis and reporting overheads via integrated Groq and document-generator services.",
      "Secured lightning-fast dashboard navigation speed under substantial concurrent data queries.",
    ],
  },
  {
    slug: "ai-powered-forecasting-inventory-optimization",
    title: "AI-Powered Forecasting, Inventory & Optimisation System",
    link: "https://github.com/MADHAVAN200/AI-Powered-forecasting-inventory-and-optimization-system",
    tech: ["Python", "Time Series", "Predictive Analytics", "React", "REST APIs"],
    description:
      "Intelligent inventory platform for perishables with automated demand forecasting, spoilage prediction, dynamic pricing optimisation, and real-time supply-chain monitoring.",
    detailedDescription:
      "An advanced forecasting and inventory optimization system designed to manage perishable goods. Utilizing high-fidelity predictive modeling and time series analyses, it dynamically updates prices and predicts shelf-lives under various demand fluctuations, maximizing retail efficiency.",
    features: [
      "Dynamic pricing and markdown adjustment algorithms to optimize margins before expiry.",
      "High-precision time series analysis for highly accurate seasonal demand forecasting.",
      "Real-time shelf-life and spoilage predictions utilizing multi-factor classification.",
      "Live supplier and supply-chain track-and-trace analytics with interactive map features.",
      "Automated stock-alert notifications dispatched via REST APIs to warehouse managers.",
    ],
    stats: { efficiency: "+45%", waste_reduction: "30%", forecast_accuracy: "92%" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "Time Series Prediction Engine",
      "Spoilage Scoring Pipeline",
      "Dynamic Pricing Optimiser",
      "React Dashboard UI",
      "FastAPI REST Backend",
    ],
    workflow: [
      "Inventory updates stream continuously through secure REST API ingestion points.",
      "Time series analytics forecast demand curves relative to seasonal and promotion variables.",
      "Spoilage modules score item risks and automatically adjust dynamic markdowns.",
      "Warehouse leaders check heat maps to rebalance stocks and schedule immediate dispatches.",
    ],
    challenges: [
      "Predicting perishable micro-trends under sparse historical sales distribution datasets.",
      "Harmonizing price elasticities inside the automated discount feedback loop.",
      "Sustaining dashboard response times during heavy multi-node database sync cycles.",
    ],
    outcomes: [
      "Enhanced demand forecasting accuracy to 92%+ for highly volatile perishable groupings.",
      "Simulated a 30% reduction in grocery and inventory spoilage waste.",
      "Improved supply chain transit planning efficiency by 45% using predictive dispatches.",
    ],
  },
  {
    slug: "ai-driven-construction-erp-rag-intelligence",
    title: "AI-Driven Construction ERP with RAG Intelligence",
    link: "https://github.com/Mano-Bharathii/MANO-ERP.git",
    tech: ["Python", "LangChain", "FAISS", "Node.js", "React", "MySQL", "AWS"],
    description:
      "Intelligent ERP with LLM-based summarisation and a RAG chatbot for natural-language querying of project databases and documents, reducing manual reporting effort and improving operational visibility.",
    detailedDescription:
      "A full-stack, enterprise-grade construction ERP system integrated with RAG (Retrieval-Augmented Generation) intelligence. By parsing text documents and structural databases, it enables natural-language querying and live LLM-based weekly and monthly reporting, cutting down manual administrative cycles while strengthening operational oversight.",
    features: [
      "RAG-based AI chatbot enabling conversational natural-language queries over project documents and databases using FAISS and LangChain.",
      "LLM-powered automated weekly and monthly report generation from live project module data.",
      "Unified ERP modules covering schedule, cost, contracts, quality, and document control.",
      "Role-based multi-stakeholder collaboration with configurable workflow approval chains.",
      "Real-time analytics dashboards visualizing KPIs for schedule variance and cost burn.",
      "Scalable backend architecture deployed on AWS with MySQL relational data storage.",
    ],
    stats: { efficiency: "94%", delay_reduction: "45%", reports_automated: "100%" },
    category: "Enterprise & Full-Stack Systems",
    architecture: [
      "FAISS Vector Retrieval Pipeline",
      "LangChain Orchestration Hub",
      "React Frontend Dashboard",
      "Node.js Backend Services",
      "MySQL Relational Data Layer",
      "AWS Cloud Infrastructure",
    ],
    workflow: [
      "Project managers update schedule and cost details within the ERP modules.",
      "System auto-documents edits and feeds them to the FAISS RAG embedding pipeline.",
      "Stakeholders query project databases or PDFs using the natural-language chatbot interface.",
      "LLM summarization engine aggregates weekly modules and auto-compiles executive reviews.",
    ],
    challenges: [
      "Mitigating hallucination risks in RAG answers to ensure project statistics remain strictly accurate.",
      "Designing highly optimized MySQL schemas for complex multi-module enterprise query latency.",
      "Handling real-time token processing limits during high-frequency concurrent stakeholder chats.",
    ],
    outcomes: [
      "Reduced time-to-report generation by 60% through automated LLM drafting.",
      "Enabled natural-language inquiries across 1000+ files with sub-3s response speeds.",
      "Decreased coordination delays by 45% through enhanced multi-team transparency.",
    ],
  },
  {
    slug: "ai-based-crisis-management-system",
    title: "AI-Based Crisis Management System",
    link: "https://github.com/MADHAVAN200/DisasterIQ",
    tech: ["Python", "Deep Learning", "NLP", "Multi-source data fusion", "SMS fallback", "React"],
    description:
      "Disaster management system integrating satellite imagery, social-media signals, and official alerts for real-time situational awareness; includes AI/ML damage detection, automated evacuation-route optimisation, and SMS-based fallback for low-connectivity scenarios.",
    detailedDescription:
      "A life-saving crisis response and disaster management system. By fusing deep learning satellite classification with NLP-based citizen alert tracking, the platform routes critical help where needed. Features map-based route planning and a lightweight offline-first SMS fallback module to ensure operation in infrastructure blackouts.",
    features: [
      "AI/ML image classification over satellite bands for real-time flood, fire, and structural damage detection.",
      "Data fusion engine combining NASA/Sentinel feeds, geo-tagged social signals, and civil alerts.",
      "NLP alert analyzer categorization and entity extraction to prioritize field dispatcher calls.",
      "Graph-based escape route planning to calculate optimal safety paths around danger polygons.",
      "SMS-based communication fallback enabling operations in cellular grid degradation.",
    ],
    stats: { response_speed: "+50%", classification_accuracy: "92%", data_sources: "12+" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "Deep Learning Satellite Analyzer",
      "NLP Parsing Pipeline",
      "Multi-Source Signal Fusion Engine",
      "Graph-Based Routing Service",
      "SMS Gateway Integrator",
      "React Command Hub UI",
    ],
    workflow: [
      "Ingests live Sentinel-2 tiles, social messaging logs, and government weather feeds.",
      "Computer vision identifies compromised regions and overlays risk heat maps.",
      "NLP prioritizes urgent citizen distress signals and maps key coordinates.",
      "Routing modules compute obstacle-avoiding evacuations and alert users via SMS.",
    ],
    challenges: [
      "Processing and aligning disparate satellite image bands during stormy conditions.",
      "Filtering rumor mills or irrelevant reports from social streams during crisis events.",
      "Structuring high-compression message formats to convey routing over sub-140-character SMS.",
    ],
    outcomes: [
      "Reduced situational tracking response cycles from 45 min down to under 8 min.",
      "Achieved 92% accurate disaster level classification on historic test scenarios.",
      "Built resilient communication framework validated for critical emergency response.",
    ],
  },
  {
    slug: "ai-powered-skill-mapper",
    title: "AI-Powered Skill Mapper",
    link: "https://github.com/MADHAVAN200/Career_roadmap.git",
    tech: ["Python", "LangChain", "Generative AI", "RAG", "React"],
    description:
      "Career recommendation system generating personalised learning roadmaps via psychometric analysis, skill-gap detection, AI-driven matching, and career simulation with dynamic progress tracking.",
    detailedDescription:
      "A dynamic educational tech platform transforming text profiles into modular career expansion pathways. Combining RAG, psychometrics, and vector embeddings, the app discovers individual skill gaps and generates progress dashboards detailing optimal learning roadmaps.",
    features: [
      "Generative AI roadmap creation dynamically mapped using LangChain and RAG pipelines.",
      "Structured skill-gap assessment based on localized corporate credential requirements.",
      "Career simulation tools mapping historical trajectories and wage growth variables.",
      "Psychometric test engine evaluating operational values and problem-solving styles.",
      "Dynamic progress dashboards keeping students on track with responsive UI calendars.",
    ],
    stats: { paths_modeled: "500+", recommendation_accuracy: "94%", skill_gaps_mapped: "100+" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "RAG Skill Knowledge Base",
      "LangChain Matching Agent",
      "Psychometric Scoring Engine",
      "Career Trajectory Simulator",
      "React Learning Dashboard",
    ],
    workflow: [
      "Users submit general CVs, career ambitions, and perform the psychometric assay.",
      "RAG matching models retrieve ideal target milestones from professional lists.",
      "Generative AI agent structures a personalized, step-by-step career path roadmap.",
      "Dashboard compiles learning targets and tracks calendar progress interactively.",
    ],
    challenges: [
      "Resolving highly divergent career roadmaps without overwhelming the student with choices.",
      "Optimizing response generation speeds of custom embedded LLM chains.",
      "Maintaining high-precision mapping as industry role titles rapidly shift.",
    ],
    outcomes: [
      "Delivered a 94% approval rating across surveyed beta user profiles.",
      "Saved hours of personal counseling by compiling instant structured roadmaps.",
      "Successfully indexed and categorized 500+ dynamic pathways spanning tech, design, and business.",
    ],
  },
  {
    slug: "ai-powered-railway-traffic-optimisation-system",
    title: "AI-Powered Railway Traffic Optimisation System",
    link: "https://github.com/MADHAVAN200/Railway_Automations.git",
    tech: [
      "Python",
      "Optimisation Algorithms",
      "Event-driven Workflows",
      "REST APIs",
      "React",
      "Real-time Monitoring",
    ],
    description:
      "Intelligent railway control system automating train scheduling, platform allocation, and disruption recovery using real-time data, optimisation algorithms, and human-in-the-loop control with automated passenger communication.",
    detailedDescription:
      "An award-winning railway coordination solution that automates complicated route scheduling, line allocations, and incident recoveries. By pairing hyper-fast mathematical solver algorithms with an intuitive human-in-the-loop design, the platform maintains timing and passenger communication even during heavy grid disruptions.",
    features: [
      "Constrained optimization solvers determining scheduling over complex network junctions.",
      "Greedy and heuristic allocation models facilitating efficient platform changes.",
      "Event-driven recovery simulator evaluating distinct disruption scenarios in parallel.",
      "Human-in-the-loop override panels preserving central operator safety supervision.",
      "Automated commuter broadcast alerts pushing immediate status changes through REST APIs.",
    ],
    stats: { delay_reduction: "60%", scenarios_evaluated: "10+", decision_latency: "<50ms" },
    category: "AI & Deep Tech Solutions",
    architecture: [
      "Injunction Optimizer Engine",
      "Platform Allocator Heuristic",
      "Disruption Scenario Simulator",
      "Event Ingestion Hub",
      "React Dispatch Board UI",
    ],
    workflow: [
      "Live terminal positions stream directly through high-capacity event hubs.",
      "Solvers process thousands of network constraints within millisecond latency.",
      "Disruption modules calculate ranked options for delay mitigation.",
      "The operator reviews outcomes and approves or manually overrides active tracks.",
    ],
    challenges: [
      "Solving large-scale combinatorial scheduling decisions within strict sub-50ms windows.",
      "Visualizing congested platform topologies cleanly on unified operator dashboards.",
      "Guaranteeing safe and deterministic recommendations under simultaneous routing incidents.",
    ],
    outcomes: [
      "Achieved sub-50ms operational calculations on typical edge server hardware.",
      "Simulated 60% average delay mitigation across complex high-congestion trials.",
      "Provided transparent human-supervised safety loops fitting strict railway guidelines.",
    ],
  },
];

export const achievements = [
  "Smart India Hackathon Finalist — Selected in Top 5 among 500+ national project submissions for innovative data solutions.",
  "Intercollege Ideation Hackathon — Achieved 3rd place among 40+ competing teams with automated emergency triage UI concept.",
  "Cognition Project Competition — Secured 1st place in the Departmental Project Presentation Competition for AI-driven risk modeling.",
];

export const responsibilities = [
  {
    title: "Freelancer — AI & Software Solutions (2024 - Present)",
    detail:
      "Delivered 8+ freelance AI and software engagements for clients across requirement analysis, product design, development, and deployment support — spanning LLM integrations, automation pipelines, and full-stack web applications.",
    techStack: ["React", "Node.js", "Python", "LLM APIs", "REST APIs", "Automation Scripting"],
    highlights: [
      "Designed and delivered 8+ end-to-end client projects from discovery to production deployment.",
      "Built LLM-powered automation tools reducing client manual processing workflows by 50%+.",
      "Maintained 100% client satisfaction rate across all delivered engagements through structured delivery.",
    ],
  },
  {
    title: "GDG Mumbai — UI/UX Lead (2025), UI/UX Member (2024)",
    detail:
      "Led design initiatives by managing a 6-person creative team, overseeing branding assets, and driving UI/UX strategy to improve event engagement and grow the community's digital presence across Google Developer Group Mumbai.",
    techStack: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "Brand Strategy"],
    highlights: [
      "Managed a 6-person design team delivering visual assets for 10+ community events and campaigns.",
      "Established a reusable design system reducing brand asset creation time by 40%.",
      "Grew event social media reach by 65% through strategic visual identity and communication campaigns.",
    ],
  },
  {
    title: "SIES GST Council — Design Head (2025), Design Coordinator (2024)",
    detail:
      "Coordinated council activities, student events, and campus initiatives while managing visual communication, strategic planning, and stakeholder engagement for the SIES Graduate School of Technology Student Council.",
    techStack: ["Figma", "Canva", "Event Planning", "Communication Strategy", "Leadership"],
    highlights: [
      "Organized 5+ major campus events with 500+ student participants and cross-departmental coordination.",
      "Redesigned all council communication materials improving brand consistency across channels.",
      "Coordinated multi-department campaigns driving 30% higher student engagement rates year-over-year.",
    ],
  },
];

export const personalDetails = {
  gender: "Male",
  maritalStatus: "Single",
  address:
    "Mumbai, India",
  dateOfBirth: "19 Sep, 2004",
  languages: ["English", "Tamil", "Marathi", "Hindi"],
  phoneNumbers: ["+91-9869140691"],
  emails: ["madhavannadar23@gmail.com", "madhavancloud1909@gmail.com"],
};

export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  experience: string;
  proficiency: number;
}

export const techStackCategories: { title: string; skills: SkillItem[] }[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning (CNNs, RNNs, Transformers)", level: "Advanced", experience: "2 years", proficiency: 92 },
      { name: "Generative AI Solutions", level: "Advanced", experience: "1.5 years", proficiency: 91 },
      { name: "Natural Language Processing (NLP)", level: "Advanced", experience: "2 years", proficiency: 89 },
      { name: "Federated Learning Integration", level: "Intermediate", experience: "1 year", proficiency: 82 }
    ]
  },
  {
    title: "LLM Systems & RAG Architectures",
    skills: [
      { name: "Multi-Model APIs (GPT, Claude, Gemini, Llama)", level: "Advanced", experience: "1.5 years", proficiency: 93 },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced", experience: "1.5 years", proficiency: 91 },
      { name: "Agent Orchestration (LangChain, LangGraph)", level: "Advanced", experience: "1.5 years", proficiency: 90 },
      { name: "Prompt Optimization & Engineering", level: "Advanced", experience: "1.5 years", proficiency: 92 },
      { name: "HuggingFace Transformers", level: "Intermediate", experience: "1 year", proficiency: 84 }
    ]
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Technical Math Libraries (Pandas, NumPy)", level: "Advanced", experience: "2 years", proficiency: 91 },
      { name: "Visual Analytics (Matplotlib, Plotly, Seaborn)", level: "Advanced", experience: "2 years", proficiency: 89 },
      { name: "Business BI Platforms (PowerBI)", level: "Intermediate", experience: "1 year", proficiency: 82 },
      { name: "Time Series & Predictive Modeling", level: "Intermediate", experience: "1.5 years", proficiency: 84 }
    ]
  },
  {
    title: "Cloud Services & Backend Systems",
    skills: [
      { name: "AWS Cloud (EC2, S3, RDS, Lambda)", level: "Advanced", experience: "1.5 years", proficiency: 90 },
      { name: "Node.js & Express.js Backends", level: "Advanced", experience: "2 years", proficiency: 92 },
      { name: "SQL Databases (MySQL, PostgreSQL)", level: "Advanced", experience: "2 years", proficiency: 89 },
      { name: "Scalable Restful API Design", level: "Advanced", experience: "2 years", proficiency: 91 },
      { name: "Serverless Solutions Architecture", level: "Intermediate", experience: "1.5 years", proficiency: 86 }
    ]
  },
  {
    title: "UI / UX Design & Web Frameworks",
    skills: [
      { name: "Desktop & Web Apps (React & Vite)", level: "Advanced", experience: "2 years", proficiency: 93 },
      { name: "Cross-Platform Code (Flutter & Dart)", level: "Advanced", experience: "2 years", proficiency: 90 },
      { name: "Visual Prototyping Assets (Figma)", level: "Intermediate", experience: "1.5 years", proficiency: 87 },
      { name: "Human-Centered AI Interaction Design", level: "Intermediate", experience: "1.5 years", proficiency: 85 },
      { name: "Responsive & Accessible Interfaces", level: "Advanced", experience: "2 years", proficiency: 90 }
    ]
  },
  {
    title: "Cybersecurity & Defenses",
    skills: [
      { name: "System & Network Security", level: "Intermediate", experience: "1 year", proficiency: 83 },
      { name: "Web App Defense & Penetration Testing", level: "Intermediate", experience: "1.5 years", proficiency: 85 },
      { name: "Analysis Tools (Burp Suite, Metasploit, Kali)", level: "Intermediate", experience: "1 year", proficiency: 82 },
      { name: "Standard Cryptography & Secure Handshakes", level: "Intermediate", experience: "1 year", proficiency: 80 }
    ]
  }
];
