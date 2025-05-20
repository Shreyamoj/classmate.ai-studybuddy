
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-brand-purple" />,
    title: "AI-Powered Tutoring",
    description: "Get personalized help from our advanced AI tutor that adapts to your learning style and pace."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-blue" />,
    title: "Peer-to-Peer Forums",
    description: "Connect with students worldwide to discuss topics, share insights, and solve problems together."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-brand-teal" />,
    title: "Comprehensive Courses",
    description: "Access thousands of courses across subjects with interactive lessons and real-time feedback."
  },
  {
    icon: <Globe className="h-10 w-10 text-brand-coral" />,
    title: "Web-Only Access",
    description: "No downloads or installations needed. Access your learning environment from any device, anywhere."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Powerful Learning Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in your studies with personalized AI assistance and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="mb-4">Free vs. Premium Plans</h3>
              <p className="text-muted-foreground mb-6">
                Choose the plan that's right for you. Start with our free tier and upgrade when you're ready.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Free</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Basic AI tutoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Community access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>5 questions/day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span className="text-muted-foreground">Advanced features</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Premium</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Advanced AI tutoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Unlimited questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>All premium features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-purple to-brand-blue text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="mb-4">Start Learning Today</h3>
              <p className="mb-6">
                Join thousands of students who are already improving their grades and understanding with EduAI.
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold mb-2">$9.99</div>
                <div>per month, billed monthly</div>
                <div className="text-sm mt-1">or $99/year (save 17%)</div>
              </div>
              <button className="bg-white text-brand-purple hover:bg-white/90 font-medium py-2 px-4 rounded-lg transition-colors">
                Start 7-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
