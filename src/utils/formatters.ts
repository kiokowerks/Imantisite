export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatNumberInput = (value: number): string => {
  return new Intl.NumberFormat('en-KE', {
    maximumFractionDigits: 2,
    useGrouping: true
  }).format(value);
};

export const parseNumberInput = (value: string): number => {
  // Remove all non-numeric characters except decimal point
  const cleanValue = value.replace(/[^0-9.]/g, '');
  return Number(cleanValue);
};