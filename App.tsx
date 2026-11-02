import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-muted">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <div className="mx-auto max-w-5xl px-6 pb-24 md:px-8">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Publications />
          <Contact />
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
