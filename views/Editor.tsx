import React, { useState, useEffect } from 'react';
import { getQuestions, importQuestions } from '../services/quizService';
import { Question, EditorProps } from '../types';
import { Save, AlertTriangle, ArrowLeft } from 'lucide-react';

export const Editor: React.FC<EditorProps> = ({ initialLesson, onClose }) => {
  const [jsonContent, setJsonContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (initialLesson) {
      const allQuestions = getQuestions();
      const lessonQuestions = allQuestions.filter(q => q.lesson === initialLesson);
      setJsonContent(JSON.stringify(lessonQuestions, null, 2));
    } else {
      // Template for new import
      const template: Question[] = [
        {
          id: `new-${Date.now()}`,
          lesson: "New Lecture",
          question: "Type your question here",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswerIndex: 0,
          explanation: "Explanation here"
        }
      ];
      setJsonContent(JSON.stringify(template, null, 2));
    }
  }, [initialLesson]);

  const handleSave = () => {
    setError(null);
    setSuccess(false);

    try {
      const parsed = JSON.parse(jsonContent);
      
      if (!Array.isArray(parsed)) {
        throw new Error("Input must be a JSON array.");
      }

      // Basic schema validation
      for (const item of parsed) {
        if (!item.id || !item.lesson || !item.question || !Array.isArray(item.options) || typeof item.correctAnswerIndex !== 'number') {
          throw new Error(`Invalid schema for question ID: ${item.id || 'unknown'}`);
        }
      }

      importQuestions(parsed, initialLesson); // Pass initialLesson to replace if editing
      setSuccess(true);
      setTimeout(() => onClose(), 1000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            {initialLesson ? `Edit: ${initialLesson}` : 'Import New Questions'}
          </h2>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>JSON Editor</span>
          {initialLesson && <span className="text-orange-600 font-semibold">Editing existing lesson. Saving will replace all questions for this lesson.</span>}
        </div>
        <textarea
          value={jsonContent}
          onChange={(e) => setJsonContent(e.target.value)}
          className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/20"
          spellCheck={false}
        />
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800 animate-in slide-in-from-bottom-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800 animate-in slide-in-from-bottom-2">
          <Save className="w-5 h-5 shrink-0" />
          <p>Successfully saved!</p>
        </div>
      )}
    </div>
  );
};
