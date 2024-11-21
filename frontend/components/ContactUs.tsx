"use client";

import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactUs() {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/dev.png"
              alt="Developer illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
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
                  Email
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
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white font-semibold transition-colors"
              >
                Submit
              </button>
            </form>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Social media</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
