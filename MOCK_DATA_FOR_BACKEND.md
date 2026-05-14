# Mock Data for Backend (MERN MongoDB)

This file contains all the mock data used in the frontend, formatted for direct insertion into a MongoDB database using MongoDB's strict JSON format for dates.

## Collection: courses

```json
[
  {
    "id": "cr1",
    "name": "Graphic Design",
    "category": "Design",
    "duration": "3 Months",
    "fee": 45000,
    "placementSupport": true
  },
  {
    "id": "cr2",
    "name": "UI/UX Design",
    "category": "Design",
    "duration": "4 Months",
    "fee": 90000,
    "placementSupport": true
  },
  {
    "id": "cr3",
    "name": "Motion Graphics",
    "category": "Design",
    "duration": "5 Months",
    "fee": 118000,
    "placementSupport": true
  },
  {
    "id": "cr4",
    "name": "Web Design",
    "category": "Design",
    "duration": "3 Months",
    "fee": 45000,
    "placementSupport": true
  },
  {
    "id": "cr5",
    "name": "HTML & CSS",
    "category": "Development",
    "duration": "1 Month",
    "fee": 15000,
    "placementSupport": false
  },
  {
    "id": "cr6",
    "name": "WordPress",
    "category": "Development",
    "duration": "2 Months",
    "fee": 45000,
    "placementSupport": false
  },
  {
    "id": "cr7",
    "name": "Digital Marketing",
    "category": "Marketing",
    "duration": "4 Months",
    "fee": 90000,
    "placementSupport": true
  },
  {
    "id": "cr8",
    "name": "AI / ML",
    "category": "Data",
    "duration": "8 Months",
    "fee": 260000,
    "placementSupport": true
  },
  {
    "id": "cr9",
    "name": "Game Development",
    "category": "Development",
    "duration": "6 Months",
    "fee": 190000,
    "placementSupport": true
  },
  {
    "id": "cr10",
    "name": "Full Stack Development",
    "category": "Development",
    "duration": "10 Months",
    "fee": 410000,
    "placementSupport": true
  }
]
```

## Collection: users

```json
[
  {
    "id": "u1",
    "name": "Amit Sharma",
    "email": "amit@redapple.com",
    "password": "admin123",
    "role": "admin"
  },
  {
    "id": "u2",
    "name": "Soumya Saha",
    "email": "soumya@redapple.com",
    "password": "marketing123",
    "role": "marketing_manager"
  },
  {
    "id": "u3",
    "name": "Shreya Chakraborty",
    "email": "shreya@redapple.com",
    "password": "telecaller123",
    "role": "telecaller"
  },
  {
    "id": "u4",
    "name": "Priya Das",
    "email": "priya@redapple.com",
    "password": "telecaller123",
    "role": "telecaller"
  },
  {
    "id": "u5",
    "name": "Manjari Chakraborty",
    "email": "manjari@redapple.com",
    "password": "counselor123",
    "role": "counselor"
  },
  {
    "id": "u6",
    "name": "Vikram Singh",
    "email": "vikram@redapple.com",
    "password": "manager123",
    "role": "telecalling_manager"
  },
  {
    "id": "u7",
    "name": "Rajesh Kapoor",
    "email": "rajesh@redapple.com",
    "password": "owner123",
    "role": "owner"
  },
  {
    "id": "am1",
    "name": "Rohit Banerjee",
    "email": "rohit@redapple.com",
    "password": "alliance123",
    "role": "alliance_manager",
    "status": "active",
    "createdAt": {
      "$date": "2026-02-13T00:00:00Z"
    }
  },
  {
    "id": "ae1",
    "name": "Sneha Roy",
    "email": "sneha@redapple.com",
    "password": "alliance123",
    "role": "alliance_executive",
    "status": "active",
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    }
  },
  {
    "id": "ae2",
    "name": "Karan Mehta",
    "email": "karan@redapple.com",
    "password": "alliance123",
    "role": "alliance_executive",
    "status": "active",
    "createdAt": {
      "$date": "2026-03-30T00:00:00Z"
    }
  },
  {
    "id": "ae3",
    "name": "Pooja Nair",
    "email": "pooja@redapple.com",
    "password": "alliance123",
    "role": "alliance_executive",
    "status": "active",
    "createdAt": {
      "$date": "2026-04-14T00:00:00Z"
    }
  }
]
```

## Collection: campaigns

```json
[
  {
    "id": "c1",
    "name": "Summer Coding Bootcamp",
    "platform": "Meta",
    "objective": "Lead Generation",
    "budget": 15000,
    "dailyBudget": 500,
    "startDate": {
      "$date": "2026-03-01T00:00:00Z"
    },
    "endDate": {
      "$date": "2026-03-31T00:00:00Z"
    },
    "targetLocation": "Kolkata, Delhi",
    "leadsGenerated": 95,
    "costPerLead": 158,
    "createdAt": {
      "$date": "2026-03-01T00:00:00Z"
    },
    "ageGroup": "18-30",
    "educationLevel": "Graduate",
    "interestCategory": "Technology",
    "targetCity": "Kolkata",
    "marketingManager": "u2",
    "campaignOwner": "u2",
    "campaignNotes": "Focus on coding bootcamp ads",
    "approvalStatus": "Active",
    "adSets": [
      {
        "id": "as1",
        "campaignId": "c1",
        "name": "Cold Audience - Tech",
        "audienceType": "Cold",
        "sourceAudience": "",
        "retargetingSource": "",
        "ads": [
          {
            "id": "ad1",
            "adType": "Image",
            "creativeHook": "Launch your tech career in 12 weeks",
            "primaryMessage": "Full-stack bootcamp with placement support",
            "cta": "Apply Now"
          }
        ]
      }
    ],
    "utmTracking": {
      "utmSource": "meta",
      "utmMedium": "paid",
      "utmCampaign": "summer-bootcamp",
      "utmContent": "image-ad-1",
      "utmTerm": "coding bootcamp"
    },
    "landingPages": [
      {
        "id": "lp1",
        "campaignId": "c1",
        "url": "https://redapple.com/bootcamp",
        "pageVersion": "V1",
        "conversionRate": 12.5
      },
      {
        "id": "lp2",
        "campaignId": "c1",
        "url": "https://redapple.com/bootcamp-v2",
        "pageVersion": "V2",
        "conversionRate": 18.2
      }
    ]
  },
  {
    "id": "c2",
    "name": "AI & Data Science Push",
    "platform": "Google",
    "objective": "Lead Generation",
    "budget": 12000,
    "dailyBudget": 400,
    "startDate": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "endDate": {
      "$date": "2026-04-10T00:00:00Z"
    },
    "targetLocation": "Kolkata, Bangalore",
    "leadsGenerated": 70,
    "costPerLead": 171,
    "createdAt": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "ageGroup": "22-35",
    "educationLevel": "Post Graduate",
    "interestCategory": "Data Science",
    "targetCity": "Kolkata",
    "marketingManager": "u2",
    "campaignOwner": "u2",
    "campaignNotes": "",
    "approvalStatus": "Active",
    "adSets": [],
    "utmTracking": {
      "utmSource": "google",
      "utmMedium": "paid",
      "utmCampaign": "ai-ml-push",
      "utmContent": "",
      "utmTerm": "data science course"
    },
    "landingPages": [
      {
        "id": "lp3",
        "campaignId": "c2",
        "url": "https://redapple.com/data-science",
        "pageVersion": "V1",
        "conversionRate": 9.8
      }
    ]
  },
  {
    "id": "c3",
    "name": "Creative Design Sprint",
    "platform": "LinkedIn",
    "objective": "Course Promotion",
    "budget": 8000,
    "dailyBudget": 267,
    "startDate": {
      "$date": "2026-02-15T00:00:00Z"
    },
    "endDate": {
      "$date": "2026-04-15T00:00:00Z"
    },
    "targetLocation": "Pan India",
    "leadsGenerated": 55,
    "costPerLead": 145,
    "createdAt": {
      "$date": "2026-02-15T00:00:00Z"
    },
    "ageGroup": "18-28",
    "educationLevel": "Graduate",
    "interestCategory": "Design",
    "targetCity": "Kolkata",
    "marketingManager": "u2",
    "campaignOwner": "u1",
    "campaignNotes": "Promote Graphic Design, UI/UX, Motion Graphics",
    "approvalStatus": "Active",
    "adSets": [],
    "utmTracking": {
      "utmSource": "linkedin",
      "utmMedium": "paid",
      "utmCampaign": "design-sprint",
      "utmContent": "",
      "utmTerm": ""
    },
    "landingPages": []
  },
  {
    "id": "c4",
    "name": "Digital Marketing Course",
    "platform": "Meta",
    "objective": "Lead Generation",
    "budget": 5000,
    "dailyBudget": 167,
    "startDate": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "endDate": {
      "$date": "2026-04-20T00:00:00Z"
    },
    "targetLocation": "Kolkata",
    "leadsGenerated": 35,
    "costPerLead": 143,
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "ageGroup": "20-30",
    "educationLevel": "Any",
    "interestCategory": "Marketing",
    "targetCity": "Kolkata",
    "marketingManager": "u2",
    "campaignOwner": "u2",
    "campaignNotes": "",
    "approvalStatus": "Draft",
    "adSets": [],
    "utmTracking": {
      "utmSource": "meta",
      "utmMedium": "paid",
      "utmCampaign": "dm-course",
      "utmContent": "",
      "utmTerm": ""
    },
    "landingPages": []
  }
]
```

## Collection: leads

```json
[
  {
    "id": "l1",
    "name": "Aarav Kumar",
    "phone": "9876543210",
    "email": "aarav@email.com",
    "source": "Meta Ad",
    "campaignId": "c1",
    "interestedCourse": "Full Stack Development",
    "assignedTelecallerId": "u3",
    "status": "New",
    "createdAt": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "adSetName": "Cold Audience - Tech",
    "adName": "Image Ad 1",
    "landingPageUrl": "https://redapple.com/bootcamp",
    "utm": {
      "utmSource": "meta",
      "utmMedium": "paid",
      "utmCampaign": "summer-bootcamp",
      "utmContent": "image-ad-1",
      "utmTerm": "coding bootcamp"
    },
    "leadScore": 72,
    "leadQuality": "Warm",
    "budgetRange": "₹4.1L",
    "urgencyLevel": "Medium",
    "otherInstitutes": "",
    "currentEducation": "B.Tech",
    "graduationYear": "2025",
    "currentOccupation": "Student",
    "collegeInstitution": "VIT University",
    "feePayer": "Parent",
    "decisionMaker": "Joint",
    "highestQualification": "B.Tech",
    "currentStatus": "Student",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Job Placement",
    "placementInterest": true,
    "expectedSalary": "5 LPA",
    "jobLocationPreference": "Kolkata",
    "intentScore": 70,
    "intentCategory": "Medium Intent",
    "lastInteractionType": "Call Attempted",
    "lastInteractionDate": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "temperature": "Warm",
    "assignedCounselor": "u5",
    "leadOwner": "u3",
    "transferHistory": [],
    "activities": [
      {
        "id": "a1",
        "leadId": "l1",
        "type": "Lead Created",
        "description": "Lead captured from Meta Ad — Apply Now form",
        "timestamp": {
          "$date": "2026-03-24T10:00:00Z"
        }
      },
      {
        "id": "a2",
        "leadId": "l1",
        "type": "Call Attempted",
        "description": "First call attempt by Shreya",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-24T11:30:00Z"
        }
      }
    ],
    "qualification": {
      "budgetConfirmed": false,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": false,
      "placementExpectation": true
    },
    "qualificationScore": 60,
    "recommendedCourse": "Full Stack Development",
    "alternateCourse": "Web Design",
    "recommendationReason": "Strong interest in web development",
    "priorityScore": 72,
    "priorityCategory": "High Priority"
  },
  {
    "id": "l2",
    "name": "Diya Singh",
    "phone": "9876543211",
    "email": "diya@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u3",
    "status": "Contacted",
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "leadScore": 85,
    "leadQuality": "Hot",
    "budgetRange": "₹2.6L",
    "urgencyLevel": "High",
    "otherInstitutes": "UpGrad",
    "currentEducation": "M.Sc Statistics",
    "graduationYear": "2024",
    "currentOccupation": "Working Professional",
    "feePayer": "Self",
    "decisionMaker": "Self",
    "highestQualification": "M.Sc",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Career Switch",
    "placementInterest": true,
    "expectedSalary": "8 LPA",
    "jobLocationPreference": "Kolkata, Bangalore",
    "intentScore": 88,
    "intentCategory": "High Intent",
    "lastInteractionType": "Call Connected",
    "lastInteractionDate": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "temperature": "Hot",
    "assignedCounselor": "u5",
    "leadOwner": "u3",
    "transferHistory": [],
    "activities": [
      {
        "id": "a3",
        "leadId": "l2",
        "type": "Lead Created",
        "description": "Lead from Google search ad — Free Counselling",
        "timestamp": {
          "$date": "2026-03-23T09:00:00Z"
        }
      },
      {
        "id": "a4",
        "leadId": "l2",
        "type": "Call Connected",
        "description": "Discussed placement support",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-23T10:15:00Z"
        }
      },
      {
        "id": "a5",
        "leadId": "l2",
        "type": "Follow-up Scheduled",
        "description": "Share placement brochure via WhatsApp",
        "timestamp": {
          "$date": "2026-03-23T10:20:00Z"
        }
      }
    ],
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "recommendedCourse": "AI / ML",
    "alternateCourse": "Full Stack Development",
    "recommendationReason": "Statistics background, strong analytical skills",
    "priorityScore": 92,
    "priorityCategory": "High Priority",
    "scholarshipDiscussion": "10%",
    "admissionProbability": "High",
    "firstCallTime": {
      "$date": "2026-03-23T09:45:00Z"
    },
    "firstResponseTime": {
      "$date": "2026-03-23T10:15:00Z"
    }
  },
  {
    "id": "l3",
    "name": "Vihaan Reddy",
    "phone": "9876543212",
    "email": "vihaan@email.com",
    "source": "LinkedIn",
    "campaignId": "c3",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u4",
    "status": "Follow-up",
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "leadScore": 60,
    "leadQuality": "Warm",
    "budgetRange": "₹90k",
    "urgencyLevel": "Low",
    "otherInstitutes": "",
    "highestQualification": "B.Com",
    "currentStatus": "Working Professional",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Within 3 Months",
    "leadSourceFormType": "Register Now",
    "intentScore": 55,
    "intentCategory": "Medium Intent",
    "lastInteractionType": "Follow-up Scheduled",
    "lastInteractionDate": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "temperature": "Warm",
    "transferHistory": [],
    "activities": [
      {
        "id": "a6",
        "leadId": "l3",
        "type": "Lead Created",
        "description": "Lead from LinkedIn campaign",
        "timestamp": {
          "$date": "2026-03-22T08:00:00Z"
        }
      },
      {
        "id": "a7",
        "leadId": "l3",
        "type": "Call Connected",
        "description": "Busy, asked to call after 5 PM",
        "channel": "Phone Call",
        "userId": "u4",
        "timestamp": {
          "$date": "2026-03-22T14:00:00Z"
        }
      }
    ],
    "qualification": {
      "budgetConfirmed": false,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": false,
      "placementExpectation": true
    },
    "qualificationScore": 40,
    "priorityScore": 55,
    "priorityCategory": "Medium Priority"
  },
  {
    "id": "l4",
    "name": "Ananya Joshi",
    "phone": "9876543213",
    "email": "ananya@email.com",
    "source": "Meta Ad",
    "campaignId": "c1",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u4",
    "status": "Counseling",
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "leadScore": 90,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "otherInstitutes": "",
    "currentEducation": "BCA",
    "graduationYear": "2025",
    "currentOccupation": "Student",
    "collegeInstitution": "Christ University",
    "feePayer": "Parent",
    "decisionMaker": "Joint",
    "highestQualification": "BCA",
    "currentStatus": "Student",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Callback",
    "leadMotivation": "Portfolio Building",
    "placementInterest": true,
    "expectedSalary": "4 LPA",
    "jobLocationPreference": "Kolkata",
    "intentScore": 92,
    "intentCategory": "High Intent",
    "lastInteractionType": "Counseling Done",
    "lastInteractionDate": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "temperature": "Hot",
    "assignedCounselor": "u5",
    "leadOwner": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "walkInTime": "14:00",
    "walkInCounselor": "u5",
    "counselingOutcome": "Strong Admission Intent",
    "expectedDOJ": {
      "$date": "2026-03-28T00:00:00Z"
    },
    "feeCommitment": "Full Admission Fee",
    "documentStatus": "Documents Pending",
    "documentsChecklist": {
      "idProof": true,
      "addressProof": false,
      "educationCertificate": true,
      "photographs": false
    },
    "transferHistory": [
      {
        "id": "t1",
        "fromUserId": "u4",
        "toUserId": "u5",
        "reason": "Course specialization",
        "timestamp": {
          "$date": "2026-03-22T16:00:00Z"
        }
      }
    ],
    "activities": [
      {
        "id": "a8",
        "leadId": "l4",
        "type": "Lead Created",
        "description": "Lead from Meta Ad — Free Callback",
        "timestamp": {
          "$date": "2026-03-21T09:00:00Z"
        }
      },
      {
        "id": "a9",
        "leadId": "l4",
        "type": "Call Connected",
        "description": "Very interested, wants counseling",
        "channel": "Phone Call",
        "userId": "u4",
        "timestamp": {
          "$date": "2026-03-21T11:00:00Z"
        }
      },
      {
        "id": "a9b",
        "leadId": "l4",
        "type": "Walk-in Scheduled",
        "description": "Walk-in scheduled by telecaller Priya",
        "timestamp": {
          "$date": "2026-03-22T11:30:00Z"
        }
      },
      {
        "id": "a10",
        "leadId": "l4",
        "type": "Walk-in Completed",
        "description": "Walk-in counseling session completed",
        "userId": "u5",
        "timestamp": {
          "$date": "2026-03-24T14:00:00Z"
        }
      },
      {
        "id": "a10b",
        "leadId": "l4",
        "type": "Ownership Transfer",
        "description": "Ownership transferred to Manjari Chakraborty",
        "timestamp": {
          "$date": "2026-03-24T14:01:00Z"
        }
      },
      {
        "id": "a10c",
        "leadId": "l4",
        "type": "Counseling Outcome",
        "description": "Strong Admission Intent",
        "timestamp": {
          "$date": "2026-03-24T15:00:00Z"
        }
      },
      {
        "id": "a10d",
        "leadId": "l4",
        "type": "DoJ Set",
        "description": "Expected joining date: 2026-03-28 · Fee: Full Admission Fee",
        "timestamp": {
          "$date": "2026-03-24T15:30:00Z"
        }
      }
    ],
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "recommendedCourse": "UI/UX Design",
    "alternateCourse": "Graphic Design",
    "recommendationReason": "Creative background, strong design interest",
    "priorityScore": 95,
    "priorityCategory": "High Priority",
    "scholarshipDiscussion": "15%",
    "emiOption": true,
    "admissionProbability": "High",
    "scholarshipApplied": true,
    "scholarshipPercentage": 15,
    "emiSelected": true,
    "firstCallTime": {
      "$date": "2026-03-21T10:00:00Z"
    },
    "firstResponseTime": {
      "$date": "2026-03-21T11:00:00Z"
    }
  },
  {
    "id": "l5",
    "name": "Arjun Nair",
    "phone": "9876543214",
    "email": "arjun@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u3",
    "status": "Qualified",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "leadScore": 88,
    "leadQuality": "Hot",
    "budgetRange": "₹2.6L",
    "urgencyLevel": "High",
    "otherInstitutes": "",
    "highestQualification": "B.Tech",
    "currentStatus": "Fresher",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Job Placement",
    "intentScore": 90,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 88,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": false
    },
    "qualificationScore": 80,
    "activities": [
      {
        "id": "a12",
        "leadId": "l5",
        "type": "Lead Created",
        "description": "Lead from Google Ad — Apply Now",
        "timestamp": {
          "$date": "2026-03-20T08:30:00Z"
        }
      },
      {
        "id": "a13",
        "leadId": "l5",
        "type": "Call Connected",
        "description": "Very interested, budget confirmed",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-20T10:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l6",
    "name": "Ishita Chopra",
    "phone": "9876543215",
    "email": "ishita@email.com",
    "source": "LinkedIn",
    "campaignId": "c3",
    "interestedCourse": "Digital Marketing",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "leadScore": 95,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "otherInstitutes": "",
    "highestQualification": "B.Com Hons",
    "currentStatus": "Working Professional",
    "careerGoal": "Digital Marketer",
    "leadSourceFormType": "Apply Now",
    "intentScore": 98,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 98,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "activities": [
      {
        "id": "a14",
        "leadId": "l6",
        "type": "Admission Completed",
        "description": "Admission completed for Digital Marketing",
        "timestamp": {
          "$date": "2026-03-20T14:00:00Z"
        }
      }
    ],
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "emiSelected": true,
    "admissionProbability": "High"
  },
  {
    "id": "l7",
    "name": "Rohan Das",
    "phone": "9876543216",
    "email": "rohan@email.com",
    "source": "Meta Ad",
    "campaignId": "c4",
    "interestedCourse": "Digital Marketing",
    "assignedTelecallerId": "u3",
    "status": "Lost",
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    },
    "leadScore": 25,
    "leadQuality": "Cold",
    "budgetRange": "",
    "urgencyLevel": "Low",
    "otherInstitutes": "Simplilearn",
    "leadSourceFormType": "Download Brochure",
    "intentScore": 10,
    "intentCategory": "Low Intent",
    "temperature": "Cold",
    "lostReason": "Joined Competitor",
    "priorityScore": 15,
    "priorityCategory": "Low Priority",
    "activities": [
      {
        "id": "a15",
        "leadId": "l7",
        "type": "Lead Created",
        "description": "Lead from Meta Ad — Brochure Download",
        "timestamp": {
          "$date": "2026-03-18T12:00:00Z"
        }
      },
      {
        "id": "a16",
        "leadId": "l7",
        "type": "Call Connected",
        "description": "Not interested, joined Simplilearn",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-19T09:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l8",
    "name": "Kavya Iyer",
    "phone": "9876543217",
    "email": "kavya@email.com",
    "source": "Walk-in",
    "campaignId": "c1",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "leadScore": 90,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "otherInstitutes": "",
    "currentEducation": "B.Com",
    "graduationYear": "2026",
    "currentOccupation": "Student",
    "highestQualification": "B.Com",
    "currentStatus": "Student",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Walk-in",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 92,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 90,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-12T00:00:00Z"
    },
    "walkInTime": "11:00",
    "walkInCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "activities": [
      {
        "id": "a11",
        "leadId": "l8",
        "type": "Lead Created",
        "description": "Walk-in inquiry",
        "timestamp": {
          "$date": "2026-03-10T09:00:00Z"
        }
      },
      {
        "id": "a11b",
        "leadId": "l8",
        "type": "Admission Completed",
        "description": "Admission for UI/UX Design",
        "timestamp": {
          "$date": "2026-03-14T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l9",
    "name": "Sneha Mukherjee",
    "phone": "9876543218",
    "email": "sneha@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "Graphic Design",
    "assignedTelecallerId": "u3",
    "status": "New",
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "leadScore": 55,
    "leadQuality": "Warm",
    "budgetRange": "₹45k",
    "urgencyLevel": "Medium",
    "highestQualification": "Class 12",
    "currentStatus": "Student",
    "careerGoal": "Graphic Designer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Free Callback",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 50,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 55,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "a17",
        "leadId": "l9",
        "type": "Lead Created",
        "description": "Google Ad lead — callback request",
        "timestamp": {
          "$date": "2026-03-25T08:30:00Z"
        }
      }
    ]
  },
  {
    "id": "l10",
    "name": "Rahul Chatterjee",
    "phone": "9876543219",
    "email": "rahul.c@email.com",
    "source": "Meta Ad",
    "campaignId": "c1",
    "interestedCourse": "Web Design",
    "assignedTelecallerId": "u3",
    "status": "Contacted",
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "leadScore": 65,
    "leadQuality": "Warm",
    "budgetRange": "₹45k",
    "urgencyLevel": "Medium",
    "highestQualification": "B.Sc",
    "currentStatus": "Fresher",
    "careerGoal": "Web Developer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Job Placement",
    "intentScore": 62,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 65,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "a18",
        "leadId": "l10",
        "type": "Lead Created",
        "description": "Meta Ad lead",
        "timestamp": {
          "$date": "2026-03-22T09:00:00Z"
        }
      },
      {
        "id": "a19",
        "leadId": "l10",
        "type": "Call Connected",
        "description": "Interested in Web Design, wants demo",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-22T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l11",
    "name": "Priyanka Basu",
    "phone": "9876543220",
    "email": "priyanka.b@email.com",
    "source": "Referral",
    "campaignId": "c1",
    "interestedCourse": "Motion Graphics",
    "assignedTelecallerId": "u3",
    "status": "Follow-up",
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "leadScore": 70,
    "leadQuality": "Warm",
    "budgetRange": "₹1.18L",
    "urgencyLevel": "Medium",
    "highestQualification": "B.A",
    "currentStatus": "Fresher",
    "careerGoal": "Animator",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Portfolio Building",
    "intentScore": 68,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 70,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "activities": [
      {
        "id": "a20",
        "leadId": "l11",
        "type": "Lead Created",
        "description": "Referral from alumni",
        "timestamp": {
          "$date": "2026-03-21T10:00:00Z"
        }
      },
      {
        "id": "a21",
        "leadId": "l11",
        "type": "Call Connected",
        "description": "Wants to see portfolio samples",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-21T14:00:00Z"
        }
      },
      {
        "id": "a22",
        "leadId": "l11",
        "type": "Follow-up Scheduled",
        "description": "Send portfolio samples via email",
        "timestamp": {
          "$date": "2026-03-21T14:10:00Z"
        }
      }
    ]
  },
  {
    "id": "l12",
    "name": "Tanmay Sen",
    "phone": "9876543221",
    "email": "tanmay@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "Full Stack Development",
    "assignedTelecallerId": "u3",
    "status": "Counseling",
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "leadScore": 82,
    "leadQuality": "Hot",
    "budgetRange": "₹4.1L",
    "urgencyLevel": "High",
    "highestQualification": "B.Tech",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Career Switch",
    "intentScore": 85,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 82,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Scheduled",
    "walkInDate": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "walkInTime": "11:00",
    "walkInCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "admissionProbability": "High",
    "activities": [
      {
        "id": "a23",
        "leadId": "l12",
        "type": "Lead Created",
        "description": "Google Ad — Apply Now",
        "timestamp": {
          "$date": "2026-03-19T08:00:00Z"
        }
      },
      {
        "id": "a24",
        "leadId": "l12",
        "type": "Call Connected",
        "description": "Budget confirmed, wants counseling",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-19T10:30:00Z"
        }
      },
      {
        "id": "a25",
        "leadId": "l12",
        "type": "Walk-in Scheduled",
        "description": "Walk-in counseling scheduled for 2026-03-26 at 11:00",
        "timestamp": {
          "$date": "2026-03-22T16:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l13",
    "name": "Megha Saha",
    "phone": "9876543222",
    "email": "megha@email.com",
    "source": "Instagram Organic",
    "campaignId": "c4",
    "interestedCourse": "Graphic Design",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "leadScore": 90,
    "leadQuality": "Hot",
    "budgetRange": "₹45k",
    "urgencyLevel": "High",
    "highestQualification": "Diploma",
    "currentStatus": "Fresher",
    "careerGoal": "Graphic Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Job Placement",
    "intentScore": 80,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 78,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "activities": [
      {
        "id": "a26",
        "leadId": "l13",
        "type": "Lead Created",
        "description": "Instagram DM inquiry",
        "timestamp": {
          "$date": "2026-03-10T11:00:00Z"
        }
      },
      {
        "id": "a27",
        "leadId": "l13",
        "type": "Admission Completed",
        "description": "Admission for Graphic Design",
        "timestamp": {
          "$date": "2026-03-14T15:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l14",
    "name": "Saurabh Mondal",
    "phone": "9876543223",
    "email": "saurabh@email.com",
    "source": "Meta Ad",
    "campaignId": "c1",
    "interestedCourse": "Game Development",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    },
    "leadScore": 95,
    "leadQuality": "Hot",
    "budgetRange": "₹1.9L",
    "urgencyLevel": "High",
    "highestQualification": "B.Tech",
    "currentStatus": "Fresher",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Job Placement",
    "intentScore": 96,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 95,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "admissionProbability": "High",
    "activities": [
      {
        "id": "a28",
        "leadId": "l14",
        "type": "Lead Created",
        "description": "Meta Ad lead",
        "timestamp": {
          "$date": "2026-03-15T09:00:00Z"
        }
      },
      {
        "id": "a29",
        "leadId": "l14",
        "type": "Admission Completed",
        "description": "Admission for Game Development",
        "timestamp": {
          "$date": "2026-03-18T12:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l15",
    "name": "Nisha Ghosh",
    "phone": "9876543224",
    "email": "nisha@email.com",
    "source": "Walk-in",
    "campaignId": "c1",
    "interestedCourse": "WordPress",
    "assignedTelecallerId": "u3",
    "status": "Lost",
    "createdAt": {
      "$date": "2026-03-16T00:00:00Z"
    },
    "leadScore": 20,
    "leadQuality": "Cold",
    "budgetRange": "₹45k",
    "urgencyLevel": "Low",
    "highestQualification": "Class 12",
    "currentStatus": "Student",
    "leadSourceFormType": "Walk-in",
    "intentScore": 15,
    "intentCategory": "Low Intent",
    "temperature": "Cold",
    "lostReason": "Budget Issue",
    "priorityScore": 20,
    "priorityCategory": "Low Priority",
    "activities": [
      {
        "id": "a30",
        "leadId": "l15",
        "type": "Lead Created",
        "description": "Walk-in inquiry",
        "timestamp": {
          "$date": "2026-03-16T10:00:00Z"
        }
      },
      {
        "id": "a31",
        "leadId": "l15",
        "type": "Call Connected",
        "description": "Cannot afford right now",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-17T09:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l16",
    "name": "Aditya Roy",
    "phone": "9876543225",
    "email": "aditya.r@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u4",
    "status": "New",
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "leadScore": 60,
    "leadQuality": "Warm",
    "budgetRange": "₹2.6L",
    "urgencyLevel": "Medium",
    "highestQualification": "B.Tech",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Career Switch",
    "intentScore": 58,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 60,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "a32",
        "leadId": "l16",
        "type": "Lead Created",
        "description": "Google Ad — Apply Now",
        "timestamp": {
          "$date": "2026-03-25T07:30:00Z"
        }
      }
    ]
  },
  {
    "id": "l17",
    "name": "Riya Banerjee",
    "phone": "9876543226",
    "email": "riya.b@email.com",
    "source": "Referral",
    "campaignId": "c1",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u4",
    "status": "Contacted",
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "leadScore": 75,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "highestQualification": "BCA",
    "currentStatus": "Fresher",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Portfolio Building",
    "intentScore": 78,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 75,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "activities": [
      {
        "id": "a33",
        "leadId": "l17",
        "type": "Lead Created",
        "description": "Referral from current student",
        "timestamp": {
          "$date": "2026-03-23T08:00:00Z"
        }
      },
      {
        "id": "a34",
        "leadId": "l17",
        "type": "Call Connected",
        "description": "Excited about UI/UX program",
        "channel": "Phone Call",
        "userId": "u4",
        "timestamp": {
          "$date": "2026-03-23T11:30:00Z"
        }
      }
    ]
  },
  {
    "id": "l18",
    "name": "Sourav Kar",
    "phone": "9876543227",
    "email": "sourav.k@email.com",
    "source": "Education Fair",
    "campaignId": "c3",
    "interestedCourse": "Full Stack Development",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-08T00:00:00Z"
    },
    "leadScore": 92,
    "leadQuality": "Hot",
    "budgetRange": "₹4.1L",
    "urgencyLevel": "High",
    "highestQualification": "BBA",
    "currentStatus": "Fresher",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Register Now",
    "leadMotivation": "Job Placement",
    "intentScore": 90,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 92,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "admissionProbability": "High",
    "activities": [
      {
        "id": "a35",
        "leadId": "l18",
        "type": "Lead Created",
        "description": "Education Fair signup",
        "timestamp": {
          "$date": "2026-03-08T10:00:00Z"
        }
      },
      {
        "id": "a36",
        "leadId": "l18",
        "type": "Admission Completed",
        "description": "Admission for Full Stack Development",
        "timestamp": {
          "$date": "2026-03-12T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l19",
    "name": "Pooja Sharma",
    "phone": "9876543228",
    "email": "pooja.s@email.com",
    "source": "Meta Ad",
    "campaignId": "c4",
    "interestedCourse": "Digital Marketing",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "leadScore": 92,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "highestQualification": "B.Com Hons",
    "currentStatus": "Working Professional",
    "careerGoal": "Digital Marketer",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 94,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 92,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": false
    },
    "qualificationScore": 80,
    "activities": [
      {
        "id": "a37",
        "leadId": "l19",
        "type": "Admission Completed",
        "description": "Admission for Digital Marketing",
        "timestamp": {
          "$date": "2026-03-17T11:00:00Z"
        }
      }
    ],
    "scholarshipApplied": true,
    "scholarshipPercentage": 15
  },
  {
    "id": "l20",
    "name": "Vikash Tiwari",
    "phone": "9876543229",
    "email": "vikash@email.com",
    "source": "YouTube",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u4",
    "status": "Lost",
    "createdAt": {
      "$date": "2026-03-12T00:00:00Z"
    },
    "leadScore": 30,
    "leadQuality": "Cold",
    "budgetRange": "",
    "urgencyLevel": "Low",
    "highestQualification": "B.Sc",
    "currentStatus": "Unemployed",
    "leadSourceFormType": "Download Brochure",
    "intentScore": 18,
    "intentCategory": "Low Intent",
    "temperature": "Cold",
    "lostReason": "No Response",
    "priorityScore": 18,
    "priorityCategory": "Low Priority",
    "activities": [
      {
        "id": "a38",
        "leadId": "l20",
        "type": "Lead Created",
        "description": "YouTube ad lead",
        "timestamp": {
          "$date": "2026-03-12T09:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l21",
    "name": "Ankita Dey",
    "phone": "9876543230",
    "email": "ankita.d@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u3",
    "status": "Counseling",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "leadScore": 85,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "highestQualification": "B.Sc",
    "currentStatus": "Fresher",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Job Placement",
    "intentScore": 86,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 85,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "admissionProbability": "High",
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "activities": [
      {
        "id": "a39",
        "leadId": "l21",
        "type": "Lead Created",
        "description": "Google Ad lead",
        "timestamp": {
          "$date": "2026-03-20T09:00:00Z"
        }
      },
      {
        "id": "a40",
        "leadId": "l21",
        "type": "Counseling Done",
        "description": "Counseling completed, ready for admission",
        "userId": "u5",
        "timestamp": {
          "$date": "2026-03-23T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l22",
    "name": "Debashis Paul",
    "phone": "9876543231",
    "email": "debashis@email.com",
    "source": "Walk-in",
    "campaignId": "c1",
    "interestedCourse": "HTML & CSS",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-08T00:00:00Z"
    },
    "leadScore": 70,
    "leadQuality": "Warm",
    "budgetRange": "₹15k",
    "urgencyLevel": "Medium",
    "highestQualification": "Class 12",
    "currentStatus": "Student",
    "careerGoal": "Web Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Walk-in",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 65,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 70,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "a41",
        "leadId": "l22",
        "type": "Lead Created",
        "description": "Walk-in inquiry — basic web course",
        "timestamp": {
          "$date": "2026-03-08T11:00:00Z"
        }
      },
      {
        "id": "a41b",
        "leadId": "l22",
        "type": "Admission Completed",
        "description": "Admission for HTML & CSS",
        "timestamp": {
          "$date": "2026-03-10T10:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l23",
    "name": "Shreya Mitra",
    "phone": "9876543232",
    "email": "shreya.m@email.com",
    "source": "Alumni Referral",
    "campaignId": "c1",
    "interestedCourse": "Motion Graphics",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-05T00:00:00Z"
    },
    "leadScore": 88,
    "leadQuality": "Hot",
    "budgetRange": "₹1.18L",
    "urgencyLevel": "High",
    "highestQualification": "B.A",
    "currentStatus": "Fresher",
    "careerGoal": "Animator",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Callback",
    "leadMotivation": "Portfolio Building",
    "intentScore": 85,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 88,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-08T00:00:00Z"
    },
    "walkInTime": "15:00",
    "walkInCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "activities": [
      {
        "id": "a42",
        "leadId": "l23",
        "type": "Lead Created",
        "description": "Alumni referral",
        "timestamp": {
          "$date": "2026-03-05T08:00:00Z"
        }
      },
      {
        "id": "a43",
        "leadId": "l23",
        "type": "Admission Completed",
        "description": "Admission for Motion Graphics",
        "timestamp": {
          "$date": "2026-03-10T12:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l24",
    "name": "Kunal Ghosh",
    "phone": "9876543233",
    "email": "kunal.g@email.com",
    "source": "Partner Institute",
    "campaignId": "c3",
    "interestedCourse": "Full Stack Development",
    "assignedTelecallerId": "u3",
    "status": "Follow-up",
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "leadScore": 74,
    "leadQuality": "Warm",
    "budgetRange": "₹4.1L",
    "urgencyLevel": "Medium",
    "highestQualification": "BCA",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Register Now",
    "leadMotivation": "Career Switch",
    "intentScore": 72,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 74,
    "priorityCategory": "High Priority",
    "activities": [
      {
        "id": "a44",
        "leadId": "l24",
        "type": "Lead Created",
        "description": "Partner institute referral",
        "timestamp": {
          "$date": "2026-03-19T10:00:00Z"
        }
      },
      {
        "id": "a45",
        "leadId": "l24",
        "type": "Call Connected",
        "description": "Needs EMI option details",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-19T15:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l25",
    "name": "Ritika Sarkar",
    "phone": "9876543234",
    "email": "ritika.s@email.com",
    "source": "Instagram Organic",
    "campaignId": "c4",
    "interestedCourse": "Graphic Design",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-06T00:00:00Z"
    },
    "leadScore": 85,
    "leadQuality": "Hot",
    "budgetRange": "₹45k",
    "urgencyLevel": "High",
    "highestQualification": "Diploma",
    "currentStatus": "Fresher",
    "careerGoal": "Graphic Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Job Placement",
    "intentScore": 82,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 85,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-09T00:00:00Z"
    },
    "walkInTime": "14:00",
    "walkInCounselor": "u5",
    "qualification": {
      "budgetConfirmed": true,
      "courseInterestConfirmed": true,
      "locationPreference": true,
      "startTimeline": true,
      "placementExpectation": true
    },
    "qualificationScore": 100,
    "activities": [
      {
        "id": "a46",
        "leadId": "l25",
        "type": "Lead Created",
        "description": "Instagram DM inquiry",
        "timestamp": {
          "$date": "2026-03-06T09:00:00Z"
        }
      },
      {
        "id": "a47",
        "leadId": "l25",
        "type": "Admission Completed",
        "description": "Admission for Graphic Design",
        "timestamp": {
          "$date": "2026-03-11T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l26",
    "name": "Soumya Ray",
    "phone": "9876543235",
    "email": "soumya.r@email.com",
    "source": "Walk-in",
    "campaignId": "c1",
    "interestedCourse": "Digital Marketing",
    "assignedTelecallerId": "u3",
    "status": "Interested",
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "leadScore": 72,
    "leadQuality": "Warm",
    "budgetRange": "₹90k",
    "urgencyLevel": "Medium",
    "highestQualification": "B.Com",
    "currentStatus": "Working Professional",
    "careerGoal": "Digital Marketer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 70,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 72,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Scheduled",
    "walkInDate": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "walkInTime": "10:30",
    "walkInCounselor": "u5",
    "activities": [
      {
        "id": "a48",
        "leadId": "l26",
        "type": "Lead Created",
        "description": "Walk-in inquiry via telecaller",
        "timestamp": {
          "$date": "2026-03-23T09:00:00Z"
        }
      },
      {
        "id": "a49",
        "leadId": "l26",
        "type": "Call Connected",
        "description": "Interested in Digital Marketing",
        "channel": "Phone Call",
        "userId": "u3",
        "timestamp": {
          "$date": "2026-03-23T10:00:00Z"
        }
      },
      {
        "id": "a50",
        "leadId": "l26",
        "type": "Walk-in Scheduled",
        "description": "Walk-in scheduled for 2026-03-25 at 10:30",
        "timestamp": {
          "$date": "2026-03-23T10:15:00Z"
        }
      }
    ]
  },
  {
    "id": "l27",
    "name": "Arnab Bhattacharya",
    "phone": "9876543236",
    "email": "arnab.b@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u4",
    "status": "Interested",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "leadScore": 65,
    "leadQuality": "Warm",
    "budgetRange": "₹2.6L",
    "urgencyLevel": "Medium",
    "highestQualification": "B.Tech",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "intentScore": 60,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 65,
    "priorityCategory": "Medium Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "No Show",
    "walkInDate": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "walkInTime": "11:00",
    "walkInCounselor": "u5",
    "activities": [
      {
        "id": "a51",
        "leadId": "l27",
        "type": "Lead Created",
        "description": "Google Ad lead",
        "timestamp": {
          "$date": "2026-03-20T09:00:00Z"
        }
      },
      {
        "id": "a52",
        "leadId": "l27",
        "type": "Walk-in Scheduled",
        "description": "Walk-in scheduled for 2026-03-24",
        "timestamp": {
          "$date": "2026-03-21T11:00:00Z"
        }
      },
      {
        "id": "a53",
        "leadId": "l27",
        "type": "Walk-in No Show",
        "description": "Student did not show up",
        "timestamp": {
          "$date": "2026-03-24T12:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l28",
    "name": "Amit Bansal",
    "phone": "9876543237",
    "email": "amit.b@email.com",
    "source": "Meta Ad",
    "campaignId": "c1",
    "interestedCourse": "Web Design",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-03T00:00:00Z"
    },
    "leadScore": 88,
    "leadQuality": "Hot",
    "budgetRange": "₹45k",
    "urgencyLevel": "High",
    "highestQualification": "B.Com",
    "currentStatus": "Working Professional",
    "careerGoal": "Web Developer",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Freelancing",
    "intentScore": 85,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 88,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "activities": [
      {
        "id": "a54",
        "leadId": "l28",
        "type": "Lead Created",
        "description": "Meta Ad lead",
        "timestamp": {
          "$date": "2026-03-03T09:00:00Z"
        }
      },
      {
        "id": "a55",
        "leadId": "l28",
        "type": "Admission Completed",
        "description": "Admission for Web Design",
        "timestamp": {
          "$date": "2026-03-07T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l29",
    "name": "Tanya Gupta",
    "phone": "9876543238",
    "email": "tanya.g@email.com",
    "source": "Google Ad",
    "campaignId": "c2",
    "interestedCourse": "AI / ML",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-01T00:00:00Z"
    },
    "leadScore": 92,
    "leadQuality": "Hot",
    "budgetRange": "₹2.6L",
    "urgencyLevel": "High",
    "highestQualification": "M.Tech",
    "currentStatus": "Working Professional",
    "careerGoal": "Full Stack Developer",
    "leadSourceFormType": "Apply Now",
    "leadMotivation": "Career Switch",
    "intentScore": 94,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 92,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-04T00:00:00Z"
    },
    "walkInTime": "10:00",
    "walkInCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 5,
    "activities": [
      {
        "id": "a56",
        "leadId": "l29",
        "type": "Lead Created",
        "description": "Google Ad lead",
        "timestamp": {
          "$date": "2026-03-01T08:00:00Z"
        }
      },
      {
        "id": "a57",
        "leadId": "l29",
        "type": "Admission Completed",
        "description": "Admission for AI / ML",
        "timestamp": {
          "$date": "2026-03-06T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l30",
    "name": "Nikhil Pal",
    "phone": "9876543239",
    "email": "nikhil.p@email.com",
    "source": "LinkedIn",
    "campaignId": "c3",
    "interestedCourse": "WordPress",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-02T00:00:00Z"
    },
    "leadScore": 75,
    "leadQuality": "Warm",
    "budgetRange": "₹45k",
    "urgencyLevel": "Medium",
    "highestQualification": "B.A",
    "currentStatus": "Working Professional",
    "careerGoal": "Web Developer",
    "leadSourceFormType": "Register Now",
    "leadMotivation": "Freelancing",
    "intentScore": 72,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 75,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "activities": [
      {
        "id": "a58",
        "leadId": "l30",
        "type": "Lead Created",
        "description": "LinkedIn lead",
        "timestamp": {
          "$date": "2026-03-02T10:00:00Z"
        }
      },
      {
        "id": "a59",
        "leadId": "l30",
        "type": "Admission Completed",
        "description": "Admission for WordPress",
        "timestamp": {
          "$date": "2026-03-06T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l31",
    "name": "Swati Mishra",
    "phone": "9876543240",
    "email": "swati.m@email.com",
    "source": "Meta Ad",
    "campaignId": "c4",
    "interestedCourse": "Graphic Design",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-04T00:00:00Z"
    },
    "leadScore": 82,
    "leadQuality": "Hot",
    "budgetRange": "₹45k",
    "urgencyLevel": "High",
    "highestQualification": "B.Sc",
    "currentStatus": "Fresher",
    "careerGoal": "Graphic Designer",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Job Placement",
    "intentScore": 80,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 82,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 20,
    "activities": [
      {
        "id": "a60",
        "leadId": "l31",
        "type": "Lead Created",
        "description": "Meta Ad lead",
        "timestamp": {
          "$date": "2026-03-04T09:00:00Z"
        }
      },
      {
        "id": "a61",
        "leadId": "l31",
        "type": "Admission Completed",
        "description": "Admission for Graphic Design",
        "timestamp": {
          "$date": "2026-03-08T10:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l32",
    "name": "Deepak Verma",
    "phone": "9876543241",
    "email": "deepak.v@email.com",
    "source": "Referral",
    "campaignId": "c1",
    "interestedCourse": "UI/UX Design",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-07T00:00:00Z"
    },
    "leadScore": 88,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "highestQualification": "BCA",
    "currentStatus": "Fresher",
    "careerGoal": "UI/UX Designer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Free Callback",
    "leadMotivation": "Job Placement",
    "intentScore": 86,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 88,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-09T00:00:00Z"
    },
    "walkInTime": "11:30",
    "walkInCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "activities": [
      {
        "id": "a62",
        "leadId": "l32",
        "type": "Lead Created",
        "description": "Referral from current student",
        "timestamp": {
          "$date": "2026-03-07T09:00:00Z"
        }
      },
      {
        "id": "a63",
        "leadId": "l32",
        "type": "Admission Completed",
        "description": "Admission for UI/UX Design",
        "timestamp": {
          "$date": "2026-03-11T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l33",
    "name": "Manisha Rao",
    "phone": "9876543242",
    "email": "manisha.r@email.com",
    "source": "YouTube",
    "campaignId": "c2",
    "interestedCourse": "Digital Marketing",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-05T00:00:00Z"
    },
    "leadScore": 80,
    "leadQuality": "Hot",
    "budgetRange": "₹90k",
    "urgencyLevel": "High",
    "highestQualification": "B.Com",
    "currentStatus": "Working Professional",
    "careerGoal": "Digital Marketer",
    "preferredStartTime": "Within 1 Month",
    "leadSourceFormType": "Free Counselling",
    "leadMotivation": "Skill Upgrade",
    "intentScore": 82,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 80,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "activities": [
      {
        "id": "a64",
        "leadId": "l33",
        "type": "Lead Created",
        "description": "YouTube tutorial viewer",
        "timestamp": {
          "$date": "2026-03-05T10:00:00Z"
        }
      },
      {
        "id": "a65",
        "leadId": "l33",
        "type": "Admission Completed",
        "description": "Admission for Digital Marketing",
        "timestamp": {
          "$date": "2026-03-09T15:00:00Z"
        }
      }
    ]
  },
  {
    "id": "l34",
    "name": "Karan Bhatt",
    "phone": "9876543243",
    "email": "karan.b@email.com",
    "source": "Partner Institute",
    "campaignId": "c3",
    "interestedCourse": "Game Development",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-03T00:00:00Z"
    },
    "leadScore": 90,
    "leadQuality": "Hot",
    "budgetRange": "₹1.9L",
    "urgencyLevel": "High",
    "highestQualification": "B.Tech",
    "currentStatus": "Fresher",
    "careerGoal": "Full Stack Developer",
    "preferredStartTime": "Immediate",
    "leadSourceFormType": "Register Now",
    "leadMotivation": "Job Placement",
    "intentScore": 88,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 90,
    "priorityCategory": "High Priority",
    "assignedCounselor": "u5",
    "walkInStatus": "Completed",
    "walkInDate": {
      "$date": "2026-03-05T00:00:00Z"
    },
    "walkInTime": "14:00",
    "walkInCounselor": "u5",
    "scholarshipApplied": true,
    "scholarshipPercentage": 5,
    "activities": [
      {
        "id": "a66",
        "leadId": "l34",
        "type": "Lead Created",
        "description": "Partner institute referral",
        "timestamp": {
          "$date": "2026-03-03T08:00:00Z"
        }
      },
      {
        "id": "a67",
        "leadId": "l34",
        "type": "Admission Completed",
        "description": "Admission for Game Development",
        "timestamp": {
          "$date": "2026-03-07T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li1",
    "name": "Rohit Kumar",
    "phone": "9876600001",
    "email": "rohit.k@email.com",
    "source": "College Outreach",
    "campaignId": "c1",
    "interestedCourse": "Web Development Internship",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-12T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "Web Development Internship",
    "internshipDuration": "3 Months",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 25000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Batch Start",
    "leadScore": 80,
    "leadQuality": "Hot",
    "budgetRange": "₹25k",
    "urgencyLevel": "High",
    "intentScore": 82,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 80,
    "priorityCategory": "High Priority",
    "activities": [
      {
        "id": "ali1",
        "leadId": "li1",
        "type": "Lead Created",
        "description": "Internship inquiry from college outreach",
        "timestamp": {
          "$date": "2026-03-12T09:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li2",
    "name": "Anita Sharma",
    "phone": "9876600002",
    "email": "anita.s@email.com",
    "source": "Website",
    "campaignId": "c4",
    "interestedCourse": "Digital Marketing Internship",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "Digital Marketing Internship",
    "internshipDuration": "1 Month",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 5000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Batch Start",
    "leadScore": 75,
    "leadQuality": "Warm",
    "budgetRange": "₹5k",
    "urgencyLevel": "Medium",
    "intentScore": 70,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 72,
    "priorityCategory": "High Priority",
    "activities": [
      {
        "id": "ali2",
        "leadId": "li2",
        "type": "Lead Created",
        "description": "Internship inquiry from website",
        "timestamp": {
          "$date": "2026-03-15T10:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li3",
    "name": "Vivek Patel",
    "phone": "9876600003",
    "email": "vivek.p@email.com",
    "source": "College Outreach",
    "campaignId": "c3",
    "interestedCourse": "Graphic Design Internship",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-17T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "Graphic Design Internship",
    "internshipDuration": "2 Months",
    "internshipLocation": "College Campus",
    "internshipFee": 10000,
    "internshipEnrollmentType": "College Batch",
    "internshipPipelineStage": "Batch Start",
    "leadScore": 72,
    "leadQuality": "Warm",
    "budgetRange": "₹10k",
    "urgencyLevel": "Medium",
    "intentScore": 68,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 70,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "ali3",
        "leadId": "li3",
        "type": "Lead Created",
        "description": "College batch inquiry for internship",
        "timestamp": {
          "$date": "2026-03-17T11:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li4",
    "name": "Neha Gupta",
    "phone": "9876600004",
    "email": "neha.g@email.com",
    "source": "Seminar",
    "campaignId": "c1",
    "interestedCourse": "UI/UX Internship",
    "assignedTelecallerId": "u4",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "UI/UX Internship",
    "internshipDuration": "3 Months",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 25000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Batch Start",
    "leadScore": 85,
    "leadQuality": "Hot",
    "budgetRange": "₹25k",
    "urgencyLevel": "High",
    "intentScore": 84,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 85,
    "priorityCategory": "High Priority",
    "activities": [
      {
        "id": "ali4",
        "leadId": "li4",
        "type": "Lead Created",
        "description": "Seminar attendee interested in UI/UX internship",
        "timestamp": {
          "$date": "2026-03-19T14:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li5",
    "name": "Rahul Singh",
    "phone": "9876600005",
    "email": "rahul.s@email.com",
    "source": "Workshop",
    "campaignId": "c2",
    "interestedCourse": "AI/ML Internship",
    "assignedTelecallerId": "u3",
    "status": "Admission",
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "AI/ML Internship",
    "internshipDuration": "6 Months",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 75000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Batch Start",
    "leadScore": 90,
    "leadQuality": "Hot",
    "budgetRange": "₹75k",
    "urgencyLevel": "High",
    "intentScore": 88,
    "intentCategory": "High Intent",
    "temperature": "Hot",
    "priorityScore": 90,
    "priorityCategory": "High Priority",
    "activities": [
      {
        "id": "ali5",
        "leadId": "li5",
        "type": "Lead Created",
        "description": "Workshop attendee, very keen on AI/ML internship",
        "timestamp": {
          "$date": "2026-03-21T10:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li6",
    "name": "Kavita Mehta",
    "phone": "9876600006",
    "email": "kavita.m@email.com",
    "source": "Google Ads",
    "campaignId": "c2",
    "interestedCourse": "Game Development Internship",
    "assignedTelecallerId": "u4",
    "status": "Interested",
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "Game Development Internship",
    "internshipDuration": "3 Months",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 50000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Internship Discussion",
    "leadScore": 65,
    "leadQuality": "Warm",
    "budgetRange": "₹50k",
    "urgencyLevel": "Medium",
    "intentScore": 60,
    "intentCategory": "Medium Intent",
    "temperature": "Warm",
    "priorityScore": 65,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "ali6",
        "leadId": "li6",
        "type": "Lead Created",
        "description": "Google Ad lead for game dev internship",
        "timestamp": {
          "$date": "2026-03-23T08:00:00Z"
        }
      }
    ]
  },
  {
    "id": "li7",
    "name": "Deepak Jain",
    "phone": "9876600007",
    "email": "deepak.j@email.com",
    "source": "Meta Ads",
    "campaignId": "c1",
    "interestedCourse": "Simulation Engineering Internship",
    "assignedTelecallerId": "u3",
    "status": "New",
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "programChannel": "Internship Program",
    "internshipCourse": "Simulation Engineering Internship",
    "internshipDuration": "6 Months",
    "internshipLocation": "Red Apple Campus",
    "internshipFee": 75000,
    "internshipEnrollmentType": "Individual Student",
    "internshipPipelineStage": "Internship Lead",
    "leadScore": 50,
    "leadQuality": "Cold",
    "budgetRange": "₹75k",
    "urgencyLevel": "Low",
    "intentScore": 45,
    "intentCategory": "Low Intent",
    "temperature": "Cold",
    "priorityScore": 50,
    "priorityCategory": "Medium Priority",
    "activities": [
      {
        "id": "ali7",
        "leadId": "li7",
        "type": "Lead Created",
        "description": "Meta Ad lead for simulation internship",
        "timestamp": {
          "$date": "2026-03-25T09:00:00Z"
        }
      }
    ]
  }
]
```

## Collection: callLogs

```json
[
  {
    "id": "cl1",
    "leadId": "l1",
    "telecallerId": "u3",
    "outcome": "Connected",
    "notes": "Interested in weekend batch",
    "nextFollowUp": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-24T00:00:00Z"
    }
  },
  {
    "id": "cl2",
    "leadId": "l2",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Wants to know about placement support",
    "nextFollowUp": {
      "$date": "2026-03-27T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "conversationInsight": {
      "careerGoal": "Data Analyst",
      "budgetRange": "₹2.6L",
      "leadMotivation": "Career Switch",
      "placementExpectation": "Within 6 months"
    }
  },
  {
    "id": "cl3",
    "leadId": "l3",
    "telecallerId": "u4",
    "outcome": "Call later",
    "notes": "Busy, asked to call after 5 PM",
    "nextFollowUp": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    }
  },
  {
    "id": "cl4",
    "leadId": "l7",
    "telecallerId": "u3",
    "outcome": "Not interested",
    "notes": "Found another institute",
    "nextFollowUp": "",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "notInterestedReason": "Joined Competitor"
  },
  {
    "id": "cl5",
    "leadId": "l9",
    "telecallerId": "u3",
    "outcome": "Not Answered",
    "notes": "No response — will retry",
    "nextFollowUp": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    }
  },
  {
    "id": "cl6",
    "leadId": "l10",
    "telecallerId": "u3",
    "outcome": "Connected",
    "notes": "Interested in Web Design, wants demo class",
    "nextFollowUp": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    }
  },
  {
    "id": "cl7",
    "leadId": "l11",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Wants portfolio samples before deciding",
    "nextFollowUp": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "conversationInsight": {
      "careerGoal": "Animator",
      "budgetRange": "₹1.18L",
      "leadMotivation": "Portfolio Building",
      "placementExpectation": "After course"
    }
  },
  {
    "id": "cl8",
    "leadId": "l12",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Budget confirmed, wants counseling ASAP",
    "nextFollowUp": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "conversationInsight": {
      "careerGoal": "Full Stack Developer",
      "budgetRange": "₹4.1L",
      "leadMotivation": "Career Switch",
      "placementExpectation": "Within 3 months"
    }
  },
  {
    "id": "cl9",
    "leadId": "l13",
    "telecallerId": "u3",
    "outcome": "Connected",
    "notes": "Portfolio-ready, very keen on joining",
    "nextFollowUp": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    }
  },
  {
    "id": "cl10",
    "leadId": "l14",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Wants Game Dev, placement a must",
    "nextFollowUp": {
      "$date": "2026-03-16T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    }
  },
  {
    "id": "cl11",
    "leadId": "l15",
    "telecallerId": "u3",
    "outcome": "Not interested",
    "notes": "Budget issue, cannot afford",
    "nextFollowUp": "",
    "createdAt": {
      "$date": "2026-03-17T00:00:00Z"
    },
    "notInterestedReason": "Course Too Expensive"
  },
  {
    "id": "cl12",
    "leadId": "l16",
    "telecallerId": "u4",
    "outcome": "Not Answered",
    "notes": "No pick up",
    "nextFollowUp": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    }
  },
  {
    "id": "cl13",
    "leadId": "l17",
    "telecallerId": "u4",
    "outcome": "Interested",
    "notes": "Excited about UI/UX — wants counseling",
    "nextFollowUp": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    }
  },
  {
    "id": "cl14",
    "leadId": "l18",
    "telecallerId": "u4",
    "outcome": "Interested",
    "notes": "Ready for next batch, budget OK",
    "nextFollowUp": "",
    "createdAt": {
      "$date": "2026-03-17T00:00:00Z"
    }
  },
  {
    "id": "cl15",
    "leadId": "l19",
    "telecallerId": "u4",
    "outcome": "Connected",
    "notes": "Admission confirmed",
    "nextFollowUp": "",
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    }
  },
  {
    "id": "cl16",
    "leadId": "l20",
    "telecallerId": "u4",
    "outcome": "Switched Off",
    "notes": "Phone switched off 3 attempts",
    "nextFollowUp": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-13T00:00:00Z"
    }
  },
  {
    "id": "cl17",
    "leadId": "l21",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Wants scholarship info",
    "nextFollowUp": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    }
  },
  {
    "id": "cl18",
    "leadId": "l22",
    "telecallerId": "u3",
    "outcome": "Connected",
    "notes": "Interested in basic HTML/CSS course",
    "nextFollowUp": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    }
  },
  {
    "id": "cl19",
    "leadId": "l23",
    "telecallerId": "u4",
    "outcome": "Connected",
    "notes": "Wants demo class for Motion Graphics",
    "nextFollowUp": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    }
  },
  {
    "id": "cl20",
    "leadId": "l24",
    "telecallerId": "u3",
    "outcome": "Interested",
    "notes": "Needs EMI details, partner institute referral",
    "nextFollowUp": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    }
  },
  {
    "id": "cl21",
    "leadId": "l25",
    "telecallerId": "u4",
    "outcome": "Connected",
    "notes": "Interested in Graphic Design, sent for counseling",
    "nextFollowUp": "",
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    }
  }
]
```

## Collection: followUps

```json
[
  {
    "id": "f1",
    "leadId": "l1",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "notes": "Call about weekend batch availability",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "followUpType": "Phone Call"
  },
  {
    "id": "f2",
    "leadId": "l2",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-27T00:00:00Z"
    },
    "notes": "Share placement brochure",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "followUpType": "WhatsApp"
  },
  {
    "id": "f3",
    "leadId": "l3",
    "assignedTo": "u4",
    "date": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "notes": "Call after 5 PM",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "followUpType": "Phone Call"
  },
  {
    "id": "f4",
    "leadId": "l4",
    "assignedTo": "u5",
    "date": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "notes": "Counseling session scheduled",
    "completed": true,
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "followUpType": "Counseling Meeting"
  },
  {
    "id": "f5",
    "leadId": "l9",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "notes": "Retry call — no answer earlier",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "followUpType": "Phone Call"
  },
  {
    "id": "f6",
    "leadId": "l10",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "notes": "Schedule demo class for Web Design",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "followUpType": "Demo Class"
  },
  {
    "id": "f7",
    "leadId": "l11",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "notes": "Email portfolio samples",
    "completed": true,
    "createdAt": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "followUpType": "Email"
  },
  {
    "id": "f8",
    "leadId": "l12",
    "assignedTo": "u5",
    "date": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "notes": "Schedule counseling for Full Stack",
    "completed": true,
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "followUpType": "Counseling Meeting"
  },
  {
    "id": "f9",
    "leadId": "l16",
    "assignedTo": "u4",
    "date": {
      "$date": "2026-03-26T00:00:00Z"
    },
    "notes": "Retry call — didn't pick up",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "followUpType": "Phone Call"
  },
  {
    "id": "f10",
    "leadId": "l17",
    "assignedTo": "u5",
    "date": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "notes": "Counseling for UI/UX",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-23T00:00:00Z"
    },
    "followUpType": "Counseling Meeting"
  },
  {
    "id": "f11",
    "leadId": "l23",
    "assignedTo": "u4",
    "date": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "notes": "Demo class for Motion Graphics",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "followUpType": "Demo Class"
  },
  {
    "id": "f12",
    "leadId": "l24",
    "assignedTo": "u3",
    "date": {
      "$date": "2026-03-21T00:00:00Z"
    },
    "notes": "Share EMI plan details via WhatsApp",
    "completed": true,
    "createdAt": {
      "$date": "2026-03-19T00:00:00Z"
    },
    "followUpType": "WhatsApp"
  },
  {
    "id": "f13",
    "leadId": "l21",
    "assignedTo": "u5",
    "date": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "notes": "Discuss scholarship and admission",
    "completed": false,
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "followUpType": "Counseling Meeting"
  },
  {
    "id": "f14",
    "leadId": "l25",
    "assignedTo": "u5",
    "date": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "notes": "Follow up on counseling outcome",
    "completed": true,
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    },
    "followUpType": "Phone Call"
  }
]
```

## Collection: admissions

```json
[
  {
    "id": "a1",
    "leadId": "l6",
    "studentName": "Ishita Chopra",
    "phone": "9876543215",
    "email": "ishita@email.com",
    "courseSelected": "Digital Marketing",
    "batch": "DM-2026-A",
    "admissionDate": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "totalFee": 90000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260320001",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 3,
    "paymentHistory": [
      {
        "id": "ph1",
        "paymentDate": {
          "$date": "2026-03-20T00:00:00Z"
        },
        "amountPaid": 35000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260320001",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "parentName": "Rajesh Chopra",
    "parentPhone": "9876500001",
    "studentBankName": "HDFC Bank",
    "parentBankName": "SBI",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "emiSelected": true
  },
  {
    "id": "a2",
    "leadId": "l14",
    "studentName": "Saurabh Mondal",
    "phone": "9876543223",
    "email": "saurabh@email.com",
    "courseSelected": "Game Development",
    "batch": "GD-2026-A",
    "admissionDate": {
      "$date": "2026-03-18T00:00:00Z"
    },
    "totalFee": 190000,
    "paymentStatus": "Partial",
    "paymentMode": "UPI",
    "chequeNumber": "",
    "transactionId": "TXN20260318001",
    "paymentType": "EMI",
    "emiNumber": 2,
    "totalEmis": 4,
    "paymentHistory": [
      {
        "id": "ph2",
        "paymentDate": {
          "$date": "2026-03-18T00:00:00Z"
        },
        "amountPaid": 50000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260318001",
        "paymentType": "EMI",
        "emiNumber": 1
      },
      {
        "id": "ph2b",
        "paymentDate": {
          "$date": "2026-03-25T00:00:00Z"
        },
        "amountPaid": 48000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260325001",
        "paymentType": "EMI",
        "emiNumber": 2
      }
    ],
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": true
  },
  {
    "id": "a3",
    "leadId": "l19",
    "studentName": "Pooja Sharma",
    "phone": "9876543228",
    "email": "pooja.s@email.com",
    "courseSelected": "Digital Marketing",
    "batch": "DM-2026-B",
    "admissionDate": {
      "$date": "2026-03-17T00:00:00Z"
    },
    "totalFee": 90000,
    "paymentStatus": "Paid",
    "paymentMode": "Credit Card",
    "chequeNumber": "",
    "transactionId": "TXN20260317001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph3",
        "paymentDate": {
          "$date": "2026-03-17T00:00:00Z"
        },
        "amountPaid": 90000,
        "paymentMode": "Credit Card",
        "referenceNumber": "TXN20260317001",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-17T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 15,
    "emiSelected": false
  },
  {
    "id": "a4",
    "leadId": "l8",
    "studentName": "Kavya Iyer",
    "phone": "9876543217",
    "email": "kavya@email.com",
    "courseSelected": "UI/UX Design",
    "batch": "UX-2026-A",
    "admissionDate": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "totalFee": 90000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260314001",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 3,
    "paymentHistory": [
      {
        "id": "ph4",
        "paymentDate": {
          "$date": "2026-03-14T00:00:00Z"
        },
        "amountPaid": 30000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260314001",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "createdAt": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "emiSelected": true
  },
  {
    "id": "a5",
    "leadId": "l13",
    "studentName": "Megha Saha",
    "phone": "9876543222",
    "email": "megha@email.com",
    "courseSelected": "Graphic Design",
    "batch": "GD-2026-B",
    "admissionDate": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "totalFee": 45000,
    "paymentStatus": "Paid",
    "paymentMode": "UPI",
    "chequeNumber": "",
    "transactionId": "TXN20260314002",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph5",
        "paymentDate": {
          "$date": "2026-03-14T00:00:00Z"
        },
        "amountPaid": 45000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260314002",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-14T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": false
  },
  {
    "id": "a6",
    "leadId": "l18",
    "studentName": "Sourav Kar",
    "phone": "9876543227",
    "email": "sourav.k@email.com",
    "courseSelected": "Full Stack Development",
    "batch": "FSD-2026-A",
    "admissionDate": {
      "$date": "2026-03-12T00:00:00Z"
    },
    "totalFee": 410000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260312001",
    "paymentType": "EMI",
    "emiNumber": 2,
    "totalEmis": 6,
    "paymentHistory": [
      {
        "id": "ph6a",
        "paymentDate": {
          "$date": "2026-03-12T00:00:00Z"
        },
        "amountPaid": 80000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260312001",
        "paymentType": "EMI",
        "emiNumber": 1
      },
      {
        "id": "ph6b",
        "paymentDate": {
          "$date": "2026-03-25T00:00:00Z"
        },
        "amountPaid": 66000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260325002",
        "paymentType": "EMI",
        "emiNumber": 2
      }
    ],
    "createdAt": {
      "$date": "2026-03-12T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": true
  },
  {
    "id": "a7",
    "leadId": "l22",
    "studentName": "Debashis Paul",
    "phone": "9876543231",
    "email": "debashis@email.com",
    "courseSelected": "HTML & CSS",
    "batch": "HC-2026-A",
    "admissionDate": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "totalFee": 15000,
    "paymentStatus": "Paid",
    "paymentMode": "Cash",
    "chequeNumber": "",
    "transactionId": "TXN20260310001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph7",
        "paymentDate": {
          "$date": "2026-03-10T00:00:00Z"
        },
        "amountPaid": 15000,
        "paymentMode": "Cash",
        "referenceNumber": "CASH20260310",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": false
  },
  {
    "id": "a8",
    "leadId": "l23",
    "studentName": "Shreya Mitra",
    "phone": "9876543232",
    "email": "shreya.m@email.com",
    "courseSelected": "Motion Graphics",
    "batch": "MG-2026-A",
    "admissionDate": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "totalFee": 118000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260310002",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 3,
    "paymentHistory": [
      {
        "id": "ph8",
        "paymentDate": {
          "$date": "2026-03-10T00:00:00Z"
        },
        "amountPaid": 40000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260310002",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "createdAt": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "emiSelected": true
  },
  {
    "id": "a9",
    "leadId": "l25",
    "studentName": "Ritika Sarkar",
    "phone": "9876543234",
    "email": "ritika.s@email.com",
    "courseSelected": "Graphic Design",
    "batch": "GD-2026-C",
    "admissionDate": {
      "$date": "2026-03-11T00:00:00Z"
    },
    "totalFee": 45000,
    "paymentStatus": "Paid",
    "paymentMode": "UPI",
    "chequeNumber": "",
    "transactionId": "TXN20260311001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph9",
        "paymentDate": {
          "$date": "2026-03-11T00:00:00Z"
        },
        "amountPaid": 45000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260311001",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-11T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": false
  },
  {
    "id": "a10",
    "leadId": "l28",
    "studentName": "Amit Bansal",
    "phone": "9876543237",
    "email": "amit.b@email.com",
    "courseSelected": "Web Design",
    "batch": "WD-2026-A",
    "admissionDate": {
      "$date": "2026-03-07T00:00:00Z"
    },
    "totalFee": 45000,
    "paymentStatus": "Paid",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260307001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph10",
        "paymentDate": {
          "$date": "2026-03-07T00:00:00Z"
        },
        "amountPaid": 45000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260307001",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-07T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": false
  },
  {
    "id": "a11",
    "leadId": "l29",
    "studentName": "Tanya Gupta",
    "phone": "9876543238",
    "email": "tanya.g@email.com",
    "courseSelected": "AI / ML",
    "batch": "AI-2026-A",
    "admissionDate": {
      "$date": "2026-03-06T00:00:00Z"
    },
    "totalFee": 260000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260306001",
    "paymentType": "EMI",
    "emiNumber": 2,
    "totalEmis": 5,
    "paymentHistory": [
      {
        "id": "ph11a",
        "paymentDate": {
          "$date": "2026-03-06T00:00:00Z"
        },
        "amountPaid": 55000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260306001",
        "paymentType": "EMI",
        "emiNumber": 1
      },
      {
        "id": "ph11b",
        "paymentDate": {
          "$date": "2026-03-20T00:00:00Z"
        },
        "amountPaid": 52000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260320002",
        "paymentType": "EMI",
        "emiNumber": 2
      }
    ],
    "createdAt": {
      "$date": "2026-03-06T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 5,
    "emiSelected": true
  },
  {
    "id": "a12",
    "leadId": "l30",
    "studentName": "Nikhil Pal",
    "phone": "9876543239",
    "email": "nikhil.p@email.com",
    "courseSelected": "WordPress",
    "batch": "WP-2026-A",
    "admissionDate": {
      "$date": "2026-03-06T00:00:00Z"
    },
    "totalFee": 45000,
    "paymentStatus": "Partial",
    "paymentMode": "UPI",
    "chequeNumber": "",
    "transactionId": "TXN20260306002",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 2,
    "paymentHistory": [
      {
        "id": "ph12",
        "paymentDate": {
          "$date": "2026-03-06T00:00:00Z"
        },
        "amountPaid": 25000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260306002",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "createdAt": {
      "$date": "2026-03-06T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": true
  },
  {
    "id": "a13",
    "leadId": "l31",
    "studentName": "Swati Mishra",
    "phone": "9876543240",
    "email": "swati.m@email.com",
    "courseSelected": "Graphic Design",
    "batch": "GD-2026-D",
    "admissionDate": {
      "$date": "2026-03-08T00:00:00Z"
    },
    "totalFee": 45000,
    "paymentStatus": "Paid",
    "paymentMode": "Cash",
    "chequeNumber": "",
    "transactionId": "CASH20260308001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph13",
        "paymentDate": {
          "$date": "2026-03-08T00:00:00Z"
        },
        "amountPaid": 45000,
        "paymentMode": "Cash",
        "referenceNumber": "CASH20260308001",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-08T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 20,
    "emiSelected": false
  },
  {
    "id": "a14",
    "leadId": "l32",
    "studentName": "Deepak Verma",
    "phone": "9876543241",
    "email": "deepak.v@email.com",
    "courseSelected": "UI/UX Design",
    "batch": "UX-2026-B",
    "admissionDate": {
      "$date": "2026-03-11T00:00:00Z"
    },
    "totalFee": 90000,
    "paymentStatus": "Partial",
    "paymentMode": "UPI",
    "chequeNumber": "",
    "transactionId": "TXN20260311002",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 3,
    "paymentHistory": [
      {
        "id": "ph14",
        "paymentDate": {
          "$date": "2026-03-11T00:00:00Z"
        },
        "amountPaid": 35000,
        "paymentMode": "UPI",
        "referenceNumber": "TXN20260311002",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "createdAt": {
      "$date": "2026-03-11T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 10,
    "emiSelected": true
  },
  {
    "id": "a15",
    "leadId": "l33",
    "studentName": "Manisha Rao",
    "phone": "9876543242",
    "email": "manisha.r@email.com",
    "courseSelected": "Digital Marketing",
    "batch": "DM-2026-C",
    "admissionDate": {
      "$date": "2026-03-09T00:00:00Z"
    },
    "totalFee": 90000,
    "paymentStatus": "Paid",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260309001",
    "paymentType": "Full Payment",
    "paymentHistory": [
      {
        "id": "ph15",
        "paymentDate": {
          "$date": "2026-03-09T00:00:00Z"
        },
        "amountPaid": 90000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260309001",
        "paymentType": "Full Payment"
      }
    ],
    "createdAt": {
      "$date": "2026-03-09T00:00:00Z"
    },
    "scholarshipApplied": false,
    "emiSelected": false
  },
  {
    "id": "a16",
    "leadId": "l34",
    "studentName": "Karan Bhatt",
    "phone": "9876543243",
    "email": "karan.b@email.com",
    "courseSelected": "Game Development",
    "batch": "GD-2026-B",
    "admissionDate": {
      "$date": "2026-03-07T00:00:00Z"
    },
    "totalFee": 190000,
    "paymentStatus": "Partial",
    "paymentMode": "Online Transfer",
    "chequeNumber": "",
    "transactionId": "TXN20260307002",
    "paymentType": "EMI",
    "emiNumber": 1,
    "totalEmis": 4,
    "paymentHistory": [
      {
        "id": "ph16",
        "paymentDate": {
          "$date": "2026-03-07T00:00:00Z"
        },
        "amountPaid": 50000,
        "paymentMode": "Online Transfer",
        "referenceNumber": "TXN20260307002",
        "paymentType": "EMI",
        "emiNumber": 1
      }
    ],
    "createdAt": {
      "$date": "2026-03-07T00:00:00Z"
    },
    "scholarshipApplied": true,
    "scholarshipPercentage": 5,
    "emiSelected": true
  }
]
```

## Collection: internshipAdmissions

```json
[
  {
    "id": "ia1",
    "leadId": "li1",
    "studentName": "Rohit Kumar",
    "phone": "9876600001",
    "email": "rohit.k@email.com",
    "internshipCourse": "Web Development Internship",
    "internshipDuration": "3 Months",
    "internshipLocation": "Red Apple Campus",
    "fee": 25000,
    "enrollmentType": "Individual Student",
    "batchName": "INT-WD-2026-A",
    "admissionDate": {
      "$date": "2026-03-15T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-15T00:00:00Z"
    }
  },
  {
    "id": "ia2",
    "leadId": "li2",
    "studentName": "Anita Sharma",
    "phone": "9876600002",
    "email": "anita.s@email.com",
    "internshipCourse": "Digital Marketing Internship",
    "internshipDuration": "1 Month",
    "internshipLocation": "Red Apple Campus",
    "fee": 5000,
    "enrollmentType": "Individual Student",
    "batchName": "INT-DM-2026-A",
    "admissionDate": {
      "$date": "2026-03-18T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-18T00:00:00Z"
    }
  },
  {
    "id": "ia3",
    "leadId": "li3",
    "studentName": "Vivek Patel",
    "phone": "9876600003",
    "email": "vivek.p@email.com",
    "internshipCourse": "Graphic Design Internship",
    "internshipDuration": "2 Months",
    "internshipLocation": "College Campus",
    "fee": 10000,
    "enrollmentType": "College Batch",
    "batchName": "INT-GD-2026-A",
    "admissionDate": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    }
  },
  {
    "id": "ia4",
    "leadId": "li4",
    "studentName": "Neha Gupta",
    "phone": "9876600004",
    "email": "neha.g@email.com",
    "internshipCourse": "UI/UX Internship",
    "internshipDuration": "3 Months",
    "internshipLocation": "Red Apple Campus",
    "fee": 25000,
    "enrollmentType": "Individual Student",
    "batchName": "INT-UX-2026-A",
    "admissionDate": {
      "$date": "2026-03-22T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-22T00:00:00Z"
    }
  },
  {
    "id": "ia5",
    "leadId": "li5",
    "studentName": "Rahul Singh",
    "phone": "9876600005",
    "email": "rahul.s@email.com",
    "internshipCourse": "AI/ML Internship",
    "internshipDuration": "6 Months",
    "internshipLocation": "Red Apple Campus",
    "fee": 75000,
    "enrollmentType": "Individual Student",
    "batchName": "INT-AI-2026-A",
    "admissionDate": {
      "$date": "2026-03-24T00:00:00Z"
    },
    "createdAt": {
      "$date": "2026-03-24T00:00:00Z"
    }
  }
]
```

## Collection: collegeAccounts

```json
[
  {
    "id": "col1",
    "collegeName": "Techno India University",
    "city": "Kolkata",
    "state": "West Bengal",
    "contactPersonName": "Dr. Sanjay Mukherjee",
    "designation": "Dean of Academics",
    "phone": "9876700001",
    "email": "dean@technoindia.edu",
    "totalStudentStrength": 3500,
    "streamsOffered": [
      "Engineering",
      "Management",
      "Science"
    ],
    "pipelineStage": "Agreement Signed",
    "createdAt": {
      "$date": "2026-02-01T00:00:00Z"
    },
    "notes": "Strong tech focus, interested in AI/ML and Web Dev programs"
  },
  {
    "id": "col2",
    "collegeName": "St. Xavier's College",
    "city": "Kolkata",
    "state": "West Bengal",
    "contactPersonName": "Prof. Mary D'Souza",
    "designation": "Head of Placements",
    "phone": "9876700002",
    "email": "placements@stxaviers.edu",
    "totalStudentStrength": 5000,
    "streamsOffered": [
      "Commerce",
      "Arts",
      "Science"
    ],
    "pipelineStage": "Proposal Shared",
    "createdAt": {
      "$date": "2026-02-15T00:00:00Z"
    },
    "notes": "Interested in Digital Marketing and Design courses"
  },
  {
    "id": "col3",
    "collegeName": "Heritage Institute of Technology",
    "city": "Kolkata",
    "state": "West Bengal",
    "contactPersonName": "Mr. Arun Ghosh",
    "designation": "Training & Placement Officer",
    "phone": "9876700003",
    "email": "tpo@heritage.ac.in",
    "totalStudentStrength": 2800,
    "streamsOffered": [
      "Engineering",
      "Design"
    ],
    "pipelineStage": "Meeting Scheduled",
    "createdAt": {
      "$date": "2026-03-01T00:00:00Z"
    },
    "notes": "Looking for game dev and simulation programs"
  }
]
```

## Collection: collegePrograms

```json
[
  {
    "id": "cp1",
    "collegeAccountId": "col1",
    "programType": "Certificate Program",
    "courseOffered": "Web Development",
    "programDuration": "6 Months",
    "trainingMode": "Hybrid (College + Red Apple)",
    "enrollmentMode": "Joint Enrollment (College + Red Apple)",
    "revenueModel": "Revenue Share",
    "collegeSharePercentage": 30,
    "redAppleSharePercentage": 70,
    "totalStudentsEnrolled": 45,
    "totalRevenue": 225000,
    "createdAt": {
      "$date": "2026-02-15T00:00:00Z"
    }
  },
  {
    "id": "cp2",
    "collegeAccountId": "col1",
    "programType": "Advanced Diploma Program",
    "courseOffered": "AI/ML",
    "programDuration": "12 Months",
    "trainingMode": "Hybrid (Online + Offline)",
    "enrollmentMode": "Red Apple Managed Enrollment",
    "revenueModel": "Per Student Fee",
    "perStudentFee": 8000,
    "totalStudentsEnrolled": 30,
    "totalRevenue": 240000,
    "createdAt": {
      "$date": "2026-02-20T00:00:00Z"
    }
  }
]
```

## Collection: collegeStudents

```json
[
  {
    "id": "cs1",
    "collegeProgramId": "cp1",
    "studentName": "Amit Sen",
    "phone": "9876800001",
    "email": "amit.s@tech.edu",
    "courseSelected": "Web Development",
    "batchName": "TIU-WD-2026-A",
    "studentCategory": "Existing College Student",
    "enrollmentSource": "College"
  },
  {
    "id": "cs2",
    "collegeProgramId": "cp1",
    "studentName": "Priya Roy",
    "phone": "9876800002",
    "email": "priya.r@tech.edu",
    "courseSelected": "Web Development",
    "batchName": "TIU-WD-2026-A",
    "studentCategory": "Existing College Student",
    "enrollmentSource": "Red Apple"
  },
  {
    "id": "cs3",
    "collegeProgramId": "cp2",
    "studentName": "Sourav Dey",
    "phone": "9876800003",
    "email": "sourav.d@tech.edu",
    "courseSelected": "AI/ML",
    "batchName": "TIU-AI-2026-A",
    "studentCategory": "Existing College Student"
  }
]
```

## Collection: schoolAccounts

```json
[
  {
    "id": "sch1",
    "schoolName": "DPS Ruby Park",
    "city": "Kolkata",
    "contactPersonName": "Mrs. Ritu Agarwal",
    "designation": "Principal",
    "phone": "9876900001",
    "email": "principal@dpsrubypark.edu",
    "totalStudents": 1200,
    "classCoverage": [
      "Class 8",
      "Class 9",
      "Class 10",
      "Class 11",
      "Class 12"
    ],
    "pipelineStage": "Agreement Signed",
    "createdAt": {
      "$date": "2026-01-15T00:00:00Z"
    },
    "notes": "Interested in AI/ML and Creative Coding for senior students"
  },
  {
    "id": "sch2",
    "schoolName": "La Martiniere for Boys",
    "city": "Kolkata",
    "contactPersonName": "Mr. John Williams",
    "designation": "IT Coordinator",
    "phone": "9876900002",
    "email": "it@lamartiniere.edu",
    "totalStudents": 800,
    "classCoverage": [
      "Class 6",
      "Class 7",
      "Class 8"
    ],
    "pipelineStage": "Program Launch",
    "createdAt": {
      "$date": "2026-01-20T00:00:00Z"
    },
    "notes": "Running Game Dev and 2D Design workshops"
  },
  {
    "id": "sch3",
    "schoolName": "South Point High School",
    "city": "Kolkata",
    "contactPersonName": "Dr. Ashok Kumar",
    "designation": "Vice Principal",
    "phone": "9876900003",
    "email": "vp@southpoint.edu",
    "totalStudents": 2000,
    "classCoverage": [
      "Class 9",
      "Class 10",
      "Class 11",
      "Class 12"
    ],
    "pipelineStage": "Proposal Shared",
    "createdAt": {
      "$date": "2026-02-10T00:00:00Z"
    },
    "notes": "Evaluating Future Tech Foundation program"
  }
]
```

## Collection: schoolPrograms

```json
[
  {
    "id": "sp1",
    "schoolAccountId": "sch1",
    "courseOffered": "Basic AI/ML",
    "classCoverage": [
      "Class 11",
      "Class 12"
    ],
    "trainingSchedule": "After School Hours",
    "feeModel": "School Collects Fees",
    "totalStudentsEnrolled": 60,
    "feePerStudent": 3000,
    "schoolSharePercentage": 25,
    "redAppleSharePercentage": 75,
    "totalRevenue": 180000,
    "createdAt": {
      "$date": "2026-02-01T00:00:00Z"
    }
  },
  {
    "id": "sp2",
    "schoolAccountId": "sch2",
    "courseOffered": "Game Development",
    "classCoverage": [
      "Class 6",
      "Class 7",
      "Class 8"
    ],
    "trainingSchedule": "During School Hours",
    "feeModel": "Direct Payment to Red Apple",
    "totalStudentsEnrolled": 40,
    "feePerStudent": 2500,
    "totalRevenue": 100000,
    "createdAt": {
      "$date": "2026-02-15T00:00:00Z"
    }
  },
  {
    "id": "sp3",
    "schoolAccountId": "sch1",
    "courseOffered": "Creative Coding",
    "classCoverage": [
      "Class 8",
      "Class 9",
      "Class 10"
    ],
    "trainingSchedule": "After School Hours",
    "feeModel": "School Collects Fees",
    "totalStudentsEnrolled": 45,
    "feePerStudent": 2000,
    "schoolSharePercentage": 20,
    "redAppleSharePercentage": 80,
    "totalRevenue": 90000,
    "createdAt": {
      "$date": "2026-02-20T00:00:00Z"
    }
  }
]
```

## Collection: schoolStudents

```json
[
  {
    "id": "ss1",
    "schoolProgramId": "sp2",
    "studentName": "Aryan Das",
    "phone": "9876950001",
    "courseSelected": "Game Development",
    "feePaid": 2500
  },
  {
    "id": "ss2",
    "schoolProgramId": "sp2",
    "studentName": "Sneha Roy",
    "phone": "9876950002",
    "courseSelected": "Game Development",
    "feePaid": 2500
  }
]
```

## Collection: allianceInstitutions

```json
[
  {
    "id": "inst1",
    "institutionId": "INS-0001",
    "name": "Delhi Public School Kolkata",
    "type": "School",
    "boardUniversity": "CBSE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Ruby Park, Kolkata",
    "studentStrength": 2400,
    "decisionMaker": "Mrs. Anita Sharma",
    "phone": "9830012345",
    "email": "principal@dpskolkata.edu.in",
    "assignedTo": "ae1",
    "pipelineStage": "MoU Signed",
    "notes": "Annual workshop signed.",
    "createdAt": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst2",
    "institutionId": "INS-0002",
    "name": "St. Xavier's College",
    "type": "College",
    "boardUniversity": "Autonomous",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "30 Park Street",
    "studentStrength": 4500,
    "decisionMaker": "Fr. Dominic",
    "phone": "9830023456",
    "email": "principal@sxccal.edu",
    "assignedTo": "ae1",
    "pipelineStage": "Negotiation",
    "notes": "Discussing internship pipeline.",
    "createdAt": {
      "$date": "2026-04-04T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst3",
    "institutionId": "INS-0003",
    "name": "Heritage Institute of Technology",
    "type": "College",
    "boardUniversity": "AICTE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Anandapur",
    "studentStrength": 3200,
    "decisionMaker": "Dr. Basab Choudhuri",
    "phone": "9830034567",
    "email": "dean@heritageit.edu",
    "assignedTo": "ae2",
    "pipelineStage": "Proposal Shared",
    "notes": "Proposal for AI/ML training shared.",
    "createdAt": {
      "$date": "2026-04-09T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst4",
    "institutionId": "INS-0004",
    "name": "La Martiniere for Boys",
    "type": "School",
    "boardUniversity": "ICSE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "11 Loudon Street",
    "studentStrength": 1800,
    "decisionMaker": "Mr. Sebastian Cordeiro",
    "phone": "9830045678",
    "email": "principal@lamartiniere.edu",
    "assignedTo": "ae2",
    "pipelineStage": "Meeting Done",
    "notes": "Interested in Future Tech Foundation.",
    "createdAt": {
      "$date": "2026-04-16T00:00:00Z"
    },
    "priorityScore": 80,
    "priority": "High"
  },
  {
    "id": "inst5",
    "institutionId": "INS-0005",
    "name": "Techno India University",
    "type": "University",
    "boardUniversity": "UGC",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "EM 4, Salt Lake",
    "studentStrength": 5500,
    "decisionMaker": "Prof. Goutam Roy Chowdhury",
    "phone": "9830056789",
    "email": "registrar@tiu.edu.in",
    "assignedTo": "ae3",
    "pipelineStage": "Meeting Scheduled",
    "notes": "Meeting on 2026-05-17",
    "createdAt": {
      "$date": "2026-04-24T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst6",
    "institutionId": "INS-0006",
    "name": "Modern High School for Girls",
    "type": "School",
    "boardUniversity": "ICSE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "78 Syed Amir Ali Avenue",
    "studentStrength": 1600,
    "decisionMaker": "Mrs. Damayanti Mukherjee",
    "phone": "9830067890",
    "email": "principal@mhsg.edu.in",
    "assignedTo": "ae1",
    "pipelineStage": "Contacted",
    "notes": "Awaiting callback.",
    "createdAt": {
      "$date": "2026-04-29T00:00:00Z"
    },
    "priorityScore": 80,
    "priority": "High"
  },
  {
    "id": "inst7",
    "institutionId": "INS-0007",
    "name": "Jadavpur University",
    "type": "University",
    "boardUniversity": "UGC",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "188 Raja S.C. Mallick Rd",
    "studentStrength": 12000,
    "decisionMaker": "Prof. Suranjan Das",
    "phone": "9830078901",
    "email": "vc@jadavpuruniversity.in",
    "assignedTo": "ae3",
    "pipelineStage": "Identified",
    "notes": "Initial outreach pending.",
    "createdAt": {
      "$date": "2026-05-04T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst8",
    "institutionId": "INS-0008",
    "name": "Birla High School",
    "type": "School",
    "boardUniversity": "ICSE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "Moira Street",
    "studentStrength": 2200,
    "decisionMaker": "Mr. Loveleen Saigal",
    "phone": "9830089012",
    "email": "principal@birlahighschool.com",
    "assignedTo": "ae2",
    "pipelineStage": "Program Launched",
    "notes": "Creative Coding launched for Class 7-9.",
    "createdAt": {
      "$date": "2026-03-05T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst9",
    "institutionId": "INS-0009",
    "name": "South Point High School",
    "type": "School",
    "boardUniversity": "ICSE",
    "district": "Kolkata",
    "city": "Kolkata",
    "address": "82/7A Mandeville Gardens",
    "studentStrength": 13500,
    "decisionMaker": "Mrs. Krishna Damani",
    "phone": "9830090123",
    "email": "info@southpoint.edu.in",
    "assignedTo": "ae1",
    "pipelineStage": "Proposal Shared",
    "notes": "Large school — high priority.",
    "createdAt": {
      "$date": "2026-04-22T00:00:00Z"
    },
    "priorityScore": 95,
    "priority": "High"
  },
  {
    "id": "inst10",
    "institutionId": "INS-0010",
    "name": "Asansol Engineering College",
    "type": "College",
    "boardUniversity": "AICTE",
    "district": "Paschim Bardhaman",
    "city": "Asansol",
    "address": "Vivekananda Sarani",
    "studentStrength": 1400,
    "decisionMaker": "Dr. Subir Kumar Sarkar",
    "phone": "9831001234",
    "email": "principal@aecwb.edu.in",
    "assignedTo": "ae3",
    "pipelineStage": "Lost",
    "notes": "Budget mismatch.",
    "createdAt": {
      "$date": "2026-03-20T00:00:00Z"
    },
    "priorityScore": 80,
    "priority": "High"
  }
]
```

## Collection: allianceContacts

```json
[
  {
    "id": "cn1",
    "institutionId": "inst1",
    "name": "Anita Sharma",
    "designation": "Principal",
    "phone": "9830012345",
    "email": "principal@dpskolkata.edu.in",
    "notes": "Primary decision maker."
  },
  {
    "id": "cn2",
    "institutionId": "inst1",
    "name": "Ravi Kapoor",
    "designation": "Vice Principal",
    "phone": "9830012346",
    "email": "vp@dpskolkata.edu.in",
    "notes": "Handles co-curricular."
  },
  {
    "id": "cn3",
    "institutionId": "inst2",
    "name": "Fr. Dominic",
    "designation": "Principal",
    "phone": "9830023456",
    "email": "principal@sxccal.edu",
    "notes": ""
  },
  {
    "id": "cn4",
    "institutionId": "inst3",
    "name": "Dr. Basab Choudhuri",
    "designation": "Dean Academics",
    "phone": "9830034567",
    "email": "dean@heritageit.edu",
    "notes": "Tech focus."
  },
  {
    "id": "cn5",
    "institutionId": "inst5",
    "name": "Prof. Goutam Roy Chowdhury",
    "designation": "Chancellor",
    "phone": "9830056789",
    "email": "chancellor@tiu.edu.in",
    "notes": ""
  },
  {
    "id": "cn6",
    "institutionId": "inst9",
    "name": "Krishna Damani",
    "designation": "Director",
    "phone": "9830090123",
    "email": "director@southpoint.edu.in",
    "notes": "Final approver."
  }
]
```

## Collection: allianceVisits

```json
[
  {
    "id": "v1",
    "institutionId": "inst1",
    "executiveId": "ae1",
    "visitDate": {
      "$date": "2026-05-02T00:00:00Z"
    },
    "meetingPerson": "Anita Sharma",
    "summary": "MoU finalised; signing ceremony scheduled.",
    "interestLevel": "Hot",
    "nextFollowup": {
      "$date": "2026-05-16T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-02T00:00:00Z"
    }
  },
  {
    "id": "v2",
    "institutionId": "inst2",
    "executiveId": "ae1",
    "visitDate": {
      "$date": "2026-05-06T00:00:00Z"
    },
    "meetingPerson": "Fr. Dominic",
    "summary": "Discussed internship credit framework.",
    "interestLevel": "Warm",
    "nextFollowup": {
      "$date": "2026-05-19T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-06T00:00:00Z"
    }
  },
  {
    "id": "v3",
    "institutionId": "inst3",
    "executiveId": "ae2",
    "visitDate": {
      "$date": "2026-05-08T00:00:00Z"
    },
    "meetingPerson": "Dr. Basab",
    "summary": "Walked through AI/ML curriculum.",
    "interestLevel": "Hot",
    "nextFollowup": {
      "$date": "2026-05-18T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-08T00:00:00Z"
    }
  },
  {
    "id": "v4",
    "institutionId": "inst4",
    "executiveId": "ae2",
    "visitDate": {
      "$date": "2026-05-10T00:00:00Z"
    },
    "meetingPerson": "Mr. Cordeiro",
    "summary": "Interested but needs board approval.",
    "interestLevel": "Warm",
    "nextFollowup": {
      "$date": "2026-05-24T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-10T00:00:00Z"
    }
  },
  {
    "id": "v5",
    "institutionId": "inst5",
    "executiveId": "ae3",
    "visitDate": {
      "$date": "2026-05-17T00:00:00Z"
    },
    "meetingPerson": "Prof. Roy Chowdhury",
    "summary": "Upcoming meeting.",
    "interestLevel": "Warm",
    "nextFollowup": {
      "$date": "2026-05-24T00:00:00Z"
    },
    "status": "Planned",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-13T00:00:00Z"
    }
  },
  {
    "id": "v6",
    "institutionId": "inst9",
    "executiveId": "ae1",
    "visitDate": {
      "$date": "2026-05-12T00:00:00Z"
    },
    "meetingPerson": "Krishna Damani",
    "summary": "Proposal walkthrough; awaiting feedback.",
    "interestLevel": "Hot",
    "nextFollowup": {
      "$date": "2026-05-17T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-12T00:00:00Z"
    }
  },
  {
    "id": "v7",
    "institutionId": "inst8",
    "executiveId": "ae2",
    "visitDate": {
      "$date": "2026-04-19T00:00:00Z"
    },
    "meetingPerson": "Loveleen Saigal",
    "summary": "Program launched successfully.",
    "interestLevel": "Hot",
    "nextFollowup": {
      "$date": "2026-06-13T00:00:00Z"
    },
    "status": "Completed",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-04-19T00:00:00Z"
    }
  },
  {
    "id": "v8",
    "institutionId": "inst6",
    "executiveId": "ae1",
    "visitDate": {
      "$date": "2026-05-15T00:00:00Z"
    },
    "meetingPerson": "Damayanti Mukherjee",
    "summary": "Intro meeting tomorrow.",
    "interestLevel": "Warm",
    "nextFollowup": {
      "$date": "2026-05-21T00:00:00Z"
    },
    "status": "Planned",
    "photoUrl": "",
    "createdAt": {
      "$date": "2026-05-13T00:00:00Z"
    }
  }
]
```

## Collection: allianceTasks

```json
[
  {
    "id": "tk1",
    "title": "Send MoU draft to DPS",
    "institutionId": "inst1",
    "assignedTo": "ae1",
    "dueDate": {
      "$date": "2026-05-16T00:00:00Z"
    },
    "status": "In Progress",
    "priority": "High",
    "createdAt": {
      "$date": "2026-05-11T00:00:00Z"
    }
  },
  {
    "id": "tk2",
    "title": "Follow up on internship proposal",
    "institutionId": "inst2",
    "assignedTo": "ae1",
    "dueDate": {
      "$date": "2026-05-13T00:00:00Z"
    },
    "status": "Overdue",
    "priority": "Urgent",
    "createdAt": {
      "$date": "2026-05-07T00:00:00Z"
    }
  },
  {
    "id": "tk3",
    "title": "Share AI/ML curriculum deck",
    "institutionId": "inst3",
    "assignedTo": "ae2",
    "dueDate": {
      "$date": "2026-05-15T00:00:00Z"
    },
    "status": "Pending",
    "priority": "High",
    "createdAt": {
      "$date": "2026-05-12T00:00:00Z"
    }
  },
  {
    "id": "tk4",
    "title": "Coordinate board meeting slot",
    "institutionId": "inst4",
    "assignedTo": "ae2",
    "dueDate": {
      "$date": "2026-05-19T00:00:00Z"
    },
    "status": "Pending",
    "priority": "Medium",
    "createdAt": {
      "$date": "2026-05-13T00:00:00Z"
    }
  },
  {
    "id": "tk5",
    "title": "Confirm visit logistics (TIU)",
    "institutionId": "inst5",
    "assignedTo": "ae3",
    "dueDate": {
      "$date": "2026-05-16T00:00:00Z"
    },
    "status": "Pending",
    "priority": "High",
    "createdAt": {
      "$date": "2026-05-13T00:00:00Z"
    }
  },
  {
    "id": "tk6",
    "title": "Quarterly review with Birla",
    "institutionId": "inst8",
    "assignedTo": "ae2",
    "dueDate": {
      "$date": "2026-05-29T00:00:00Z"
    },
    "status": "Pending",
    "priority": "Low",
    "createdAt": {
      "$date": "2026-05-13T00:00:00Z"
    }
  },
  {
    "id": "tk7",
    "title": "Cold call Modern High",
    "institutionId": "inst6",
    "assignedTo": "ae1",
    "dueDate": {
      "$date": "2026-05-12T00:00:00Z"
    },
    "status": "Overdue",
    "priority": "Medium",
    "createdAt": {
      "$date": "2026-05-05T00:00:00Z"
    }
  },
  {
    "id": "tk8",
    "title": "Prepare proposal — South Point",
    "institutionId": "inst9",
    "assignedTo": "ae1",
    "dueDate": {
      "$date": "2026-05-14T00:00:00Z"
    },
    "status": "In Progress",
    "priority": "Urgent",
    "createdAt": {
      "$date": "2026-05-11T00:00:00Z"
    }
  }
]
```

## Collection: allianceProposals

```json
[
  {
    "id": "pr1",
    "institutionId": "inst1",
    "proposalType": "MoU",
    "amount": 250000,
    "status": "Approved",
    "sentDate": {
      "$date": "2026-04-24T00:00:00Z"
    },
    "approvedBy": "am1",
    "notes": "Annual workshop programme."
  },
  {
    "id": "pr2",
    "institutionId": "inst2",
    "proposalType": "Internship Proposal",
    "amount": 180000,
    "status": "Under Review",
    "sentDate": {
      "$date": "2026-05-04T00:00:00Z"
    },
    "notes": "200-student batch."
  },
  {
    "id": "pr3",
    "institutionId": "inst3",
    "proposalType": "Training Proposal",
    "amount": 320000,
    "status": "Sent",
    "sentDate": {
      "$date": "2026-05-07T00:00:00Z"
    },
    "notes": "AI/ML 6-month programme."
  },
  {
    "id": "pr4",
    "institutionId": "inst9",
    "proposalType": "Workshop Proposal",
    "amount": 95000,
    "status": "Sent",
    "sentDate": {
      "$date": "2026-05-11T00:00:00Z"
    },
    "notes": "Creative Coding workshop."
  },
  {
    "id": "pr5",
    "institutionId": "inst8",
    "proposalType": "MoU",
    "amount": 200000,
    "status": "Approved",
    "sentDate": {
      "$date": "2026-03-10T00:00:00Z"
    },
    "approvedBy": "am1",
    "notes": "Launched successfully."
  },
  {
    "id": "pr6",
    "institutionId": "inst10",
    "proposalType": "Training Proposal",
    "amount": 150000,
    "status": "Rejected",
    "sentDate": {
      "$date": "2026-03-25T00:00:00Z"
    },
    "notes": "Budget mismatch."
  }
]
```

## Collection: allianceEvents

```json
[
  {
    "id": "ev1",
    "institutionId": "inst1",
    "eventName": "Tech Career Day 2026",
    "eventType": "Career Fair",
    "eventDate": {
      "$date": "2026-04-29T00:00:00Z"
    },
    "attendees": 320,
    "leadsGenerated": 48,
    "notes": "Strong engagement."
  },
  {
    "id": "ev2",
    "institutionId": "inst3",
    "eventName": "AI Workshop",
    "eventType": "Workshop",
    "eventDate": {
      "$date": "2026-05-06T00:00:00Z"
    },
    "attendees": 120,
    "leadsGenerated": 22,
    "notes": ""
  },
  {
    "id": "ev3",
    "institutionId": "inst8",
    "eventName": "Creative Coding Demo",
    "eventType": "Demo Session",
    "eventDate": {
      "$date": "2026-04-14T00:00:00Z"
    },
    "attendees": 90,
    "leadsGenerated": 18,
    "notes": ""
  },
  {
    "id": "ev4",
    "institutionId": "inst5",
    "eventName": "Open Day TIU",
    "eventType": "Open Day",
    "eventDate": {
      "$date": "2026-05-21T00:00:00Z"
    },
    "attendees": 0,
    "leadsGenerated": 0,
    "notes": "Upcoming."
  }
]
```

## Collection: allianceExpenses

```json
[
  {
    "id": "ex_bfe722pd1s",
    "executiveId": "ae1",
    "institutionId": "inst1",
    "expenseType": "Travel",
    "amount": 1200,
    "billUrl": "https://example.com/bill1.jpg",
    "expenseDate": {
      "$date": "2026-05-09T09:09:59.220Z"
    },
    "status": "Approved",
    "notes": "Site visit to DPS"
  },
  {
    "id": "ex_3ba9e5pd1s",
    "executiveId": "ae2",
    "institutionId": "inst3",
    "expenseType": "Meals",
    "amount": 850,
    "billUrl": "https://example.com/bill2.jpg",
    "expenseDate": {
      "$date": "2026-05-12T09:09:59.220Z"
    },
    "status": "Submitted",
    "notes": "Lunch with Dean at Heritage"
  }
]
```

## Collection: studentCollections

```json
[
  {
    "id": "col_6c3ea1pd1r",
    "receiptRef": "RC-2026-1001",
    "studentId": "l1",
    "studentName": "Aarav Kumar",
    "courseName": "Full Stack Development",
    "amount": 35000,
    "mode": "upi",
    "reason": "admission_fee",
    "collectedAt": {
      "$date": "2026-05-12T09:09:59.220Z"
    },
    "collectedById": "u5",
    "collectedByName": "Manjari Chakraborty",
    "collectorRole": "counselor",
    "status": "Invoice Generated",
    "invoiceRequest": {
      "type": "TI",
      "status": "issued",
      "requestedById": "u5",
      "requestedByName": "Manjari Chakraborty",
      "requestedAt": {
        "$date": "2026-05-12T09:09:59.220Z"
      },
      "preparedById": "ae1",
      "preparedByName": "Sneha Roy",
      "preparedAt": {
        "$date": "2026-05-13T09:09:59.220Z"
      },
      "issuedById": "acm1",
      "issuedByName": "Neha Gupta",
      "issuedAt": {
        "$date": "2026-05-13T09:09:59.220Z"
      },
      "invoiceNo": "TI-2026-001"
    },
    "audit": [
      {
        "id": "aud_f61150pd1s",
        "at": {
          "$date": "2026-05-13T09:09:59.220Z"
        },
        "byId": "acm1",
        "byName": "Neha Gupta",
        "byRole": "accounts_manager",
        "action": "Invoice issued (TI TI-2026-001)"
      }
    ],
    "createdAt": {
      "$date": "2026-05-12T09:09:59.220Z"
    }
  },
  {
    "id": "col_1aef80pd1s",
    "receiptRef": "RC-2026-1002",
    "studentId": "l2",
    "studentName": "Diya Singh",
    "courseName": "AI / ML",
    "amount": 50000,
    "mode": "bank_transfer",
    "reason": "emi_payment",
    "collectedAt": {
      "$date": "2026-05-11T09:09:59.220Z"
    },
    "collectedById": "u5",
    "collectedByName": "Manjari Chakraborty",
    "collectorRole": "counselor",
    "status": "Ready For Invoice",
    "invoiceRequest": {
      "type": "TI",
      "status": "awaiting_accounts",
      "requestedById": "u5",
      "requestedByName": "Manjari Chakraborty",
      "requestedAt": {
        "$date": "2026-05-11T09:09:59.220Z"
      },
      "adminReviewedById": "u1",
      "adminReviewedByName": "Amit Sharma",
      "adminReviewedAt": {
        "$date": "2026-05-12T09:09:59.220Z"
      }
    },
    "audit": [
      {
        "id": "aud_840702pd1s",
        "at": {
          "$date": "2026-05-12T09:09:59.220Z"
        },
        "byId": "u1",
        "byName": "Amit Sharma",
        "byRole": "admin",
        "action": "Admin approved invoice request"
      }
    ],
    "createdAt": {
      "$date": "2026-05-11T09:09:59.220Z"
    }
  },
  {
    "id": "col_fd2c9dpd1s",
    "receiptRef": "RC-2026-1003",
    "studentId": "l4",
    "studentName": "Ananya Joshi",
    "courseName": "UI/UX Design",
    "amount": 90000,
    "mode": "card",
    "reason": "admission_fee",
    "collectedAt": {
      "$date": "2026-05-13T09:09:59.220Z"
    },
    "collectedById": "u5",
    "collectedByName": "Manjari Chakraborty",
    "collectorRole": "counselor",
    "status": "Awaiting Verification",
    "invoiceRequest": {
      "type": "PI",
      "status": "awaiting_admin_review",
      "requestedById": "u5",
      "requestedByName": "Manjari Chakraborty",
      "requestedAt": {
        "$date": "2026-05-13T09:09:59.220Z"
      }
    },
    "audit": [
      {
        "id": "aud_00caa9pd1s",
        "at": {
          "$date": "2026-05-13T09:09:59.220Z"
        },
        "byId": "u5",
        "byName": "Manjari Chakraborty",
        "byRole": "counselor",
        "action": "Invoice request created (PI)"
      }
    ],
    "createdAt": {
      "$date": "2026-05-13T09:09:59.220Z"
    }
  },
  {
    "id": "col_6b52d2pd1s",
    "receiptRef": "RC-2026-1004",
    "studentId": "l6",
    "studentName": "Ishita Chopra",
    "courseName": "Digital Marketing",
    "amount": 15000,
    "mode": "cash",
    "reason": "registration_fee",
    "collectedAt": {
      "$date": "2026-05-10T09:09:59.220Z"
    },
    "collectedById": "u5",
    "collectedByName": "Manjari Chakraborty",
    "collectorRole": "counselor",
    "status": "Verified",
    "invoiceRequest": {
      "type": "TI",
      "status": "draft_prepared",
      "requestedById": "u5",
      "requestedByName": "Manjari Chakraborty",
      "requestedAt": {
        "$date": "2026-05-10T09:09:59.220Z"
      },
      "preparedById": "ae1",
      "preparedByName": "Sneha Roy",
      "preparedAt": {
        "$date": "2026-05-12T09:09:59.220Z"
      }
    },
    "audit": [
      {
        "id": "aud_c76297pd1s",
        "at": {
          "$date": "2026-05-12T09:09:59.220Z"
        },
        "byId": "ae1",
        "byName": "Sneha Roy",
        "byRole": "accounts_executive",
        "action": "Accounts prepared draft"
      }
    ],
    "createdAt": {
      "$date": "2026-05-10T09:09:59.220Z"
    }
  }
]
```
