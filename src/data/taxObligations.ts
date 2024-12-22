import { TaxObligation } from '../types/tax';

export const taxObligations: TaxObligation[] = [
  {
    id: 'withholding',
    name: 'Withholding Tax',
    filingDeadline: '20th of the following month',
    paymentDeadline: '20th of the following month',
    penaltiesFiling: '25% of tax due or KES 10,000, whichever is higher',
    penaltiesPayment: '5% of unpaid tax + 1% interest per month',
    description: 'Tax deducted at source from specified payments including professional fees, dividends, interest, and other specified payments.',
    frequency: 'monthly'
  },
  {
    id: 'vat',
    name: 'Value Added Tax (VAT)',
    filingDeadline: '20th of the following month',
    paymentDeadline: '20th of the following month',
    penaltiesFiling: '5% of tax due or KES 10,000, whichever is higher',
    penaltiesPayment: '5% of unpaid tax + 2% interest per month',
    description: 'Tax on the supply of taxable goods and services, charged at 16% standard rate.',
    frequency: 'monthly'
  },
  {
    id: 'paye',
    name: 'PAYE (Pay As You Earn)',
    filingDeadline: '9th of the following month',
    paymentDeadline: '9th of the following month',
    penaltiesFiling: '25% of tax due or KES 10,000, whichever is higher',
    penaltiesPayment: '5% of unpaid tax + 1% interest per month',
    description: 'Income tax deducted from employee salaries and wages.',
    frequency: 'monthly'
  },
  {
    id: 'corporate',
    name: 'Corporate Income Tax',
    filingDeadline: '6 months after year end',
    paymentDeadline: '4 months after year end',
    penaltiesFiling: '5% of tax due or KES 20,000, whichever is higher',
    penaltiesPayment: '20% of unpaid tax + 1% interest per month',
    description: 'Tax on company profits, currently at 30% for resident companies and 37.5% for non-resident companies.',
    frequency: 'annual'
  },
  {
    id: 'installment',
    name: 'Installment Tax',
    filingDeadline: 'N/A',
    paymentDeadline: '20th day of the 4th, 6th, 9th, and 12th months',
    penaltiesFiling: 'N/A',
    penaltiesPayment: '20% of underpaid amount + 1% interest per month',
    description: 'Advance payment of income tax in four installments. Can be calculated using either prior year basis (110% of previous year) or current year estimate.',
    frequency: 'quarterly',
    details: {
      generalSector: {
        schedule: [
          { month: 4, percentage: 25 },
          { month: 6, percentage: 25 },
          { month: 9, percentage: 25 },
          { month: 12, percentage: 25 }
        ]
      },
      agricultural: {
        schedule: [
          { month: 9, percentage: 75 },
          { month: 12, percentage: 25 }
        ]
      }
    }
  },
  {
    id: 'fringe',
    name: 'Fringe Benefit Tax',
    filingDeadline: '10th of the following month',
    paymentDeadline: '10th of the following month',
    penaltiesFiling: '25% of tax due or KES 10,000, whichever is higher',
    penaltiesPayment: '5% of unpaid tax + 1% interest per month',
    description: 'Tax on non-cash benefits provided to employees, such as company cars, housing, and loans at preferential rates.',
    frequency: 'monthly'
  }
];