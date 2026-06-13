# Interactive Portfolio Website

A premium, modern, and high-fidelity personal portfolio web application built for Madhavan Nadar, an AI & Data Science Engineer. The application features rich visual design, interactive elements, motion animations, and dedicated viewport configurations.

---

## Key Features

* **Dedicated Layouts**: Tailored components for Desktop (`App.tsx`), Tablet (`TabletView.tsx`), and Mobile (`MobileView.tsx`) form factors.
* **Interactive Terminal**: A custom mock macOS/terminal interface (`MacBookWindow.tsx`) running real command parses (e.g., `help`, `projects`, `contact`, `clear`, `coffee`).
* **Motion & Animations**: Fluid entrance transitions, staggering lists, spring effects, and hovering lifts powered by `motion/react` (Framer Motion).
* **Project Case-Studies**: Full modal showcase for case-studies with technical stack breakdown, outcomes, and links.
* **Visual Telemetry**: Dynamic UTC clocks, system metric visualizations, and interactive skill proficiency meters.
* **Dual Theme Engine**: Custom Light/Dark mode transitions with persistence in LocalStorage.
* **Contact Channels**: Phone, email (redirects straight to Gmail compose layout), GitHub, and LinkedIn social links. Includes a print-ready TXT biography draft download.
* **Production Build Settings**: Auto-silencing console logging in production builds.

---

## Technology Stack

* **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) for fast dev builds and bundling.
* **Styling**: [TailwindCSS](https://tailwindcss.com/) for fluid responsive utilities.
* **Animations**: [Motion/React](https://github.com/motiondivision/motion) (formerly Framer Motion) for physics-based animations.
* **Icons**: [Lucide React](https://lucide.dev/) for consistent design iconography.
* **Charts**: [Recharts](https://recharts.org/) for rendering the language shares and telemetry graphs.
* **Backend Server**: Express server in TypeScript (`server.ts`) proxying to Vite middleware in development or serving the built production folder.
* **Analytics/Logs**: Integrates with [Supabase](https://supabase.com/) to log transmission contact events.

---

## Running Locally

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm**

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set up database analytics keys in `.env`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

3. Run the development environment:
   ```bash
   npm run dev
   ```
   *The server runs locally (default port `5173`) and automatically increments to the next port if the default is occupied.*

### Production Build & Deployment

Generate the production bundle and start the Express server wrapper:
```bash
npm start
```
*This command builds the assets with Vite and launches the backend server in production mode.*
