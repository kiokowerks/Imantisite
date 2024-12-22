import React from 'react';
import { ROIResult } from '../../../types/roi';
import { formatCurrency } from '../../../utils/formatters';
import { TrendingUp, TrendingDown, Clock, DollarSign, Wallet, PiggyBank } from 'lucide-react';

interface ResultsDisplayProps {
  result: ROIResult;
}

const ResultsDisplay = ({ result }: ResultsDisplayProps) => {
  const getROIColor = (roi: number) => {
    if (roi >= 50) return 'bg-green-50 text-green-700 border-green-200';
    if (roi >= 20) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-red-50 text-red-700 border-red-200';
  };

  const getNPVColor = (npv: number) => {
    if (npv > 0) return 'bg-green-50 text-green-700 border-green-200';
    if (npv === 0) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-red-50 text-red-700 border-red-200';
  };

  const metrics = [
    {
      title: 'Return on Investment',
      value: `${result.roi.toFixed(2)}%`,
      icon: <TrendingUp className="h-6 w-6" />,
      color: getROIColor(result.roi),
      description: result.roi >= 50 ? 'Excellent ROI' : result.roi >= 20 ? 'Good ROI' : 'Low ROI'
    },
    {
      title: 'Net Present Value',
      value: formatCurrency(result.npv),
      icon: <DollarSign className="h-6 w-6" />,
      color: getNPVColor(result.npv),
      description: result.npv > 0 ? 'Profitable Investment' : result.npv < 0 ? 'Loss-making Investment' : 'Break-even'
    },
    {
      title: 'Payback Period',
      value: `${result.paybackPeriod.toFixed(2)} years`,
      icon: <Clock className="h-6 w-6" />,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Time to recover investment'
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(result.totalRevenue),
      icon: <PiggyBank className="h-6 w-6" />,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Projected total earnings'
    },
    {
      title: 'Total Costs',
      value: formatCurrency(result.totalCosts),
      icon: <Wallet className="h-6 w-6" />,
      color: 'bg-gray-50 text-gray-700 border-gray-200',
      description: 'Investment + Operating costs'
    },
    {
      title: 'Net Gain',
      value: formatCurrency(result.netGain),
      icon: <TrendingUp className="h-6 w-6" />,
      color: result.netGain > 0 ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200',
      description: 'Total profit/loss'
    }
  ];

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-[#282c64] mb-6">Investment Analysis</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ResultsDisplay;