
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "EduAI helped me improve my calculus grade from a C to an A-. The personalized explanations made complex concepts much clearer.",
    name: "Jamie L.",
    role: "Undergraduate Student",
    avatar: "https://i.pravatar.cc/150?img=32",
    initials: "JL"
  },
  {
    quote: "As a teacher, I recommend EduAI to all my students. It's like having a personal tutor available 24/7 to reinforce what they learn in class.",
    name: "Professor Williams",
    role: "High School Physics Teacher",
    avatar: "https://i.pravatar.cc/150?img=61",
    initials: "PW"
  },
  {
    quote: "The community forums connected me with students facing similar challenges. We formed a study group that meets weekly now!",
    name: "Raj P.",
    role: "Graduate Student",
    avatar: "https://i.pravatar.cc/150?img=68",
    initials: "RP"
  },
  {
    quote: "I was struggling with organic chemistry until I found EduAI. The step-by-step problem solving approach helped me finally understand reaction mechanisms.",
    name: "Taylor M.",
    role: "Pre-Med Student",
    avatar: "https://i.pravatar.cc/150?img=47",
    initials: "TM"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students who have transformed their learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-purple/30">
                      <path d="M13.5 36H0V24C0 17.6348 1.6875 12.7201 5.0625 9.25586C8.4375 5.72852 13.2188 3.58887 19.4062 2.83691L22.5 9C17.625 9.37988 13.9688 10.7432 11.5312 13.0898C9.15625 15.4365 8.0625 18.4658 8.25 22.1777H13.5V36ZM36 36H22.5V24C22.5 17.6348 24.1875 12.7201 27.5625 9.25586C30.9375 5.72852 35.7188 3.58887 41.9062 2.83691L45 9C40.125 9.37988 36.4688 10.7432 34.0312 13.0898C31.6562 15.4365 30.5625 18.4658 30.75 22.1777H36V36Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl text-white p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your learning experience?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our global community of learners and get personalized AI tutoring today.
          </p>
          <button className="bg-white text-brand-purple hover:bg-white/90 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
