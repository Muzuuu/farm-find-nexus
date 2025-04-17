
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LandListing } from '@/data/mockData';

interface LandCardProps {
  land: LandListing;
}

const LandCard: React.FC<LandCardProps> = ({ land }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-farm-green-100">
        <img 
          src={land.imageUrl} 
          alt={land.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-farm-green-800 mb-1">{land.title}</h3>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{land.location}</span>
        </div>
        <div className="mb-3">
          <div className="text-gray-600 text-sm">
            <span className="font-medium">Size:</span> {land.size}
          </div>
          <div className="text-gray-600 text-sm">
            <span className="font-medium">Soil Type:</span> {land.soilType}
          </div>
          <div className="text-gray-600 text-sm font-medium">
            {land.price}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{land.description}</p>
        <Button className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white">
          Get Land
        </Button>
      </div>
    </div>
  );
};

export default LandCard;
