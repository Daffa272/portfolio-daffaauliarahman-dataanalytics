import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Skills & Tools Section */}
          <Skills />

          {/* Featured Case Studies Section */}
          <FeaturedProjects />

          {/* Live Interactive Analytics Dashboard Section */}
          <AnalyticsDashboard />

          {/* Career Experience & Education Section */}
          <ExperienceTimeline />

          {/* Analytical Writing & Articles Section */}
          <ArticlesSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume View & Download Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
