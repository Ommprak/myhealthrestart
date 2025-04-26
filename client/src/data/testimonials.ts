export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer, Central Hospital",
    content: "As a healthcare professional, I only recommend products I truly believe in. MediCarePlus has consistently delivered exceptional quality medicines that have significantly improved my patients' outcomes.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 2,
    name: "Rebecca Martin",
    title: "Teacher & Mother of Three",
    content: "ImmunoBoost Plus has been a game-changer for my family during flu season. We've noticed a significant improvement in our overall health and fewer sick days since incorporating it into our daily routine.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 3,
    name: "Michael Chen, PharmD",
    title: "Lead Pharmacist, HealthFirst Pharmacy",
    content: "As a pharmacist, I appreciate MediCarePlus's commitment to quality. Their transparent ingredient sourcing and rigorous testing processes ensure I can confidently recommend their products to my customers.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Construction Manager",
    content: "ReliefMax Pro has been effective in managing my chronic back pain. Unlike other pain relievers I've tried, it works quickly and doesn't leave me feeling drowsy. Highly recommended!",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 5,
    name: "Dr. Amanda Lopez",
    title: "Hospital Administrator, Mercy Medical",
    content: "Our hospital has been using MediCarePlus products for over five years. Their consistently high-quality medicines and responsive customer service have made them our trusted supplier.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 6,
    name: "Sophia Thompson",
    title: "Software Engineer",
    content: "SleepWell has transformed my sleep quality. After struggling with insomnia for years, I finally found a natural solution that helps me fall asleep quickly and wake up refreshed.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
];
