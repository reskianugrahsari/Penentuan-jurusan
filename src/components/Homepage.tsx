import React from 'react';
import { ArrowRight, Target, BarChart3, FileText, Users } from 'lucide-react';

interface HomepageProps {
  onStartTest: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onStartTest }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Temukan Jurusan Kuliah
            <span className="text-blue-600"> Yang Tepat</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Tes minat komprehensif yang akan membantu Anda menemukan jurusan kuliah
            yang sesuai dengan minat, bakat, dan potensi masa depan Anda.
          </p>
          <button
            onClick={onStartTest}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            Mulai Tes Minat
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mengapa Memilih EduGuide?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform terpercaya dengan metodologi yang telah terbukti membantu ribuan siswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tes Akurat
            </h3>
            <p className="text-gray-600">
              Menggunakan metodologi ilmiah yang telah teruji untuk memberikan hasil yang akurat
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analisis Mendalam
            </h3>
            <p className="text-gray-600">
              Visualisasi data yang jelas dan analisis komprehensif tentang minat Anda
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Laporan PDF
            </h3>
            <p className="text-gray-600">
              Dapatkan laporan lengkap dalam format PDF yang dapat Anda simpan dan bagikan
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tim Ahli
            </h3>
            <p className="text-gray-600">
              Dikembangkan oleh tim ahli pendidikan dan psikologi terpercaya
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white rounded-2xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cara Kerja Tes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses sederhana dalam 3 langkah untuk menemukan jurusan ideal Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Jawab Pertanyaan
            </h3>
            <p className="text-gray-600">
              Jawab 15 pertanyaan tentang minat dan preferensi Anda dengan jujur
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analisis Hasil
            </h3>
            <p className="text-gray-600">
              Sistem akan menganalisis jawaban Anda dan menghitung skor minat
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dapatkan Rekomendasi
            </h3>
            <p className="text-gray-600">
              Terima rekomendasi jurusan yang paling sesuai dengan profil Anda
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Siap Menemukan Masa Depan Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan siswa yang telah menemukan jalur pendidikan yang tepat
          </p>
          <button
            onClick={onStartTest}
            className="bg-white text-blue-600 text-lg font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Mulai Sekarang - Gratis!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;