"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, User } from "lucide-react";
import ThemeImage from "./ThemeImage";

const navItems = [
  { name: "Internships", href: "/internships" },
  { name: "Learning Paths", href: "/learning-path" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <ThemeImage
            srcLight="/images/debug-light.jpg"
            srcDark="/images/debug-dark.png"
            alt="Debug Tech Logo"
            width={80}
            height={20}
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-yellow-600 dark:text-yellow-400 font-semibold"
                  : "hover:text-yellow-600 dark:hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110"
            aria-label="User account"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 ${
                pathname === item.href
                  ? "bg-gray-100 dark:bg-gray-700 text-yellow-600 dark:text-yellow-400 font-semibold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
