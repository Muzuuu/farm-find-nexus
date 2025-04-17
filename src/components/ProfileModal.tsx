
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aadhaar: '',
    experience: '',
    landProof: null as File | null,
    soilTest: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'landProof' | 'soilTest') => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: e.target.files ? e.target.files[0] : null
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Profile updated",
      description: "Your information has been saved successfully.",
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-farm-green-700">
            {user.role === 'owner' ? 'Landowner Profile' : 'Farmer Profile'}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email ID</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="aadhaar">Aadhaar Number</Label>
            <Input
              id="aadhaar"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="Your Aadhaar number"
              required
            />
          </div>
          
          {user.role === 'owner' ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="landProof">Land Proof Upload</Label>
                <Input
                  id="landProof"
                  name="landProof"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'landProof')}
                  className="cursor-pointer"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="soilTest">Soil Test Report Upload</Label>
                <Input
                  id="soilTest"
                  name="soilTest"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'soilTest')}
                  className="cursor-pointer"
                  required
                />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="experience">Experience (years)</Label>
              <Input
                id="experience"
                name="experience"
                type="number"
                min="0"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years of farming experience"
                required
              />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white"
          >
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
