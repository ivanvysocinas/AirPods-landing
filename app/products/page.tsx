"use client";

import { motion } from "framer-motion";
import Header from "@/src/components/main/Header";
import { fadeInUp, staggerContainer } from "@/src/animations/animations";
import Link from "next/link";

// Product catalog featuring three AirPods models. Cards with images, specifications, and alternating content direction.

const products = [
  {
    id: 1,
    name: "AirPods Max",
    tagline: "Sonic Bliss",
    features: [
      "Active Noise Cancellation",
      "20-hour battery",
      "Spatial Audio",
      "Premium materials",
    ],
    image: "/images/front.png",
  },
  {
    id: 2,
    name: "AirPods Pro",
    tagline: "Pure Magic",
    features: [
      "Adaptive Transparency",
      "Up to 6 hours listening",
      "MagSafe charging",
      "Sweat resistant",
    ],
    image: "/images/pro.png",
  },
  {
    id: 3,
    name: "AirPods 3",
    tagline: "All New",
    features: [
      "Spatial Audio",
      "Adaptive EQ",
      "Force sensor control",
      "Sweat and water resistant",
    ],
    image: "/images/pods3.png",
  },
];

export default function ProductsPage() {
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
          <motion.div className="mb-20" variants={fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Experience audio excellence across our complete lineup
            </p>
          </motion.div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 hover:border-gray-300/80 transition-all"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <motion.div
                    className="flex-1 relative"
                    whileHover={{
                      scale: 1.05,
                      rotate: index % 2 === 0 ? 2 : -2,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                    />
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                        {product.tagline}
                      </p>
                      <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                        {product.name}
                      </h2>
                    </div>

                    <ul className="space-y-4">
                      {product.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-2xl text-gray-400">•</span>
                          <span className="text-lg text-gray-700">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/prices">
                      <motion.button
                        className="px-10 py-4 rounded-full bg-black/5 border border-gray-300 hover:bg-black/10 transition text-gray-700 font-medium text-lg mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Pricing
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
