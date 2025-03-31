
import React from 'react';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-eco-ultralight">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-eco-ultralight/90 to-white/90"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-eco-dark leading-tight">
            Sustainable Choices for a <span className="text-eco-medium">Better Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Join our community of individuals and organizations committed to environmental stewardship and climate action. Together, we can create meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="btn-eco-primary px-6 py-6 text-base gap-2">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="btn-eco-outline px-6 py-6 text-base">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="card-eco p-8 flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eco-ultralight mb-4">
              <Users className="h-8 w-8 text-eco-medium" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-eco-dark">For Individuals</h2>
            <p className="text-gray-600 mb-6">
              Discover tools to understand your environmental impact, access resources for sustainable living, and connect with a community of like-minded individuals.
            </p>
            <Button variant="outline" className="btn-eco-outline mt-auto">
              Explore Resources
            </Button>
          </div>
          
          <div className="card-eco p-8 flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-ocean-light/20 mb-4">
              <Building2 className="h-8 w-8 text-ocean-medium" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-ocean-dark">For Organizations</h2>
            <p className="text-gray-600 mb-6">
              Showcase your sustainable initiatives, access market insights on eco-conscious consumers, and engage in ethical advertising to reach your target audience.
            </p>
            <Button variant="outline" className="border-ocean-medium text-ocean-dark hover:bg-ocean-light/20 mt-auto">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
