import { Question, UserHistory } from '../types';

const DATA_KEY = 'lecture_master_data';
const HISTORY_KEY = 'lecture_master_history';

// Default initial data for demonstration
const INITIAL_DATA: Question[] = [
  {
    id: "demo-1",
    lesson: "Lecture 1: Introduction",
    question: "Which of the following best describes React?",
    options: ["A database", "A Java framework", "A JavaScript library for building user interfaces", "A CSS preprocessor"],
    correctAnswerIndex: 2,
    explanation: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
  },
  {
    id: "demo-2",
    lesson: "Lecture 1: Introduction",
    question: "What is the virtual DOM?",
    options: ["A direct copy of the HTML DOM", "A lightweight copy of the DOM kept in memory", "A browser extension", "A new HTML standard"],
    correctAnswerIndex: 1,
    explanation: "The virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM."
  },
  {
    id: "demo-3",
    lesson: "Lecture 2: Components",
    question: "How do you pass data to a child component?",
    options: ["Using State", "Using Props", "Using LocalStorage", "Using Windows"],
    correctAnswerIndex: 1,
    explanation: "Props (short for properties) are the mechanism to pass data from a parent component to a child component."
  }
];

export const getQuestions = (): Question[] => {
  const stored = localStorage.getItem(DATA_KEY);
  if (!stored) {
    localStorage.setItem(DATA_KEY, JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse questions", e);
    return [];
  }
};

export const saveQuestions = (questions: Question[]) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(questions));
};

export const getHistory = (): UserHistory => {
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const saveHistory = (history: UserHistory) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const recordAttempt = (questionId: string, isCorrect: boolean) => {
  const history = getHistory();
  // We overwrite the status. If they get it wrong now, it's marked wrong, 
  // ensuring it shows up in revision/master quiz again.
  history[questionId] = {
    correct: isCorrect,
    timestamp: Date.now()
  };
  saveHistory(history);
};

export const getLessons = (): string[] => {
  const questions = getQuestions();
  const lessons = new Set(questions.map(q => q.lesson));
  return Array.from(lessons).sort();
};

export const getLessonStats = (lesson: string) => {
  const questions = getQuestions().filter(q => q.lesson === lesson);
  const history = getHistory();
  
  let completed = 0;
  let correct = 0;
  let wrong = 0;

  questions.forEach(q => {
    const attempt = history[q.id];
    if (attempt) {
      completed++;
      if (attempt.correct) correct++;
      else wrong++;
    }
  });

  return {
    total: questions.length,
    completed,
    correct,
    wrong
  };
};

export const getQuestionsForPractice = (lesson: string): Question[] => {
  const questions = getQuestions().filter(q => q.lesson === lesson);
  const history = getHistory();

  // Sort: Wrong answers first, then unattempted, then correct.
  return questions.sort((a, b) => {
    const statA = history[a.id];
    const statB = history[b.id];

    const scoreA = statA ? (statA.correct ? 2 : 0) : 1;
    const scoreB = statB ? (statB.correct ? 2 : 0) : 1;

    return scoreA - scoreB;
  });
};

export const getQuestionsForMasterQuiz = (): Question[] => {
  const allQuestions = getQuestions();
  const history = getHistory();

  // Exclude questions that are currently marked as correct in history
  const pool = allQuestions.filter(q => {
    const attempt = history[q.id];
    return !attempt || !attempt.correct;
  });

  // Shuffle and take 60
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 60);
};

export const getQuestionsForReview = (lesson?: string): Question[] => {
  const allQuestions = getQuestions();
  const history = getHistory();

  // Return only questions that have been attempted and are marked as incorrect
  // If lesson is provided, filter by lesson as well
  return allQuestions.filter(q => {
    if (lesson && q.lesson !== lesson) return false;
    
    const attempt = history[q.id];
    return attempt && !attempt.correct;
  });
};

export const importQuestions = (newQuestions: Question[], replaceLesson?: string) => {
  let currentQuestions = getQuestions();
  
  if (replaceLesson) {
    // Remove all questions from this lesson before adding the new batch
    currentQuestions = currentQuestions.filter(q => q.lesson !== replaceLesson);
  } else {
    // If not replacing a specific lesson (Global Import), avoid duplicates by ID
    const newIds = new Set(newQuestions.map(q => q.id));
    currentQuestions = currentQuestions.filter(q => !newIds.has(q.id));
  }

  const merged = [...currentQuestions, ...newQuestions];
  saveQuestions(merged);
};

export const resetData = () => {
  localStorage.removeItem(DATA_KEY);
  localStorage.removeItem(HISTORY_KEY);
};
