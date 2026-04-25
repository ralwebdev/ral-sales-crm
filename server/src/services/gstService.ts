export const HOME_STATE_CODE = "19"; // West Bengal

const round2 = (n: number) => Math.round(n * 100) / 100;

export interface GstBreakup {
  taxable: number;
  gstAmount: number;
  gross: number;
  cgst: number;
  sgst: number;
  igst: number;
  rate: number;
  intraState: boolean;
}

export function fromGross(gross: number, rate: number, intraState: boolean): GstBreakup {
  const safeGross = Number.isFinite(gross) && gross > 0 ? gross : 0;
  const safeRate = Number.isFinite(rate) && rate >= 0 ? rate : 0;
  const taxable = safeRate === 0 ? safeGross : safeGross / (1 + safeRate / 100);
  const gstAmount = safeGross - taxable;
  return splitTax(round2(taxable), round2(gstAmount), safeRate, intraState, round2(safeGross));
}

export function fromNet(net: number, rate: number, intraState: boolean): GstBreakup {
  const safeNet = Number.isFinite(net) && net > 0 ? net : 0;
  const safeRate = Number.isFinite(rate) && rate >= 0 ? rate : 0;
  const gstAmount = safeNet * safeRate / 100;
  const gross = safeNet + gstAmount;
  return splitTax(round2(safeNet), round2(gstAmount), safeRate, intraState, round2(gross));
}

function splitTax(taxable: number, gstAmount: number, rate: number, intraState: boolean, gross: number): GstBreakup {
  if (intraState) {
    const half = round2(gstAmount / 2);
    return { taxable, gstAmount, gross, cgst: half, sgst: round2(gstAmount - half), igst: 0, rate, intraState };
  }
  return { taxable, gstAmount, gross, cgst: 0, sgst: 0, igst: gstAmount, rate, intraState };
}

export function detectIntraState(gstin?: string): boolean {
  if (!gstin || gstin.trim().length < 2) return true;
  const code = gstin.trim().slice(0, 2);
  return code === HOME_STATE_CODE;
}
