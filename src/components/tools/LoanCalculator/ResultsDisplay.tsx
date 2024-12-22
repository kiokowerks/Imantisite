import React, { useState } from 'react';
import { LoanResult } from '../../../types/loan';
import { formatCurrency } from '../../../utils/formatters';
import { Coins, Calendar, PiggyBank, Calculator } from 'lucide-react';

interface ResultsDisplayProps {
  result: LoanResult;
  frequency: 'monthly' | 'annually';
}

const ResultsDisplay = ({ result, frequency }: ResultsDisplayProps) => {
  const [showSchedule, setShowSchedule] = useState(false);

  const metrics = [
    {
      title: `${frequency === 'monthly' ? 'Monthly' : 'Annual'} Payment`,
      value: formatCurrency(result.payment),
      icon: <Coins className="h-6 w-6" />,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description: `Regular ${frequency} payment amount`
    },
    {
      title: 'Total Interest',
      value: formatCurrency(result.totalInterest),
      icon: <Calculator className="h-6 w-6" />,
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      description: 'Total interest over loan term'
    },
    {
      title: 'Total Payment',
      value: formatCurrency(result.totalPayment),
      icon: <PiggyBank className="h-6 w-6" />,
      color: 'bg-green-50 text-green-700 border-green-200',
      description: 'Total amount including principal and interest'
    }
  ];

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-[#282c64] mb-6">Loan Analysis Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border ${metric.color} transition-all duration-300 hover:shadow-md`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/50 rounded-lg">
                {metric.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium">{metric.title}</h4>
                <p className="text-lg font-bold">{metric.value}</p>
              </div>
            </div>
            <p className="text-sm opacity-75">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="text-[#282c64] hover:text-[#363b7d] font-medium"
        >
          {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
        </button>

        {showSchedule && (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Principal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {result.schedule.map((period) => (
                  <tr key={period.period}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {period.period}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(period.payment)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(period.principal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(period.interest)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(period.remainingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;