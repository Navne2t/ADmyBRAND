// src/components/Features.tsx

import { FaCogs, FaRocket, FaShieldAlt, FaMobileAlt, FaCloud, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-yellow-400 text-3xl" />,
    title: "Fast Performance",
    description: "Optimized and blazing fast experience for all devices.",
  },
  {
    icon: <FaCogs className="text-yellow-400 text-3xl" />,
    title: "Customizable",
    description: "Easily tailor features to fit your business needs.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-400 text-3xl" />,
    title: "Secure",
    description: "Built with best security practices and modern encryption.",
  },
  {
    icon: <FaMobileAlt className="text-yellow-400 text-3xl" />,
    title: "Mobile Friendly",
    description: "Fully responsive design for smartphones and tablets.",
  },
  {
    icon: <FaCloud className="text-yellow-400 text-3xl" />,
    title: "Cloud Integration",
    description: "Seamlessly integrates with popular cloud services.",
  },
  {
    icon: <FaUsers className="text-yellow-400 text-3xl" />,
    title: "User Management",
    description: "Manage users, roles, and permissions with ease.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
        <p className="text-gray-400 text-lg mb-12">
          Everything you need to scale your SaaS business seamlessly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
