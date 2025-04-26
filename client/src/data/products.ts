
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
    image: "https://i.im.ge/2025/04/27/vU1bXz.IMG-20250421-WA0036.jpeg",
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
