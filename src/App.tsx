import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Initiatives } from '@/sections/Initiatives';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Initiatives />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
