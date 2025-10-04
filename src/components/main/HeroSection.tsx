"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "../../animations/animations";
import Link from "next/link";

// Main hero section with impressive AirPods Max presentation. Three columns: left (front image + background text), center (heading and description), right (side image).

const HeroSection = () => {
  const front = "/images/front.png";
  const side = "/images/side.png";
  return (
    <section className="relative min-h-[90vh] bg-[#e6e2e2] px-4 md:px-8 overflow-hidden">
      <motion.div
        className="max-w-8xl mx-4 md:mx-10 flex flex-col lg:flex-row justify-between items-center min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-5rem)] gap-8 lg:gap-0"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative order-2 lg:order-1 w-full lg:w-auto"
          variants={slideInLeft}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
            <h1 className="text-[8rem] md:text-[12rem] font-black leading-none whitespace-nowrap text-[#ffffffbd]">
              Air
              <br />
              Pods
              <br />
              Max
            </h1>
          </div>

          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={front}
              alt="AirPods Max Front"
              className="w-full max-w-[400px] md:max-w-none mx-auto lg:ml-25"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-4 md:space-y-6 flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9]"
            variants={fadeInUp}
          >
            Air
            <br />
            Pods
            <br />
            Max
          </motion.h1>
          <motion.p
            className="text-gray-600 text-sm md:text-md max-w-sm leading-relaxed mx-auto lg:mx-0"
            variants={fadeInUp}
          >
            "AirPods are the most popular headphones in the world, beloved for
            their effortless setup, incredible sound quality, and iconic
            design." said Greg Joswiak
          </motion.p>
          <Link href="/products">
            <motion.button
              className="px-8 md:px-15 py-3 rounded-full text-sm transition-all duration-300 w-fit mx-auto lg:mx-0 bg-black/5 border-1 border-gray-300 hover:bg-black/10 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative text-gray-700 group-hover:text-gray-900 transition-colors text-base md:text-lg font-medium">
                Read More
              </span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="relative order-3 hidden lg:block"
          variants={slideInRight}
        >
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={side}
              alt="AirPods Max Side"
              className="w-full h-[30rem] lg:h-[45rem] mt-38"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
