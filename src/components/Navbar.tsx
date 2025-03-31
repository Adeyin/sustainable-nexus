
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Building2, Leaf } from 'lucide-react';
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
            <Link to="/" className="text-foreground hover:text-eco-medium transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <User className="h-4 w-4 mr-1" />
                <span>Individuals</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Carbon Calculator</Link>
                  <Link to="#resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Resources</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Community</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-eco-medium transition-colors">
                <Building2 className="h-4 w-4 mr-1" />
                <span>Organizations</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="#organizations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Directory</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Join as Organization</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-eco-ultralight">Market Insights</Link>
                </div>
              </div>
            </div>
            <Link to="#" className="text-foreground hover:text-eco-medium transition-colors">About</Link>
            <Link to="#" className="text-foreground hover:text-eco-medium transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Button className="btn-eco-primary px-4 py-2">Sign Up</Button>
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
            <Link to="/" className="block py-2 text-foreground hover:text-eco-medium">Home</Link>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <User className="h-4 w-4 mr-1" />
                <span>Individuals</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#calculator" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Carbon Calculator</Link>
                <Link to="#resources" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Resources</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Community</Link>
              </div>
            </div>
            <div>
              <button className="flex items-center py-2 text-foreground hover:text-eco-medium w-full text-left">
                <Building2 className="h-4 w-4 mr-1" />
                <span>Organizations</span>
              </button>
              <div className="pl-6 mt-1 space-y-2">
                <Link to="#organizations" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Directory</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Join as Organization</Link>
                <Link to="#" className="block py-1 text-sm text-gray-700 hover:text-eco-medium">Market Insights</Link>
              </div>
            </div>
            <Link to="#" className="block py-2 text-foreground hover:text-eco-medium">About</Link>
            <Link to="#" className="block py-2 text-foreground hover:text-eco-medium">Contact</Link>
            <Button className="btn-eco-primary w-full mt-4">Sign Up</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
