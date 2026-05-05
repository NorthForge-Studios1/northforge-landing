import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Forum } from './pages/Forum/Forum';
import { UserProfile } from './pages/Profile/UserProfile';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { ModalContext } from './context/ModalContext';
import { SubmitModal } from './components/modals/SubmitModal';
import { ContactModal } from './components/modals/ContactModal';

const App: React.FC = () => {
  const [submitOpen, setSubmitOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openSubmit: () => setSubmitOpen(true),
        openContact: () => setContactOpen(true),
      }}
    >
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="forum" element={<Forum />} />
              <Route path="profile/:id" element={<UserProfile />} />
              <Route path="profile/me" element={<UserProfile />} />
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="projects/*" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
        <SubmitModal open={submitOpen} onClose={() => setSubmitOpen(false)} />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </AuthProvider>
    </ModalContext.Provider>
  );
};

export default App;
