"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
import {
  Globe,
  Shield,
  Database,
  Cloud,
  Settings,
  Code,
  LucideIcon
  // ArrowLeft
} from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";

interface LearningPath {
  title: string;
  description: string;
  gradient: string;
  href: string;
  icon: LucideIcon;
}

const learningPaths: LearningPath[] = [
  {
    title: "Full Stack Web Development",
    description:
      "Master both front-end and back-end technologies to become a versatile web developer.",
    gradient: "from-blue-500 to-purple-600",
    href: "/learning-path/fullstack",
    icon: Globe,
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from digital threats.",
    gradient: "from-red-500 to-pink-600",
    href: "/learning-path/cybersecurity",
    icon: Shield,
  },
  {
    title: "Data Science",
    description: "Dive into the world of data analysis and machine learning.",
    gradient: "from-green-500 to-teal-600",
    href: "/learning-path/datascience",
    icon: Database,
  },
  {
    title: "AWS, Azure & DevOps",
    description: "Master cloud platforms and DevOps practices.",
    gradient: "from-orange-500 to-yellow-500",
    href: "/learning-path/devops",
    icon: Cloud,
  },
  {
    title: "ServiceNow",
    description:
      "Become an expert in the ServiceNow platform for IT service management.",
    gradient: "from-indigo-500 to-blue-600",
    href: "/learning-path/servicenow",
    icon: Settings,
  },
  {
    title: "Python Programming",
    description:
      "Master Python, one of the most versatile programming languages.",
    gradient: "from-yellow-400 to-green-500",
    href: "/learning-path/python",
    icon: Code,
  },
];

export default function LearningPaths() {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-16">
        {/* <Link
          href="/"
          className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Learning Paths</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover your optimal learning path to reach your full potential in
            tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={path.href}>
                <div
                  className={`bg-gradient-to-br ${path.gradient} p-6 rounded-2xl h-full min-h-[280px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {path.icon && (
                        <path.icon className="w-8 h-8 text-white mr-2" />
                      )}
                      <h2 className="text-2xl font-bold text-white">
                        {path.title}
                      </h2>
                    </div>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-semibold text-white">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
