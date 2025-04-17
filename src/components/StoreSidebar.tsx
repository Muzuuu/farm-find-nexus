
import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Tractor, 
  Leaf, 
  Sprout, 
  ShoppingCart,
  Menu, 
  X 
} from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

interface StoreSidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
}

const StoreSidebar: React.FC<StoreSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  isMobileOpen,
  toggleMobileSidebar
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-white shadow-md rounded-lg ${isMobileOpen ? 'block' : 'hidden'} md:block`}>
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-xl font-bold text-farm-green-600 flex items-center">
          <ShoppingCart className="mr-2 h-5 w-5" /> 
          Farm Store
        </h2>
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:flex"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden" 
            onClick={toggleMobileSidebar}
          >
            <X size={20} />
          </Button>
        </div>
      </div>
      
      <Collapsible open={isOpen} className="md:block">
        <CollapsibleContent className="p-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              onClick={() => onSelectCategory(null)}
              className={`w-full justify-start ${!selectedCategory ? 'bg-farm-green-50 text-farm-green-700' : ''}`}
            >
              All Products
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => onSelectCategory('fertilizer')}
              className={`w-full justify-start ${selectedCategory === 'fertilizer' ? 'bg-farm-green-50 text-farm-green-700' : ''}`}
            >
              <Leaf className="mr-2 h-4 w-4" /> 
              Fertilizers
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => onSelectCategory('seed')}
              className={`w-full justify-start ${selectedCategory === 'seed' ? 'bg-farm-green-50 text-farm-green-700' : ''}`}
            >
              <Sprout className="mr-2 h-4 w-4" /> 
              Seeds
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => onSelectCategory('equipment')}
              className={`w-full justify-start ${selectedCategory === 'equipment' ? 'bg-farm-green-50 text-farm-green-700' : ''}`}
            >
              <Tractor className="mr-2 h-4 w-4" /> 
              Equipment
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default StoreSidebar;
