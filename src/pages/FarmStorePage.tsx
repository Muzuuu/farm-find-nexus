
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import { storeItems } from '@/data/storeItems';
import StoreSidebar from '@/components/StoreSidebar';
import ProductCard from '@/components/ProductCard';

const FarmStorePage: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user.isAuthenticated) {
      navigate('/login');
    }
  }, [user.isAuthenticated, navigate]);
  
  // Filter products based on selected category and search query
  const filteredProducts = storeItems.filter(item => 
    (selectedCategory === null || item.category === selectedCategory) &&
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar (same as in DashboardPage but dedicated to FarmStore) */}
          <div className={`md:w-1/4 lg:w-1/5 ${isMobileSidebarOpen ? 'fixed inset-0 z-50 bg-black/50' : ''}`}>
            <div className={`md:static ${isMobileSidebarOpen ? 'fixed left-0 top-0 bottom-0 w-4/5 max-w-xs z-50 overflow-auto' : ''}`}>
              <StoreSidebar 
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isMobileOpen={isMobileSidebarOpen}
                toggleMobileSidebar={toggleMobileSidebar}
              />
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No products found for the selected criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 FarmFindNexus. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-farm-green-600 hover:underline mx-2">Terms of Service</a>
              <a href="#" className="text-farm-green-600 hover:underline mx-2">Privacy Policy</a>
              <a href="#" className="text-farm-green-600 hover:underline mx-2">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmStorePage;
