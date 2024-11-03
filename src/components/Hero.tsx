import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore amazing destinations, book comfortable stays, and create unforgettable memories
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          <div className="relative flex-1 w-full md:w-auto">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full flex items-center transition-all">
            Start Exploring
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}