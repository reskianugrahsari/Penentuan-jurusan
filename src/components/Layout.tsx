import React from 'react';
import { BookOpen, Users, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduGuide
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#beranda"
                className={`${
                  currentPage === 'beranda'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className={`${
                  currentPage === 'tentang'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Tentang Kami
              </a>
              <a
                href="#kontak"
                className={`${
                  currentPage === 'kontak'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Kontak
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">EduGuide</span>
              </div>
              <p className="text-gray-300">
                Membantu siswa SMA menemukan jurusan kuliah yang tepat
                berdasarkan minat dan bakat mereka.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Tentang Kami
              </h3>
              <p className="text-gray-300">
                Tim ahli pendidikan yang berpengalaman dalam konseling
                akademik dan pengembangan karir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Kontak
              </h3>
              <p className="text-gray-300">
                Email: info@eduguide.id<br />
                Telepon: (021) 1234-5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 EduGuide. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;