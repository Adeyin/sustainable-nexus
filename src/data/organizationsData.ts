
export interface Organization {
  id: number;
  name: string;
  description: string;
  category: 'nonprofit' | 'business' | 'government';
  logo: string;
  website: string;
  location: string;
  initiatives?: string[];
}

export const organizations: Organization[] = [
  {
    id: 1,
    name: "EcoSolutions Inc.",
    description: "Developing innovative technologies for renewable energy storage and distribution in urban areas.",
    category: "business",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2773&q=80",
    website: "https://ecosolutions.example.com",
    location: "San Francisco, CA",
    initiatives: ["Urban Solar Panels", "Community Energy Storage"]
  },
  {
    id: 2,
    name: "Forests Forever",
    description: "Dedicated to preserving and restoring forest ecosystems through advocacy, education, and direct action.",
    category: "nonprofit",
    logo: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    website: "https://forestsforever.example.org",
    location: "Portland, OR",
    initiatives: ["Reforestation Projects", "Forest Protection Policy"]
  },
  {
    id: 3,
    name: "City Climate Initiative",
    description: "Municipal program developing policies and infrastructure to reduce urban carbon emissions and promote sustainability.",
    category: "government",
    logo: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    website: "https://climate.citygovernment.example.gov",
    location: "Boston, MA",
    initiatives: ["Green Building Standards", "Public Transit Expansion"]
  },
  {
    id: 4,
    name: "Ocean Conservation Alliance",
    description: "Working to protect marine ecosystems through research, cleanup efforts, and advocacy against ocean pollution.",
    category: "nonprofit",
    logo: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    website: "https://oceanalliance.example.org",
    location: "Miami, FL",
    initiatives: ["Beach Cleanup", "Sustainable Fishing Advocacy"]
  },
  {
    id: 5,
    name: "GreenTech Innovations",
    description: "Creating sustainable product alternatives with biodegradable materials and minimal environmental impact.",
    category: "business",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    website: "https://greentechinnov.example.com",
    location: "Austin, TX",
    initiatives: ["Plastic Alternatives", "Zero-Waste Packaging"]
  },
  {
    id: 6,
    name: "Renewable Energy Coalition",
    description: "Alliance of organizations advocating for policy change to accelerate the transition to renewable energy sources.",
    category: "nonprofit",
    logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    website: "https://renewcoalition.example.org",
    location: "Washington, DC",
    initiatives: ["Clean Energy Legislation", "Public Awareness Campaigns"]
  }
];
