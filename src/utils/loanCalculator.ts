import { LoanInputs, LoanResult } from '../types/loan';

export const calculateLoan = (inputs: LoanInputs): LoanResult => {
  const { loanAmount, interestRate, loanTerm, paymentFrequency } = inputs;
  
  // Convert annual rate to decimal
  const annualRate = interestRate / 100;
  const periodsPerYear = paymentFrequency === 'monthly' ? 12 : 1;
  const totalPeriods = loanTerm * periodsPerYear;

  let payment, totalPayment, totalInterest;

  if (paymentFrequency === 'monthly') {
    // Monthly compounding calculation
    const monthlyRate = annualRate / 12;
    if (monthlyRate === 0) {
      payment = loanAmount / totalPeriods;
      totalPayment = loanAmount;
      totalInterest = 0;
    } else {
      // Use the standard monthly payment formula: PMT = P * (r(1+r)^n)/((1+r)^n-1)
      // where P = principal, r = monthly rate, n = total number of payments
      payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPeriods)) / 
                (Math.pow(1 + monthlyRate, totalPeriods) - 1);
      totalPayment = payment * totalPeriods;
      totalInterest = totalPayment - loanAmount;
    }
  } else {
    // Annual simple interest calculation
    // For annual payments, use simple interest: I = P * r * t
    totalInterest = loanAmount * annualRate * loanTerm;
    totalPayment = loanAmount + totalInterest;
    payment = totalPayment / loanTerm;
  }

  // Generate payment schedule
  const schedule = [];
  let remainingBalance = loanAmount;
  const periodRate = paymentFrequency === 'monthly' ? annualRate / 12 : annualRate;

  for (let period = 1; period <= totalPeriods; period++) {
    const interestPayment = remainingBalance * periodRate;
    const principalPayment = payment - interestPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);

    schedule.push({
      period,
      payment,
      principal: principalPayment,
      interest: interestPayment,
      remainingBalance
    });
  }

  return {
    payment,
    totalPayment,
    totalInterest,
    schedule
  };
};