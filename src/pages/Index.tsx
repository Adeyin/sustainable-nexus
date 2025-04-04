
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CarbonCalculator from '@/components/CarbonCalculator';
import ResourceCard from '@/components/ResourceCard';
import OrganizationCard from '@/components/OrganizationCard';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { resources } from '@/data/resourcesData';
import { organizations } from '@/data/organizationsData';
import { Button } from '@/components/ui/button';
import { SearchIcon, Filter, ChevronDown } from 'lucide-react';

const Index = () => {
  const [activeResourceTab, setActiveResourceTab] = useState('all');
  const [activeOrgTab, setActiveOrgTab] = useState('all');
  
  const filteredResources = activeResourceTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeResourceTab);
    
  const filteredOrganizations = activeOrgTab === 'all'
    ? organizations
    : organizations.filter(org => org.category === activeOrgTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Main Features Section */}
        <FeatureSection />
        
        <CarbonCalculator />
        
        {/* Resources Section */}
        <section id="resources" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-eco-dark mb-4">Ressources pour une vie durable</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explorez notre collection d'articles, guides et vidéos pour vous aider à faire des choix plus respectueux de l'environnement.
              </p>
            </div>
            
            <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
              <Button 
                onClick={() => setActiveResourceTab('all')}
                variant={activeResourceTab === 'all' ? 'default' : 'outline'}
                className={activeResourceTab === 'all' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
              >
                Tous
              </Button>
              <Button 
                onClick={() => setActiveResourceTab('article')}
                variant={activeResourceTab === 'article' ? 'default' : 'outline'}
                className={activeResourceTab === 'article' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
              >
                Articles
              </Button>
              <Button 
                onClick={() => setActiveResourceTab('guide')}
                variant={activeResourceTab === 'guide' ? 'default' : 'outline'}
                className={activeResourceTab === 'guide' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
              >
                Guides
              </Button>
              <Button 
                onClick={() => setActiveResourceTab('video')}
                variant={activeResourceTab === 'video' ? 'default' : 'outline'}
                className={activeResourceTab === 'video' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
              >
                Vidéos
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="btn-eco-outline">
                Voir toutes les ressources
              </Button>
            </div>
          </div>
        </section>
        
        {/* Organizations Section */}
        <section id="organizations" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-eco-dark mb-4">Annuaire des organisations écologiques</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connectez-vous avec des organisations qui font la différence dans la transition écologique et les initiatives durables.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center mb-4 md:mb-0 space-x-2 overflow-x-auto pb-2">
                  <Button 
                    onClick={() => setActiveOrgTab('all')}
                    variant={activeOrgTab === 'all' ? 'default' : 'outline'}
                    className={activeOrgTab === 'all' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
                  >
                    Tous
                  </Button>
                  <Button 
                    onClick={() => setActiveOrgTab('nonprofit')}
                    variant={activeOrgTab === 'nonprofit' ? 'default' : 'outline'}
                    className={activeOrgTab === 'nonprofit' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
                  >
                    Associations
                  </Button>
                  <Button 
                    onClick={() => setActiveOrgTab('business')}
                    variant={activeOrgTab === 'business' ? 'default' : 'outline'}
                    className={activeOrgTab === 'business' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
                  >
                    Entreprises
                  </Button>
                  <Button 
                    onClick={() => setActiveOrgTab('government')}
                    variant={activeOrgTab === 'government' ? 'default' : 'outline'}
                    className={activeOrgTab === 'government' ? 'bg-eco-medium hover:bg-eco-dark' : 'border-eco-medium text-eco-dark hover:bg-eco-ultralight'}
                  >
                    Institutions
                  </Button>
                </div>
                
                <div className="flex space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher des organisations..."
                      className="input-eco pl-9 w-full md:w-64"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                  <Button variant="outline" className="btn-eco-outline flex gap-1">
                    <Filter className="h-4 w-4" />
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOrganizations.map(organization => (
                <OrganizationCard key={organization.id} organization={organization} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="btn-eco-outline">
                Voir toutes les organisations
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-eco-dark to-ocean-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez notre communauté durable</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Participez à la transition écologique. Connectez-vous avec des individus et des organisations engagés pour créer un avenir durable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-eco-dark hover:bg-gray-100 px-6 py-6 text-base">
                S'inscrire comme individu
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-base">
                Rejoindre en tant qu'organisation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
