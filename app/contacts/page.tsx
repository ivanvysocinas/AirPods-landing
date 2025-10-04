'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/src/components/main/Header'
import { fadeInUp, staggerContainer } from '@/src/animations/animations'

// Contact page with feedback form and FAQ accordion. Two-column responsive grid layout.

const faqs = [
  {
    question: 'How long is the battery life?',
    answer: 'AirPods Max offer up to 20 hours of listening time with Active Noise Cancellation enabled. AirPods Pro and AirPods 3 offer up to 6 hours on a single charge.'
  },
  {
    question: 'Are they water resistant?',
    answer: 'AirPods Pro and AirPods 3 are sweat and water resistant (IPX4). AirPods Max are not water resistant.'
  },
  {
    question: 'Do they work with Android devices?',
    answer: 'Yes, all AirPods can connect to any Bluetooth-enabled device. However, some features like Spatial Audio work best with Apple devices.'
  },
  {
    question: 'What is Spatial Audio?',
    answer: 'Spatial Audio with dynamic head tracking creates an immersive, theater-like listening experience by placing sound all around you.'
  },
  {
    question: 'Can I use just one AirPod at a time?',
    answer: 'Yes, you can use a single AirPod Pro or AirPod 3. AirPods Max are designed to be used as a pair.'
  }
]

export default function ContactsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Header />
      
      <motion.section
        className="min-h-screen px-4 md:px-8 py-20 bg-[#e6e2e2]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-16 text-center" variants={fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border bg-white  border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border bg-white  border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border bg-white  border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-2xl overflow-hidden"
                    whileHover={{ backgroundColor: '#f9fafb' }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <span className="text-2xl text-gray-400">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}