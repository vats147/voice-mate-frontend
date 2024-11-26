"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import contactForm from "../../data/contactForm.json"; // Ensure this path is correct

// Define the FormData type
interface FormData {
  name: string;
  email: string;
  location: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    location: "",
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", JSON.stringify(formData, null, 2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex gap-8">
          {/* Information Section */}
          <div className="w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-4">
              <img
                src={contactForm.icon}
                alt="Icon"
                className="w-12 h-12 mb-4 mx-auto"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{contactForm.heading}</h2>
              <p className="text-gray-600 text-center mb-4">{contactForm.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {contactForm.services.map((service: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-lg"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="w-1/2 flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            />
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            >
              <option value="">Select...</option>
              <option value="Location 1">india</option>
              <option value="Location 2">Germany</option>
              <option value="Location 3">France</option>
            </select>
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
