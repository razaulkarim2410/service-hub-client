import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Search",
    description: "Find the service you need from our trusted providers.",
    icon: <FaSearch className="text-5xl text-cyan-500" />,
  },
  {
    id: 2,
    title: "Book",
    description: "Pick a date and time that works best for you.",
    icon: <FaCalendarCheck className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Enjoy",
    description: "Sit back and enjoy while we handle the rest.",
    icon: <FaSmile className="text-5xl text-yellow-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section
      className="py-12 bg-gray-50 rounded-3xl w-11/12 mx-auto mt-10 shadow-md"
      id="how-it-works"
    >
      <div className="text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl  font-bold text-pink-700  mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Getting started with ServiceHub is easy. Follow these three simple
          steps and get the service you need in no time.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Step Icon */}
              <div className="flex justify-center mb-4">{step.icon}</div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {index + 1}. {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
