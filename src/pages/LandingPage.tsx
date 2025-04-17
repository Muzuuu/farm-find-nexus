
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Handshake, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LandingNav from '@/components/LandingNav';

const LandingPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Bridging Land & Farmers
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
              Creating sustainable agricultural partnerships that benefit landowners, farmers, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-farm-green-600 hover:bg-farm-green-700 text-white flex items-center gap-2"
                asChild
              >
                <Link to="/login">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop" 
                alt="Farmers and landowners working together" 
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-farm-green-700 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                We reduce land waste by connecting landowners who can't farm with farmers who can. Our platform empowers both parties to create sustainable partnerships that benefit everyone involved.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-farm-green-600 italic text-gray-600">
                "My land was sitting idle for years until I found this platform. Now it's productive again, and I've formed a wonderful partnership with a local farmer."
                <p className="mt-2 font-semibold not-italic">— Sarah T., Landowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-farm-green-700 mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-farm-earth-700 mb-8">For Landowners</h3>
              <div className="space-y-12">
                <div className="flex items-start gap-4">
                  <div className="bg-farm-green-100 p-3 rounded-full">
                    <Leaf className="text-farm-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Sign up & verify land</h4>
                    <p className="text-gray-600">Create your profile and provide details about your land, its size, and location.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-farm-green-100 p-3 rounded-full">
                    <Handshake className="text-farm-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Connect with trusted farmers</h4>
                    <p className="text-gray-600">Browse through profiles of verified local farmers and find your perfect match.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-farm-green-100 p-3 rounded-full">
                    <Map className="text-farm-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Watch your land thrive!</h4>
                    <p className="text-gray-600">See your land become productive while creating opportunities for local farmers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-farm-earth-700 mb-8">For Farmers</h3>
              <div className="space-y-12">
                <div className="flex items-start gap-4">
                  <div className="bg-farm-earth-100 p-3 rounded-full">
                    <Leaf className="text-farm-earth-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Sign up & set preferences</h4>
                    <p className="text-gray-600">Create your profile highlighting your experience, skills, and farming interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-farm-earth-100 p-3 rounded-full">
                    <Map className="text-farm-earth-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Browse available lands</h4>
                    <p className="text-gray-600">Search through our database of verified lands to find the perfect plot for your farming needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-farm-earth-100 p-3 rounded-full">
                    <Handshake className="text-farm-earth-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Start farming & growing!</h4>
                    <p className="text-gray-600">Build a sustainable partnership with landowners and grow your agricultural business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" 
              alt="Vibrant farmland" 
              className="rounded-lg shadow-xl w-full max-w-4xl h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-20 bg-farm-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the movement. Cultivate the future.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of a growing community that's revolutionizing land use and agricultural opportunities.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-farm-green-700 hover:bg-gray-100 px-8"
            asChild
          >
            <Link to="/login">
              Login / Sign Up
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">FarmFindNexus</h2>
              <p className="text-gray-400">Connecting land with purpose</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-farm-green-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-farm-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-farm-green-400 transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 FarmFindNexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
