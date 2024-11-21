"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const services = [
  {
    title: "IT Consultancy Services",
    image: "/images/it-services.jpg",
    description:
      "IT consultancy services provide expert guidance to optimize your business operations using technology. From assessing current infrastructure to designing tailored solutions, our experts help streamline processes, improve efficiency, and enhance cybersecurity. They offer strategic advice on software implementation, cloud computing, data management, and system integration. With our IT consultancy services, businesses gain access to cutting-edge innovations, ensuring competitive advantage and seamless technology integration across the enterprise.",
  },
  {
    title: "IT Corporate Training",
    image: "/images/it-corporate.jpg",
    description:
      "Corporate IT training equips your team with the latest technology skills to boost productivity and drive innovation. Tailored to meet your organization's specific needs, these training programs cover areas such as cybersecurity, cloud computing, data analytics, and software development. By investing in IT training, businesses can ensure their employees stay ahead of industry trends, increase efficiency, and reduce downtime. Empower your workforce with the knowledge and tools to excel in today's tech-driven landscape and achieve long-term success.",
  },
  {
    title: "Web Designing",
    image: "/images/web-designing.jpg",
    description:
      "Our web design services bring your brand to life with visually captivating, user-friendly websites. We specialize in creating responsive, intuitive designs that provide seamless experiences across devices. From sleek layouts to interactive elements, we create web solutions that engage visitors and drive conversions. Whether you need a simple landing page or a full e-commerce platform, our web design services turn your vision into a powerful digital presence, helping your business stand out online and connect with your target audience effectively.",
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering business with cutting-edge technology solutions and
            expert training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition-colors duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="#footer"
            className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
          >
            Scroll to learn more
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Link>
        </motion.div>
      </main>

      {/* <footer id="footer" className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold mb-4">
            Ready to transform your business?
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition-colors duration-300"
          >
            Get Started
          </Link>
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            &copy; 2024 DEBUG-TECH. All rights reserved.
          </p>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}
