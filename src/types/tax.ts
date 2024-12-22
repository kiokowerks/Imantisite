export interface InstallmentSchedule {
  month: number;
  percentage: number;
}

export interface SectorSchedule {
  schedule: InstallmentSchedule[];
}

export interface InstallmentDetails {
  generalSector: SectorSchedule;
  agricultural: SectorSchedule;
}

export interface TaxObligation {
  id: string;
  name: string;
  filingDeadline: string;
  paymentDeadline: string;
  penaltiesFiling: string;
  penaltiesPayment: string;
  description: string;
  frequency: string;
  details?: InstallmentDetails;
}

export interface InstallmentTaxInputs {
  calculationMethod: 'prior' | 'current';
  priorYearTax?: number;
  estimatedIncome?: number;
  estimatedTax?: number;
  sector: 'general' | 'agricultural';
}

export interface InstallmentPayment {
  month: number;
  amount: number;
  percentage: number;
  dueDate: string;
}

export interface InstallmentTaxResult {
  totalTax: number;
  payments: InstallmentPayment[];
}