// pages/about.js
import aboutInfo from "../../data/aboutInfo.json"; // Ensure the correct path to the JSON file

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Explore About Voice Mate AI
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Voice Mate AI is your personal assistant, making appointments hassle-free. From hospital visits to hotel reservations, we’ve got you covered!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
