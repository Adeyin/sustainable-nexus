
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
            La Plateforme pour la <span className="text-eco-medium">Transition Écologique</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Rejoignez notre communauté d'individus et d'organisations engagés pour l'environnement. Ensemble, créons un impact positif grâce à des connaissances partagées, des outils pratiques et des initiatives durables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="btn-eco-primary px-6 py-6 text-base gap-2">
              <span>Commencer</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="btn-eco-outline px-6 py-6 text-base">
              En savoir plus
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="card-eco p-8 flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eco-ultralight mb-4">
              <Users className="h-8 w-8 text-eco-medium" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-eco-dark">Pour les Individus</h2>
            <p className="text-gray-600 mb-6">
              Découvrez des outils pour comprendre votre impact environnemental, accédez à des ressources pour une vie durable, et connectez-vous avec une communauté partageant les mêmes valeurs.
            </p>
            <Button variant="outline" className="btn-eco-outline mt-auto">
              Explorer les ressources
            </Button>
          </div>
          
          <div className="card-eco p-8 flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-ocean-light/20 mb-4">
              <Building2 className="h-8 w-8 text-ocean-medium" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-ocean-dark">Pour les Organisations</h2>
            <p className="text-gray-600 mb-6">
              Présentez vos initiatives durables, accédez à des informations sur les consommateurs éco-responsables, et engagez-vous dans une communication éthique pour atteindre votre public cible.
            </p>
            <Button variant="outline" className="border-ocean-medium text-ocean-dark hover:bg-ocean-light/20 mt-auto">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
