import { Navigate, Route, Routes } from 'react-router';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/home/HomePage';
import { WaitlistPage } from './pages/WaitlistPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PlansPage } from './pages/PlansPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { OnboardingProvider } from './onboarding/OnboardingContext';
import { SignupStep } from './onboarding/steps/SignupStep';
import { ConfirmStep } from './onboarding/steps/ConfirmStep';
import { CompanyStep } from './onboarding/steps/CompanyStep';
import { PlanStep } from './onboarding/steps/PlanStep';
import { CheckoutStep } from './onboarding/steps/CheckoutStep';
import { WelcomeStep } from './onboarding/steps/WelcomeStep';

export function App() {
  return (
    <OnboardingProvider>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/signup" element={<SignupStep />} />
        <Route path="/signup/confirm" element={<ConfirmStep />} />
        <Route path="/onboarding" element={<Navigate to="/onboarding/company" replace />} />
        <Route path="/onboarding/company" element={<CompanyStep />} />
        <Route path="/onboarding/plan" element={<PlanStep />} />
        <Route path="/onboarding/payment" element={<CheckoutStep />} />
        <Route path="/onboarding/welcome" element={<WelcomeStep />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </OnboardingProvider>
  );
}
