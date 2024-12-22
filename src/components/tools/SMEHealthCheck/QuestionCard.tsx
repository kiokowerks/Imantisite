import React from 'react';
import { Question } from '../../../types/healthCheck';

interface QuestionCardProps {
  question: Question;
  value: number;
  onChange: (value: number) => void;
}

const QuestionCard = ({ question, value, onChange }: QuestionCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{question.text}</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Not at all</span>
          <span>Very much</span>
        </div>
        
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => onChange(rating)}
              className={`flex-1 h-12 rounded-md transition-all duration-200 ${
                value === rating
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;