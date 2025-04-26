export interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  discount?: string;
  couponCode?: string;
  originalPrice?: number;
  currentPrice?: number;
  buttonText: string;
  expiry?: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    title: "Summer Health Bundle",
    description: "Get our most popular immune support products at a special discount. Bundle includes ImmunoBoost Plus, VitaComplete, and RespiClear.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    discount: "25% OFF",
    originalPrice: 82.97,
    currentPrice: 62.23,
    buttonText: "Claim Offer",
    expiry: "Limited time offer. Expires in 7 days",
  },
  {
    id: 2,
    title: "Buy One Get One Free",
    description: "Purchase ReliefMax Pro and get a second one absolutely free. Perfect for keeping one at home and one at work.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    discount: "BOGO",
    originalPrice: 39.98,
    currentPrice: 19.99,
    buttonText: "Claim Offer",
    expiry: "Limited time offer. Expires in 5 days",
  },
  {
    id: 3,
    title: "Senior Health Package",
    description: "Comprehensive health support for seniors 65+. Includes CardioCare, JointFlex, and VitaComplete.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    discount: "30% OFF",
    originalPrice: 92.97,
    currentPrice: 65.08,
    buttonText: "Claim Offer",
    expiry: "Limited time offer. Expires in 14 days",
  },
  {
    id: 4,
    title: "New Customer Special",
    description: "First-time customers receive 15% off their entire first order. Use code WELCOME15 at checkout.",
    image: "https://images.unsplash.com/photo-1576671081789-4e9764bb86e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    discount: "15% OFF",
    couponCode: "WELCOME15",
    buttonText: "Shop Now",
    expiry: "One-time use per customer",
  },
];

export const subscriptionItems = [
  {
    name: "ImmunoBoost Plus",
    description: "Monthly supply",
    icon: "ri-heart-pulse-line"
  },
  {
    name: "VitaComplete",
    description: "Monthly supply",
    icon: "ri-capsule-line"
  },
  {
    name: "CardioCare",
    description: "Monthly supply",
    icon: "ri-heart-2-line"
  }
];
