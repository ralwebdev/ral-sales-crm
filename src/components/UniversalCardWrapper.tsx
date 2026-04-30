/**
 * UniversalCardWrapper
 * --------------------------------------------------------
 * Single wrapper that provides:
 *   - Hover microcopy for ALL roles (via MicrocopyEngine)
 *   - Click drill-down ONLY for admin and owner (via DrillDownEngine)
 *
 * Roles outside the allow-list still see the tooltip but the
 * card is non-clickable.
 */

import { memo, type ReactNode } from "react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getMicrocopy, type MicrocopyKey, MICROCOPY_UI } from "@/core/microcopyEngine";
import { canDrill, useDrillDown, type DrillType } from "@/core/drilldownEngine";

interface Props {
  /** Microcopy key (also used as the default card id). */
  microcopyKey?: MicrocopyKey | string;
  /** Optional explicit fallback when no microcopy entry exists. */
  hint?: string;
  /** Drill-down dataset (e.g. "collections"). Omitting disables drill. */
  drillType?: DrillType;
  /** Drawer title shown when drilling. Defaults to children/label. */
  drillTitle?: string;
  /** Optional dataKey (passed through to drill engine for future filtering). */
  dataKey?: string;
  className?: string;
  children: ReactNode;
}

function UniversalCardWrapperBase({
  microcopyKey,
  hint,
  drillType,
  drillTitle,
  dataKey,
  className,
  children,
}: Props) {
  const { currentUser } = useAuth();
  const drill = useDrillDown();
  const role = currentUser?.role;

  // Auto-infer drill dataset from microcopy key when not explicitly provided.
  const inferredDrill = drillType || inferDrillType(microcopyKey);
  const drillAllowed = !!inferredDrill && canDrill(role);

  const text = microcopyKey
    ? getMicrocopy(microcopyKey, role, hint || "")
    : hint || "";

  const handleClick = () => {
    if (!drillAllowed || !inferredDrill) return;
    drill.open({
      type: inferredDrill,
      title: drillTitle || (typeof microcopyKey === "string" ? microcopyKey : "Drill-down"),
      dataKey,
    });
  };

  const content = (
    <div
      role={drillAllowed ? "button" : undefined}
      tabIndex={drillAllowed ? 0 : -1}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (drillAllowed && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
      className={cn(
        "outline-none",
        drillAllowed && "cursor-pointer transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );

  if (!text) return content;

  return (
    <TooltipProvider delayDuration={MICROCOPY_UI.delayMs}>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent
          side="top"
          style={{ maxWidth: MICROCOPY_UI.maxWidth }}
          className="text-xs leading-snug"
        >
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export const UniversalCardWrapper = memo(UniversalCardWrapperBase);
