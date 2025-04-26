
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
    name: "PhytoFlex Joint Support",
    description: "Advanced joint support supplement formulated with natural ingredients to promote joint health and flexibility.",
    price: 49.99,
    image: "https://i.im.ge/2025/04/27/vU1bXz.IMG-20250421-WA0036.jpeg",
    category: "Supplements",
    rating: 4.5,
    reviewCount: 28,
    badge: {
      text: "New",
      color: "green-500"
    }
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
