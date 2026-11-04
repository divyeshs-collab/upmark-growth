import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Active Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brandBg text-darkText font-sans selection:bg-electric-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Core Active Website Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal Routes */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/cookies" element={<LegalPage />} />

            {/* Seamless Redirects for Removed / Legacy Routes */}
            <Route path="/pricing" element={<Navigate to="/services#pricing" replace />} />
            <Route path="/services/web-development" element={<Navigate to="/services#web-development" replace />} />
            <Route path="/services/aeo-optimisation" element={<Navigate to="/services#aeo-optimisation" replace />} />
            <Route path="/services/creative-agency" element={<Navigate to="/services#creative-agency" replace />} />
            <Route path="/web-development" element={<Navigate to="/services#web-development" replace />} />
            <Route path="/aeo-optimisation" element={<Navigate to="/services#aeo-optimisation" replace />} />
            <Route path="/creative-agency" element={<Navigate to="/services#creative-agency" replace />} />
            <Route path="/audit" element={<Navigate to="/contact" replace />} />
            <Route path="/book-call" element={<Navigate to="/contact" replace />} />
            <Route path="/thank-you" element={<Navigate to="/contact" replace />} />

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
