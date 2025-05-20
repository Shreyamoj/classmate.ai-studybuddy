
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Community from '@/components/Community';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation for elements that enter the viewport
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              entry.target.style.opacity = '1';
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
      
      sections.forEach((section) => {
        section.style.opacity = '0';
        observer.observe(section);
      });
      
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };
    
    animateOnScroll();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Community />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
