import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { questions } from '../../../data/healthCheckQuestions';
import { Answer, HealthCheckResult } from '../../../types/healthCheck';
import { calculateHealthCheck } from '../../../utils/healthCheckAnalyzer';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';

const SMEHealthCheck = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<HealthCheckResult | null>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = [
      ...answers,
      { questionId: questions[currentQuestionIndex].id, value }
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const result = calculateHealthCheck(newAnswers);
      setResult(result);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return <ResultsCard result={result} onReset={resetAssessment} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#282c64]/10 rounded-lg">
          <Activity className="h-6 w-6 text-[#282c64]" />
        </div>
        <h2 className="text-xl font-semibold text-[#282c64]">SME Health Check</h2>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round((currentQuestionIndex / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#282c64] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={questions[currentQuestionIndex]}
        value={answers.find(a => a.questionId === questions[currentQuestionIndex].id)?.value ?? -1}
        onChange={handleAnswer}
      />
    </div>
  );
};

export default SMEHealthCheck;