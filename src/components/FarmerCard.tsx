
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FarmerProfile } from '@/data/mockData';

interface FarmerCardProps {
  farmer: FarmerProfile;
}

const FarmerCard: React.FC<FarmerCardProps> = ({ farmer }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-farm-earth-100">
        <img 
          src={farmer.imageUrl} 
          alt={farmer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-farm-earth-800 mb-1">{farmer.name}</h3>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{farmer.location}</span>
        </div>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{farmer.rating}</span>
        </div>
        <div className="mb-3">
          <div className="text-gray-600 text-sm">
            <span className="font-medium">Experience:</span> {farmer.experience}
          </div>
          <div className="text-gray-600 text-sm">
            <span className="font-medium">Specialization:</span> {farmer.specialization}
          </div>
        </div>
        <Button className="w-full bg-farm-earth-600 hover:bg-farm-earth-700 text-white">
          Hire Farmer
        </Button>
      </div>
    </div>
  );
};

export default FarmerCard;
