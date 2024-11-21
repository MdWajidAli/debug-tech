"use client";

import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import Image from "next/image";
// import Header from "./Header";
// import Footer from "./Footer";

export default function EnrollNow() {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/debug1.jpg"
              alt="Developer illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Enroll Now</h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block mb-1 text-sm font-medium"
                >
                  Course Interested
                </label>
                <select
                  id="course"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-science">
                    Data Analysis / Data Science
                  </option>
                  <option value="service-now">Service Now</option>
                  <option value="devops">AWS, Azure / DevOps</option>
                  <option value="python">Python</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="queries"
                  className="block mb-1 text-sm font-medium"
                >
                  Any queries
                </label>
                <textarea
                  id="queries"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white font-semibold transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
