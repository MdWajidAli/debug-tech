"use client";

import { useState } from "react";
import Link from "next/link";
import {
  // ChevronLeft,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Code,
} from "lucide-react";
// import Header from "../Header";
// import Footer from "../Footer";

export default function FullStackCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  const courseModules = [
    { title: "HTML, CSS, and JavaScript Fundamentals", duration: "2 weeks" },
    { title: "React and Frontend Frameworks", duration: "3 weeks" },
    { title: "Node.js and Express.js", duration: "2 weeks" },
    { title: "Databases and ORM (SQL and MongoDB)", duration: "2 weeks" },
    { title: "RESTful API Development", duration: "2 weeks" },
    { title: "Authentication and Security", duration: "1 week" },
    { title: "Deployment and DevOps Basics", duration: "1 week" },
    { title: "Final Project", duration: "3 weeks" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <Header /> */}
      {/* <header className="bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <span className="text-xl font-bold">DEBUG-TECH</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-yellow-500 hover:text-yellow-400 flex items-center"
            >
              <ChevronLeft className="inline mr-2" size={20} />
              Back to Courses
            </Link>
          </nav>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">
            Full Stack Development Course
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
              <span>Next batch: July 1, 2023</span>
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
                  Our Full Stack Development course is designed to take you from
                  a beginner to a proficient full stack developer. You will learn
                  both front-end and back-end technologies, allowing you to
                  build complete web applications from scratch.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  What you will learn:
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>HTML, CSS, and JavaScript fundamentals</li>
                  <li>React and modern frontend frameworks</li>
                  <li>Node.js and Express.js for backend development</li>
                  <li>Database management with SQL and MongoDB</li>
                  <li>RESTful API development</li>
                  <li>Authentication and security best practices</li>
                  <li>Deployment and basic DevOps skills</li>
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
                    <span>Hands-on projects and real-world applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Live coding sessions and code reviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Personalized feedback and mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Job placement assistance upon completion</span>
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
                      name: "Jane Doe",
                      role: "Senior Frontend Developer",
                      image: "/images/testi-1.jpg",
                    },
                    {
                      name: "John Smith",
                      role: "Backend Architect",
                      image: "/images/testi-2.jpg",
                    },
                    {
                      name: "Alice Johnson",
                      role: "Full Stack Engineer",
                      image: "/images/testi-3.jpg",
                    },
                    {
                      name: "Bob Wilson",
                      role: "DevOps Specialist",
                      image: "/images/testi-4.jpg",
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
                      question: "What is the duration of the course?",
                      answer: "The course lasts for 16 weeks.",
                    },
                    {
                      question: "What is the course fee?",
                      answer: "The total fee for the course is $1200.",
                    },
                    {
                      question: "Is this course suitable for beginners?",
                      answer:
                        "Yes, this course is designed for beginners with no prior coding experience.",
                    },
                    {
                      question:
                        "What career opportunities will this course open?",
                      answer:
                        "You’ll be equipped to apply for Full Stack Developer, Frontend Developer, or Backend Developer roles.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    >
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
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
            Ready to become a Full Stack Developer?
          </h2>
          <p className="mb-6">
            Enroll now and start your journey towards becoming a proficient Full
            Stack developer!
          </p>
          <Link
            href="/enroll-now"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </main>
      {/* <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024 DEBUG-TECH. All rights reserved.
        </div>
      </footer> */}
      {/* <Footer /> */}
    </div>
  );
}
