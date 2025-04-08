export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  introduction: string;
  videoUrl: string;
  pdfUrl: string;
}

export interface Question {
  id: number;
  moduleId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TestResult {
  id: number;
  userId: string;
  moduleId: number;
  score: number;
  completed: boolean;
  timeSpent: number;
}