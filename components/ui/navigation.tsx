"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = React.useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
            </motion.div>
          </Link>

          {/* Center Navigation Items */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsFeatureOpen(!isFeatureOpen)}
                >
                  <span>Features</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isFeatureOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link href="#feature1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Feature 1
                    </Link>
                    <Link href="#feature2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Feature 2
                    </Link>
                  </div>
                )}
              </div>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="#company" className="text-gray-600 hover:text-gray-900">Company</Link>
              <Link href="#resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
            </div>
          </div>

          {/* Right Side Auth Buttons */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Log in</Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-16 left-0 right-0 bg-white md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-4 py-4 space-y-4">
          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
              onClick={() => setIsFeatureOpen(!isFeatureOpen)}
            >
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isFeatureOpen && (
              <div className="pl-4 space-y-2">
                <Link href="#feature1" className="block text-gray-600 hover:text-gray-900">
                  Feature 1
                </Link>
                <Link href="#feature2" className="block text-gray-600 hover:text-gray-900">
                  Feature 2
                </Link>
              </div>
            )}
          </div>
          <Link href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="#company" className="block text-gray-600 hover:text-gray-900">Company</Link>
          <Link href="#resources" className="block text-gray-600 hover:text-gray-900">Resources</Link>
          <Link href="/login" className="block text-gray-600 hover:text-gray-900">Log in</Link>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navigation;