
export interface StoreItem {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  image: string;
  description: string;
  category: 'fertilizer' | 'seed' | 'equipment';
}

export const storeItems: StoreItem[] = [
  // Fertilizers
  {
    id: 'fert-1',
    name: 'Urea',
    price: '₹300/50kg',
    priceNumeric: 300,
    image: 'https://images.unsplash.com/photo-1624958723474-02c252124c11?q=80&w=1974&auto=format&fit=crop',
    description: 'High nitrogen content fertilizer ideal for leafy crops and grass.',
    category: 'fertilizer'
  },
  {
    id: 'fert-2',
    name: 'DAP',
    price: '₹1200/50kg',
    priceNumeric: 1200,
    image: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1974&auto=format&fit=crop',
    description: 'Diammonium phosphate with high phosphorus content for root development.',
    category: 'fertilizer'
  },
  {
    id: 'fert-3',
    name: 'Vermicompost',
    price: '₹450/25kg',
    priceNumeric: 450,
    image: 'https://images.unsplash.com/photo-1589928058795-fcbe0e76c277?q=80&w=1974&auto=format&fit=crop',
    description: 'Organic fertilizer produced by earthworms, enriches soil structure.',
    category: 'fertilizer'
  },
  {
    id: 'fert-4',
    name: 'Organic Manure',
    price: '₹500/50kg',
    priceNumeric: 500,
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop',
    description: 'Natural compost derived from plant and animal waste, improves soil fertility.',
    category: 'fertilizer'
  },
  
  // Seeds
  {
    id: 'seed-1',
    name: 'Tomato Hybrid',
    price: '₹250/pack',
    priceNumeric: 250,
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=2070&auto=format&fit=crop',
    description: 'High-yield tomato seeds resistant to common diseases.',
    category: 'seed'
  },
  {
    id: 'seed-2',
    name: 'Wheat',
    price: '₹1100/50kg',
    priceNumeric: 1100,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6962b3?q=80&w=1974&auto=format&fit=crop',
    description: 'Drought-resistant wheat seeds suitable for various climates.',
    category: 'seed'
  },
  {
    id: 'seed-3',
    name: 'Paddy (BPT)',
    price: '₹950/50kg',
    priceNumeric: 950,
    image: 'https://images.unsplash.com/photo-1628684372121-2e53902096a2?q=80&w=1974&auto=format&fit=crop',
    description: 'High-quality rice seeds with excellent yield potential.',
    category: 'seed'
  },
  {
    id: 'seed-4',
    name: 'Brinjal',
    price: '₹200/pack',
    priceNumeric: 200,
    image: 'https://images.unsplash.com/photo-1594282486552-05a9382a8f38?q=80&w=1974&auto=format&fit=crop',
    description: 'Disease-resistant eggplant seeds with vibrant purple fruits.',
    category: 'seed'
  },
  
  // Equipment
  {
    id: 'equip-1',
    name: 'Hand Sprayer',
    price: '₹700',
    priceNumeric: 700,
    image: 'https://images.unsplash.com/photo-1575715174924-bfc59bf271a1?q=80&w=1974&auto=format&fit=crop',
    description: 'Portable sprayer for applying fertilizers and pesticides.',
    category: 'equipment'
  },
  {
    id: 'equip-2',
    name: 'Cultivator',
    price: '₹12,000',
    priceNumeric: 12000,
    image: 'https://images.unsplash.com/photo-1585202756173-5aa2ce4ac9f1?q=80&w=1974&auto=format&fit=crop',
    description: 'Manual tilling tool for preparing soil for planting.',
    category: 'equipment'
  },
  {
    id: 'equip-3',
    name: 'Power Tiller',
    price: '₹85,000',
    priceNumeric: 85000,
    image: 'https://images.unsplash.com/photo-1629465387403-82448e01d4d7?q=80&w=2070&auto=format&fit=crop',
    description: 'Motorized tiller for efficient soil preparation.',
    category: 'equipment'
  },
  {
    id: 'equip-4',
    name: 'Seed Drill',
    price: '₹25,000',
    priceNumeric: 25000,
    image: 'https://images.unsplash.com/photo-1601256133869-ebb67fe1f3f4?q=80&w=1974&auto=format&fit=crop',
    description: 'Precision planting tool for uniform seed placement.',
    category: 'equipment'
  }
];
