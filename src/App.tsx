import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import LabsForgeSim from './pages/LabsForgeSim';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Placeholder for Dashboard until we create it
const DashboardPlaceholder = () => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    <p className="text-gray-400">Welcome to your dashboard.</p>
  </div>
);

// Placeholder for Projects until we create it
const ProjectsPlaceholder = () => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold mb-4">Projects Feed</h1>
    <p className="text-gray-400">Discover amazing projects.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="labs" element={<LabsForgeSim />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="dashboard/*" element={<DashboardPlaceholder />} />
            <Route path="projects/*" element={<ProjectsPlaceholder />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
