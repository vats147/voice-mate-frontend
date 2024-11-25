import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"; 
import contactInfo from "../../data/contactInfo.json"; // Ensure the path is correct

export default function Contact() {
  // Define icons mapping
  const icons = {
    message: <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 text-blue-500 mx-auto" />,
    phone: <PhoneIcon className="h-12 w-12 text-green-500 mx-auto" />,
    location: <MapPinIcon className="h-12 w-12 text-red-500 mx-auto" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 py-16 text-center">
        {/* Header Section */}
        <p className="text-sm font-medium text-gray-500 mb-2">NEUTRA CONTACT</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get in touch with us today!
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {/* Render dynamic icon */}
              <div className="mb-4">
                {icons[info.icon as keyof typeof icons] || (
                  <span className="text-gray-500">[Icon Missing]</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {info.title}
              </h3>
              <p className="text-gray-600 mb-3">{info.description}</p>
              <p className="text-gray-800 font-medium">{info.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
