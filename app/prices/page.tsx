"use client";

import { motion } from "framer-motion";
import Header from "@/src/components/main/Header";
import { fadeInUp, staggerContainer } from "@/src/animations/animations";

// Pricing page with three-column pricing cards. Center card (AirPods Max) highlighted as premium. Additional "What's Included" section.

const pricingData = [
  {
    name: "AirPods Max",
    price: "$549",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "20-hour battery life",
      "Spatial Audio with dynamic head tracking",
      "Premium materials",
      "Apple H1 chip",
    ],
    highlight: true,
  },
  {
    name: "AirPods Pro",
    price: "$249",
    features: [
      "Active Noise Cancellation",
      "Adaptive Transparency",
      "Up to 6 hours listening time",
      "Spatial Audio",
      "MagSafe charging case",
      "Sweat and water resistant",
    ],
  },
  {
    name: "AirPods 3",
    price: "$179",
    features: [
      "Spatial Audio",
      "Adaptive EQ",
      "Up to 6 hours listening time",
      "Force sensor control",
      "MagSafe charging case",
      "Sweat and water resistant",
    ],
  },
];

export default function PricesPage() {
  return (
    <>
      <Header />

      <motion.section
        className="min-h-screen bg-[#e6e2e2] px-4 md:px-8 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div className="mb-16 text-center" variants={fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">
              Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect AirPods for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((product) => (
              <motion.div
                key={product.name}
                className={`bg-white rounded-3xl p-8 ${
                  product.highlight ? "ring-4 ring-gray-900 scale-105" : ""
                }`}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {product.highlight && (
                  <div className="bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                    PREMIUM
                  </div>
                )}

                <h3 className="text-3xl font-black text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="mb-6">
                  <span className="text-5xl font-black text-gray-900">
                    {product.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white rounded-3xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What's Included
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  All Models Include
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Lightning charging cable</li>
                  <li>• Quick start guide</li>
                  <li>• Warranty information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  AirPods Max Only
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Smart case</li>
                  <li>• Lightning to USB-C cable</li>
                  <li>• Premium packaging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Pro & 3</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• MagSafe charging case</li>
                  <li>• Multiple ear tip sizes (Pro)</li>
                  <li>• USB-C cable</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
