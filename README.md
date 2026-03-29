# Dev Sharma — Portfolio

A full-stack developer portfolio built with React + TypeScript on the frontend and Node.js + Express on the backend. Features a contact form with email notifications, resume upload/download, and a fully automated CI/CD pipeline using GitHub Actions and Docker.

**Live:** [portfolio-1.onrender.com](https://portfolio-1.onrender.com) &nbsp;|&nbsp; **API:** [portfolio.onrender.com](https://portfolio.onrender.com)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [CI/CD Pipeline](#cicd-pipeline)
- [Docker](#docker)
- [Deployment](#deployment)

---

## Features

- **Hero Section** — Animated intro with availability badge and CTA buttons
- **About** — Developer bio with specialization highlights
- **Tech Stack** — Categorized skills (Frontend, Backend, Databases, Tools)
- **Projects** — Featured work with GitHub links
- **Experience** — Work history with role details
- **Resume** — Public download + password-protected admin upload
- **Contact Form** — Validated form with MongoDB storage and email notification via Resend
- **Rate Limiting** — Contact form limited to 5 requests per 15 minutes
- **CI/CD** — Automated lint, test, build and Docker image publishing on every push

---

## Tech Stack

### Frontend
| Technology | Version |
|------------|---------|
| React | 18.3 |
| TypeScript | 5.8 |
| Vite | 5.4 |
| Tailwind CSS | 3.4 |
| shadcn/ui (Radix UI) | latest |
| React Router DOM | 6.30 |
| React Hook Form + Zod | 7.61 / 3.25 |
| TanStack React Query | 5.83 |
| Recharts | 2.15 |
| Lucide React | 0.462 |

### Backend
| Technology | Version |
|------------|---------|
| Node.js | 20 |
| Express | 5.2 |
| Mongoose (MongoDB) | 9.3 |
| Resend | 6.9 |
| Multer | 2.1 |
| express-rate-limit | 8.3 |

### DevOps
| Tool | Purpose |
|------|---------|
| GitHub Actions | CI/CD automation |
| Docker + Docker Compose | Containerization |
| GitHub Container Registry | Image hosting |
| Render | Backend & frontend hosting |
| Vercel | Alternative frontend hosting |

---

## Project Structure

```
portfolio2/
├── frontend/                    # React + TypeScript SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui auto-generated components
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ResumeSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Index.tsx        # Main page (all sections)
│   │   │   └── NotFound.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── test/
│   ├── Dockerfile               # Multi-stage: Node build → nginx serve
│   ├── nginx.conf               # SPA routing + gzip + caching
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/                     # Node.js + Express API
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── models/
│   │   └── contact.model.js     # Contact form schema
│   ├── routes/
│   │   ├── contact.route.js     # POST /api/contact
│   │   └── resume.route.js      # GET/POST /api/resume
│   ├── uploads/                 # Resume file storage
│   ├── index.js                 # Express app entry
│   ├── Dockerfile
│   └── package.json
│
├── .github/
│   └── workflows/
│       ├── ci.yml               # Lint, test, build on push/PR
│       └── cd.yml               # Build & push Docker images on main
├── docker-compose.yml           # Local & production orchestration
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB (local or [MongoDB Atlas](https://cloud.mongodb.com) — free tier)
- [Resend](https://resend.com) account for email (free tier: 3000 emails/month)

### 1. Clone the repo

```bash
git clone https://github.com/itsdevsharma/portfolio.git
cd portfolio
```

### 2. Set up the backend

```bash
cd backend
cp .env.example .env
# Fill in your values in .env
npm install
npm run dev
# API running at http://localhost:5000
```

### 3. Set up the frontend

```bash
cd frontend
echo "VITE_API_URL=http://localhost:5000" > .env.local
npm install
npm run dev
# App running at http://localhost:8080
```

---

## Environment Variables

### Backend — `backend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `RESEND_API_KEY` | Resend API key for emails | `re_xxxxxxxxxxxx` |
| `RECEIVER_EMAIL` | Email to receive contact form submissions | `you@example.com` |
| `PORT` | Backend server port | `5000` |
| `ADMIN_KEY` | Secret key for resume upload | `your_strong_secret` |
| `ALLOWED_ORIGINS` | Comma-separated allowed CORS origins | `https://yoursite.vercel.app` |

Copy `.env.example` as a starting point:

```bash
cp backend/.env.example backend/.env
```

### Frontend — `frontend/.env.local`

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |

---

## API Reference

Base URL: `http://localhost:5000` (dev) / `https://your-backend.onrender.com` (prod)

### Health

```
GET /api/health
→ 200  { "status": "ok" }
```

### Contact Form

```
POST /api/contact
Rate limit: 5 requests per 15 minutes

Body:
{
  "name":    "string (required)",
  "email":   "string (required)",
  "message": "string (required)"
}

Responses:
201  { "message": "Message sent successfully", "id": "<mongo_id>" }
400  { "error": "All fields are required" }
429  { "error": "Too many messages sent. Please try again later." }
500  { "error": "Failed to send message. Please try again." }
```

### Resume — Download

```
GET /api/resume
→ 200  File stream (PDF/DOC/DOCX)
→ 404  { "error": "No resume uploaded yet" }
```

### Resume — Info

```
GET /api/resume/info
→ 200  { "exists": true, "filename": "resume.pdf", "size": 12345, "updatedAt": "..." }
→ 200  { "exists": false }
```

### Resume — Upload (Admin only)

```
POST /api/resume/upload
Headers: x-admin-key: <ADMIN_KEY>
Body: multipart/form-data  →  field: "resume"  (PDF, DOC, DOCX — max 5MB)

Responses:
200  { "message": "Resume uploaded successfully", "filename": "resume.pdf" }
400  { "error": "No file uploaded" }
401  { "error": "Unauthorized" }
500  { "error": "Upload failed" }
```

---

## CI/CD Pipeline

### CI — Runs on every push and pull request to `main`

```
Push / PR to main
       │
       ├── Frontend Job
       │     ├── npm ci
       │     ├── npm run lint
       │     ├── npm test
       │     └── npm run build  (uploads dist/ artifact)
       │
       └── Backend Job
             ├── npm ci
             └── node --check index.js
```

### CD — Runs on push to `main` only

```
Push to main
       │
       └── Build & Push Docker Images
             ├── Build backend → ghcr.io/{owner}/portfolio2-backend:latest + :{sha}
             └── Build frontend → ghcr.io/{owner}/portfolio2-frontend:latest + :{sha}
                   (VITE_API_URL injected from GitHub Secrets at build time)
```

### Required GitHub Secrets

| Secret | Used for |
|--------|---------|
| `VITE_API_URL` | Baked into frontend Docker image at build time |
| `GITHUB_TOKEN` | Auto-provided — pushes images to GHCR |

---

## Docker

### Run locally with Docker Compose

```bash
# Build and start both services
docker compose up --build

# Frontend → http://localhost
# Backend  → http://localhost:5000
```

```bash
# Stop
docker compose down

# Stop and remove volumes (clears uploaded resume)
docker compose down -v

# View logs
docker compose logs -f
docker compose logs -f backend
```

### Build images individually

```bash
# Backend
docker build -t portfolio-backend ./backend

# Frontend (pass your API URL)
docker build \
  --build-arg VITE_API_URL=https://your-backend.onrender.com \
  -t portfolio-frontend ./frontend
```

### Rolling back to a previous version

Each CD build is also tagged with the Git commit SHA. To roll back:

```bash
docker pull ghcr.io/itsdevsharma/portfolio2-backend:<old-sha>
docker pull ghcr.io/itsdevsharma/portfolio2-frontend:<old-sha>
```

---

## Deployment

This project is deployed using **Render** (free tier).

### Backend on Render (Web Service)

| Setting | Value |
|---------|-------|
| Runtime | Docker |
| Root Directory | `backend` |
| Docker Build Context | `backend/` |
| Dockerfile Path | `backend/` |
| Auto-Deploy | On Commit |
| Build Filter | `backend/**` |

Add all environment variables from the [table above](#backend--backendenv) in the Render dashboard.

### Frontend on Render (Static Site)

| Setting | Value |
|---------|-------|
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Publish Directory | `dist` |

Add `VITE_API_URL` pointing to your Render backend URL.

### Alternative: Frontend on Vercel

| Setting | Value |
|---------|-------|
| Root Directory | `frontend` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Add `VITE_API_URL` in Vercel's Environment Variables settings.

> After deploying the frontend, update `ALLOWED_ORIGINS` in your backend environment to your frontend's URL to enable CORS.

---

## License

MIT © [Dev Sharma](https://github.com/itsdevsharma)
