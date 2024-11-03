import { Star } from 'lucide-react';
import type { Attraction } from '../types';

const destinations: Attraction[] = [
  {
    id: '1',
    name: 'Eiffel Tower',
    description: 'Iconic iron lattice tower on the Champ de Mars in Paris',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    rating: 4.8,
    location: 'Paris, France',
    category: 'Landmarks'
  },
  {
    id: '2',
    name: 'Santorini',
    description: 'Beautiful island known for its white-washed buildings',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    rating: 4.9,
    location: 'Greece',
    category: 'Islands'
  },
  {
    id: '3',
    name: 'Machu Picchu',
    description: 'Ancient Incan city set high in the Andes Mountains',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    rating: 4.9,
    location: 'Peru',
    category: 'Historical'
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                <Star className="text-yellow-400 w-4 h-4" />
                <span className="ml-1 text-sm font-medium">{destination.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{destination.location}</span>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                  {destination.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}