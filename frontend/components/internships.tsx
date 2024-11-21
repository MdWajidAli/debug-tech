"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import {
  // ArrowLeft,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
// import Header from "./Header";
// import Footer from "./Footer";

export default function InternshipsPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What if I cannot afford the course?",
      answer:
        "We offer scholarships and payment plans to ensure accessibility. Please contact us for more information.",
    },
    {
      question: "Is there a guarantee of a job after the internship?",
      answer:
        "While the internship provides valuable experience, there is no guarantee of employment upon completion.",
    },
    {
      question: "Can I take the course without applying for the internship?",
      answer:
        "Yes, the course can be taken independently, but completion is required for internship consideration.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-8">
        {/* <Link
          href="/"
          className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:underline mb-6 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link> */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT Fundamentals Course & Internship Program
        </motion.h1>

        <motion.section
          className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
          <p className="mb-6 text-lg">
            Our IT Fundamentals course is designed to provide beginners with
            essential knowledge and skills in information technology. This
            2-hour course covers key topics, including computer hardware,
            software, networking, and cybersecurity. Successful completion of
            the course is a prerequisite for our internship program.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <Clock className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p>2 hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Format</h3>
                <p>Online video course</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Topics Covered</h3>
                <ul className="list-disc list-inside">
                  <li>Introduction to IT</li>
                  <li>Computer Hardware</li>
                  <li>Operating Systems</li>
                  <li>Networking Basics</li>
                  <li>Cybersecurity Essentials</li>
                  <li>Troubleshooting and Support</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <DollarSign className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <p>$99</p>
              </div>
            </div>
          </div>
          <Link
            href="/enroll-now?course=it-fundamentals"
            className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Enroll in the Course
          </Link>
        </motion.section>

        <motion.section
          className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Internship Program</h2>
          <p className="mb-6 text-lg">
            Upon successful completion of the IT Fundamentals course,
            participants are eligible to apply for our unpaid internship
            program. This program offers hands-on experience in the field of IT,
            helping interns to build practical skills and enhance their resumes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <Clock className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p>3 months (June 1st to August 31st, 2024)</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside">
                  <li>Assist with IT support tasks</li>
                  <li>Participate in team projects</li>
                  <li>Gain exposure to real-world IT scenarios</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-6">
            <strong>Compensation:</strong> This is an unpaid internship.
          </p>
          <Link
            href="/apply-internship"
            className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Apply for the Internship
          </Link>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Course Video Preview</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <video controls className="w-full h-full object-cover">
              <source src="/placeholder_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Internship Agreement</h2>
          <Link
            href="/internship-agreement.pdf"
            className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Download the Full Internship Agreement
          </Link>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <h3 className="font-semibold transition-colors duration-300">
                    {faq.question}
                  </h3>
                  {openFAQs.includes(index) ? (
                    <ChevronUp className="w-5 h-5 transition-colors duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-colors duration-300" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQs.includes(index) ? "auto" : 0,
                    opacity: openFAQs.includes(index) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">For more information, please reach out to us:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:info@debugtech.com"
              className="text-yellow-600 dark:text-yellow-400 hover:underline transition-colors duration-300"
            >
              info@debugtech.com
            </a>
            <span>|</span>
            <a
              href="tel:+11234567890"
              className="text-yellow-600 dark:text-yellow-400 hover:underline transition-colors duration-300"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </motion.section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
