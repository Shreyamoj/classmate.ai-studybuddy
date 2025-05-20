
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-bold mb-6">
              <span className="gradient-text">AI-Powered Learning</span>
              <br />
              Personalized for You
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Learn faster and more effectively with personalized AI tutoring and a worldwide community of students. Get answers, feedback, and support 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary text-lg px-8">
                Try Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>✓ No credit card required &nbsp; ✓ Cancel anytime &nbsp; ✓ Free tier available</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 lg:p-6 max-w-lg mx-auto animate-fade-in">
              <div className="bg-slate-100 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-xs">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">How would you solve this quadratic equation: 2x² + 5x - 3 = 0?</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white text-xs">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">I'll walk you through solving this step-by-step:</p>
                    <p className="text-sm mt-2">1. We can use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a</p>
                    <p className="text-sm mt-2">2. For 2x² + 5x - 3 = 0, we have a=2, b=5, c=-3</p>
                    <p className="text-sm mt-2">3. Substituting: x = (-5 ± √(25 - 4×2×(-3))) / (2×2)</p>
                    <p className="text-sm mt-2 font-medium">Solution: x = 0.5 or x = -3</p>
                    <p className="text-sm mt-2">Would you like me to explain any part in more detail?</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 relative">
                <input 
                  type="text" 
                  placeholder="Ask your question..." 
                  className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="absolute right-1 top-1 bottom-1 px-3">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
