export interface Question {
  id: number;
  text: string;
  category: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface Major {
  id: string;
  name: string;
  category: string;
  description: string;
  subjects: string[];
  careerProspects: string[];
  requirements: string[];
  universities: string[];
}

export interface TestResult {
  scores: Record<string, number>;
  recommendedMajors: Major[];
  completedAt: Date;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
}