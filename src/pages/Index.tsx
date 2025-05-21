
import * as React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ExamPrep from '@/components/ExamPrep';
import Community from '@/components/Community';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  React.useEffect(() => {
    // Enhanced animation for elements that enter the viewport
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              // Use className instead of style for TypeScript compatibility
              entry.target.classList.remove('opacity-0');
              entry.target.classList.add('opacity-100');
              
              // Add a staggered animation to child elements
              const animatedChildren = entry.target.querySelectorAll('.stagger-animate');
              animatedChildren.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate-scale-in');
                  child.classList.remove('opacity-0');
                  child.classList.add('opacity-100');
                }, index * 150);
              });
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
        section.classList.add('opacity-0');
        observer.observe(section);
      });
      
      // Add a mouse movement parallax effect to the hero section
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const handleMouseMove = (e: MouseEvent) => {
          const decorativeElements = heroSection.querySelectorAll('.decorative');
          decorativeElements.forEach((el) => {
            const element = el as HTMLElement;
            const speed = element.getAttribute('data-speed') || '0.05';
            const speedValue = parseFloat(speed);
            const x = (window.innerWidth - e.pageX * speedValue) / 100;
            const y = (window.innerHeight - e.pageY * speedValue) / 100;
            element.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
        };
        
        heroSection.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          heroSection.removeEventListener('mousemove', handleMouseMove);
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }
      
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
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <ExamPrep />
        <Community />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
