
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserRole } from '@/contexts/UserContext';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('owner');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Sign up failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Sign up failed",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send this data to a server
    // For now, we'll just store it in localStorage
    localStorage.setItem('userSignupData', JSON.stringify({
      name,
      email,
      role: selectedRole
    }));
    
    toast({
      title: "Sign up successful",
      description: "Your account has been created. Please log in.",
    });
    
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-farm-green-600">FarmFindNexus</h1>
          <p className="mt-2 text-gray-600">Create an account to get started</p>
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
          
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1"
              />
            </div>
            
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="mt-1"
              />
            </div>
            
            <div>
              <Button
                type="submit"
                className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white"
              >
                Sign Up
              </Button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <a href="/login" className="text-farm-green-600 hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
