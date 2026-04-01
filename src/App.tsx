import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PlansPage } from './components/PlansPage';
import { SuccessPage } from './components/SuccessPage';
import { AdminPanel } from './components/AdminPanel';
import { LeadTestPanel } from './components/LeadTestPanel';

import { AddressVerification } from './components/AddressVerification';
import { PlansSection } from './components/PlansSection';

import { WhyWeclix } from './components/WhyWeclix';
import { FamilyBenefits } from './components/FamilyBenefits';

import { FinalCTA } from './components/FinalCTA';
import { StoresMap } from './components/StoresMap';
import { ContactForm } from './components/ContactForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'plans' | 'success'>('home');
  const [userData, setUserData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    documentType: ''
  });
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showTestPanel, setShowTestPanel] = useState(false);

  // Handle URL changes and browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/planos') {
        setCurrentPage('plans');
      } else if (path === '/sucesso') {
        setCurrentPage('success');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL
    handlePopState();

    // Listen for browser back/forward navigation
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigateToPlans = (data: any) => {
    setUserData(data);
    setCurrentPage('plans');
    window.history.pushState(null, '', '/planos');
  };

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    const message = `Vim do Google e quero saber mais sobre o plano Weclix Empresa`;
    const whatsappUrl = `https://wa.me/5516996282862?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', '/');
  };

  const handleBackToPlans = () => {
    setCurrentPage('plans');
    window.history.pushState(null, '', '/planos');
  };

  const handleNewSimulation = () => {
    setUserData({
      name: '',
      whatsapp: '',
      city: '',
      documentType: ''
    });
    setSelectedPlan(null);
    setCurrentPage('home');
    window.history.pushState(null, '', '/');
  };

  // Plans Page
  if (currentPage === 'plans') {
    return (
      <PlansPage 
        userData={userData}
        onBack={handleBackToHome}
        onPlanSelect={handlePlanSelect}
        promotionalGroup={null}
      />
    );
  }

  // Success Page
  if (currentPage === 'success') {
    return (
      <SuccessPage 
        userData={userData}
        selectedPlan={selectedPlan}
        onBack={handleBackToPlans}
        onNewSimulation={handleNewSimulation}
        onUpdateUserData={setUserData}
      />
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section with form */}
      <HeroSection 
        onNavigateToPlans={handleNavigateToPlans}
      />

      {/* Why Weclix Section - Unified section combining previous WhyWillix and FamilyBenefits */}
      <WhyWeclix />

      {/* Family Benefits - Apps and Streaming */}
      <FamilyBenefits />

      {/* Stores Map */}
      <StoresMap />

      {/* Contact Form */}
      <ContactForm />

      {/* Final CTA */}
      <FinalCTA />

      {/* Admin Panel */}
      <AdminPanel 
        isVisible={showAdminPanel}
        onToggle={() => setShowAdminPanel(!showAdminPanel)}
      />

      {/* Lead Test Panel */}
      <LeadTestPanel 
        isVisible={showTestPanel}
        onToggle={() => setShowTestPanel(!showTestPanel)}
      />
    </div>
  );
}