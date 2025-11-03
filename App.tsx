import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return (
    <div className="bg-black leading-relaxed text-zinc-400 antialiased selection:bg-sky-300 selection:text-sky-900">
       <div className="fixed inset-0 z-0 transition-all duration-300" style={backgroundStyle}></div>
      <div className="relative z-10">
        <Header />
        <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Hero />
            <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;