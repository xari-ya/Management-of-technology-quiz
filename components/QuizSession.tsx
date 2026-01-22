import React, { useState, useEffect, useMemo } from 'react';
import { Question } from '../types';
import { recordAttempt } from '../services/quizService';
import { CheckCircle, XCircle, ArrowRight, AlertCircle } from 'lucide-react';

interface QuizSessionProps {
  questions: Question[];
  title: string;
  onExit: () => void;
}

export const QuizSession: React.FC<QuizSessionProps> = ({ questions, title, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Memoize the questions with shuffled options. 
  // This runs once when 'questions' prop changes (session start).
  const sessionQuestions = useMemo(() => {
    return questions.map(q => {
      // Create indices [0, 1, 2, 3]
      const indices = q.options.map((_, i) => i);
      
      // Fisher-Yates shuffle the indices
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      
      // Remap options and find the new index for the correct answer
      return {
        ...q,
        options: indices.map(i => q.options[i]),
        correctAnswerIndex: indices.indexOf(q.correctAnswerIndex)
      };
    });
  }, [questions]);

  const currentQuestion = sessionQuestions[currentIndex];

  useEffect(() => {
    if (questions.length === 0) {
      setShowResults(true);
    }
  }, [questions]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    }

    recordAttempt(currentQuestion.id, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">All Caught Up!</h2>
          <p className="text-gray-600 mb-6">
            There are no pending questions for this selection based on the current mode logic. Great job!
          </p>
          <button
            onClick={onExit}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center animate-in fade-in duration-500">
         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-blue-600">{Math.round((score / sessionQuestions.length) * 100)}%</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Session Complete!</h2>
          <p className="text-gray-600 mb-8">
            You answered <span className="font-semibold text-gray-900">{score}</span> out of <span className="font-semibold text-gray-900">{sessionQuestions.length}</span> questions correctly.
          </p>
          <button
            onClick={onExit}
            className="w-full py-3 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors shadow-sm"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full p-4 md:p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
           <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">{title}</h2>
           <p className="text-gray-500 text-sm">Question {currentIndex + 1} of {sessionQuestions.length}</p>
        </div>
        <button onClick={onExit} className="text-gray-400 hover:text-gray-600 font-medium text-sm">
          Quit
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ";
              
              if (isAnswered) {
                if (index === currentQuestion.correctAnswerIndex) {
                  btnClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedOption) {
                  btnClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  btnClass += "border-gray-100 text-gray-400 opacity-60";
                }
              } else {
                btnClass += "border-gray-100 hover:border-blue-200 hover:bg-blue-50 text-gray-700";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className="font-medium text-lg">{option}</span>
                  {isAnswered && index === currentQuestion.correctAnswerIndex && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswerIndex && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {isAnswered && (
          <div className="bg-blue-50 border-t border-blue-100 p-6 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Explanation</h4>
                <p className="text-blue-800 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
              >
                {currentIndex === sessionQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
