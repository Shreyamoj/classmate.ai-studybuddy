
import * as React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamPrep from '@/components/ExamPrep';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const ExamPrepPage = () => {
  React.useEffect(() => {
    // Enhanced animation for elements that enter the viewport
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
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
        <section className="py-16 pt-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium">
                  Personalized Learning
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Competitive Exam Preparation</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive resources and personalized study plans to excel in your competitive exams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-muted-foreground">
                    Complete syllabus coverage with in-depth explanations and practice questions for all subjects.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Learn from experienced mentors who have excelled in these exams, with regular doubt-clearing sessions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                  <p className="text-muted-foreground">
                    Track your progress with detailed analytics, identifying strengths and areas for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ExamPrep />
        
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Exam Preparation?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students who have successfully cleared their exams with StudyBuddy's personalized preparation plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-indigo-600 text-lg px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400">
                View Success Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExamPrepPage;
