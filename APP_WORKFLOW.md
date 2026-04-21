# Red Apple Learning CRM - Application Workflow & Backend Verification Guide

This document provides a comprehensive overview of the Red Apple Learning CRM's workflow, data models, and business logic to assist in the creation and verification of the Node.js backend.

---

## 1. User Roles & Access Control
The system follows a Role-Based Access Control (RBAC) model.

| Role | Description | Core Responsibilities |
| :--- | :--- | :--- |
| **Admin** | System Administrator | Full system access, user management, and configuration. |
| **Owner / Director** | Business Owner | High-level analytics, approvals, and financial overview. |
| **Marketing Manager** | Marketing Lead | Campaign management, lead attribution, ROI tracking. |
| **Telecaller** | Lead Qualifier | Initial contact, lead qualification, and scheduling walk-ins. |
| **Telecalling Manager** | Call Operations | Managing telecallers, lead distribution, call analytics. |
| **Academic Counselor** | Sales Closer | In-depth counseling, walk-in management, closing admissions. |
| **Accounts Manager/Exec**| Finance Ops | Invoicing, payment tracking, tally exports, GST compliance. |
| **Alliance Manager/Exec**| B2B Sales | School/College collaborations, institutional sales. |

---

## 2. Core Data Schema (Entities)

### 2.1 Lead (`Lead`)
The central entity in the CRM.
- **Attributes**: `id`, `name`, `phone`, `email`, `source`, `campaignId`, `interestedCourse`, `assignedTelecallerId`, `assignedCounselor`, `status`, `leadScore`, `leadQuality`, `temperature`, `intentScore`, `priorityScore`, `createdAt`.
- **Enrichment**: `highestQualification`, `currentStatus`, `careerGoal`, `leadMotivation`, `budgetRange`.
- **Status Lifecycle**: `New` → `Contacted` → `Follow-up` → `Counseling` → `Qualified` → `Admission` OR `Lost`.

### 2.2 Campaign (`Campaign`)
Marketing activities that generate leads.
- **Attributes**: `id`, `name`, `platform` (Meta, Google, etc.), `objective`, `budget`, `dailyBudget`, `startDate`, `endDate`, `leadsGenerated`, `costPerLead`, `approvalStatus`.
- **Tracking**: `utmTracking` (source, medium, campaign, content, term).

### 2.3 Admission (`Admission`)
Created when a lead is converted.
- **Attributes**: `id`, `leadId`, `studentName`, `courseSelected`, `batch`, `admissionDate`, `totalFee`, `paymentStatus` (Pending, Partial, Paid).
- **Financials**: `paymentHistory` (array of payment entries), `scholarshipApplied`, `emiSelected`.

### 2.4 Call Log (`CallLog`)
Record of interactions between telecallers and leads.
- **Attributes**: `id`, `leadId`, `telecallerId`, `outcome` (Connected, Interested, etc.), `notes`, `nextFollowUp`, `conversationInsight`.

### 2.5 Institution (`Institution` / `CollegeAccount` / `SchoolAccount`)
Used for B2B/Institutional sales.
- **Attributes**: `id`, `name`, `type`, `city`, `studentStrength`, `pipelineStage`, `assignedTo`.

---

## 3. End-to-End Business Workflow

### Phase 1: Lead Acquisition (Marketing)
1. **Campaign Creation**: Marketing Manager creates a campaign (e.g., Meta Ads).
2. **Lead Generation**: Leads are captured via API or manual entry with UTM tracking.
3. **Attribution**: Leads are automatically linked to the specific Campaign ID.

### Phase 2: Lead Qualification (Telecalling)
1. **Assignment**: Leads are assigned to Telecallers (Round-Robin or Manual).
2. **Contact**: Telecaller calls the lead and records a `CallLog`.
3. **Qualification**: Telecaller assesses interest and marks lead as `Interested` or `Follow-up`.
4. **Walk-in Scheduling**: For high-interest leads, telecallers schedule a "Walk-in" at the campus and assign a Counselor.

### Phase 3: Counseling & Closing (Sales)
1. **Walk-in Management**: Counselor meets the student.
2. **Counseling Outcome**: Counselor records the outcome (Strong Intent, Fee Discussion, etc.).
3. **Joining Plan**: Counselor sets an `Expected DOJ` (Date of Joining) and `Fee Commitment`.
4. **Closing**: Lead status changes to `Qualified` once the student agrees to join.

### Phase 4: Admission & Finance (Accounts)
1. **Admission Creation**: Counselor/Admin converts the `Qualified` lead to an `Admission`.
2. **Payment Recording**: Initial payment (Registration/Seat Booking) is recorded.
3. **Invoicing**: System generates an invoice with GST calculations.
4. **EMI Tracking**: For partial payments, the system tracks remaining installments and due dates.

---

## 4. Key Business Logic & Formulas

### 4.1 Marketing Analytics
- **CPL (Cost Per Lead)**: `Total Campaign Spend / Total Leads Generated`
- **CAC (Customer Acquisition Cost)**: `Total Marketing Spend / Total Admissions`
- **ROAS (Return on Ad Spend)**: `Total Revenue / Total Marketing Spend`

### 4.2 Sales Performance
- **ATT (Average Turnaround Time)**: Number of days between `Lead Creation` and `Admission Date`.
- **Conversion Rate**: `(Admissions / Total Leads) * 100`

### 4.3 Financial Logic (GST 18%)
When calculating fees:
- **Net Amount (Taxable)**: `Gross Amount / 1.18`
- **CGST (9%)**: `Net Amount * 0.09`
- **SGST (9%)**: `Net Amount * 0.09`
- **Total (Gross)**: `Net + CGST + SGST`

---

## 5. Backend Verification Checklist

### 5.1 API Endpoints
- [ ] **Auth**: Login with role-based JWT generation.
- [ ] **Leads**: CRUD operations, status updates, auto-assignment logic.
- [ ] **Campaigns**: CRUD, attribution logic, performance calculation.
- [ ] **Admissions**: Conversion of lead to student, payment history tracking.
- [ ] **Analytics**: Aggregated data for dashboards (Spend, Revenue, CPL, ROAS).

### 5.2 Business Rules
- [ ] **Duplicate Prevention**: Prevent duplicate leads based on Phone/Email.
- [ ] **Role Restrictions**: Ensure Telecallers cannot see Revenue data; ensure Counselors only see assigned leads.
- [ ] **SLA Alerts**: Trigger alerts if a 'New' lead isn't contacted within X hours.
- [ ] **Tally Integration**: Export format for payment records.

### 5.3 Vertical-Specific Flows
- [ ] **Internship**: Specific fields for duration, stipend, and college batch.
- [ ] **Institutional**: Tracking MOU stages and bulk student enrollments.
