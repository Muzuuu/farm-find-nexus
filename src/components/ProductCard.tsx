
import React from 'react';
import { StoreItem } from '@/data/storeItems';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Tag } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: StoreItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceed to checkout",
      description: `Buying ${product.name}`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 h-12 overflow-hidden">{product.description}</p>
        
        <div className="flex items-center mt-2">
          <Tag className="h-4 w-4 text-farm-green-600 mr-1" />
          <span className="text-farm-green-700 font-bold">{product.price}</span>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Button 
            variant="outline" 
            className="flex-1 border-farm-green-200 text-farm-green-600 hover:bg-farm-green-50"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
          </Button>
          <Button 
            className="flex-1 bg-farm-green-600 hover:bg-farm-green-700 text-white"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
