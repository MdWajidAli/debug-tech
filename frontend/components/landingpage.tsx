"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Server,
  Users,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Globe,
    title: "IT Consultancy",
    description: "Strategic technology guidance for your business",
  },
  {
    icon: Server,
    title: "IT Solutions",
    description: "Custom software and infrastructure solutions",
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Upskill your team with cutting-edge tech courses",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive and scalable web applications",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Efficient data storage and analytics solutions",
  },
];

const features = [
  "E-Verfied U.S. Employer",
  "Expert IT consultants",
  "Tailored solutions for your business",
  "Cutting-edge technology expertise",
  "Comprehensive corporate training programs",
  "Scalable and secure IT infrastructure",
];

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500">
                Empowering Your Business with Cutting-Edge IT Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                DebugTech provides expert IT consultancy, tailored solutions,
                and corporate training to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="#courses"
                  className="bg-yellow-500 text-white dark:bg-yellow-600 dark:text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 dark:hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                {/* <Link
                  href="/about-us"
                  className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                >
                  About Us
                </Link> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <service.icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2 mb-10 lg:mb-0"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Why Choose DebugTech?
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-6 h-6 text-yellow-500 mr-2" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <Image
                  src="/images/e-verify.png?height=400&width=600"
                  alt="DebugTech Features"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-500 dark:bg-yellow-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Let us discuss how DebugTech can help you achieve your technology
              goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* <Button asChild variant="secondary">
                <Link href="/contact-us" className="inline-flex items-center">
                  Contact Us <ArrowRight className="ml-2" />
                </Link>
              </Button> */}

              <Link
                href="#"
                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
