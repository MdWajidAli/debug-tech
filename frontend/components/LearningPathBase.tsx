"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

interface Course {
  title: string;
  level: string;
  duration: string;
}

interface Section {
  title: string;
  description: string;
  courses: Course[];
}

interface PathContent {
  title: string;
  subtitle: string;
  description: string;
  averageSalary: string;
  sections: Section[];
}

export default function LearningPathBase({
  pathContent,
}: {
  pathContent: PathContent;
}) {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/learning-path"
          className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Learning Paths
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {pathContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            {pathContent.subtitle}
          </p>
          <div className="space-y-4 mb-12">
            <p className="text-gray-600 dark:text-gray-400">
              {pathContent.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {pathContent.averageSalary}
            </p>
          </div>
        </motion.div>

        <div className="space-y-16">
          {pathContent.sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {section.description}
              </p>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-600 dark:bg-purple-400" />

                <div className="space-y-6">
                  {section.courses.map((course, courseIndex) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                      className="relative pl-8"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-semibold mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="mr-4">{course.duration}</span>
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{course.level}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
