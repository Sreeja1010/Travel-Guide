export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  image: string;
  deliveryTime: string;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  pricePerNight: number;
  image: string;
  amenities: string[];
  location: string;
}

export interface Transport {
  id: string;
  type: 'taxi' | 'bus' | 'train';
  name: string;
  from: string;
  to: string;
  price: number;
  duration: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}