export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. James Carter",
    title: "Founder & CEO",
    bio: "Former research scientist with over 30 years of experience in pharmaceutical development.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    title: "Chief Scientific Officer",
    bio: "Leading our research initiatives with expertise in biochemistry and immunology.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Chief Operations Officer",
    bio: "Overseeing global operations and supply chain management across 45 countries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "Chief Marketing Officer",
    bio: "Leading our global marketing strategy with 15 years of healthcare marketing experience.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
];
