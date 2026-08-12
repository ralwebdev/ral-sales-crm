/**
 * Industry Alliances Module — Mock Data + Store (localStorage)
 */
import type {
  AllianceUser, Institution, AllianceContact, AllianceVisit, AllianceTask,
  AllianceProposal, AllianceEvent, AllianceExpense,
} from "./alliance-types";
import { computePriority } from "./alliance-types";

const today = new Date();
const iso = (offsetDays = 0) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
};

// ── DEMO USERS (separate from main CRM users) ──
export const allianceUsers: AllianceUser[] = [
  { id: "am1", name: "Rohit Banerjee", email: "rohit@redapple.com", password: "alliance123", role: "alliance_manager", status: "active", createdAt: iso(-90) },
  { id: "ae1", name: "Sneha Roy", email: "sneha@redapple.com", password: "alliance123", role: "alliance_executive", status: "active", createdAt: iso(-60) },
  { id: "ae2", name: "Karan Mehta", email: "karan@redapple.com", password: "alliance123", role: "alliance_executive", status: "active", createdAt: iso(-45) },
  { id: "ae3", name: "Pooja Nair", email: "pooja@redapple.com", password: "alliance123", role: "alliance_executive", status: "active", createdAt: iso(-30) },
];

// ── INSTITUTIONS ──
const rawInstitutions: Omit<Institution, "priorityScore" | "priority">[] = [];

export const allianceInstitutions: Institution[] = rawInstitutions.map((r) => {
  const { score, bucket } = computePriority(r.studentStrength);
  return { ...r, priorityScore: score, priority: bucket };
});

// ── CONTACTS ──
export const allianceContacts: AllianceContact[] = [];

// ── VISITS ──
export const allianceVisits: AllianceVisit[] = [];

// ── TASKS ──
export const allianceTasks: AllianceTask[] = [];

// ── PROPOSALS ──
export const allianceProposals: AllianceProposal[] = [];

// ── EVENTS ──
export const allianceEvents: AllianceEvent[] = [];

// ── EXPENSES ──
export const allianceExpenses: AllianceExpense[] = [];

// ── STORAGE ──
import { db } from "./db";

const KEYS = {
  institutions: "alliance_institutions",
  contacts: "alliance_contacts",
  visits: "alliance_visits",
  tasks: "alliance_tasks",
  proposals: "alliance_proposals",
  events: "alliance_events",
  expenses: "alliance_expenses",
} as const;

export const allianceStore = {
  // Institutions
  getInstitutions: () => db.getSync(KEYS.institutions, allianceInstitutions) || [],
  saveInstitutions: (d: Institution[]) => db.saveSync(KEYS.institutions, d),
  // Contacts
  getContacts: () => db.getSync(KEYS.contacts, allianceContacts) || [],
  saveContacts: (d: AllianceContact[]) => db.saveSync(KEYS.contacts, d),
  // Visits
  getVisits: () => db.getSync(KEYS.visits, allianceVisits) || [],
  saveVisits: (d: AllianceVisit[]) => db.saveSync(KEYS.visits, d),
  // Tasks (recompute Overdue on read)
  getTasks: (): AllianceTask[] => {
    const data = db.getSync(KEYS.tasks, allianceTasks) || [];
    const todayStr = new Date().toISOString().split("T")[0];
    return data.map((t) => (t.status !== "Done" && t.dueDate < todayStr ? { ...t, status: "Overdue" as const } : t));
  },
  saveTasks: (d: AllianceTask[]) => db.saveSync(KEYS.tasks, d),
  // Proposals
  getProposals: () => db.getSync(KEYS.proposals, allianceProposals) || [],
  saveProposals: (d: AllianceProposal[]) => db.saveSync(KEYS.proposals, d),
  // Events
  getEvents: () => db.getSync(KEYS.events, allianceEvents) || [],
  saveEvents: (d: AllianceEvent[]) => db.saveSync(KEYS.events, d),
  // Expenses
  getExpenses: () => db.getSync(KEYS.expenses, allianceExpenses) || [],
  saveExpenses: (d: AllianceExpense[]) => db.saveSync(KEYS.expenses, d),
  // Users
  getUsers: () => allianceUsers,
  // Reset
  resetAll: () => {
    db.clear();
  },
};

// CSV export utility
export function downloadCSV(filename: string, rows: Record<string, unknown>[]) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const escape = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
