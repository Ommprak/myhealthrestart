export interface ProductBadge {
  text: string;
  color: string;
}

// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   rating: number;
//   reviewCount: number;
//   badge?: ProductBadge;
//   sold: number;
// }

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "Muscle Gain Protein – 1kg",
//     description: "High-quality whey protein blend with BCAA and glutamine for muscle recovery and growth.",
//     price: 1499,
//     image: "https://i.im.ge/2025/04/27/vU1UA1.IMG-20250421-WA0022.jpeg",
//     category: "Supplements",
//     rating: 4.5,
//     reviewCount: 320,
//     sold: 150
//   },
//   {
//     id: 2,
//     name: "Vitamin C Tablets – Immunity Booster",
//     description: "1000mg Vitamin C with Zinc to strengthen your immune system and reduce fatigue.",
//     price: 349,
//     image: "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg",
//     category: "Supplements",
//     rating: 4.2,
//     reviewCount: 110,
//     sold: 150
//   },
//   {
//     id: 3,
//     name: "Omega 3 Fish Oil – 60 Softgels",
//     description: "Supports heart, brain, and joint health with high-concentration EPA & DHA.",
//     price: 899,
//     image: "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg",
//     category: "Supplements",
//     rating: 4.4,
//     reviewCount: 198,
//     sold: 150
//   },
//   {
//     id: 4,
//     name: "Pre-Workout Formula – 300g",
//     description: "Explosive energy blend with caffeine and beta-alanine for better focus and endurance.",
//     price: 1299,
//     image: "https://i.im.ge/2025/04/27/vU1yAx.IMG-20250421-WA0031.jpeg",
//     category: "Supplements",
//     rating: 4.6,
//     reviewCount: 245,
//     sold: 150
//   },
//   {
//     id: 5,
//     name: "Daily Multivitamin – 90 Tablets",
//     description: "All-in-one formula with 24 essential vitamins and minerals for overall wellness.",
//     price: 499,
//     image: "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg",
//     category: "Supplements",
//     rating: 4.3,
//     reviewCount: 170,
//     sold: 150
//   },
//   {
//     id: 6,
//     name: "Mass Gainer – Chocolate 3kg",
//     description: "Carb and protein blend with creatine for rapid mass gain and strength.",
//     price: 1999,
//     image: "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg",
//     category: "Supplements",
//     rating: 4.1,
//     reviewCount: 140,
//     sold: 150
//   },
//   {
//     id: 7,
//     name: "Glutamine Powder – 250g",
//     description: "Boosts muscle recovery, reduces soreness, and supports gut health.",
//     price: 699,
//     image: "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
//     category: "Supplements",
//     rating: 4.0,
//     reviewCount: 95,
//     sold: 150
//   }
// ];

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
  sold: number;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Muscle Gain Protein – 1kg",
    description: "High-quality whey protein blend with BCAA and glutamine for muscle recovery and growth.",
    price: 1499,
    images: [
      "https://i.im.ge/2025/04/27/vU1UA1.IMG-20250421-WA0022.jpeg",
      "https://i.im.ge/2025/04/27/vU1UA1.IMG-20250421-WA0022.jpeg",
      "https://i.im.ge/2025/04/27/vU1UA1.IMG-20250421-WA0022.jpeg"
    ],
    category: "Supplements",
    rating: 4.5,
    reviewCount: 320,
    sold: 150
  },
  {
    id: 2,
    name: "Vitamin C Tablets – Immunity Booster",
    description: "1000mg Vitamin C with Zinc to strengthen your immune system and reduce fatigue.",
    price: 349,
    images: [
      "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg",
      "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg",
      "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg"
    ],
    category: "Supplements",
    rating: 4.2,
    reviewCount: 110,
    sold: 150
  },
  {
    id: 3,
    name: "Omega 3 Fish Oil – 60 Softgels",
    description: "Supports heart, brain, and joint health with high-concentration EPA & DHA.",
    price: 899,
    images: [
      "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg",
      "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg",
      "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg"
    ],
    category: "Supplements",
    rating: 4.4,
    reviewCount: 198,
    sold: 150
  },
  {
    id: 4,
    name: "Pre-Workout Formula – 300g",
    description: "Explosive energy blend with caffeine and beta-alanine for better focus and endurance.",
    price: 1299,
    images: [
      "https://i.im.ge/2025/04/27/vU1yAx.IMG-20250421-WA0031.jpeg",
      "https://i.im.ge/2025/04/27/vU1yAx.IMG-20250421-WA0031.jpeg",
      "https://i.im.ge/2025/04/27/vU1yAx.IMG-20250421-WA0031.jpeg"
    ],
    category: "Supplements",
    rating: 4.6,
    reviewCount: 245,
    sold: 150
  },
  {
    id: 5,
    name: "Daily Multivitamin – 90 Tablets",
    description: "All-in-one formula with 24 essential vitamins and minerals for overall wellness.",
    price: 499,
    images: [
      "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg",
      "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg",
      "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg"
    ],
    category: "Supplements",
    rating: 4.3,
    reviewCount: 170,
    sold: 150
  },
  {
    id: 6,
    name: "Mass Gainer – Chocolate 3kg",
    description: "Carb and protein blend with creatine for rapid mass gain and strength.",
    price: 1999,
    images: [
      "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg",
      "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg",
      "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg"
    ],
    category: "Supplements",
    rating: 4.1,
    reviewCount: 140,
    sold: 150
  },
  {
    id: 7,
    name: "Glutamine Powder – 250g",
    description: "Boosts muscle recovery, reduces soreness, and supports gut health.",
    price: 699,
    images: [
      "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
      "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
      "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg"
    ],
    category: "Supplements",
    rating: 4.0,
    reviewCount: 95,
    sold: 150
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