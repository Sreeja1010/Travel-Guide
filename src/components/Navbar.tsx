import { Menu, Search, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">TravelGuide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Explore</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Restaurants</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Transport</a>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center">
              <User size={20} className="mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Explore</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Hotels</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Restaurants</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Transport</a>
          </div>
        </div>
      )}
    </nav>
  );
}