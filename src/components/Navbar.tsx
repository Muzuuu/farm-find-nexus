
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User, X, ShoppingCart } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import ProfileModal from './ProfileModal';
import { useToast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { toast } = useToast();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-farm-green-600 font-bold text-2xl">FarmFindNexus</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 text-farm-green-600 font-medium hidden md:block">
              Logged in as: <span className="capitalize">{user.role}</span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-farm-green-100 text-farm-green-600"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">0</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleProfileModal}
              className="ml-2 flex items-center justify-center h-10 w-10 rounded-full bg-farm-green-100 text-farm-green-600 hover:bg-farm-green-200"
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="ml-2 text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50 hidden md:inline-flex"
            >
              Logout
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-farm-green-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-3 space-y-1 shadow-lg">
          <div className="px-4 py-2">
            <div className="text-farm-green-600 font-medium mb-2">
              Logged in as: <span className="capitalize">{user.role}</span>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="w-full text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50"
            >
              Logout
            </Button>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <ProfileModal 
          isOpen={isProfileModalOpen} 
          onClose={toggleProfileModal}
        />
      )}
    </nav>
  );
};

export default Navbar;
