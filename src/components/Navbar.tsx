
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-600 group-hover:animate-pulse transition-all duration-500"></div>
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-emerald-500 to-indigo-600 bg-clip-text text-transparent">StudyBuddy</span>
          </a>

          {/* Mobile menu button */}
          <div className="flex gap-2 md:hidden">
            <Toggle 
              className="p-2" 
              onClick={toggleTheme} 
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Toggle>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} className="text-indigo-600 dark:text-indigo-400" /> : <Menu size={24} className="text-indigo-600 dark:text-indigo-400" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Features</a>
            <a href="#community" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Community</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">How It Works</a>
            <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Toggle 
              className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full" 
              onClick={toggleTheme} 
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </Toggle>
            <Button variant="outline" size="sm" className="border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50">Log in</Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30 transition-all duration-300">Sign up</Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 animate-scale-in z-50">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#community" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex-1 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50">Log in</Button>
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
