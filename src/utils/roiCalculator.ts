import { ROIInputs, ROIResult } from '../types/roi';

export const calculateROI = (inputs: ROIInputs): ROIResult => {
  const {
    initialInvestment,
    projectedAnnualRevenue,
    annualOperatingCosts,
    projectDuration,
    interestRate
  } = inputs;

  const rate = interestRate / 100;
  let totalRevenueDiscounted = 0;
  let totalCostsDiscounted = 0;

  // Calculate discounted cash flows for each year
  for (let year = 1; year <= projectDuration; year++) {
    // Calculate discounted revenue for current year
    const yearlyRevenueDiscounted = projectedAnnualRevenue / Math.pow(1 + rate, year);
    totalRevenueDiscounted += yearlyRevenueDiscounted;
    
    // Calculate discounted costs for current year
    const yearlyCostsDiscounted = annualOperatingCosts / Math.pow(1 + rate, year);
    totalCostsDiscounted += yearlyCostsDiscounted;
  }

  // Calculate NPV
  const npv = totalRevenueDiscounted - totalCostsDiscounted - initialInvestment;

  // Calculate non-discounted totals
  const totalRevenue = projectedAnnualRevenue * projectDuration;
  const totalCosts = (annualOperatingCosts * projectDuration) + initialInvestment;
  const netGain = totalRevenue - totalCosts;

  // Calculate ROI percentage
  const roi = (netGain / initialInvestment) * 100;

  // Calculate payback period (in years)
  const annualNetCashFlow = projectedAnnualRevenue - annualOperatingCosts;
  const paybackPeriod = initialInvestment / annualNetCashFlow;

  return {
    totalRevenue,
    totalCosts,
    netGain,
    roi,
    paybackPeriod,
    npv
  };
};