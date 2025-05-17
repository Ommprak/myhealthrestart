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
    name: "Phytoscience Crystal Cell",
    description: "Ingredient: Blackcurrant Juice Powder, Dextrose, Acai Berry Extract, Blueberry Powder, Tomato Fruit Extract, Apple Stem Cell, Grape Stem",
    price: 1499,
    images: [
      "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420421/WhatsApp_Image_2025-05-16_at_14.20.11_0c2be80c_jab3se.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420994/WhatsApp_Image_2025-05-16_at_14.20.10_b5ca2991_nnwkvy.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420323/WhatsApp_Image_2025-05-16_at_14.20.13_27e7eaad_sj07u6.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420333/WhatsApp_Image_2025-05-16_at_14.20.11_530ea0cb_b3krcx.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420343/WhatsApp_Image_2025-05-16_at_14.20.13_e987c2c4_eqbwzd.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421232/WhatsApp_Image_2025-05-17_at_00.15.24_7927429b_gk0fd8.jpg"
    ],
    category: "Supplements",
    rating: 4.5,
    reviewCount: 320,
    sold: 150
  },
  {
    id: 2,
    name: "Phytoscience Snowphyll Forte Vitamins",
    description: "Snowphyll Forte contains a unique combination of plant-based vitamins designed to enhance overall well-being and boost immunity, catering to health-conscious consumers seeking natural supplements.",
    price: 349,
    images: [
      "https://i.im.ge/2025/04/27/vUOemS.IMG-20250421-WA0009.jpeg",
      "https://i.im.ge/2025/04/27/vU101m.IMG-20250421-WA0024.jpeg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421269/WhatsApp_Image_2025-05-17_at_00.09.50_622c69a8_sv2fpo.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421002/WhatsApp_Image_2025-05-16_at_14.20.07_f837e168_pn5ya0.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420407/WhatsApp_Image_2025-05-16_at_14.20.12_186f2dec_ggmtaf.jpg",
    ],
    category: "Supplements",
    rating: 4.6,
    reviewCount: 110,
    sold: 120
  },
  {
    id: 3,
    name: "Nu Forte",
    description: "It is fortified with natural plant protein source such as brown rice, soy protein, pea protein, MCT oil,lipocal and vitamin D3A meal on it own. Protein replacement supplement",
    price: 899,
    images: [
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747453810/NuForte_jnobyo.webp",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421260/WhatsApp_Image_2025-05-17_at_00.09.50_dabde781_jrtdpg.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420365/WhatsApp_Image_2025-05-16_at_14.20.10_b55fb464_xwch7i.jpg",
    ],
    category: "Supplements",
    rating: 4.4,
    reviewCount: 198,
    sold: 150
  },
  {
    id: 4,
    name: "Nu Lite",
    description: "Mix 1 sachet into 200-250ml of room temperature water, stir / shake well and consume immediately.Do not use hot water.",
    price: 1299,
    images: [
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747454045/NuLite_ojxdu0.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421240/WhatsApp_Image_2025-05-17_at_00.15.24_7b8d69c0_tidk3z.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747454372/Screenshot_2025-05-17_092858_cxdpkp.png"
    ],
    category: "Supplements",
    rating: 4.6,
    reviewCount: 245,
    sold: 150
  },
  {
    id: 5,
    name: "Ultimate Cancer Treatment",
    description: "",
    price: 499,
    images: [
      "https://i.im.ge/2025/04/27/vU16bc.IMG-20250421-WA0028.jpeg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747421232/WhatsApp_Image_2025-05-17_at_00.15.24_7927429b_gk0fd8.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420986/WhatsApp_Image_2025-05-16_at_14.20.09_b4ad2f34_h76wqg.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420376/WhatsApp_Image_2025-05-16_at_14.20.11_493c4d0f_lkrxbg.jpg",
    ],
    category: "Supplements",
    rating: 4.3,
    reviewCount: 170,
    sold: 150
  },
  {
    id: 6,
    name: "Crystal Cell",
    description: "Avoid Infertility",
    price: 1999,
    images: [
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747420969/WhatsApp_Image_2025-05-16_at_14.20.10_c5f67d44_xbxxpr.jpg",
      "https://res.cloudinary.com/dnqukw6fb/image/upload/v1747419231/WhatsApp_Image_2025-05-16_at_14.20.13_e68fee2c_zz4mln.jpg",
      "https://i.im.ge/2025/04/27/vU1ahC.IMG-20250421-WA0019.jpeg"
    ],
    category: "Supplements",
    rating: 4.5,
    reviewCount: 140,
    sold: 150
  },
  // {
  //   id: 7,
  //   name: "Glutamine Powder – 250g",
  //   description: "Boosts muscle recovery, reduces soreness, and supports gut health.",
  //   price: 699,
  //   images: [
  //     "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
  //     "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg",
  //     "https://i.im.ge/2025/04/27/vU1NGL.IMG-20250421-WA0029.jpeg"
  //   ],
  //   category: "Supplements",
  //   rating: 4.0,
  //   reviewCount: 95,
  //   sold: 150
  // }
];


export const productCategories = [
  "All Products",
  "Supplements",
  "Pain Relief",
  "Cardiac Care",
  "Digestive Health",
  "Respiratory Care",
];