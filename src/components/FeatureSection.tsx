
import React from 'react';
import { BookOpen, BarChart3, Building, Tool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: "Création et Publication de Contenus",
    description: "Partagez vos connaissances, analyses et expériences sur l'écologie et la transition durable. Consultez les contributions d'experts et de passionnés.",
    icon: BookOpen,
    color: "bg-eco-medium",
    link: "#content"
  },
  {
    title: "Calculateur d'Empreinte Carbone",
    description: "Évaluez votre impact environnemental et recevez des recommandations personnalisées pour réduire votre empreinte carbone.",
    icon: BarChart3,
    color: "bg-ocean-medium",
    link: "#calculator"
  },
  {
    title: "Communication Éthique",
    description: "Plateforme dédiée aux organisations souhaitant promouvoir leurs initiatives durables de manière transparente et authentique.",
    icon: Building,
    color: "bg-earth-medium",
    link: "#organizations"
  },
  {
    title: "Outils et Services",
    description: "Accédez à des ressources, guides pratiques et services pour vous accompagner dans votre transition écologique.",
    icon: Tool,
    color: "bg-eco-dark",
    link: "#resources"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-eco-dark mb-4">Nos Services Principaux</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos quatre piliers pour accompagner la transition écologique et promouvoir un avenir durable pour tous.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-eco flex flex-col hover-lift">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-eco-dark">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                <Button 
                  variant="outline" 
                  className="btn-eco-outline mt-auto"
                  asChild
                >
                  <a href={feature.link}>En savoir plus</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
