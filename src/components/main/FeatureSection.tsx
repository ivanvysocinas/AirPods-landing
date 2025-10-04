"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../../animations/animations";
import Link from "next/link";

// Section describing Active Noise Cancellation feature. Composition of a girl's image and text block with a circular arrow button.

const FeatureSection = () => {
  const girl = "/images/girl.jpg";
  return (
    <section className="min-h-screen px-4 md:px-8 py-12 md:py-20">
      <motion.div
        className="max-w-[95rem] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="relative w-full lg:w-auto" variants={scaleIn}>
          <motion.img
            src={girl}
            alt="Feature"
            className="w-full md:w-[28rem] lg:w-[35rem] h-[500px] md:h-[600px] lg:h-[800px] object-cover grayscale-50 rounded-2xl lg:rounded-none mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="space-y-4 md:space-y-6 relative z-20 w-full lg:w-auto text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#d1cecedc] leading-tight mb-8 lg:mb-15 tracking-wide relative z-30 lg:ml-[-14rem]"
            variants={fadeInUp}
          >
            Sounds like
            <br />
            an epiphany
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-lg leading-relaxed text-sm md:text-base mx-auto lg:mx-0"
            variants={fadeInUp}
          >
            Industry-leading Active Noise Cancellation counters external sound
            with equal anti-noise, allowing you to immerse yourself in what
            you're listening to.
            <br />
            <br />
            Press the noise control button to switch to Transparency mode, which
            lets outside sound in so you can interact naturally with your
            surroundings.
          </motion.p>
          <Link href="/prices">
            <motion.button
              className="px-8 py-8 md:py-10 rounded-full text-sm transition-all duration-300 w-fit mx-auto lg:mx-0 bg-black/5 border-1 border-gray-300 hover:bg-black/10 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative text-black/40 hover:text-black/60 transition-colors text-4xl md:text-5xl">
                ⟶
              </span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 w-[20rem]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
