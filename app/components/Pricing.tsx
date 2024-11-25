// pages/pricing.js
import pricingInfo from "../../data/pricingInfo.json";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 py-16 text-center">
        <p className="text-sm font-medium text-gray-500 mb-2">Simple Pricing</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Unlock Your Growth</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingInfo.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                plan.highlight ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
                {plan.highlight && (
                  <span className="text-sm font-medium bg-orange-500 text-white py-1 px-2 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.description.map((item, i) => (
                  <li key={i} className={`${plan.highlight ? "text-gray-200" : "text-gray-600"}`}>
                    • {item}
                  </li>
                ))}
              </ul>
              <p className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                ₹{plan.price}
                <span className="text-base font-medium">/month</span>
              </p>
              <button
                className={`mt-6 px-6 py-2 rounded-full text-sm font-medium ${
                  plan.highlight
                    ? "bg-orange-500 text-white hover:bg-orange-400"
                    : "border border-black text-black hover:bg-gray-100"
                }`}
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
