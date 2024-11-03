import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PopularDestinations />
      </main>
    </div>
  );
}

export default App;