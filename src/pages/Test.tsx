import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/mockData';
import { Timer } from 'lucide-react';

const TOTAL_TIME = 30 * 60; // 30 minutes in seconds

export default function Test() {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleQuestions = questions.filter(q => q.moduleId === Number(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(moduleQuestions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return answer === moduleQuestions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    navigate(`/module/${id}/results`, { 
      state: { 
        answers, 
        questions: moduleQuestions, 
        score 
      } 
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Module Test</h1>
            <div className="flex items-center text-gray-700">
              <Timer className="h-5 w-5 mr-2" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Question {currentQuestion + 1} of {moduleQuestions.length}
              </h2>
              <p className="text-gray-700 mb-4">{moduleQuestions[currentQuestion].question}</p>

              <div className="space-y-2">
                {moduleQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg ${
                      answers[currentQuestion] === index
                        ? 'bg-indigo-100 border-indigo-500'
                        : 'bg-white border-gray-300'
                    } border hover:bg-gray-50`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              
              {currentQuestion === moduleQuestions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion((prev) => Math.min(moduleQuestions.length - 1, prev + 1))}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}