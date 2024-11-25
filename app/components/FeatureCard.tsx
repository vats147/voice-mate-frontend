const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => {
    return (
      <div className="border p-6 rounded-lg shadow-md text-center bg-gray-50">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  