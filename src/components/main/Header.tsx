"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AppleFilled, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

// Navigation bar with Apple logo and menu. Responsive design with burger menu for mobile devices and smooth transition animations.

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/products", label: "Products" },
    { href: "/prices", label: "Prices" },
    { href: "/", label: "Overview" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <header className="z-50 bg-[#e6e2e2] relative">
      <nav className="max-w-[95rem] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-3xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AppleFilled style={{ color: "gray" }} />
          </motion.div>
        </Link>

        <ul className="hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm text-gray-600">
          {menuItems.map((item) => (
            <motion.li key={item.href} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="hover:text-black cursor-pointer transition"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="md:hidden text-3xl text-gray-600 z-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#e6e2e2] z-40 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-4xl font-bold text-gray-900 hover:text-gray-600 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
