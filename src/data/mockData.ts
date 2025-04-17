
export interface LandListing {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  location: string;
  size: string;
  soilType: string;
  price: string;
  imageUrl: string;
}

export interface FarmerProfile {
  id: string;
  name: string;
  experience: string;
  specialization: string;
  location: string;
  rating: number;
  imageUrl: string;
}

export const mockLands: LandListing[] = [
  {
    id: 'land1',
    ownerId: 'owner1',
    title: 'Fertile Agricultural Land',
    description: 'Ideal for seasonal crops with abundant water supply',
    location: 'Bangalore Rural',
    size: '5 acres',
    soilType: 'Red soil',
    price: '₹25,000/month',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'land2',
    ownerId: 'owner2',
    title: 'Organic Farmland',
    description: 'Certified organic land perfect for vegetable farming',
    location: 'Mysore',
    size: '3 acres',
    soilType: 'Black soil',
    price: '₹18,000/month',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'land3',
    ownerId: 'owner3',
    title: 'Riverside Plantation Area',
    description: 'Rich soil near river, suitable for multiple crops',
    location: 'Belgaum',
    size: '7 acres',
    soilType: 'Alluvial soil',
    price: '₹30,000/month',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'land4',
    ownerId: 'owner4',
    title: 'Highland Plantation',
    description: 'Perfect for coffee and spice cultivation',
    location: 'Coorg',
    size: '4 acres',
    soilType: 'Forest soil',
    price: '₹22,000/month',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'land5',
    ownerId: 'owner5',
    title: 'Mixed Farming Land',
    description: 'Suitable for both crops and animal husbandry',
    location: 'Tumkur',
    size: '6 acres',
    soilType: 'Laterite soil',
    price: '₹28,000/month',
    imageUrl: '/placeholder.svg',
  },
];

export const mockFarmers: FarmerProfile[] = [
  {
    id: 'farmer1',
    name: 'Rajesh Kumar',
    experience: '15 years',
    specialization: 'Organic Farming',
    location: 'Bangalore Rural',
    rating: 4.8,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'farmer2',
    name: 'Anita Sharma',
    experience: '8 years',
    specialization: 'Vegetable Cultivation',
    location: 'Mysore',
    rating: 4.5,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'farmer3',
    name: 'Suresh Patel',
    experience: '20 years',
    specialization: 'Rice Farming',
    location: 'Mandya',
    rating: 4.9,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'farmer4',
    name: 'Lakshmi Narayana',
    experience: '12 years',
    specialization: 'Coffee Plantation',
    location: 'Coorg',
    rating: 4.7,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'farmer5',
    name: 'Venkatesh Reddy',
    experience: '10 years',
    specialization: 'Mixed Farming',
    location: 'Tumkur',
    rating: 4.6,
    imageUrl: '/placeholder.svg',
  },
];
