import { Answer, CategoryScore, HealthCheckResult } from '../types/healthCheck';
import { questions } from '../data/healthCheckQuestions';

export const calculateHealthCheck = (answers: Answer[]): HealthCheckResult => {
  const categories = ['financial', 'operations', 'strategy', 'tax'];
  
  const categoryScores = categories.map(category => {
    const categoryQuestions = questions.filter(q => q.category === category);
    const categoryAnswers = answers.filter(a => 
      categoryQuestions.find(q => q.id === a.questionId)
    );

    const maxScore = categoryQuestions.reduce((sum, q) => sum + (5 * q.weight), 0);
    const score = categoryAnswers.reduce((sum, answer) => {
      const question = categoryQuestions.find(q => q.id === answer.questionId);
      return sum + (answer.value * (question?.weight || 1));
    }, 0);

    return {
      category,
      score,
      maxScore,
      percentage: (score / maxScore) * 100
    };
  });

  const overallScore = (categoryScores.reduce((sum, cat) => sum + cat.percentage, 0) / categories.length);

  const recommendations = generateRecommendations(categoryScores);

  return {
    overallScore,
    categoryScores,
    recommendations
  };
};

const generateRecommendations = (categoryScores: CategoryScore[]): string[] => {
  const recommendations: string[] = [];

  categoryScores.forEach(({ category, percentage }) => {
    if (percentage < 60) {
      switch (category) {
        case 'financial':
          recommendations.push('Consider implementing a robust financial monitoring system');
          recommendations.push('Review and optimize your profit margins');
          break;
        case 'operations':
          recommendations.push('Establish KPIs to track operational performance');
          recommendations.push('Develop a stronger online presence');
          break;
        case 'strategy':
          recommendations.push('Define clear and measurable business objectives');
          recommendations.push('Invest in innovation and continuous improvement');
          break;
        case 'tax':
          recommendations.push('Ensure timely compliance with all tax obligations');
          recommendations.push('Consider engaging a tax professional');
          break;
      }
    }
  });

  return recommendations;
};