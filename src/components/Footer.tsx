import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 animate-pulse"></div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-emerald-500 to-indigo-600 bg-clip-text text-transparent">StudyBuddy</span>
            </div>
            <p className="text-slate-300 mb-6">
              Personalized AI learning and worldwide student community platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2025 StudyBuddy. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
