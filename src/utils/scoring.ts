import { UserAnswer, Major } from '../types';
import { questions } from '../data/questions';
import { majors } from '../data/majors';

export const calculateScores = (answers: UserAnswer[]): Record<string, number> => {
  const scores: Record<string, number> = {
    "IPA": 0,
    "IPS": 0,
    "Bahasa": 0,
    "Seni": 0,
    "Teknologi": 0,
    "Kesehatan": 0,
    "Bisnis": 0
  };

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOption]) {
      const optionScores = question.options[answer.selectedOption].scores;
      Object.entries(optionScores).forEach(([category, score]) => {
        scores[category] += score;
      });
    }
  });

  return scores;
};

export const getRecommendedMajors = (scores: Record<string, number>): Major[] => {
  // Create a scoring system for each major based on category scores
  const majorScores = majors.map(major => {
    let totalScore = 0;
    const categoryScore = scores[major.category] || 0;
    
    // Primary category gets full weight
    totalScore += categoryScore * 2;
    
    // Add bonus for related categories
    Object.entries(scores).forEach(([category, score]) => {
      if (category !== major.category) {
        // Add smaller bonus for other categories
        totalScore += score * 0.3;
      }
    });

    return {
      major,
      score: totalScore
    };
  });

  // Sort by score and return top 5
  return majorScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.major);
};

export const generatePDFContent = (scores: Record<string, number>, recommendedMajors: Major[]): string => {
  const date = new Date().toLocaleDateString('id-ID');
  
  let content = `HASIL TES MINAT JURUSAN KULIAH\n`;
  content += `Tanggal: ${date}\n\n`;
  
  content += `SKOR MINAT BERDASARKAN KATEGORI:\n`;
  Object.entries(scores).forEach(([category, score]) => {
    content += `${category}: ${score}\n`;
  });
  
  content += `\nJURUSAN YANG DIREKOMENDASIKAN:\n`;
  recommendedMajors.forEach((major, index) => {
    content += `\n${index + 1}. ${major.name}\n`;
    content += `   Deskripsi: ${major.description}\n`;
    content += `   Prospek Karir: ${major.careerProspects.join(', ')}\n`;
  });
  
  return content;
};