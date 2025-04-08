import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Question } from '../types';

interface LocationState {
  answers: number[];
  questions: Question[];
  score: number;
}

export default function TestResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers, questions, score } = location.state as LocationState;

  const passed = score >= 7;

  return (
    <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-8">
            {passed ? (
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500 mx-auto" />
            )}
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Test Results
            </h1>
            <p className="mt-2 text-lg text-gray-700">
              You scored {score} out of 10
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {passed ? 'Congratulations! You passed!' : 'Keep studying and try again!'}
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    Question {index + 1}
                  </h3>
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <p className="mt-2 text-gray-700">{question.question}</p>
                
                <div className="mt-4 space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg ${
                        optionIndex === question.correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : optionIndex === answers[index]
                          ? 'bg-red-100 border-red-500'
                          : 'bg-white border-gray-300'
                      } border`}
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-700">
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}