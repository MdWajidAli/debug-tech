"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Book,
  Shield,
  Database,
  Cloud,
  Code,
  PenTool,
  // ArrowLeft,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface Course {
  name: string;
  link: string;
  icon: LucideIcon;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  comment: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const courses: Course[] = [
  {
    name: "Full Stack",
    link: "/courses/full-stack",
    icon: Code,
    description:
      "Learn both front-end and back-end technologies to become a versatile developer.",
  },
  {
    name: "Cybersecurity",
    link: "/courses/cybersecurity",
    icon: Shield,
    description:
      "Master the art of protecting computer systems, networks, and data from digital attacks.",
  },
  {
    name: "Data Analysis / Data Science",
    link: "/courses/data-science",
    icon: Database,
    description:
      "Dive into the world of data, learning to analyze and interpret complex datasets.",
  },
  {
    name: "Service Now",
    link: "/courses/service-now",
    icon: PenTool,
    description:
      "Become an expert in the ServiceNow platform for IT service management.",
  },
  {
    name: "AWS, Azure / DevOps",
    link: "/courses/devops",
    icon: Cloud,
    description:
      "Explore cloud computing platforms and DevOps practices for modern software development.",
  },
  {
    name: "Python",
    link: "/courses/python",
    icon: Book,
    description:
      "Learn one of the most versatile programming languages used in various fields of technology.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    comment:
      "The Full Stack course was incredibly comprehensive. I now feel confident in both front-end and back-end development.",
  },
  {
    name: "Jane Smith",
    role: "Cybersecurity Analyst",
    comment:
      "Debug Tech's Cybersecurity course gave me the skills I needed to land my dream job in the field.",
  },
  {
    name: "Mike Johnson",
    role: "Data Scientist",
    comment:
      "The Data Science course was challenging but rewarding. The hands-on projects really helped solidify my understanding.",
  },
  {
    name: "Emily Brown",
    role: "IT Specialist",
    comment:
      "Thanks to the ServiceNow course, I've been able to streamline processes at my company significantly.",
  },
  {
    name: "Chris Lee",
    role: "DevOps Engineer",
    comment:
      "The AWS/Azure DevOps course was exactly what I needed to take my career to the next level.",
  },
  {
    name: "Sarah Wilson",
    role: "Python Developer",
    comment:
      "I started as a complete beginner, and now I'm confidently building Python applications. Great course!",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why should I choose Debug Tech?",
    answer:
      "Debug Tech offers cutting-edge courses designed by industry experts, hands-on projects, and a supportive learning community. Our focus on practical skills and up-to-date content ensures you're well-prepared for the tech industry's demands.",
  },
  {
    question: "What can I learn here?",
    answer:
      "We offer a wide range of courses including Full Stack Development, AWS/Azure & DevOps, Data Engineering, Service Now, Cyber Security, and Python. Our curriculum is constantly updated to reflect the latest industry trends and technologies.",
  },
  {
    question: "How should I enroll in a course?",
    answer:
      "Enrolling is easy! Simply browse our course catalog, select the course you're interested in, and click the 'Enroll' button. You'll be guided through the registration process, including payment options and course start dates.",
  },
  {
    question: "Are certificates provided upon course completion?",
    answer:
      "Yes, we provide certificates of completion for all our courses. These certificates are industry-recognized and can be a valuable addition to your resume or LinkedIn profile.",
  },
];

export default function CoursesPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* <Link
        href="/"
        className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:underline transition-colors my-8 "
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link> */}
      <Header />
      <main>
        <HeroSection />
        <CoursesSection courses={courses} />
        <TestimonialsSection testimonials={testimonials} />
        <FAQsSection faqs={faqs} openFAQs={openFAQs} toggleFAQ={toggleFAQ} />
      </main>
      <Footer />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300">
        Explore Our Courses
      </h1>
      <p className="text-xl mb-8 transition-colors duration-300">
        Discover a wide range of tech courses to boost your skills and career
      </p>
      <Link
        href="#courses"
        className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block"
      >
        View Courses
      </Link>
    </section>
  );
}

function CoursesSection({ courses }: { courses: Course[] }) {
  return (
    <section id="courses" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center transition-colors duration-300">
        Our Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.name}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <course.icon className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 transition-colors duration-300">
              {course.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {course.description}
            </p>
            <Link
              href={course.link}
              className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md inline-block"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center transition-colors duration-300">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt={`${testimonial.name}'s profile`}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-sm transition-colors duration-300">
              &quot;{testimonial.comment}&quot;
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQsSection({
  faqs,
  openFAQs,
  toggleFAQ,
}: {
  faqs: FAQ[];
  openFAQs: number[];
  toggleFAQ: (index: number) => void;
}) {
  return (
    <section id="faqs" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center transition-colors duration-300">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
            >
              <h3 className="font-semibold transition-colors duration-300">
                {faq.question}
              </h3>
              {openFAQs.includes(index) ? (
                <ChevronUp className="w-5 h-5 transition-colors duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-colors duration-300" />
              )}
            </button>
            {openFAQs.includes(index) && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
