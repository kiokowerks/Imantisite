import { InstallmentTaxInputs, InstallmentTaxResult } from '../types/tax';
import { taxObligations } from '../data/taxObligations';

export const calculateInstallmentTax = (inputs: InstallmentTaxInputs): InstallmentTaxResult => {
  const { calculationMethod, priorYearTax, estimatedTax, sector } = inputs;
  
  // Get the installment tax obligation
  const installmentTax = taxObligations.find(tax => tax.id === 'installment');
  if (!installmentTax?.details) throw new Error('Installment tax details not found');

  // Calculate total tax based on method
  const totalTax = calculationMethod === 'prior' 
    ? (priorYearTax || 0) * 1.1 // 110% of prior year tax
    : estimatedTax || 0;

  // Get schedule based on sector
  const schedule = sector === 'agricultural' 
    ? installmentTax.details.agricultural.schedule 
    : installmentTax.details.generalSector.schedule;

  // Calculate payments
  const payments = schedule.map(({ month, percentage }) => {
    const amount = (totalTax * percentage) / 100;
    const dueDate = `20th ${getMonthName(month)}`;

    return {
      month,
      amount,
      percentage,
      dueDate
    };
  });

  return {
    totalTax,
    payments
  };
};

const getMonthName = (month: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month - 1];
};