export interface ROIInputs {
  initialInvestment: number;
  projectedAnnualRevenue: number;
  annualOperatingCosts: number;
  projectDuration: number;
  interestRate: number;
}

export interface ROIResult {
  totalRevenue: number;
  totalCosts: number;
  netGain: number;
  roi: number;
  paybackPeriod: number;
  npv: number;
}