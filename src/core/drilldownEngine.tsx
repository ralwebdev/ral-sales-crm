/**
 * DrillDownEngine
 * --------------------------------------------------------
 * Single, role-gated drill-down pipeline. Only `admin` and
 * `owner` may open drill drawers. Other roles silently no-op
 * (the wrapper still shows the microcopy tooltip).
 *
 * Pure TypeScript; uses our internal Sheet primitive only.
 */

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import type { UserRole } from "@/lib/types";
import { store } from "@/lib/mock-data";
import { getCollections } from "@/lib/collection-store";

export type DrillType =
  | "collections"
  | "verifications"
  | "invoices"
  | "revenue"
  | "dues"
  | "risk_cases";

export const DRILL_ENABLED_ROLES: UserRole[] = ["admin", "owner"];

export function canDrill(role?: UserRole | null): boolean {
  return !!role && DRILL_ENABLED_ROLES.includes(role);
}

interface DrillRequest {
  type: DrillType;
  title: string;
  dataKey?: string;
}

interface DrillContextValue {
  open: (req: DrillRequest) => void;
  close: () => void;
  isOpen: boolean;
}

const DrillContext = createContext<DrillContextValue | null>(null);

export function useDrillDown(): DrillContextValue {
  const ctx = useContext(DrillContext);
  if (!ctx) {
    // Fallback: noop context if provider missing. Keeps wrapper safe.
    return { open: () => {}, close: () => {}, isOpen: false };
  }
  return ctx;
}

export function DrillDownProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<DrillRequest | null>(null);

  const open = useCallback((req: DrillRequest) => setRequest(req), []);
  const close = useCallback(() => setRequest(null), []);

  const value = useMemo<DrillContextValue>(() => ({ open, close, isOpen: !!request }), [open, close, request]);

  return (
    <DrillContext.Provider value={value}>
      {children}
      <Sheet open={!!request} onOpenChange={(o) => !o && close()}>
        <SheetContent side="right" className="w-full sm:max-w-[40%] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{request?.title || "Drill-down"}</SheetTitle>
            <SheetDescription>
              {request ? describeDrill(request.type) : ""}
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            {request && <DrillBody type={request.type} />}
          </div>
        </SheetContent>
      </Sheet>
    </DrillContext.Provider>
  );
}

function describeDrill(t: DrillType): string {
  switch (t) {
    case "collections": return "Filtered by role, date and source.";
    case "verifications": return "Pending vs completed admin verification.";
    case "invoices": return "PI vs TI breakdown.";
    case "revenue": return "TI-aggregated realized revenue.";
    case "dues": return "Pending student payments.";
    case "risk_cases": return "Mismatch, unverified or delayed transactions.";
  }
}

/* ───────────── data-shape helpers ───────────── */
const fmtINR = (n: number) => "₹" + n.toLocaleString("en-IN");

function DrillBody({ type }: { type: DrillType }) {
  const collections = getCollections();
  const admissions = store.getAdmissions();

  switch (type) {
    case "collections": {
      const rows = collections.slice(0, 50);
      return <Rows headers={["Student", "Mode", "Amount", "Status"]}
        data={rows.map(c => [c.studentName || c.studentId, c.mode, fmtINR(c.amount || 0), c.status])} />;
    }
    case "verifications": {
      const pending = collections.filter(c => c.status === "Awaiting Verification");
      const verified = collections.filter(c => c.status === "Verified" || c.status === "Ready For Invoice" || c.status === "Invoice Generated");
      return (
        <div className="space-y-4">
          <SummaryGrid items={[
            { label: "Pending", value: pending.length },
            { label: "Verified", value: verified.length },
          ]} />
          <Rows headers={["Student", "Amount", "Status"]}
            data={[...pending, ...verified].slice(0, 50).map(c => [c.studentName || c.studentId, fmtINR(c.amount || 0), c.status])} />
        </div>
      );
    }
    case "invoices": {
      const pi = collections.filter(c => c.invoiceRequest?.type === "PI");
      const ti = collections.filter(c => c.status === "Invoice Generated");
      return (
        <div className="space-y-4">
          <SummaryGrid items={[
            { label: "PI Requests", value: pi.length },
            { label: "TI Issued", value: ti.length },
          ]} />
          <Rows headers={["Student", "Type", "Status"]}
            data={[...pi, ...ti].slice(0, 50).map(c => [c.studentName || c.studentId, c.invoiceRequest?.type || "TI", c.status])} />
        </div>
      );
    }
    case "revenue": {
      const realized = collections.filter(c => c.status === "Invoice Generated").reduce((s, c) => s + (c.amount || 0), 0);
      const fromAdmissions = admissions.reduce((s, a) => s + (a.totalFee || 0), 0);
      return (
        <SummaryGrid items={[
          { label: "Realized (TI)", value: fmtINR(realized) },
          { label: "Admissions Total", value: fmtINR(fromAdmissions) },
        ]} />
      );
    }
    case "dues": {
      const due = admissions.flatMap(a => {
        const paid = (a.paymentHistory || []).reduce((s, p) => s + (p.amountPaid || 0), 0);
        const pending = (a.totalFee || 0) - paid;
        return pending > 0 ? [{ name: a.studentName, course: a.courseSelected, pending }] : [];
      }).slice(0, 50);
      return <Rows headers={["Student", "Course", "Pending"]}
        data={due.map(d => [d.name, d.course, fmtINR(d.pending)])} />;
    }
    case "risk_cases": {
      const mismatches = collections.filter(c => c.status === "Mismatch" || c.status === "Rejected");
      return <Rows headers={["Student", "Amount", "Issue"]}
        data={mismatches.slice(0, 50).map(c => [c.studentName || c.studentId, fmtINR(c.amount || 0), c.status])} />;
    }
  }
}

function SummaryGrid({ items }: { items: { label: string; value: string | number }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((it) => (
        <div key={it.label} className="rounded-lg border p-3">
          <p className="text-xs text-muted-foreground">{it.label}</p>
          <p className="mt-1 text-xl font-bold text-card-foreground">{it.value}</p>
        </div>
      ))}
    </div>
  );
}

function Rows({ headers, data }: { headers: string[]; data: (string | number)[][] }) {
  if (data.length === 0) {
    return <p className="text-sm text-muted-foreground">No records to display.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            {headers.map((h) => <th key={h} className="pb-2 font-medium">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2 text-card-foreground">
                  {j === row.length - 1 && typeof cell === "string" ? <Badge variant="outline" className="text-[10px]">{cell}</Badge> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
