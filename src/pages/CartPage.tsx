
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Redirect if not authenticated
    if (!user.isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Load cart from localStorage
    const loadCart = () => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const parsedCart = JSON.parse(cartData);
        setCartItems(parsedCart);
        
        // Calculate total
        const total = parsedCart.reduce((sum: number, item: CartItem) => {
          const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
          return sum + (priceValue * item.quantity);
        }, 0);
        
        setTotalAmount(total);
      }
    };
    
    loadCart();
    
    // Listen for cart updates
    window.addEventListener('storage', loadCart);
    window.addEventListener('cartUpdated', loadCart);
    
    return () => {
      window.removeEventListener('storage', loadCart);
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, [user.isAuthenticated, navigate]);

  const updateCart = (updatedCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    
    // Calculate new total
    const total = updatedCart.reduce((sum, item) => {
      const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return sum + (priceValue * item.quantity);
    }, 0);
    
    setTotalAmount(total);
    
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increaseQuantity = (itemId: string) => {
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedCart = cartItems.map(item => 
      item.id === itemId && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (itemId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedCart);
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "This feature will be implemented soon!",
    });
    // Future implementation: redirect to checkout page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Button 
              onClick={() => navigate('/farmstore')}
              className="bg-farm-green-600 hover:bg-farm-green-700 text-white"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="divide-y">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 flex items-center">
                      <div className="w-16 h-16 mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-farm-green-600 font-bold">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-gray-500 hover:text-farm-green-600"
                        >
                          <MinusCircle size={20} />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-500 hover:text-farm-green-600"
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹100.00</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{(totalAmount + 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white"
                >
                  Proceed to Checkout
                </Button>
                
                <button 
                  onClick={() => navigate('/farmstore')}
                  className="w-full text-farm-green-600 text-sm mt-4 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
