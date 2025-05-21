
import * as React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Community from '@/components/Community';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from 'lucide-react';

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
        
        {/* Exam Prep Teaser Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block mb-3">
                    <span className="bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium">
                      New Feature
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Competitive Exam Preparation</h2>
                  <p className="text-muted-foreground mb-6">
                    We offer specialized preparation for Board Exams, JEE Main, NEET, UPSC, SSC, and more with personalized study plans tailored for your success.
                  </p>
                  <div>
                    <Link to="/exam-prep">
                      <Button className="group bg-gradient-to-r from-emerald-500 to-indigo-600">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Explore Exam Prep
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 p-8 md:p-12 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    {["Board Exams", "JEE Main", "NEET", "UPSC"].map((exam, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">{exam}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Personalized study plan</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Community />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
