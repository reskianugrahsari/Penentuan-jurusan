import React, { useState } from 'react';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import InterestTest from './components/InterestTest';
import ResultsPage from './components/ResultsPage';
import { UserAnswer, TestResult } from './types';
import { calculateScores, getRecommendedMajors } from './utils/scoring';

type AppState = 'homepage' | 'test' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('homepage');
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleStartTest = () => {
    setCurrentState('test');
  };

  const handleTestComplete = (answers: UserAnswer[]) => {
    const scores = calculateScores(answers);
    const recommendedMajors = getRecommendedMajors(scores);
    
    const result: TestResult = {
      scores,
      recommendedMajors,
      completedAt: new Date()
    };
    
    setTestResult(result);
    setCurrentState('results');
  };

  const handleBackToHome = () => {
    setCurrentState('homepage');
    setTestResult(null);
  };

  const handleRestart = () => {
    setCurrentState('test');
    setTestResult(null);
  };

  const getCurrentPage = () => {
    switch (currentState) {
      case 'homepage':
        return 'beranda';
      case 'test':
        return 'tes';
      case 'results':
        return 'hasil';
      default:
        return 'beranda';
    }
  };

  return (
    <Layout currentPage={getCurrentPage()}>
      {currentState === 'homepage' && (
        <Homepage onStartTest={handleStartTest} />
      )}
      
      {currentState === 'test' && (
        <InterestTest 
          onComplete={handleTestComplete} 
          onBack={handleBackToHome}
        />
      )}
      
      {currentState === 'results' && testResult && (
        <ResultsPage 
          result={testResult}
          onRestart={handleRestart}
          onBackToHome={handleBackToHome}
        />
      )}
    </Layout>
  );
}

export default App;