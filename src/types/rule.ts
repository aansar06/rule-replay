export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Rule {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  videoUrl: string;
  quizQuestions: QuizQuestion[];
}
