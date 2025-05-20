
import React from 'react';
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up For Free",
    description: "Create your account and set up your learning profile in just minutes. No credit card required.",
    color: "brand-purple"
  },
  {
    number: "02",
    title: "Ask Your Question",
    description: "Upload your homework or type your question. Our AI tutor will analyze and provide personalized help.",
    color: "brand-blue"
  },
  {
    number: "03",
    title: "Learn & Improve",
    description: "Receive step-by-step explanations, practice similar problems, and track your progress over time.",
    color: "brand-teal"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform makes learning easy with just a few simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`rounded-xl bg-white shadow-md p-8 relative z-10 h-full card-hover`}>
                  <div 
                    className={`w-12 h-12 rounded-full bg-${step.color} text-white flex items-center justify-center text-xl font-bold mb-6 mx-auto lg:mx-0`}
                    style={{ backgroundColor: `var(--${step.color})` }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">{step.title}</h3>
                  <p className="text-muted-foreground text-center lg:text-left">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 z-20">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
