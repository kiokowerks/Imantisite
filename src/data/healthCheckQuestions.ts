import { Question } from '../types/healthCheck';

export const questions: Question[] = [
  // Financial Health
  {
    id: 'fin_1',
    text: 'Do you regularly monitor your cash flow?',
    category: 'financial',
    weight: 1.2
  },
  {
    id: 'fin_2',
    text: 'Are you achieving your desired profit margins?',
    category: 'financial',
    weight: 1.0
  },
  {
    id: 'fin_3',
    text: 'Is your business debt under control?',
    category: 'financial',
    weight: 1.1
  },

  // Operations and Marketing
  {
    id: 'ops_1',
    text: 'Do you track your key operational performance metrics?',
    category: 'operations',
    weight: 1.0
  },
  {
    id: 'ops_2',
    text: 'Do you actively engage with customers online?',
    category: 'operations',
    weight: 0.9
  },
  {
    id: 'ops_3',
    text: 'Have your sales consistently grown over the last year?',
    category: 'operations',
    weight: 1.1
  },

  // Strategy and Leadership
  {
    id: 'str_1',
    text: 'Are your business goals clear and measurable?',
    category: 'strategy',
    weight: 1.0
  },
  {
    id: 'str_2',
    text: 'Do you actively seek ways to improve or innovate?',
    category: 'strategy',
    weight: 1.0
  },
  {
    id: 'str_3',
    text: 'Is your team aligned with your business vision?',
    category: 'strategy',
    weight: 1.0
  },

  // Tax Compliance
  {
    id: 'tax_1',
    text: 'Do you regularly file tax returns with the Kenya Revenue Authority (KRA)?',
    category: 'tax',
    weight: 1.2
  },
  {
    id: 'tax_2',
    text: 'Are you up-to-date with your VAT (Value Added Tax) filings?',
    category: 'tax',
    weight: 1.1
  },
  {
    id: 'tax_3',
    text: 'Do you ensure all your tax obligations (PAYE, Corporate Tax) are paid on time?',
    category: 'tax',
    weight: 1.1
  },
  {
    id: 'tax_4',
    text: 'Have you received any tax audits or notices from KRA in the past year?',
    category: 'tax',
    weight: 0.8
  }
];