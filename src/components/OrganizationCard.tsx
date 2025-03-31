
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { Organization } from '@/data/organizationsData';

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  const { name, description, category, logo, website, location, initiatives } = organization;
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'nonprofit':
        return 'bg-eco-medium text-white';
      case 'business':
        return 'bg-ocean-medium text-white';
      case 'government':
        return 'bg-earth-medium text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  
  return (
    <div className="card-eco overflow-hidden group">
      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(category)}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <div className="ml-auto flex items-center text-sm text-gray-500">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-eco-dark">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {initiatives && initiatives.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Key Initiatives:</p>
            <div className="flex flex-wrap gap-2">
              {initiatives.map((initiative, index) => (
                <span 
                  key={index} 
                  className="bg-eco-ultralight text-eco-dark text-xs px-2 py-1 rounded-full"
                >
                  {initiative}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-eco-medium hover:text-eco-dark transition-colors group-hover:underline"
        >
          Visit Website
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default OrganizationCard;
