
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Building2, Leaf, BookOpen, BarChart3, Tool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-medium" />
            <span className="text-xl font-semibold text-eco-dark">Sustainable Nexus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-eco-medium transition-colors">Accueil</Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>Contenus</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Articles</Link>
                  <Link to="#resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Guides</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Créer un article</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span>Calculateur</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Empreinte Carbone</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Calculateur Avancé</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Mon Historique</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <Building2 className="h-4 w-4 mr-1" />
                <span>Organisations</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#organizations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Annuaire</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Devenir Partenaire</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Informations Marché</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <Tool className="h-4 w-4 mr-1" />
                <span>Outils</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Ressources</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Guides Pratiques</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Comparateurs</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="btn-eco-primary px-4 py-2">S'inscrire</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-foreground hover:text-eco-medium transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 text-foreground hover:text-eco-medium">Accueil</Link>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>Contenus</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#resources" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Articles</Link>
                <Link to="#resources" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Guides</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Créer un article</Link>
              </div>
            </div>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span>Calculateur</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#calculator" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Empreinte Carbone</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Calculateur Avancé</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Mon Historique</Link>
              </div>
            </div>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <Building2 className="h-4 w-4 mr-1" />
                <span>Organisations</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#organizations" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Annuaire</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Devenir Partenaire</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Informations Marché</Link>
              </div>
            </div>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <Tool className="h-4 w-4 mr-1" />
                <span>Outils</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#resources" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Ressources</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Guides Pratiques</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Comparateurs</Link>
              </div>
            </div>
            <Button className="btn-eco-primary w-full mt-4">S'inscrire</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
