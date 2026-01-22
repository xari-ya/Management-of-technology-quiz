export interface Question {
  id: string;
  lesson: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuestionResult {
  correct: boolean;
  timestamp: number;
}

export interface UserHistory {
  [questionId: string]: QuestionResult;
}

export type StudyMode = 'dashboard' | 'practice' | 'master' | 'review' | 'editor';

export interface EditorProps {
  initialLesson?: string;
  onClose: () => void;
}