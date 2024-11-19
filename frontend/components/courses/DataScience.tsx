"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  BarChart
  // Database,
  // Brain,
} from "lucide-react";

export default function DataScienceCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  const courseModules = [
    { title: "Introduction to Data Science", duration: "1 week" },
    { title: "Python for Data Science", duration: "2 weeks" },
    { title: "Data Cleaning and Preprocessing", duration: "2 weeks" },
    { title: "Exploratory Data Analysis", duration: "2 weeks" },
    {
      title: "Statistical Analysis and Hypothesis Testing",
      duration: "2 weeks",
    },
    { title: "Machine Learning Fundamentals", duration: "3 weeks" },
    { title: "Deep Learning and Neural Networks", duration: "2 weeks" },
    { title: "Big Data Technologies", duration: "1 week" },
    { title: "Final Project", duration: "1 week" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-gray-800 shadow-md">
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
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">
            Data Analysis / Data Science Course
          </h1>
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
              <span>Next batch: September 1, 2023</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-500 mr-2" />
              <span>25 students per batch</span>
            </div>
            <div className="flex items-center">
              <BarChart className="text-yellow-500 mr-2" />
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
                  Our Data Analysis / Data Science course is designed to take
                  you from a beginner to a proficient data scientist. You will
                  learn how to collect, process, and analyze data to derive
                  meaningful insights and build predictive models.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  What you will learn:
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Python programming for data science</li>
                  <li>Data cleaning and preprocessing techniques</li>
                  <li>Exploratory data analysis and visualization</li>
                  <li>Statistical analysis and hypothesis testing</li>
                  <li>Machine learning algorithms and their applications</li>
                  <li>Deep learning and neural networks</li>
                  <li>Big data technologies and their ecosystem</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">
                  Course Highlights:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Hands-on projects with real-world datasets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Industry-standard tools and libraries (NumPy, Pandas,
                      Scikit-learn, TensorFlow)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Kaggle competition participation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Career guidance and job placement assistance</span>
                  </li>
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
                  {[
                    {
                      name: "Dr. Emily Chen",
                      role: "Lead Data Scientist",
                      image: "/images/testi-1.jpg",
                    },
                    {
                      name: "Prof. Michael Johnson",
                      role: "Machine Learning Expert",
                      image: "/images/testi-2.jpg",
                    },
                    {
                      name: "Sarah Thompson",
                      role: "Data Visualization Specialist",
                      image: "/images/testi-3.jpg",
                    },
                    {
                      name: "Dr. Robert Lee",
                      role: "Big Data Architect",
                      image: "/images/testi-1.jpg",
                    },
                  ].map((instructor, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
                    >
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-14 h-16 rounded-full"
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
                      q: "Do I need a strong mathematics background?",
                      a: "While a basic understanding of mathematics (especially statistics and linear algebra) is helpful, we will cover the necessary concepts in the course.",
                    },
                    {
                      q: "Is prior programming experience required?",
                      a: "Prior programming experience is beneficial but not necessary. We will start with Python basics.",
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
            Ready to become a Data Scientist?
          </h2>
          <p className="mb-6">
            Enroll now and start your journey towards becoming a skilled Data
            professional!
          </p>
          <Link
            href="/enroll-now"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024 DEBUG-TECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
