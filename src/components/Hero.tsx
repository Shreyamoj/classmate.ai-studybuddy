
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Decorative curved shapes */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-indigo-600/5 dark:bg-indigo-600/10 -z-10 overflow-hidden">
        <div className="w-full h-64 bg-white dark:bg-gray-900 rounded-[100%] translate-y-[60%] transition-colors duration-300"></div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-blob decorative" data-speed="0.03"></div>
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000 decorative" data-speed="0.05"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000 decorative" data-speed="0.04"></div>
      
      {/* Small decorative elements */}
      <div className="absolute top-20 left-[20%] w-8 h-8 bg-indigo-500/30 rounded-full blur-sm -z-10 animate-float decorative" data-speed="0.08"></div>
      <div className="absolute top-40 right-[30%] w-4 h-4 bg-emerald-500/30 rounded-full blur-sm -z-10 animate-float animation-delay-2000 decorative" data-speed="0.1"></div>
      <div className="absolute bottom-20 left-[30%] w-6 h-6 bg-blue-500/30 rounded-full blur-sm -z-10 animate-float animation-delay-4000 decorative" data-speed="0.06"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="relative inline-block mb-6">
              <h1 className="font-bold relative z-10">
                <span className="bg-gradient-to-r from-emerald-500 to-indigo-600 text-transparent bg-clip-text">AI-Powered Learning</span>
                <br />
                Personalized for You
              </h1>
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-full blur-md -z-10 transform -rotate-1 lg:w-4/5"></div>
            </div>
            <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Learn faster and more effectively with personalized AI tutoring and a worldwide community of students. Get answers, feedback, and support 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in" style={{animationDelay: "200ms"}}>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-indigo-600 text-lg px-8 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 group">
                Try Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300">
                Learn More
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground dark:text-gray-400 animate-fade-in" style={{animationDelay: "400ms"}}>
              <p>✓ No credit card required &nbsp; ✓ Cancel anytime &nbsp; ✓ Free tier available</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 lg:p-6 max-w-lg mx-auto animate-fade-in hover:shadow-2xl transition-all duration-500 dark:border dark:border-gray-700" style={{animationDelay: "300ms"}}>
              <div className="bg-slate-100 dark:bg-gray-700 rounded-lg p-4 mb-4 animate-slide-in transform hover:-translate-y-1 transition-transform duration-300" style={{animationDelay: "500ms"}}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 flex items-center justify-center text-white text-xs animate-pulse">
                    AI
                  </div>
                  <div className="flex-1 dark:text-white">
                    <p className="text-sm">How would you solve this quadratic equation: 2x² + 5x - 3 = 0?</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-gray-750 dark:bg-opacity-50 rounded-lg p-4 animate-slide-in transform hover:-translate-y-1 transition-transform duration-300" style={{animationDelay: "700ms"}}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 flex items-center justify-center text-white text-xs animate-pulse">
                    AI
                  </div>
                  <div className="flex-1 dark:text-white">
                    <p className="text-sm">I'll walk you through solving this step-by-step:</p>
                    <p className="text-sm mt-2">1. We can use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a</p>
                    <p className="text-sm mt-2">2. For 2x² + 5x - 3 = 0, we have a=2, b=5, c=-3</p>
                    <p className="text-sm mt-2">3. Substituting: x = (-5 ± √(25 - 4×2×(-3))) / (2×2)</p>
                    <p className="text-sm mt-2 font-medium">Solution: x = 0.5 or x = -3</p>
                    <p className="text-sm mt-2">Would you like me to explain any part in more detail?</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 relative animate-fade-in group" style={{animationDelay: "900ms"}}>
                <input 
                  type="text" 
                  placeholder="Ask your question..." 
                  className="w-full p-3 pr-12 border border-slate-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                />
                <Button className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-emerald-500 to-indigo-600 transition-all duration-300 group-hover:shadow-md">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-indigo-300/30 rounded-full blur-xl -z-10 animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-emerald-300/20 rounded-full blur-xl -z-10 animate-float" style={{animationDelay: "1.5s"}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-indigo-600/5 dark:bg-indigo-600/10 -z-10 overflow-hidden">
        <div className="w-full h-40 bg-white dark:bg-gray-900 rounded-[100%] translate-y-[-60%] transition-colors duration-300"></div>
      </div>
    </section>
  );
};

export default Hero;
