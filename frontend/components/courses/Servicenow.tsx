"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Settings,
} from "lucide-react";

export default function ServiceNowCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  const courseModules = [
    { title: "Introduction to ServiceNow", duration: "1 week" },
    { title: "ServiceNow Administration", duration: "2 weeks" },
    { title: "ServiceNow Development", duration: "3 weeks" },
    { title: "ITSM Processes and Implementation", duration: "2 weeks" },
    { title: "ServiceNow Integrations", duration: "2 weeks" },
    { title: "ServiceNow Reporting and Analytics", duration: "1 week" },
    { title: "ServiceNow Security and Access Control", duration: "1 week" },
    { title: "Final Project: ServiceNow Implementation", duration: "2 weeks" },
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
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold mb-6">ServiceNow Course</h1>
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
              <span>14 weeks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-yellow-500 mr-2" />
              <span>Next batch: October 1, 2023</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-500 mr-2" />
              <span>20 students per batch</span>
            </div>
            <div className="flex items-center">
              <Settings className="text-yellow-500 mr-2" />
              <span>Beginner to Advanced</span>
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
                  Our ServiceNow course is designed to take you from a beginner
                  to an advanced ServiceNow professional. You will learn how to
                  implement, configure, and develop on the ServiceNow platform
                  to streamline IT service management processes.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  What you will learn:
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>ServiceNow platform fundamentals</li>
                  <li>ServiceNow administration and configuration</li>
                  <li>ServiceNow development using JavaScript</li>
                  <li>ITSM processes and their implementation in ServiceNow</li>
                  <li>Integration of ServiceNow with other systems</li>
                  <li>ServiceNow reporting and analytics</li>
                  <li>ServiceNow security and access control</li>
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
                    <span>
                      Hands-on labs with ServiceNow developer instance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Real-world project implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Preparation for ServiceNow certifications</span>
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
                      name: "John Smith",
                      role: "Senior ServiceNow Developer",
                      image: "/images/testi-1.jpg",
                    },
                    {
                      name: "Emma Watson",
                      role: "ServiceNow Certified System Administrator",
                      image: "/images/testi-2.jpg",
                    },
                    {
                      name: "David Brown",
                      role: "ITSM Process Expert",
                      image: "/images/testi-3.jpg",
                    },
                    {
                      name: "Sarah Johnson",
                      role: "ServiceNow Integration Specialist",
                      image: "/images/testi-2.jpg",
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
                      q: "Do I need prior IT experience for this course?",
                      a: "While some IT background is helpful, our course is designed to accommodate beginners. We start with the fundamentals of ITSM and progressively build up to more advanced ServiceNow concepts.",
                    },
                    {
                      q: "Will I get access to a ServiceNow instance for practice?",
                      a: "Yes, you'll get access to a ServiceNow developer instance for the duration of the course. This will allow you to practice and implement what you learn in a real ServiceNow environment.",
                    },
                    {
                      q: "What certification will I be prepared for?",
                      a: "Our course prepares you for various ServiceNow certifications, including ServiceNow Certified System Administrator and ServiceNow Certified Application Developer.",
                    },
                    {
                      q: "What are the job prospects after completing this course?",
                      a: "The demand for ServiceNow professionals is growing rapidly, and many companies are actively looking for certified ServiceNow developers and administrators.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                    >
                      <h4 className="font-semibold">{item.q}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.a}
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
            Ready to become a ServiceNow Expert?
          </h2>
          <p className="mb-6">
            Enroll now and start your journey towards becoming a skilled
            ServiceNow professional!
          </p>
          <Link
            href="/enroll-now"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; 2024 DEBUG-TECH. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
