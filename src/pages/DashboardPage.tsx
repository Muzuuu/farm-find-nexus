
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import LandCard from '@/components/LandCard';
import FarmerCard from '@/components/FarmerCard';
import { mockLands, mockFarmers } from '@/data/mockData';

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user.isAuthenticated) {
      navigate('/login');
    }
  }, [user.isAuthenticated, navigate]);
  
  // Filter data based on search query
  const filteredLands = mockLands.filter(land => 
    land.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    land.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredFarmers = mockFarmers.filter(farmer => 
    farmer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {user.role === 'farmer' ? 'Available Lands' : 'Available Farmers'}
          </h1>
          <p className="text-gray-600">
            {user.role === 'farmer' 
              ? 'Find land to farm and grow your agricultural business' 
              : 'Connect with experienced farmers to cultivate your land'}
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder={user.role === 'farmer' ? "Search lands by location..." : "Search farmers by name or location..."}
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Dashboard Content - Role based */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.role === 'farmer' ? (
            // Show lands to farmers
            filteredLands.length > 0 ? (
              filteredLands.map(land => (
                <LandCard key={land.id} land={land} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No lands found for the selected criteria.</p>
              </div>
            )
          ) : (
            // Show farmers to land owners
            filteredFarmers.length > 0 ? (
              filteredFarmers.map(farmer => (
                <FarmerCard key={farmer.id} farmer={farmer} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No farmers found for the selected criteria.</p>
              </div>
            )
          )}
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

export default DashboardPage;
