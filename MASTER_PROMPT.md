# Antigravity Master Prompt: Red Apple Learning CRM Implementation

## 1. Project Overview
**Red Apple Learning CRM** is a comprehensive enterprise management system built with **Vite, React, TypeScript, Tailwind CSS, and Shadcn UI**. The application manages the entire student lifecycle from lead generation to admission, along with B2B alliance management and a robust finance/accounting module.

Current implementation includes a high-fidelity frontend and an **initial Node.js/Express backend** skeleton with core business logic and JSON persistence.

---

## 2. Technical Stack
- **Frontend**: React (v18), TypeScript, TanStack Query, React Router, Tailwind CSS, Shadcn UI, Recharts, Lucide Icons.
- **Backend**: Node.js, Express.js, TypeScript.
- **Data Store**: JSON-based persistence (initial) / SQL or NoSQL database (planned).
- **Authentication**: JWT-based RBAC (mocked token for now).

---

## 3. Core Modules & Features

### 3.1 Lead Management (Telecalling & Counseling)
- **Kanban Board**: Visualizing lead stages (New, Contacted, Follow-up, Counseling, Qualified, Admission, Lost).
- **Qualification Form**: Capturing budget, interest, location, and timeline. Auto-scoring leads based on intent.
- **Transfer Logic**: Transferring leads between telecallers and counselors with history tracking.
- **Follow-ups**: Scheduling and tracking callbacks, WhatsApp, and meetings.

### 3.2 Finance & Accounts
- **GST Engine**: Auto-calculation of 18% GST (CGST/SGST/IGST) based on place of supply (WB state code 19). Implemented in `server/src/services/gstService.ts`.
- **PI/TI Workflow**:
    - Proforma Invoice (PI) for registration/booking.
    - Tax Invoice (TI) for actual billing.
    - Partial/Full conversion of PI to TI.
- **EMI Management**: Splitting balances into schedules, tracking due dates, and recording installment payments.
- **Expenses & Budgets**: Managing vendor bills and department-wise budget tracking.

### 3.3 Marketing & Campaigns
- **Attribution**: Lead capture with full UTM tracking (source, medium, campaign, content, term).
- **Analytics**: Calculation of CPL, CAC, and ROAS.

---

## 4. Current Backend State

### 4.1 Implemented Endpoints
- `/health`: System health check.
- `/api/auth/login`: Credential validation against stored users.
- `/api/leads`: GET (all), POST (create), PATCH (status update).
- `/api/finance/invoices`: GET (all), POST (create with auto-GST).
- `/api/finance/payments`: POST (record and update invoice status).

### 4.2 Key Services
- `gstService.ts`: Pure logic for GST inclusive/exclusive calculations.
- `dbService.ts`: CRUD operations on `server/src/models/db.json`.

---

## 5. Next Steps for Antigravity
1. **Database Migration**: Move from `db.json` to a robust database (PostgreSQL/MongoDB).
2. **Full RBAC Implementation**: Implement actual JWT middleware to protect routes based on `UserRole`.
3. **Frontend Integration**: Migrate `src/lib/*-store.ts` to use TanStack Query calling the backend API.
4. **Advanced Features**: Implement server-side SLA alerts, PDF generation for invoices, and bulk dispatch logic.

---

## 6. Definition of Done
- All yesterday's features (billing duplicate fixes, workflow explanations) are functional with backend data.
- CRUD operations for Leads, Campaigns, and Invoices are persisted in the database.
- RBAC is strictly enforced on all API routes.
- Frontend displays real-time analytics instead of mocked values.
