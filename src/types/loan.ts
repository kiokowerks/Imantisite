export interface LoanInputs {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  paymentFrequency: 'monthly' | 'annually';
}

export interface LoanResult {
  payment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: PaymentSchedule[];
}

export interface PaymentSchedule {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}