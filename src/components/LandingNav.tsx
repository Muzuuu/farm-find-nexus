
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const LandingNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-farm-green-600">FarmFindNexus</div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-farm-green-600 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-farm-green-600 transition-colors"
            >
              How It Works
            </button>
            <Link to="/login" className="text-gray-700 hover:text-farm-green-600 transition-colors">
              Login
            </Link>
            <Button 
              className="bg-farm-green-600 hover:bg-farm-green-700 text-white"
              asChild
            >
              <Link to="/signup">
                Sign Up
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
