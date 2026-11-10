// Nov 2026: NorthForge pasa a ser solo la presentación del estudio. Se quitaron el foro, los perfiles,
// el panel y la publicación de proyectos de otros (los archivos viejos siguen en el repo, sin usarse).
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NfPrivacy from './pages/NfPrivacy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<NfPrivacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
