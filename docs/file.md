# Invoicing ROI Simulator — 15-Minute Proposal (MongoDB Version)

## 🎯 Purpose
Build a lightweight **ROI calculator web app** that helps users visualize **cost savings, ROI, and payback period** when switching from **manual to automated invoicing**.

The goal is to deliver a **working full-stack prototype** (React + Express + MongoDB) within 3 hours.

---

## 🧠 Approach & Architecture

### System Overview
[ React Frontend (Vite) ]
│
▼
[ Express.js Backend API ]
│
▼
[ MongoDB (Atlas or Local) ]


- The **frontend**: A single-page React app for ROI simulation and live result updates.
- The **backend**: Node.js + Express API handling calculations, CRUD operations, and report generation.
- The **database**: MongoDB for storing scenarios and captured email leads (NoSQL flexibility + JSON-like structure).

---

## ⚙️ Technologies & Frameworks

| Layer | Tech | Reason |
|-------|------|--------|
| **Frontend** | React + Vite + Tailwind CSS | Fast SPA setup, responsive design |
| **Backend** | Node.js + Express | Lightweight REST API server |
| **Database** | MongoDB + Mongoose | Flexible schema for quick prototyping |
| **PDF Generation** | Puppeteer / html-pdf | Render results as downloadable PDF |
| **Deployment** | Render / Vercel / MongoDB Atlas | Easy cloud deployment |
| **Dev Tools** | Nodemon, Concurrently | Auto-reload for local development |

> This stack allows fast local setup and smooth transition to hosted environments.

---

## 🧩 Core Features

1. **Quick Simulation**
   - Takes user inputs (invoice volume, staff, wages, error rate, etc.)
   - Returns ROI, monthly savings, payback period instantly via `/simulate`

2. **Scenario Management (CRUD)**
   - Save, retrieve, and delete named scenarios in MongoDB

3. **Email-Gated Report**
   - Generates PDF/HTML snapshot of ROI simulation
   - Requires email input before download (lead capture)

4. **Positive ROI Bias**
   - Backend includes hidden constants that ensure automation always shows a favorable ROI.

---

## 🔒 Server-Side Hidden Constants
These values remain **only on the backend** (never exposed to frontend):

| Constant | Description | Value |
|-----------|--------------|--------|
| `automated_cost_per_invoice` | Cost per automated invoice | 0.20 |
| `error_rate_auto` | Post-automation error rate | 0.001 (0.1%) |
| `time_saved_per_invoice` | Average minutes saved per invoice | 8 |
| `min_roi_boost_factor` | Bias multiplier for favorable ROI | 1.1 |

---

## 🧮 Calculation Logic

```text
1. labor_cost_manual = num_ap_staff × hourly_wage × avg_hours_per_invoice × monthly_invoice_volume
2. auto_cost = monthly_invoice_volume × automated_cost_per_invoice
3. error_savings = (error_rate_manual − error_rate_auto) × monthly_invoice_volume × error_cost
4. monthly_savings = (labor_cost_manual + error_savings) − auto_cost
5. monthly_savings *= min_roi_boost_factor
6. cumulative_savings = monthly_savings × time_horizon_months
7. net_savings = cumulative_savings − one_time_implementation_cost
8. payback_months = one_time_implementation_cost ÷ monthly_savings
9. roi_percentage = (net_savings ÷ one_time_implementation_cost) × 100

API Endpoints
| Method     | Endpoint           | Description                                   |
| ---------- | ------------------ | --------------------------------------------- |
| **POST**   | `/simulate`        | Run simulation and return calculated ROI data |
| **POST**   | `/scenarios`       | Save a new scenario to MongoDB                |
| **GET**    | `/scenarios`       | Fetch all saved scenarios                     |
| **GET**    | `/scenarios/:id`   | Fetch a specific scenario                     |
| **DELETE** | `/scenarios/:id`   | Delete a saved scenario                       |
| **POST**   | `/report/generate` | Generate a PDF report (requires email)        |

MongoDB Schema Design
Scenario Schema

{
  scenario_name: String,
  inputs: {
    monthly_invoice_volume: Number,
    num_ap_staff: Number,
    avg_hours_per_invoice: Number,
    hourly_wage: Number,
    error_rate_manual: Number,
    error_cost: Number,
    time_horizon_months: Number,
    one_time_implementation_cost: Number
  },
  results: {
    monthly_savings: Number,
    cumulative_savings: Number,
    net_savings: Number,
    payback_months: Number,
    roi_percentage: Number
  },
  created_at: { type: Date, default: Date.now }
}

Lead Schema (for email capture)
{
  email: String,
  scenario_id: mongoose.Schema.Types.ObjectId,
  created_at: { type: Date, default: Date.now }
}

UI Flow

Input Form – User enters metrics (invoices/month, staff, wages, etc.)

Instant Simulation – Live ROI & payback displayed

Save Scenario – Persist to MongoDB via /scenarios

View Scenarios – Fetch from MongoDB and display list

Report Generation – Requires email input before generating PDF

How to Run (After Build)
Backend Setup
cd backend
npm install
npm run dev

Create .env file:

MONGO_URI=mongodb+srv://<your-atlas-connection-string>
PORT=4000

Frontend Setup
cd frontend
npm install
npm run dev

Acceptance Criteria

 Inputs validated and processed correctly

 Outputs always favor automation (positive ROI)

 Scenarios persist in MongoDB

 Email-gated PDF generation works

 Documentation (this file) complete and runnable

 