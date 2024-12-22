export interface Question {
  id: string;
  text: string;
  category: 'financial' | 'operations' | 'strategy' | 'tax';
  weight: number;
}

export interface Answer {
  questionId: string;
  value: number; // 0-5 scale
}

export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface HealthCheckResult {
  overallScore: number;
  categoryScores: CategoryScore[];
  recommendations: string[];
}