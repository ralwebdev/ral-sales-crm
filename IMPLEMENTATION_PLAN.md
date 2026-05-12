# MERN Conversion Implementation Plan: Red Apple Learning CRM

## 1. Project Overview
**Red Apple Learning CRM** is a comprehensive lead management and financial operations platform designed for an educational institution. It manages the entire lifecycle of a student lead—from marketing acquisition to enrollment, counseling, and financial invoicing.

### Main User Roles:
- **System Administrator / Owner**: Full visibility and system management.
- **Marketing Manager**: Campaign creation and lead attribution tracking.
- **Telecalling Manager**: Team performance monitoring (ATT, conversion rates).
- **Telecaller**: Lead qualification and click-to-call workflow.
- **Academic Counselor**: Walk-in management and admission conversion.
- **Accounts Manager/Executive**: Billing (PI/TI), fee collection, and expense management.
- **Alliance Manager/Executive**: B2B institutional sales and school/college partnerships.

### Core Modules:
1. **Marketing & Campaigns**: Ad spend, leads generated, ROAS, and CAC tracking.
2. **Lead Management**: Kanban pipeline, priority scoring, and lead assignment.
3. **Telecalling Workspace**: Smart call queue, conversation insights, and follow-up scheduling.
4. **Counseling & Admissions**: Walk-in tracking, document checklist, and enrollment.
5. **Finance & Accounts**: Proforma/Tax Invoicing, GST calculations, EMI schedules, and Expenses.
6. **Institutional Alliances**: School/College account management and MOU tracking.

---

## 2. Frontend Analysis

### Pages & Routes:
- `/login`: Public auth entry.
- `/`: Role-specific Dashboard router.
- `/campaigns`: Marketing dashboard and campaign management.
- `/leads`: Main lead pipeline (List, Kanban, and Analytics views).
- `/telecalling`: Dedicated telecaller workspace with "Smart Queue".
- `/counseling`: Walk-in management and conversion tracker.
- `/admissions`: Enrollment records and fee payment portal.
- `/accounts`: Financial ledger, invoicing (PI/TI), and expense approvals.
- `/alliances`: Institutional sales pipeline.
- `/institutional`: College/School vertical dashboards.
- `/revenue`: High-level financial analytics.
- `/approvals`: Universal approval engine for expenses and tasks.

### Major Components:
- `AppLayout`: Sidebar navigation and role-based route guarding.
- `KanbanBoard`: Generic drag-and-drop pipeline interface.
- `StatCard`: Visual KPI display with trend indicators.
- `MarketingLeadForm`: Quick entry for lead capture.
- `TelecallerQualificationForm`: Structured data capture for call outcomes.
- `AccountsModule`: Tabbed finance interface using `useSyncExternalStore`.

### Reusable UI (Shadcn):
- Modals (`Dialog`), Data Tables, Tabs, Selects, Inputs, Toasts (`Sonner`).

### State & Data Requirements:
- **Auth State**: Persisted user profile and role.
- **CRM Entities**: Leads, Campaigns, Admissions.
- **Finance State**: Invoices, Payments, Expenses.
- **Alliances State**: Institutions, Visits, Proposals.
- **Global Store**: Currently uses synchronous `localStorage` wrappers (`mock-data.ts`, `finance-store.ts`).

---

## 3. Backend Requirements

### API Endpoints Overview:
| Feature | Endpoint | Method | Purpose | DB Model |
| :--- | :--- | :--- | :--- | :--- |
| **Auth** | `/api/auth/login` | POST | Authenticate user & return JWT | `User` |
| **Leads** | `/api/leads` | GET/POST | List/Create leads | `Lead` |
| **Lead Ops** | `/api/leads/:id` | PATCH | Update status/assignment | `Lead` |
| **Campaigns**| `/api/campaigns` | GET/POST | Marketing tracking | `Campaign` |
| **Finance** | `/api/invoices` | GET/POST | PI/TI management | `Invoice` |
| **Expenses** | `/api/expenses` | GET/POST | Spend tracking | `Expense` |
| **Alliances** | `/api/alliances` | GET/POST | Institutional sales | `Institution` |

### Validation & Security:
- **JWT**: Required for all `/api` routes except `/auth/login`.
- **RBAC Middleware**: Restrict `/api/finance` to `accounts_*` and `owner`.
- **Validation**: Joi or Zod schemas on Express controllers to match Mongoose models.

### Detailed Feature-to-API Mapping:
1. **Lead Management**:
   - **Endpoint**: `/api/leads`
   - **Method**: GET (fetch), POST (create)
   - **Auth**: Required (User role)
   - **Validation**: Name and Phone required; Phone must be 10 digits.
   - **Error Handling**: 400 for duplicate phone/email, 403 for unauthorized assignment.

2. **Telecalling Workspace**:
   - **Endpoint**: `/api/leads/:id/calls`
   - **Method**: POST (log call)
   - **Request Body**: `{ outcome, notes, followUpDate, insight: {} }`
   - **Response Body**: `{ success: true, callLog: {} }`
   - **Models**: `Lead`, `CallLog`

3. **Invoicing (Finance)**:
   - **Endpoint**: `/api/finance/invoices`
   - **Method**: POST
   - **Validation**: Valid GSTIN (optional), calculated CGST/SGST must match total.
   - **Error Handling**: 400 for invalid total calculation, 404 for missing lead reference.

---

## 4. MongoDB Database Design (Mongoose Schemas)

### User Model
```javascript
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed
  role: {
    type: String,
    enum: ['admin', 'marketing_manager', 'telecaller', 'counselor', 'telecalling_manager', 'owner', 'alliance_manager', 'alliance_executive', 'accounts_manager', 'accounts_executive'],
    required: true
  }
}, { timestamps: true });
```

### Lead Model
```javascript
const LeadSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  source: { type: String, required: true },
  status: { type: String, default: 'New' },
  assignedTelecallerId: { type: Schema.Types.ObjectId, ref: 'User' },
  assignedCounselor: { type: Schema.Types.ObjectId, ref: 'User' },
  interestedCourse: { type: String },
  leadScore: { type: Number, default: 0 },
  temperature: { type: String, enum: ['Hot', 'Warm', 'Cold', 'Dormant'] },
  activities: [{
    type: { type: String },
    description: String,
    timestamp: { type: Date, default: Date.now }
  }],
  // Multi-vertical support
  programChannel: String,
  internshipFields: {
    course: String,
    duration: String,
    stipend: Number
  }
}, { timestamps: true });
```

### Invoice Model (Finance)
```javascript
const InvoiceSchema = new Schema({
  invoiceNo: { type: String, required: true, unique: true },
  invoiceType: { type: String, enum: ['PI', 'TI'], default: 'PI' },
  customerName: { type: String, required: true },
  total: { type: Number, required: true },
  amountPaid: { type: Number, default: 0 },
  gstType: { type: String, enum: ['Taxable', 'Exempt', 'Zero Rated'] },
  status: { type: String, default: 'Sent' },
  linkedPiId: { type: Schema.Types.ObjectId, ref: 'Invoice' }
}, { timestamps: true });
```

### Campaign Model
```javascript
const CampaignSchema = new Schema({
  name: { type: String, required: true },
  platform: { type: String, enum: ['Meta', 'Google', 'LinkedIn', 'YouTube', 'Referral', 'Offline Event'] },
  budget: Number,
  leadsGenerated: { type: Number, default: 0 },
  status: { type: String, enum: ['Draft', 'Active', 'Paused', 'Completed'] }
}, { timestamps: true });
```

### Institution Model (Alliances)
```javascript
const InstitutionSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['School', 'College', 'University'] },
  priority: { type: String, enum: ['High', 'Medium', 'Low'] },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  pipelineStage: { type: String, default: 'Identified' }
}, { timestamps: true });
```

---

## 5. REST API Plan

| Endpoint | Method | Purpose | Payload | Response | Auth |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/api/auth/login` | POST | Login | `{email, password}` | `{token, user}` | No |
| `/api/leads` | GET | Fetch Leads | Query params (role, status) | `Lead[]` | Yes |
| `/api/leads` | POST | New Lead | `Partial<Lead>` | `Lead` | Yes |
| `/api/leads/:id` | PATCH | Update Lead | `{status, notes...}` | `Lead` | Yes |
| `/api/finance/invoices` | GET | List Invoices | Query (type, status) | `Invoice[]` | Yes (Finance/Owner) |
| `/api/finance/collect` | POST | Record Payment | `{invoiceId, amount, mode}` | `Payment` | Yes |

---

## 6. Authentication & Authorization Plan

1. **Flow**: Frontend Login -> Express `/auth/login` -> Bcrypt Compare -> Sign JWT -> Return User + Token.
2. **Storage**: JWT stored in `HttpOnly` Cookie or LocalStorage (match current app preference but upgrade to Cookie for production security).
3. **Authorization**:
    - `checkAuth` middleware: Verifies JWT.
    - `checkRole(['admin', 'owner'])` middleware: Restricts sensitive routes.
4. **Password Hashing**: `bcryptjs` for all user passwords.

---

## 7. MERN Folder Structure

```text
root/
├── backend/
│   ├── config/          # DB connection, Passport config
│   ├── controllers/     # Business logic for routes
│   ├── middleware/      # Auth, Role-check, Error logging
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express route definitions
│   ├── services/        # Third-party integrations (SMS/Email)
│   ├── utils/           # Invoice generators, Tally exporters
│   └── server.js        # Entry point
├── frontend/            # Current Lovable source
│   ├── src/
│   │   ├── api/         # Axios instance and API calls
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
└── .env                 # Shared environment variables
```

---

## 8. Frontend Integration Plan

1. **API Service Layer**:
   - Create `src/api/client.ts` using Axios with interceptors for JWT attaching.
   - Example: `const api = axios.create({ baseURL: process.env.VITE_API_URL });`.

2. **Refactor Stores**:
   - Replace `src/lib/mock-data.ts` with `React Query` hooks or `Context + Reducer`.
   - Update `useSyncExternalStore` in `AccountsModule` to fetch from `/api/finance`.

3. **Form Handlers**:
   - Update `handleSubmit` in `LeadsPage.tsx`, `CampaignsPage.tsx`, etc., to use the new API client.

4. **Loading/Error States**:
   - Implement global `LoadingSpinner` and use `Sonner` for backend error messages.

---

## 9. Implementation Roadmap

- **Phase 1: Backend Setup**: Express server, MongoDB Atlas connection, logging.
- **Phase 2: Auth**: User registration (seed), Login API, JWT middleware.
- **Phase 3: Core Lead Flow**: CRUD for Leads and Campaigns.
- **Phase 4: Finance Module**: Invoice generation logic and Payment collection APIs.
- **Phase 5: Institutional Vertical**: School/College partnership APIs.
- **Phase 6: Frontend Hookup**: Swapping mock stores for API calls.
- **Phase 7: Testing & Deployment**: Integration tests and Vercel/Heroku deployment.

---

## 10. Instructions for Codex

### Step 1: Express Server & DB
1. Initialize `backend/package.json` with `express`, `mongoose`, `dotenv`, `cors`, `helmet`.
2. Connect to MongoDB using `mongoose.connect(process.env.MONGO_URI)`.

### Step 2: Mongoose Models
1. Implement all schemas from Section 4. Ensure `timestamps: true` and proper `refs`.

### Step 3: Auth Logic
1. Create `authController.js`. Implement login with `bcrypt.compare`.
2. Create `protect` middleware to verify `Authorization: Bearer <token>`.

### Step 4: CRUD Controllers
1. Create controllers for Leads, Invoices, and Campaigns.
2. Ensure `req.user.id` is used to track "Created By" or "Assigned To" fields.

### Step 5: Frontend Refactor
1. Replace `allUsers` mock in `auth-context.tsx` with a call to `/api/auth/login`.
2. Create `src/services/leadService.ts` with `getLeads`, `createLead`, `updateLead` functions.
3. Replace `localStorage.getItem` in all Store files with async API calls.

---

## 11. Environment Variables

**Backend (.env):**
- `PORT=5000`
- `MONGO_URI=mongodb+srv://...`
- `JWT_SECRET=supersecretkey`
- `NODE_ENV=production`

**Frontend (.env):**
- `VITE_API_URL=http://localhost:5000`

---

## 12. Package Dependencies

**Backend:**
`express, mongoose, jsonwebtoken, bcryptjs, cors, dotenv, joi, morgan, helmet`

**Frontend:**
`axios, @tanstack/react-query, lucide-react, date-fns, recharts`

---

## 13. Testing Checklist
- [ ] Login returns 200 and valid JWT.
- [ ] Unauthorized users get 401 on `/api/leads`.
- [ ] Role check blocks `telecaller` from `/api/finance`.
- [ ] Form submission persists data to MongoDB.
- [ ] Lead assignment logic correctly updates `assignedTelecallerId`.

---

## 14. Deployment Plan
1. **Database**: Provision MongoDB Atlas Cluster.
2. **Backend**: Deploy to Render/Heroku/AWS. Set Environment Variables.
3. **Frontend**: Build using `npm run build` and deploy to Vercel/Netlify.
4. **CORS**: Configure `cors` in Express to allow only the production frontend URL.
