
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User, X } from 'lucide-react';
import { useUser, UserRole } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import ProfileModal from './ProfileModal';

const Navbar: React.FC = () => {
  const { user, setRole, logout } = useUser();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const handleRoleChange = (role: UserRole) => {
    setRole(role);
  };

  const handleLogout = () => {
    logout();
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
          
          {user.isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex border border-gray-300 rounded-full p-1">
                <button
                  onClick={() => handleRoleChange('owner')}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    user.role === 'owner'
                      ? 'bg-farm-green-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Owner
                </button>
                <button
                  onClick={() => handleRoleChange('farmer')}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    user.role === 'farmer'
                      ? 'bg-farm-green-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Farmer
                </button>
              </div>
              
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
                className="ml-2 text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50"
              >
                Logout
              </Button>
            </div>
          )}
          
          <div className="md:hidden flex items-center">
            {user.isAuthenticated && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleProfileModal}
                className="mr-2 flex items-center justify-center h-10 w-10 rounded-full bg-farm-green-100 text-farm-green-600"
              >
                <User className="h-5 w-5" />
              </Button>
            )}
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
      {isMobileMenuOpen && user.isAuthenticated && (
        <div className="md:hidden bg-white pt-2 pb-3 space-y-1 shadow-lg">
          <div className="px-4 py-2">
            <div className="flex justify-center border border-gray-300 rounded-full p-1 mb-2">
              <button
                onClick={() => handleRoleChange('owner')}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  user.role === 'owner'
                    ? 'bg-farm-green-500 text-white'
                    : 'text-gray-700'
                }`}
              >
                Owner
              </button>
              <button
                onClick={() => handleRoleChange('farmer')}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  user.role === 'farmer'
                    ? 'bg-farm-green-500 text-white'
                    : 'text-gray-700'
                }`}
              >
                Farmer
              </button>
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
