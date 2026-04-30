/**
 * MicrocopyProvider
 * --------------------------------------------------------
 * The microcopy system is stateless and pure (see
 * `microcopyEngine.ts`). This provider exists to satisfy the
 * global enforcement contract:
 *   - mounted at root
 *   - guarantees a single TooltipProvider instance for all
 *     UniversalCardWrappers below it (no duplicate tooltips)
 *
 * Pure passthrough — zero runtime cost, zero third-party deps
 * beyond the existing Radix tooltip.
 */

import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MICROCOPY_UI } from "./microcopyEngine";

export function MicrocopyProvider({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={MICROCOPY_UI.delayMs} disableHoverableContent>
      {children}
    </TooltipProvider>
  );
}

/**
 * Hook form for spec compatibility. Resolves microcopy with
 * an automatic role-aware fallback chain.
 */
export { getMicrocopy as useMicrocopy } from "./microcopyEngine";
