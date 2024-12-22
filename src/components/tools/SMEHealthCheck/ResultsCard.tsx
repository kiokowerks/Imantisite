import React from 'react';
import { HealthCheckResult } from '../../../types/healthCheck';
import { ArrowRight } from 'lucide-react';

interface ResultsCardProps {
  result: HealthCheckResult;
  onReset: () => void;
}

const ResultsCard = ({ result, onReset }: ResultsCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'financial': return 'Financial Health';
      case 'operations': return 'Operations & Marketing';
      case 'strategy': return 'Strategy & Leadership';
      case 'tax': return 'Tax Compliance';
      default: return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#282c64] mb-2">Business Health Score</h2>
        <div className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`}>
          {result.overallScore.toFixed(1)}%
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {result.categoryScores.map((category) => (
          <div key={category.category} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700">
                {getCategoryLabel(category.category)}
              </h3>
              <span className={`font-bold ${getScoreColor(category.percentage)}`}>
                {category.percentage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  category.percentage >= 80 ? 'bg-green-500' :
                  category.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {result.recommendations.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Recommendations</h3>
          <ul className="space-y-2">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2 text-blue-700">
                <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full bg-[#282c64] text-white py-2 px-4 rounded-lg hover:bg-[#363b7d] transition-colors duration-300"
      >
        Start New Assessment
      </button>
    </div>
  );
};

export default ResultsCard;