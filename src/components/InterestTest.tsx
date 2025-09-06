import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';
import { questions } from '../data/questions';
import { UserAnswer } from '../types';

interface InterestTestProps {
  onComplete: (answers: UserAnswer[]) => void;
  onBack: () => void;
}

const InterestTest: React.FC<InterestTestProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(
      (a) => a.questionId === questions[currentQuestion].id
    );

    if (existingIndex >= 0) {
      newAnswers[existingIndex].selectedOption = optionIndex;
    } else {
      newAnswers.push({
        questionId: questions[currentQuestion].id,
        selectedOption: optionIndex,
      });
    }

    setAnswers(newAnswers);
  };

  const getCurrentAnswer = () => {
    const answer = answers.find(
      (a) => a.questionId === questions[currentQuestion].id
    );
    return answer?.selectedOption;
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = getCurrentAnswer();
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kembali ke Beranda
          </button>
          <div className="flex items-center text-blue-600">
            <BarChart3 className="h-5 w-5 mr-2" />
            <span className="font-medium">Tes Minat Jurusan</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
            <span>{Math.round(progress)}% selesai</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <div className="text-sm text-blue-600 font-medium mb-2">
            Kategori: {questions[currentQuestion].category}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
            {questions[currentQuestion].text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                currentAnswer === index
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                    currentAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {currentAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Sebelumnya
          </button>

          <button
            onClick={goToNext}
            disabled={!isAnswered}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              !isAnswered
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestTest;