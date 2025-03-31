
import React from 'react';
import { Clock, User, ArrowUpRight } from 'lucide-react';
import { Resource } from '@/data/resourcesData';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { title, description, category, imageUrl, readTime, author, date } = resource;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="card-eco overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            category === 'article' ? 'bg-eco-medium text-white' :
            category === 'guide' ? 'bg-ocean-medium text-white' :
            'bg-earth-medium text-white'
          }`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          {readTime && (
            <div className="flex items-center mr-4">
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime} min read</span>
            </div>
          )}
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
          <div className="ml-auto">
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-eco-dark line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <a href="#" className="inline-flex items-center text-eco-medium hover:text-eco-dark transition-colors group-hover:underline">
          Read more
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
