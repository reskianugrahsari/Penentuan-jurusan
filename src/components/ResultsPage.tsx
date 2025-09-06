import React from 'react';
import { Download, RotateCcw, Star, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { TestResult } from '../types';
import { generatePDFContent } from '../utils/scoring';

interface ResultsPageProps {
  result: TestResult;
  onRestart: () => void;
  onBackToHome: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ result, onRestart, onBackToHome }) => {
  const handleDownloadPDF = () => {
    const content = generatePDFContent(result.scores, result.recommendedMajors);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hasil-tes-minat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const maxScore = Math.max(...Object.values(result.scores));
  const scoreEntries = Object.entries(result.scores).sort(([,a], [,b]) => b - a);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Hasil Tes Minat Anda</h1>
          <p className="text-lg opacity-90">
            Berdasarkan analisis jawaban Anda, berikut adalah rekomendasi jurusan yang sesuai
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Interest Scores Visualization */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Distribusi Minat
            </h2>
            
            <div className="space-y-4">
              {scoreEntries.map(([category, score]) => (
                <div key={category}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{category}</span>
                    <span>{score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${maxScore > 0 ? (score / maxScore) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-4">
                <p className="font-medium mb-2">Cara Membaca Hasil:</p>
                <p>Semakin tinggi skor pada suatu kategori, semakin besar minat Anda pada bidang tersebut.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Recommended Majors */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
              Jurusan yang Direkomendasikan
            </h2>

            <div className="space-y-6">
              {result.recommendedMajors.map((major, index) => (
                <div
                  key={major.id}
                  className={`border-l-4 pl-6 py-4 rounded-r-lg ${
                    index === 0
                      ? 'border-gold bg-yellow-50'
                      : index === 1
                      ? 'border-silver bg-gray-50'
                      : index === 2
                      ? 'border-bronze bg-orange-50'
                      : 'border-blue-500 bg-blue-50'
                  }`}
                  style={{
                    '--gold': '#FFD700',
                    '--silver': '#C0C0C0',
                    '--bronze': '#CD7F32'
                  } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`text-lg font-bold mr-2 ${
                          index === 0 ? 'text-yellow-600' : 
                          index === 1 ? 'text-gray-600' : 
                          index === 2 ? 'text-orange-600' : 
                          'text-blue-600'
                        }`}>
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{major.name}</h3>
                        <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${
                          index === 0 ? 'bg-yellow-200 text-yellow-800' :
                          index === 1 ? 'bg-gray-200 text-gray-800' :
                          index === 2 ? 'bg-orange-200 text-orange-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>
                          {major.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {major.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            Mata Kuliah Utama:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {major.subjects.slice(0, 4).map((subject, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            Prospek Karir:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {major.careerProspects.slice(0, 4).map((career, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                {career}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Universitas Terkemuka:</h4>
                        <p className="text-sm text-gray-600">
                          {major.universities.join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8">
        <button
          onClick={handleDownloadPDF}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <Download className="h-5 w-5 mr-2" />
          Unduh Hasil (TXT)
        </button>
        
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Ulangi Tes
        </button>

        <button
          onClick={onBackToHome}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Kembali ke Beranda
        </button>
      </div>

      {/* Additional Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Tips Selanjutnya</h3>
        <ul className="text-blue-800 space-y-2">
          <li>• Diskusikan hasil ini dengan orang tua, guru, atau konselor sekolah</li>
          <li>• Cari informasi lebih lanjut tentang jurusan yang direkomendasikan</li>
          <li>• Kunjungi website universitas dan baca pengalaman mahasiswa</li>
          <li>• Pertimbangkan untuk mengikuti program orientasi jurusan</li>
          <li>• Jangan ragu untuk mencoba tes lagi setelah beberapa waktu</li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;