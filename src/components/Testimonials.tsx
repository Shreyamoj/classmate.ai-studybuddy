
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "EduAI helped me improve my calculus grade from a C to an A-. The personalized explanations made complex concepts much clearer.",
    name: "Rahul S.",
    role: "Engineering Student, Delhi",
    avatar: "https://i.pravatar.cc/150?img=32",
    initials: "RS"
  },
  {
    quote: "As a teacher, I recommend EduAI to all my students. It's like having a personal tutor available 24/7 to reinforce what they learn in class.",
    name: "Professor Sharma",
    role: "Physics Teacher, Mumbai",
    avatar: "https://i.pravatar.cc/150?img=61",
    initials: "PS"
  },
  {
    quote: "The community forums connected me with students facing similar challenges. We formed a study group that meets weekly now!",
    name: "Priya K.",
    role: "Graduate Student, Bangalore",
    avatar: "https://i.pravatar.cc/150?img=47",
    initials: "PK"
  },
  {
    quote: "I was struggling with organic chemistry until I found EduAI. The step-by-step problem solving approach helped me finally understand reaction mechanisms.",
    name: "Arjun M.",
    role: "Pre-Med Student, Chennai",
    avatar: "https://i.pravatar.cc/150?img=68",
    initials: "AM"
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students who have transformed their learning experience.
          </p>
        </div>

        <div className="px-8 md:px-16 mb-12">
          <Carousel setApi={setApi} className="animate-fade-in" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-6">
                          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-purple/30">
                            <path d="M13.5 36H0V24C0 17.6348 1.6875 12.7201 5.0625 9.25586C8.4375 5.72852 13.2188 3.58887 19.4062 2.83691L22.5 9C17.625 9.37988 13.9688 10.7432 11.5312 13.0898C9.15625 15.4365 8.0625 18.4658 8.25 22.1777H13.5V36ZM36 36H22.5V24C22.5 17.6348 24.1875 12.7201 27.5625 9.25586C30.9375 5.72852 35.7188 3.58887 41.9062 2.83691L45 9C40.125 9.37988 36.4688 10.7432 34.0312 13.0898C31.6562 15.4365 30.5625 18.4658 30.75 22.1777H36V36Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                        <div className="flex items-center gap-3">
                          <Avatar className="transition-transform hover:scale-110 duration-300">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static left-0 right-auto translate-x-0 mr-2" />
              <div className="flex gap-1 items-center">
                {testimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static right-0 left-auto translate-x-0 ml-2" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl text-white p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your learning experience?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our global community of learners and get personalized AI tutoring today.
          </p>
          <button className="bg-white text-brand-purple hover:bg-white/90 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 transform">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
