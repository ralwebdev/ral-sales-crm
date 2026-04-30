/**
 * MicrocopyEngine
 * --------------------------------------------------------
 * Single source of truth for hover hints across the CRM.
 * Pure TypeScript, zero third-party dependencies.
 *
 * Lookup precedence:
 *   1. role-specific override under entry.roles[role]
 *   2. entry.default
 *   3. fallback string passed to getMicrocopy()
 */

import type { UserRole } from "@/lib/types";

export interface MicrocopyEntry {
  default: string;
  roles?: Partial<Record<UserRole, string>>;
}

export type MicrocopyKey =
  | "verify_button"
  | "collection_entry"
  | "pi_request"
  | "ti_issue"
  | "dashboard_card"
  // dashboard card ids (admin)
  | "pending_verifications"
  | "verified_today"
  | "hold_cases"
  | "sent_to_accounts"
  // dashboard card ids (owner)
  | "total_collections"
  | "pending_verification"
  | "revenue_realized"
  | "risk_alerts";

export const MICROCOPY: Record<MicrocopyKey, MicrocopyEntry> = {
  verify_button: {
    default: "Validate this transaction before forwarding to Accounts",
    roles: { admin: "Approve, reject or hold after verification" },
  },
  collection_entry: {
    default: "Log a payment collected from student",
    roles: { counselor: "Log a payment collected from student" },
  },
  pi_request: {
    default: "Request Proforma Invoice for this student",
  },
  ti_issue: {
    default: "Generate Tax Invoice after payment confirmation",
    roles: { accounts_manager: "Create GST-compliant invoice after bank match", accounts_executive: "Create GST-compliant invoice after bank match" },
  },
  dashboard_card: {
    default: "Click to view more details",
    roles: {
      admin: "Click to drill into operational data",
      owner: "Click to analyze deeper business insights",
    },
  },
  // Admin cards
  pending_verifications: {
    default: "Counselor entries awaiting your verification",
    roles: { admin: "Review counselor-logged collections and approve, hold or reject" },
  },
  verified_today: {
    default: "Collections you verified today",
    roles: { admin: "Drill into today's verified collections by source" },
  },
  hold_cases: {
    default: "Items currently on hold or rejected",
    roles: { admin: "Inspect risky or held transactions" },
  },
  sent_to_accounts: {
    default: "Verified items forwarded to Accounts",
    roles: { admin: "Track downstream PI/TI status from Accounts" },
  },
  // Owner cards
  total_collections: {
    default: "Total amount collected across counselors",
    roles: { owner: "Drill into collections by date, source and counselor" },
  },
  pending_verification: {
    default: "Entries waiting for admin verification",
    roles: { owner: "Inspect bottlenecks in the verification queue" },
  },
  revenue_realized: {
    default: "Revenue from issued tax invoices",
    roles: { owner: "Drill into TI-backed realized revenue" },
  },
  risk_alerts: {
    default: "Mismatched, unverified or delayed items",
    roles: { owner: "Investigate risk cases and SLA breaches" },
  },
};

export function getMicrocopy(
  key: MicrocopyKey | string,
  role?: UserRole | null,
  fallback = ""
): string {
  const entry = (MICROCOPY as Record<string, MicrocopyEntry | undefined>)[key];
  if (!entry) return fallback;
  if (role && entry.roles && entry.roles[role]) return entry.roles[role] as string;
  return entry.default || fallback;
}

/** UI behaviour constants (kept here so the wrapper has a single config point). */
export const MICROCOPY_UI = {
  delayMs: 120,
  fadeInMs: 150,
  maxWidth: 220,
} as const;
