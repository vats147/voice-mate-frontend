import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
