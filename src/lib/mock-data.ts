import { Campaign, Lead, CallLog, FollowUp, Admission, User, UTMTracking, LeadActivity, Course } from "./types";
import {
  CollegeAccount, CollegeProgram, CollegeStudent,
  SchoolAccount, SchoolProgram, SchoolStudent,
  InternshipAdmission,
} from "./vertical-types";
import {
  mockInternshipAdmissions, mockCollegeAccounts, mockCollegePrograms, mockCollegeStudents,
  mockSchoolAccounts, mockSchoolPrograms, mockSchoolStudents, internshipLeadEntries,
} from "./vertical-data";

const defaultUtm: UTMTracking = { utmSource: "", utmMedium: "", utmCampaign: "", utmContent: "", utmTerm: "" };

/* ═══════ COURSE CATALOG ═══════ */
export const mockCourses: Course[] = [];

export const COURSE_FEE_TIERS = [15000, 45000, 90000, 118000, 160000, 190000, 260000, 410000];

export function getFeeBand(fee: number): string {
  if (fee <= 45000) return "Low Ticket";
  if (fee <= 118000) return "Mid Ticket";
  return "High Ticket";
}

/* ═══════ BUSINESS BENCHMARKS ═══════ */
export const BENCHMARKS = {
  monthlyMarketingSpend: 40000,
  monthlyBilling: 600000,
  cpaMin: 5500,
  cpaMax: 6500,
  marketingSpendRatioMax: 10,
  minROAS: 10,
};

/* ═══════ USERS ═══════ */
export const mockUsers: User[] = [
  { id: "u1", name: "Amit Sharma", email: "amit@redapple.com", password: "admin123", role: "admin" },
  { id: "u2", name: "Soumya Saha", email: "soumya@redapple.com", password: "marketing123", role: "marketing_manager" },
  { id: "u3", name: "Shreya Chakraborty", email: "shreya@redapple.com", password: "telecaller123", role: "telecaller" },
  { id: "u4", name: "Priya Das", email: "priya@redapple.com", password: "telecaller123", role: "telecaller" },
  { id: "u5", name: "Manjari Chakraborty", email: "manjari@redapple.com", password: "counselor123", role: "counselor" },
  { id: "u6", name: "Vikram Singh", email: "vikram@redapple.com", password: "manager123", role: "telecalling_manager" },
  { id: "u7", name: "Rajesh Kapoor", email: "rajesh@redapple.com", password: "owner123", role: "owner" },
];

/* ═══════ CAMPAIGNS ═══════ */
export const mockCampaigns: Campaign[] = [];

/* ═══════ LEADS ═══════ */
export const mockLeads: Lead[] = [];

/* ═══════ CALL LOGS ═══════ */
export const mockCallLogs: CallLog[] = [];

/* ═══════ FOLLOW-UPS ═══════ */
export const mockFollowUps: FollowUp[] = [];

/* ═══════ ADMISSIONS (16 students across Red Apple courses) ═══════ */
// Sources: LinkedIn(2), Meta(4), Walk-in(2), Instagram(2), Education Fair(1), Alumni Referral(1), Google(1), Referral(1), YouTube(1), Partner Institute(1)
export const mockAdmissions: Admission[] = [];

/* ═══════ MERGE INTERNSHIP LEADS INTO MAIN LEADS ═══════ */
// Add internship leads to the main leads array (cast is safe since Lead interface now supports programChannel)
const allMockLeads: Lead[] = [...mockLeads, ...internshipLeadEntries as unknown as Lead[]];

/* ═══════ DATABASE HELPERS ═══════ */
import { db } from "./db";

const STORAGE_KEYS = {
  campaigns: "crm_campaigns",
  leads: "crm_leads",
  callLogs: "crm_call_logs",
  followUps: "crm_follow_ups",
  admissions: "crm_admissions",
  courses: "crm_courses",
  internshipAdmissions: "crm_internship_admissions",
  collegeAccounts: "crm_college_accounts",
  collegePrograms: "crm_college_programs",
  collegeStudents: "crm_college_students",
  schoolAccounts: "crm_school_accounts",
  schoolPrograms: "crm_school_programs",
  schoolStudents: "crm_school_students",
} as const;

export const store = {
  getCampaigns: () => db.getSync(STORAGE_KEYS.campaigns, mockCampaigns) || [],
  saveCampaigns: (d: Campaign[]) => db.saveSync(STORAGE_KEYS.campaigns, d),

  getLeads: () => db.getSync(STORAGE_KEYS.leads, allMockLeads) || [],
  saveLeads: (d: Lead[]) => db.saveSync(STORAGE_KEYS.leads, d),

  getCallLogs: () => db.getSync(STORAGE_KEYS.callLogs, mockCallLogs) || [],
  saveCallLogs: (d: CallLog[]) => db.saveSync(STORAGE_KEYS.callLogs, d),

  getFollowUps: () => db.getSync(STORAGE_KEYS.followUps, mockFollowUps) || [],
  saveFollowUps: (d: FollowUp[]) => db.saveSync(STORAGE_KEYS.followUps, d),

  getAdmissions: () => db.getSync(STORAGE_KEYS.admissions, mockAdmissions) || [],
  saveAdmissions: (d: Admission[]) => db.saveSync(STORAGE_KEYS.admissions, d),

  getCourses: () => db.getSync(STORAGE_KEYS.courses, mockCourses) || [],
  saveCourses: (d: Course[]) => db.saveSync(STORAGE_KEYS.courses, d),

  // ── Multi-Vertical Stores ──
  getInternshipAdmissions: () => db.getSync(STORAGE_KEYS.internshipAdmissions, mockInternshipAdmissions) || [],
  saveInternshipAdmissions: (d: InternshipAdmission[]) => db.saveSync(STORAGE_KEYS.internshipAdmissions, d),

  getCollegeAccounts: () => db.getSync(STORAGE_KEYS.collegeAccounts, mockCollegeAccounts) || [],
  saveCollegeAccounts: (d: CollegeAccount[]) => db.saveSync(STORAGE_KEYS.collegeAccounts, d),

  getCollegePrograms: () => db.getSync(STORAGE_KEYS.collegePrograms, mockCollegePrograms) || [],
  saveCollegePrograms: (d: CollegeProgram[]) => db.saveSync(STORAGE_KEYS.collegePrograms, d),

  getCollegeStudents: () => db.getSync(STORAGE_KEYS.collegeStudents, mockCollegeStudents) || [],
  saveCollegeStudents: (d: CollegeStudent[]) => db.saveSync(STORAGE_KEYS.collegeStudents, d),

  getSchoolAccounts: () => db.getSync(STORAGE_KEYS.schoolAccounts, mockSchoolAccounts) || [],
  saveSchoolAccounts: (d: SchoolAccount[]) => db.saveSync(STORAGE_KEYS.schoolAccounts, d),

  getSchoolPrograms: () => db.getSync(STORAGE_KEYS.schoolPrograms, mockSchoolPrograms) || [],
  saveSchoolPrograms: (d: SchoolProgram[]) => db.saveSync(STORAGE_KEYS.schoolPrograms, d),

  getSchoolStudents: () => db.getSync(STORAGE_KEYS.schoolStudents, mockSchoolStudents) || [],
  saveSchoolStudents: (d: SchoolStudent[]) => db.saveSync(STORAGE_KEYS.schoolStudents, d),

  getUsers: () => mockUsers,

  resetAll: () => {
    db.clear();
  },
};
