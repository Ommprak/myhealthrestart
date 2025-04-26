export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Quality Assurance",
    description: "All our products undergo rigorous quality testing to ensure they meet the highest standards.",
    icon: "ri-heart-pulse-line",
  },
  {
    id: 2,
    title: "Research Driven",
    description: "Our products are developed based on cutting-edge scientific research and innovation.",
    icon: "ri-microscope-line",
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "We ensure quick and reliable delivery of all products across the country.",
    icon: "ri-truck-line",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our customer service team is available round the clock to assist you with any queries.",
    icon: "ri-customer-service-2-line",
  },
  {
    id: 5,
    title: "Certified Products",
    description: "All our products are certified by leading health authorities and regulatory bodies.",
    icon: "ri-shield-check-line",
  },
  {
    id: 6,
    title: "Community Impact",
    description: "We actively participate in healthcare initiatives and give back to the community.",
    icon: "ri-hand-heart-line",
  },
];

export const values: Feature[] = [
  {
    id: 1,
    title: "Scientific Innovation",
    description: "We continually invest in research and development to create innovative healthcare solutions.",
    icon: "ri-microscope-line",
  },
  {
    id: 2,
    title: "Patient-Centered Care",
    description: "Every product we develop is designed with the needs and well-being of patients in mind.",
    icon: "ri-heart-line",
  },
  {
    id: 3,
    title: "Quality & Safety",
    description: "We maintain the highest standards of quality and safety in all our products.",
    icon: "ri-shield-check-line",
  },
  {
    id: 4,
    title: "Global Impact",
    description: "We strive to improve healthcare outcomes for patients around the world.",
    icon: "ri-global-line",
  },
  {
    id: 5,
    title: "Collaborative Spirit",
    description: "We partner with healthcare professionals to develop products that meet real needs.",
    icon: "ri-team-line",
  },
  {
    id: 6,
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices in all aspects of our business.",
    icon: "ri-recycle-line",
  },
];
