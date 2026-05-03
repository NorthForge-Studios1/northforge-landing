import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const { user, loading, loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold text-white tracking-tighter">
            <span className="text-blue-500">NORTH</span>FORGE
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/projects" className="text-sm text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/labs" className="text-sm text-gray-300 hover:text-white transition-colors">
              Labs
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {loading ? (
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
          ) : user ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </button>
              <div className="relative group">
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer border border-gray-700 hover:border-gray-500 transition-colors"
                />
                <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900 rounded-lg shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="px-4 py-2 border-b border-gray-800">
                    <p className="text-sm text-white truncate">{user.displayName || user.email}</p>
                    <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loginWithGoogle}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </motion.button>
          )}
        </div>
      </div>
    </header>
  );
};
