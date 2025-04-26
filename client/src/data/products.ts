
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
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU1UA1.IMG-20250421-WA0022.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 2,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 3,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 4,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU1yAx.IMG-20250421-WA0031.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 5,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 6,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  },
  {
    id: 7,
    name: "",
    description: "",
    price: 0,
    image: "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
    category: "Supplements",
    rating: 0,
    reviewCount: 0
  }
];

export const productCategories = [
  "All Products",
  "Supplements",
  "Pain Relief",
  "Cardiac Care",
  "Digestive Health",
  "Respiratory Care",
];
