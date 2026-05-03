import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import LabsForgeSim from './pages/LabsForgeSim';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Forum } from './pages/Forum/Forum';
import { UserProfile } from './pages/Profile/UserProfile';
import { Dashboard } from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="labs" element={<LabsForgeSim />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="forum" element={<Forum />} />
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="profile/me" element={<UserProfile />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="projects/*" element={<Dashboard />} /> {/* Temp mapping to dashboard */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
