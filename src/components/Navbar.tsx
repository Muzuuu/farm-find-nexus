
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingCart, LogOut, Settings } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import ProfileModal from './ProfileModal';
import { useToast } from "@/components/ui/use-toast";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const { toast } = useToast();
  
  // Track cart items in localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const cart = JSON.parse(cartData);
        setCartItemCount(cart.length || 0);
      }
    };
    
    // Initial cart count
    updateCartCount();
    
    // Listen for storage events (cart updates)
    window.addEventListener('storage', updateCartCount);
    
    // Custom event for same-tab updates
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={user.isAuthenticated ? '/dashboard' : '/'} className="flex-shrink-0 flex items-center">
              <span className="text-farm-green-600 font-bold text-2xl">FarmFindNexus</span>
            </Link>
            
            {/* Dashboard links - only visible when authenticated */}
            {user.isAuthenticated && (
              <div className="hidden md:ml-6 md:flex md:space-x-4">
                <Link 
                  to="/dashboard" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green-600"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/farmstore" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green-600"
                >
                  Farm Store
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            {user.isAuthenticated && (
              <>
                {/* Shopping Cart */}
                <Link to="/cart" className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-farm-green-100 text-farm-green-600">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                
                {/* User Menu */}
                <NavigationMenu className="ml-2">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="h-10 w-10 p-0 rounded-full bg-farm-green-100 text-farm-green-600 hover:bg-farm-green-200">
                        <User className="h-5 w-5" />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-2">
                          <div className="py-2 px-4 text-sm font-medium text-gray-800 border-b mb-2">
                            <span className="capitalize">
                              {user.role} Account
                            </span>
                          </div>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start text-sm"
                            onClick={toggleProfileModal}
                          >
                            <User className="mr-2 h-4 w-4" />
                            View Profile
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start text-sm"
                            onClick={handleLogout}
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                          </Button>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </>
            )}
            
            {/* Login/signup buttons for unauthenticated users */}
            {!user.isAuthenticated && (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

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
