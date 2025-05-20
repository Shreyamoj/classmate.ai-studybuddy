
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 group-hover:animate-pulse transition-all duration-500"></div>
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-emerald-500 to-indigo-600 bg-clip-text text-transparent">StudyBuddy</span>
          </a>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} className="text-indigo-600" /> : <Menu size={24} className="text-indigo-600" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Features</a>
            <a href="#community" className="text-sm font-medium hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Community</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">How It Works</a>
            <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">Log in</Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300">Sign up</Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-scale-in">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#community" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50">Log in</Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-500 to-indigo-600">Sign up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
