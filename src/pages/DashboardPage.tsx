
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import LandCard from '@/components/LandCard';
import FarmerCard from '@/components/FarmerCard';
import { mockLands, mockFarmers } from '@/data/mockData';

type FilterType = 'all' | 'fertilizer' | 'seed' | 'equipments';

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Filter data based on search query and active filter
  const filteredLands = mockLands.filter(land => 
    land.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    land.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredFarmers = mockFarmers.filter(farmer => 
    farmer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by location..."
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Button 
              onClick={() => handleFilterChange('all')}
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' 
                ? 'bg-farm-green-600 text-white hover:bg-farm-green-700' 
                : 'text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50'
              }
            >
              All
            </Button>
            <Button 
              onClick={() => handleFilterChange('fertilizer')}
              variant={activeFilter === 'fertilizer' ? 'default' : 'outline'}
              className={activeFilter === 'fertilizer' 
                ? 'bg-farm-green-600 text-white hover:bg-farm-green-700' 
                : 'text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50'
              }
            >
              Fertilizer
            </Button>
            <Button 
              onClick={() => handleFilterChange('seed')}
              variant={activeFilter === 'seed' ? 'default' : 'outline'}
              className={activeFilter === 'seed' 
                ? 'bg-farm-green-600 text-white hover:bg-farm-green-700' 
                : 'text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50'
              }
            >
              Seed
            </Button>
            <Button 
              onClick={() => handleFilterChange('equipments')}
              variant={activeFilter === 'equipments' ? 'default' : 'outline'}
              className={activeFilter === 'equipments' 
                ? 'bg-farm-green-600 text-white hover:bg-farm-green-700' 
                : 'text-farm-green-600 border-farm-green-200 hover:bg-farm-green-50'
              }
            >
              Equipments
            </Button>
          </div>
        </div>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.role === 'farmer' ? (
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
