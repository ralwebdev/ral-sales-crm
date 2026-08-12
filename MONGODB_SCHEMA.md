# Red Apple Learning CRM - MongoDB Schema Documentation

This document defines the MongoDB collections, field types, and relationships required to implement the full project backend.

---

## 1. Collections Overview

| Collection | Description | Primary Relationships |
| :--- | :--- | :--- |
| `users` | System users and roles | - |
| `campaigns` | Marketing campaigns | `marketingManager` (User) |
| `leads` | Individual course and internship leads | `campaignId` (Campaign), `assignedTelecallerId` (User), `assignedCounselor` (User) |
| `call_logs` | Interaction history for leads | `leadId` (Lead), `telecallerId` (User) |
| `follow_ups` | Scheduled tasks for leads | `leadId` (Lead), `assignedTo` (User) |
| `admissions` | Converted students and payments | `leadId` (Lead) |
| `courses` | Available courses and fees | - |
| `institutions` | Schools/Colleges for B2B | `assignedTo` (User) |
| `collaboration_programs` | Institutional training programs | `collegeAccountId` (Institution) |

---

## 2. Collection Schemas

### 2.1 `users`
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": { "type": "String", "unique": true },
  "password": "String (Hashed)",
  "role": "String (Enum: admin, telecaller, counselor, etc.)",
  "status": "String (active, inactive)",
  "createdAt": "Date"
}
```

### 2.2 `campaigns`
```json
{
  "_id": "ObjectId",
  "name": "String",
  "platform": "String (Meta, Google, etc.)",
  "objective": "String",
  "budget": "Number",
  "dailyBudget": "Number",
  "startDate": "Date",
  "endDate": "Date",
  "targetLocation": "String",
  "utmTracking": {
    "utmSource": "String",
    "utmMedium": "String",
    "utmCampaign": "String",
    "utmContent": "String",
    "utmTerm": "String"
  },
  "marketingManager": "ObjectId (users)",
  "approvalStatus": "String (Draft, Active, etc.)",
  "createdAt": "Date"
}
```

### 2.3 `leads`
```json
{
  "_id": "ObjectId",
  "name": "String",
  "phone": { "type": "String", "index": true },
  "email": "String",
  "source": "String",
  "campaignId": "ObjectId (campaigns)",
  "interestedCourse": "String",
  "assignedTelecallerId": "ObjectId (users)",
  "assignedCounselor": "ObjectId (users)",
  "status": "String (New, Contacted, Counseling, etc.)",
  "programChannel": "String (Individual, Internship, etc.)",
  "leadScore": "Number",
  "leadQuality": "String (Hot, Warm, Cold)",
  "temperature": "String",
  "intentScore": "Number",
  "priorityScore": "Number",
  "qualification": {
    "budgetConfirmed": "Boolean",
    "courseInterestConfirmed": "Boolean",
    "locationPreference": "Boolean",
    "startTimeline": "Boolean",
    "placementExpectation": "Boolean"
  },
  "expectedDOJ": "Date",
  "feeCommitment": "String",
  "walkIn": {
    "status": "String",
    "date": "Date",
    "time": "String",
    "counselorId": "ObjectId (users)"
  },
  "lostReason": "String",
  "createdAt": "Date"
}
```

### 2.4 `call_logs`
```json
{
  "_id": "ObjectId",
  "leadId": "ObjectId (leads)",
  "telecallerId": "ObjectId (users)",
  "outcome": "String",
  "notes": "String",
  "nextFollowUp": "Date",
  "conversationInsight": {
    "careerGoal": "String",
    "budgetRange": "String",
    "objections": "String"
  },
  "createdAt": "Date"
}
```

### 2.5 `admissions`
```json
{
  "_id": "ObjectId",
  "leadId": "ObjectId (leads)",
  "studentName": "String",
  "courseSelected": "String",
  "batch": "String",
  "admissionDate": "Date",
  "totalFee": "Number",
  "paymentStatus": "String (Pending, Partial, Paid)",
  "paymentHistory": [
    {
      "paymentDate": "Date",
      "amountPaid": "Number",
      "paymentMode": "String",
      "referenceNumber": "String",
      "paymentType": "String (EMI, Admission Fee, etc.)",
      "emiNumber": "Number"
    }
  ],
  "scholarshipApplied": "Boolean",
  "scholarshipPercentage": "Number",
  "emiSelected": "Boolean",
  "totalEmis": "Number",
  "createdAt": "Date"
}
```

### 2.6 `institutions` (B2B)
```json
{
  "_id": "ObjectId",
  "name": "String",
  "type": "String (School, College, etc.)",
  "city": "String",
  "studentStrength": "Number",
  "decisionMaker": {
    "name": "String",
    "phone": "String",
    "email": "String"
  },
  "assignedTo": "ObjectId (users)",
  "pipelineStage": "String",
  "priority": "String (High, Medium, Low)",
  "createdAt": "Date"
}
```

---

## 3. Recommended Indexes

| Collection | Fields | Reason |
| :--- | :--- | :--- |
| `leads` | `phone: 1`, `email: 1` | Duplicate prevention and quick lookup. |
| `leads` | `status: 1`, `assignedTelecallerId: 1` | Dashboard and queue filtering. |
| `call_logs` | `leadId: 1` | Retrieving history for a specific lead. |
| `admissions` | `leadId: 1` | Linking student records to leads. |
| `follow_ups` | `assignedTo: 1`, `date: 1`, `completed: 1` | Generating daily task queues. |

---

## 4. Key Relationships (Aggregation Framework)

- **Lead Attribution**: Use `$lookup` from `leads` to `campaigns` via `campaignId`.
- **Performance Analytics**: Group `leads` or `admissions` by `assignedTelecallerId` to calculate conversion rates.
- **Revenue Tracking**: Group `admissions` by `courseSelected` or `date` (monthly/daily).
- **Audit Trail**: Leads can store an array of `activities` (Embedded) or you can use a separate `activities` collection for high-volume audit logs.
