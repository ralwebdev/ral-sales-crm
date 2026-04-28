# Manual Test Cases - Red Apple CRM (MERN)

This document provides a comprehensive suite of manual test cases to verify the core functionality, business workflows, and Role-Based Access Control (RBAC) of the Red Apple CRM.

---

## 1. Authentication & RBAC

### TC-01: Login with Valid Credentials
- **Pre-condition**: User must have a registered account (e.g., `amit@redapple.com` / `admin123`).
- **Steps**:
    1. Navigate to the Login page.
    2. Select the "Admin" role chip.
    3. Enter valid email and password.
    4. Click "Sign In Securely".
- **Expected Result**: User is successfully authenticated and redirected to the Dashboard.

### TC-02: Login with Invalid Credentials
- **Pre-condition**: User is on the Login page.
- **Steps**:
    1. Enter an incorrect email or password.
    2. Click "Sign In".
- **Expected Result**: Error message "Invalid credentials" is displayed. User remains on the Login page.

### TC-03: Role-Based Navigation Access
- **Pre-condition**: Logged in as `Telecaller` (`shreya@redapple.com` / `telecaller123`).
- **Steps**:
    1. Observe the sidebar/navigation menu.
    2. Attempt to navigate to `/accounts` or `/campaigns` via URL.
- **Expected Result**: Sidebar only shows Dashboard, Telecalling, and Follow-ups. The app layout should only render permitted routes based on the role configuration in `src/lib/role-config.ts`.

---

## 2. Lead Management

### TC-04: Create a New Lead (Manual)
- **Pre-condition**: Logged in as `admin` or `marketing_manager`.
- **Steps**:
    1. Go to the "Leads" page.
    2. Click "Add Lead".
    3. Fill in Name, Phone (10 digits), Source, and Interested Course.
    4. Click "Submit Lead".
- **Expected Result**: Lead is created, success toast appears, and the lead is visible in the Lead Table/Kanban.

### TC-05: Lead Duplicate Detection
- **Pre-condition**: A lead with phone `9876543210` already exists.
- **Steps**:
    1. Attempt to create a new lead with the same phone number `9876543210`.
    2. Click "Submit Lead".
- **Expected Result**: Error toast "Possible duplicate lead detected" appears. Lead is not created.

### TC-06: Lead Status Update (Kanban)
- **Pre-condition**: Leads exist in "New" status.
- **Steps**:
    1. Switch to "Pipeline" (Kanban) view.
    2. Drag a lead from "New" column to "Contacted".
- **Expected Result**: Lead status is updated, and an activity log is added to the lead history.

---

## 3. Telecalling & Follow-ups

### TC-07: Log a Call Outcome
- **Pre-condition**: Logged in as `telecaller`.
- **Steps**:
    1. Go to "Telecalling" page.
    2. Click on a lead to open details.
    3. Go to "Actions" or "Timeline" tab.
    4. Select a communication channel (e.g., Phone Call) and enter a summary.
    5. Click "Log".
- **Expected Result**: Communication is logged in the activity timeline.

### TC-08: Schedule and Complete a Follow-up
- **Pre-condition**: Lead exists.
- **Steps**:
    1. On the Lead detail panel, click "Follow-up" or navigate to "Follow-ups" page.
    2. Create a follow-up for a future date.
    3. Later, go to "Follow-ups" page and mark the task as "Completed".
- **Expected Result**: Follow-up task is marked completed and moved out of the pending list.

---

## 4. Counseling & Admissions

### TC-09: Transfer Lead to Counselor
- **Pre-condition**: Logged in as `telecaller`.
- **Steps**:
    1. Open a Lead's details.
    2. Go to "Actions" -> "Transfer Lead".
    3. Select a Counselor and a reason (e.g., "Course specialization").
    4. Click "Transfer".
- **Expected Result**: Ownership changes, and the lead now appears in the Counselor's dashboard.

### TC-10: Convert Lead to Admission
- **Pre-condition**: Lead is in "Counseling" status.
- **Steps**:
    1. On the "Admissions" page or Lead details, click "New Admission".
    2. Fill in Course, Batch, Total Fee, and Payment details (Full/EMI).
    3. Click "Submit Admission".
- **Expected Result**: Lead status changes to "Admission", an Admission record is created, and financial records (Invoices/Payments) are initialized.

---

## 5. Accounts & Finance

### TC-11: Generate Proforma Invoice (PI)
- **Pre-condition**: Logged in as `accounts_manager`.
- **Steps**:
    1. Go to "Accounts" -> "Billing" tab.
    2. Click "Create Proforma Invoice".
    3. Enter recipient details, amount, and GST type.
    4. Click "Create Invoice".
- **Expected Result**: PI is generated with a unique ID (e.g., PI-2026-0001). GST is calculated automatically.

### TC-12: Convert PI to Tax Invoice (TI) upon Payment
- **Pre-condition**: An open Proforma Invoice (PI) exists.
- **Steps**:
    1. In the "Accounts" -> "Billing" tab, find an open PI.
    2. Click the "Convert" button on the PI row.
    3. Enter the amount to convert and select a payment mode (optional).
    4. Click "Convert".
- **Expected Result**: A new Tax Invoice (TI) is generated. The PI status updates (e.g., "Converted" if fully converted). Mapping is recorded in `pi-ti-store`.

### TC-13: Log an Expense for Approval
- **Pre-condition**: Logged in as `accounts_executive`.
- **Steps**:
    1. Go to "Accounts" -> "Expenses".
    2. Click "Add Expense".
    3. Fill in Category (e.g., Marketing), Amount, and Description.
    4. Click "Submit Expense".
- **Expected Result**: Expense is created with "Pending" status and routed for approval based on amount thresholds.

### TC-14: Approve/Reject Expense
- **Pre-condition**: Logged in as `owner` or `accounts_manager`.
- **Steps**:
    1. Go to "Accounts" -> "Expenses" or "Approvals" page.
    2. Find a "Pending" expense.
    3. Click "Approve".
- **Expected Result**: Expense status changes to "Approved". Cash flow is updated (Outflow).

---

## 6. Analytics & Reports

### TC-15: Verify Dashboard KPI Accuracy
- **Pre-condition**: Data (Leads, Admissions, Payments) exists.
- **Steps**:
    1. View the main Dashboard.
    2. Note the "Total Admissions" and "Revenue" counts.
    3. Create a new Admission and record a payment.
    4. Refresh the Dashboard.
- **Expected Result**: KPI cards reflect the newly added data in real-time.

### TC-16: Export Tally-Ready Data
- **Pre-condition**: Transactions exist.
- **Steps**:
    1. Go to "Accounts" -> "Exports".
    2. Select Transaction Type "All Transactions".
    3. Click "Export CSV".
- **Expected Result**: A CSV file is downloaded containing voucher-formatted data for Tally.
