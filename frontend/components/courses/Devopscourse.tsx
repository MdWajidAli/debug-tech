"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Cloud,
} from "lucide-react";

export default function DevOpsCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  const courseModules = [
    { title: "Introduction to DevOps", duration: "1 week" },
    { title: "Version Control with Git", duration: "1 week" },
    {
      title: "Continuous Integration and Continuous Deployment (CI/CD)",
      duration: "2 weeks",
    },
    { title: "AWS Fundamentals", duration: "2 weeks" },
    { title: "Azure Fundamentals", duration: "2 weeks" },
    {
      title: "Container Technologies (Docker, Kubernetes)",
      duration: "3 weeks",
    },
    {
      title: "Infrastructure as Code (Terraform, CloudFormation)",
      duration: "2 weeks",
    },
    { title: "Monitoring and Logging", duration: "1 week" },
    { title: "DevOps Security", duration: "1 week" },
    { title: "Final Project: Multi-Cloud DevOps Pipeline", duration: "1 week" },
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
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">
            AWS, Azure / DevOps Course
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
              <span>Next batch: November 1, 2023</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-500 mr-2" />
              <span>20 students per batch</span>
            </div>
            <div className="flex items-center">
              <Cloud className="text-yellow-500 mr-2" />
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
                  Our AWS, Azure / DevOps course is designed to equip you with
                  the skills needed to implement DevOps practices using AWS and
                  Azure cloud platforms. You will learn how to automate software
                  delivery processes, manage cloud infrastructure, and implement
                  continuous integration and deployment pipelines.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  What you will learn:
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>DevOps principles and practices</li>
                  <li>AWS and Azure cloud services</li>
                  <li>Version control with Git</li>
                  <li>CI/CD pipeline implementation</li>
                  <li>Container technologies (Docker, Kubernetes)</li>
                  <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                  <li>Monitoring, logging, and DevOps security</li>
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
                    <span>Hands-on labs with AWS and Azure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Real-world DevOps projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Preparation for AWS and Azure certifications</span>
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
                      name: "Alex Johnson",
                      role: "AWS Certified Solutions Architect",
                      image: "/images/testi-1.jpg",
                    },
                    {
                      name: "Samantha Lee",
                      role: "Azure DevOps Engineer",
                      image: "/images/testi-2.jpg",
                    },
                    {
                      name: "Michael Chen",
                      role: "Senior DevOps Consultant",
                      image: "/images/testi-3.jpg",
                    },
                    {
                      name: "Emily Davis",
                      role: "Cloud Security Specialist",
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
                      q: "Do I need prior experience with AWS or Azure?",
                      a: "No prior experience with AWS or Azure is required. We start with the fundamentals and progressively build up to more advanced concepts. However, basic knowledge of Linux and networking will be beneficial.",
                    },
                    {
                      q: "Will I get hands-on experience during the course?",
                      a: "Yes, our course includes hands-on labs and real-world projects to ensure you gain practical experience.",
                    },
                    {
                      q: "Are there any certifications included?",
                      a: "Yes, our course prepares you for AWS and Azure certification exams, and we provide guidance on the certification process.",
                    },
                    {
                      q: "What if I miss a class?",
                      a: "All sessions are recorded, and you can access the recorded lectures anytime. You can also reach out to instructors for assistance.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 py-4"
                    >
                      <h3 className="font-semibold">{faq.q}</h3>
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
            Ready to become a DevOps Engineer?
          </h2>
          <p className="mb-6">
            Enroll now and start your journey towards becoming a skilled DevOps
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
