
export interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'article' | 'guide' | 'video';
  imageUrl: string;
  readTime?: number;
  author: string;
  date: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "Understanding Your Carbon Footprint",
    description: "Learn how your daily activities affect the planet and simple ways to reduce your environmental impact.",
    category: "article",
    imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
    readTime: 5,
    author: "Emma Thompson",
    date: "2023-10-12"
  },
  {
    id: 2,
    title: "Home Energy Efficiency Guide",
    description: "Practical steps to make your home more energy-efficient and reduce utility bills while helping the planet.",
    category: "guide",
    imageUrl: "https://images.unsplash.com/photo-1513118172236-56bde24f33be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    readTime: 8,
    author: "Marcus Chen",
    date: "2023-09-28"
  },
  {
    id: 3,
    title: "Sustainable Diet Choices",
    description: "How your food choices impact the environment and tips for a more sustainable diet without sacrificing nutrition.",
    category: "article",
    imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    readTime: 6,
    author: "Sophia Rodriguez",
    date: "2023-10-05"
  },
  {
    id: 4,
    title: "Zero-Waste Living Basics",
    description: "Step-by-step approach to reducing waste in your daily life, from shopping habits to household management.",
    category: "guide",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2913&q=80",
    readTime: 10,
    author: "Alex Johnson",
    date: "2023-09-15"
  },
  {
    id: 5,
    title: "Understanding Renewable Energy",
    description: "An overview of different renewable energy sources and their impact on reducing greenhouse gas emissions.",
    category: "article",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    readTime: 7,
    author: "Christopher Lee",
    date: "2023-10-01"
  },
  {
    id: 6,
    title: "Sustainable Transportation Options",
    description: "Explore eco-friendly transportation alternatives and their benefits for both individuals and communities.",
    category: "guide",
    imageUrl: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    readTime: 6,
    author: "Olivia Martinez",
    date: "2023-09-22"
  }
];
