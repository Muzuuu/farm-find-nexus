
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, UserRole } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('owner');
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically authenticate with a server
    if (email && password) {
      // Mock successful login
      updateUser({
        id: '1',
        name: 'User',
        email,
        role: selectedRole,
        isAuthenticated: true,
      });
      
      toast({
        title: "Login successful",
        description: `Welcome back! You are logged in as a ${selectedRole}.`,
      });
      
      navigate('/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-farm-green-600">FarmFindNexus</h1>
          <p className="mt-2 text-gray-600">Sign in to connect with farmers and landowners</p>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleRoleSelect('owner')}
              className={`px-6 py-2 rounded-lg ${
                selectedRole === 'owner'
                  ? 'bg-farm-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Owner
            </button>
            <button
              onClick={() => handleRoleSelect('farmer')}
              className={`px-6 py-2 rounded-lg ${
                selectedRole === 'farmer'
                  ? 'bg-farm-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Farmer
            </button>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="mt-1"
              />
            </div>
            
            <div>
              <Button
                type="submit"
                className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white"
              >
                Sign in
              </Button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-farm-green-600 hover:underline">Sign up</a>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                Sign in with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
