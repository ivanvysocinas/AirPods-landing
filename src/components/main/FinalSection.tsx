"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../../animations/animations";
import Link from "next/link";

// Final section about the "magical experience" of using AirPods with case image and call-to-action.

const FinalSection = () => {
  const podsCase = "/images/case.png";
  return (
    <section className="min-h-[85vh] bg-[#e6e2e2] px-4 md:px-8 pt-10 py-8 md:py-[-10rem]">
      <motion.div
        className="max-w-[95rem] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 leading-tight"
            variants={fadeInUp}
          >
            Magical
            <br />
            experience
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-[23rem] leading-relaxed mx-auto lg:mx-0"
            variants={fadeInUp}
          >
            AirPods Max inherit all of the wireless, effortless magic of the
            AirPods family. From setup to Siri commands, they make the listening
            experience completely fluid — day to day, device to device.
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

        <motion.div className="order-1 lg:order-2" variants={scaleIn}>
          <motion.img
            src={podsCase}
            alt="AirPods Max Case"
            className="w-[300px] md:w-[600px] lg:w-[980px] h-auto lg:h-[770px] object-cover lg:mt-[-8rem] lg:mr-[-10rem]"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalSection;
