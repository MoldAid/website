import { Route, Routes } from 'react-router';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/home/HomePage';
import { WaitlistPage } from './pages/WaitlistPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PlansPage } from './pages/PlansPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
