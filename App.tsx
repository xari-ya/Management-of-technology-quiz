import React, { useState } from 'react';
import { Dashboard } from './views/Dashboard';
import { QuizSession } from './components/QuizSession';
import { Editor } from './views/Editor';
import { getQuestionsForPractice, getQuestionsForMasterQuiz, getQuestionsForReview } from './services/quizService';
import { Question, StudyMode } from './types';

function App() {
  const [mode, setMode] = useState<StudyMode>('dashboard');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [sessionTitle, setSessionTitle] = useState('');
  const [editingLesson, setEditingLesson] = useState<string | undefined>(undefined);

  const handleStartPractice = (lesson: string) => {
    const questions = getQuestionsForPractice(lesson);
    setActiveQuestions(questions);
    setSessionTitle(lesson);
    setMode('practice');
  };

  const handleStartMasterQuiz = () => {
    const questions = getQuestionsForMasterQuiz();
    setActiveQuestions(questions);
    setSessionTitle('Master Quiz');
    setMode('master');
  };

  const handleStartReview = (lesson: string) => {
    const questions = getQuestionsForReview(lesson);
    setActiveQuestions(questions);
    setSessionTitle(`Revise: ${lesson}`);
    setMode('review');
  };

  const handleEditLesson = (lesson: string) => {
    setEditingLesson(lesson);
    setMode('editor');
  };

  const handleImport = () => {
    setEditingLesson(undefined);
    setMode('editor');
  };

  const handleExit = () => {
    setMode('dashboard');
    setActiveQuestions([]);
    setEditingLesson(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {mode === 'dashboard' && (
        <Dashboard 
          onStartPractice={handleStartPractice}
          onStartMasterQuiz={handleStartMasterQuiz}
          onStartReview={handleStartReview}
          onEditLesson={handleEditLesson}
          onImport={handleImport}
        />
      )}

      {(mode === 'practice' || mode === 'master' || mode === 'review') && (
        <div className="h-screen flex flex-col">
          <QuizSession 
            questions={activeQuestions}
            title={sessionTitle}
            onExit={handleExit}
          />
        </div>
      )}

      {mode === 'editor' && (
        <div className="h-screen bg-slate-50">
          <Editor 
            initialLesson={editingLesson}
            onClose={handleExit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
