import FeatureCard from './FeatureCard';
import { FaHotel, FaBusinessTime, FaCalendarCheck } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">What can AI VoiceMate do?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <FeatureCard
          icon={<FaHotel size={40} className="text-orange-500" />}
          title="Negotiate with Hotels"
          description="Negotiate with hotels, saving you time and money effortlessly."
        />
        {/* Feature 2 */}
        <FeatureCard
          icon={<FaBusinessTime size={40} className="text-orange-500" />}
          title="Call Businesses"
          description="Shop around and call various businesses to get information about their prices and availability."
        />
        {/* Feature 3 */}
        <FeatureCard
          icon={<FaCalendarCheck size={40} className="text-orange-500" />}
          title="Make Appointments"
          description="Make follow-up calls to book services or make appointments."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
