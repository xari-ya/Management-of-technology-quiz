import React, { useMemo } from 'react';
import { getLessons, getLessonStats, getQuestionsForMasterQuiz, getQuestionsForReview, resetData } from '../services/quizService';
import { Play, RotateCcw, Plus, Trash2, BookOpen, CheckSquare, CheckCircle, XCircle, BrainCircuit, Settings } from 'lucide-react';

interface DashboardProps {
  onStartPractice: (lesson: string) => void;
  onStartMasterQuiz: () => void;
  onStartReview: (lesson: string) => void;
  onEditLesson: (lesson: string) => void;
  onImport: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onStartPractice, 
  onStartMasterQuiz, 
  onStartReview,
  onEditLesson,
  onImport
}) => {
  const lessons = getLessons();
  
  // Aggregate global stats
  const globalStats = useMemo(() => {
    let total = 0;
    let completed = 0;
    let correct = 0;
    let wrong = 0;
    
    lessons.forEach(l => {
      const s = getLessonStats(l);
      total += s.total;
      completed += s.completed;
      correct += s.correct;
      wrong += s.wrong;
    });

    return { total, completed, correct, wrong };
  }, [lessons]);

  const masterQuizAvailable = useMemo(() => {
    return getQuestionsForMasterQuiz().length > 0;
  }, []);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data? This cannot be undone.")) {
      resetData();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-indigo-700 tracking-tight">LectureMaster Pro</h1>
          <p className="text-gray-500 mt-1">Master your lecture notes with intelligent practice.</p>
        </div>
        <div className="flex gap-3">
           <button 
            onClick={onImport}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-sm shadow-indigo-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lecture</span>
          </button>
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all"
          >
            <Trash2 className="w-4 h-4" />
            <span>Reset Data</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            icon={<BookOpen className="w-6 h-6 text-indigo-600"/>}
            iconBg="bg-indigo-100"
            label="Total Questions" 
            value={globalStats.total} 
        />
        <StatCard 
            icon={<CheckSquare className="w-6 h-6 text-blue-600"/>}
            iconBg="bg-blue-100"
            label="Completed" 
            value={globalStats.completed} 
        />
        <StatCard 
            icon={<CheckCircle className="w-6 h-6 text-green-600"/>}
            iconBg="bg-green-100"
            label="Correct" 
            value={globalStats.correct} 
        />
        <StatCard 
            icon={<XCircle className="w-6 h-6 text-red-600"/>}
            iconBg="bg-red-100"
            label="Incorrect" 
            value={globalStats.wrong} 
        />
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Left Column: Lecture Notes (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-indigo-600"><BookOpen className="w-5 h-5"/></span>
            Lecture Notes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {lessons.map(lesson => {
              const stats = getLessonStats(lesson);
              const progress = Math.round(((stats.correct + stats.wrong) / stats.total) * 100) || 0;
              const reviewCount = getQuestionsForReview(lesson).length;

              return (
                <div key={lesson} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                         <h3 className="font-bold text-lg text-gray-900 line-clamp-1" title={lesson}>{lesson}</h3>
                         <button onClick={() => onEditLesson(lesson)} className="text-gray-300 hover:text-indigo-600 transition-colors">
                            <Settings className="w-4 h-4" />
                         </button>
                    </div>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                        {progress}% Complete
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium mb-6">{stats.total} Questions</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-xl p-3">
                          <span className="text-xs text-green-600 font-bold uppercase tracking-wider block mb-1">Correct</span>
                          <span className="text-2xl font-bold text-green-800">{stats.correct}</span>
                      </div>
                      <div className="bg-red-50 rounded-xl p-3">
                          <span className="text-xs text-red-600 font-bold uppercase tracking-wider block mb-1">Wrong</span>
                          <span className="text-2xl font-bold text-red-800">{stats.wrong}</span>
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => onStartPractice(lesson)}
                        className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg font-medium transition-colors text-sm"
                    >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Practice
                    </button>
                    <button 
                        onClick={() => onStartReview(lesson)}
                        disabled={reviewCount === 0}
                        className={`flex items-center justify-center gap-2 border text-sm py-2.5 rounded-lg font-medium transition-colors
                            ${reviewCount > 0 
                                ? 'border-indigo-200 text-indigo-700 hover:bg-indigo-50' 
                                : 'border-slate-100 text-slate-300 cursor-not-allowed'}`}
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Revise {reviewCount > 0 ? `(${reviewCount})` : ''}
                    </button>
                  </div>
                </div>
              );
            })}
             {lessons.length === 0 && (
               <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-gray-200">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Plus className="w-8 h-8 text-gray-300"/>
                  </div>
                  <p className="text-gray-500 font-medium">No lectures found.</p>
                  <button onClick={onImport} className="text-indigo-600 hover:underline text-sm mt-1">Add your first lecture notes</button>
               </div>
            )}
          </div>
        </div>

        {/* Right Column: Quick Actions (1/3 width) */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-amber-500 text-2xl">⚡</span>
            Quick Actions
          </h2>

           {/* Master Quiz Card */}
           <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
                <h3 className="text-2xl font-bold mb-2">Master Quiz</h3>
                <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                    Test your knowledge across all lessons with 60 mixed questions. Intelligent filtering ensures fresh challenges every time.
                </p>
                <button 
                    onClick={onStartMasterQuiz}
                    disabled={!masterQuizAvailable}
                    className="w-full bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                >
                    <BrainCircuit className="w-4 h-4" />
                    {masterQuizAvailable ? 'Start Master Challenge' : 'No Questions Available'}
                </button>
           </div>

           {/* How it works */}
           <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 border-dashed">
                <h4 className="font-bold text-gray-700 mb-4">How it works</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/>
                        <span>Practice mode covers all questions in a lecture.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/>
                        <span>Revision mode prioritizes questions you got wrong.</span>
                    </li>
                    <li className="flex items-start gap-2">
                         <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/>
                        <span>Master Quiz picks 60 unique questions you haven't mastered yet.</span>
                    </li>
                </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, iconBg, label, value }: { icon: React.ReactNode, iconBg: string, label: string, value: number }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center shrink-0`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">{label}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
    </div>
);
