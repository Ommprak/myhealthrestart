export interface ProductBadge {
  text: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ImmunoBoost Plus",
    description: "Advanced immune system support with Vitamin C, D, and Zinc.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Supplements",
    rating: 5.0,
    reviewCount: 124,
    badge: {
      text: "Bestseller",
      color: "primary",
    },
  },
  {
    id: 2,
    name: "ReliefMax Pro",
    description: "Fast-acting pain relief formula for headaches and muscle pain.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Pain Relief",
    rating: 4.5,
    reviewCount: 89,
    badge: {
      text: "New",
      color: "secondary",
    },
  },
  {
    id: 3,
    name: "VitaComplete",
    description: "Complete multivitamin complex with essential minerals for daily health.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Supplements",
    rating: 4.0,
    reviewCount: 56,
  },
  {
    id: 4,
    name: "CardioCare",
    description: "Heart health supplement with CoQ10, Omega-3, and antioxidants.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Cardiac Care",
    rating: 4.5,
    reviewCount: 112,
    badge: {
      text: "Popular",
      color: "primary",
    },
  },
  {
    id: 5,
    name: "RespiClear",
    description: "Respiratory support formula with natural extracts for clear breathing.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1626285526862-3d2f86d6f016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Respiratory Care",
    rating: 4.0,
    reviewCount: 78,
  },
  {
    id: 6,
    name: "DigestEase",
    description: "Digestive health supplement with probiotics and digestive enzymes.",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Digestive Health",
    rating: 3.5,
    reviewCount: 45,
  },
  {
    id: 7,
    name: "JointFlex",
    description: "Joint support formula with glucosamine, chondroitin, and MSM.",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Pain Relief",
    rating: 4.0,
    reviewCount: 92,
  },
  {
    id: 8,
    name: "SleepWell",
    description: "Natural sleep aid with melatonin, valerian root, and chamomile.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
    category: "Supplements",
    rating: 4.5,
    reviewCount: 67,
    badge: {
      text: "New",
      color: "secondary",
    },
  },
];

export const productCategories = [
  "All Products",
  "Supplements",
  "Pain Relief",
  "Cardiac Care",
  "Digestive Health",
  "Respiratory Care",
];
