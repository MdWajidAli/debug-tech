"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  // ChevronLeft,
  // CheckCircle,
  Clock,
  Calendar,
  Users,
  Code,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

type Module = {
  title: string;
  duration: string;
};

type Instructor = {
  name: string;
  role: string;
  image: string;
};

export default function PythonCourse() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const courseModules: Module[] = [
    { title: "Introduction to Python", duration: "1 week" },
    {
      title: "Python Basics: Data Types and Control Structures",
      duration: "2 weeks",
    },
    { title: "Functions and Modules", duration: "1 week" },
    { title: "Object-Oriented Programming in Python", duration: "2 weeks" },
    { title: "File Handling and Exception Handling", duration: "1 week" },
    { title: "Working with Databases", duration: "2 weeks" },
    {
      title: "Web Development with Python (Django/Flask)",
      duration: "3 weeks",
    },
    { title: "Data Analysis with Python (NumPy, Pandas)", duration: "2 weeks" },
    { title: "Final Project", duration: "2 weeks" },
  ];

  const instructors: Instructor[] = [
    {
      name: "Dr. Alan Turing",
      role: "Senior Python Developer",
      image: "/images/testi-1.jpg",
    },
    {
      name: "Grace Hopper",
      role: "Data Scientist",
      image: "/images/testi-2.jpg",
    },
    {
      name: "Linus Torvalds",
      role: "Web Development Expert",
      image: "/images/testi-3.jpg",
    },
    {
      name: "Ada Lovelace",
      role: "Python Automation Specialist",
      image: "/images/testi-1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      {/* <header className="bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <span className="text-xl font-bold">DEBUG-TECH</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-yellow-500 hover:text-yellow-400">
              <ChevronLeft className="inline mr-2" size={20} />
              Back to Courses
            </Link>
          </nav>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">Python Programming Course</h1>
          <Link
            href="/enroll-now"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Enroll Now
          </Link>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Clock className="text-yellow-500 mr-2" />
              <span>16 weeks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-yellow-500 mr-2" />
              <span>Next batch: December 1, 2023</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-500 mr-2" />
              <span>25 students per batch</span>
            </div>
            <div className="flex items-center">
              <Code className="text-yellow-500 mr-2" />
              <span>Beginner to Intermediate</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {["Overview", "Curriculum", "Instructors", "FAQs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.toLowerCase()
                      ? "border-yellow-500 text-yellow-600 dark:text-yellow-500"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="mb-4">
                  Our Python Programming course is designed to take you from a
                  beginner to an intermediate Python developer. You will learn the
                  fundamentals of Python, object-oriented programming, web
                  development, and data analysis using Python.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  What you will learn:
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Python syntax and basic programming concepts</li>
                  <li>Object-Oriented Programming in Python</li>
                  <li>File handling and exception handling</li>
                  <li>Database operations with Python</li>
                  <li>Web development using Django or Flask</li>
                  <li>Data analysis with NumPy and Pandas</li>
                  <li>Best practices and coding standards in Python</li>
                </ul>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        Module {index + 1}: {module.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Duration: {module.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructors" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {instructors.map((instructor, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
                    >
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{instructor.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {instructor.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Do I need prior programming experience?",
                      a: "No prior programming experience is required. Our course is designed to accommodate beginners and progress to advanced topics.",
                    },
                    {
                      q: "What kind of projects will I work on?",
                      a: "You’ll work on command-line applications, web applications, data analysis projects, and automation scripts. The course culminates in a final project where you’ll build a complete application of your choice.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                    >
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Ready to become a Python Developer?
          </h2>
          <p className="mb-6">
            Enroll now and start your journey towards becoming a proficient
            Python programmer!
          </p>
          <Link
            href="/enroll-now"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
