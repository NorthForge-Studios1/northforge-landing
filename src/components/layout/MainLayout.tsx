import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-900 mt-20 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NorthForge Studios. Forging the future.</p>
      </footer>
    </div>
  );
};
