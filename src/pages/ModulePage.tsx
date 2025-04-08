import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/mockData';
import { PlayCircle, FileText, PenTool } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ModulePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const module = modules.find(m => m.id === Number(id));

  if (!module) return <div>Module not found</div>;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
        
        <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <div className="prose max-w-none">
              <ReactMarkdown>{module.introduction}</ReactMarkdown>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Study Materials</h2>
            
            <div className="space-y-4">
              <a
                href={module.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <PlayCircle className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-900">Watch Video Lesson</span>
              </a>

              <a
                href={module.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <FileText className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-900">Download PDF Materials</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <button
              onClick={() => navigate(`/module/${id}/test`)}
              className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PenTool className="h-5 w-5 mr-2" />
              Take Module Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}