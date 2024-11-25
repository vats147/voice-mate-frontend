"use client"
import { useState, ChangeEvent, FormEvent, } from "react";
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
    <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Information Section */}
      <div className="w-1/2">
        <img src={contactForm.icon} alt="Icon" className="w-10 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{contactForm.heading}</h2>
        <p className="text-gray-600 mb-4">{contactForm.description}</p>
        <div className="flex flex-wrap gap-4">
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

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
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
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
          <option value="Location 3">Location 3</option>
        </select>
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
