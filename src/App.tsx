import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LabsForgeSim from './pages/LabsForgeSim';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="labs/forge-sim" element={<LabsForgeSim />} />
      </Route>
    </Routes>
  );
}

export default App;
