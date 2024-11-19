"use client";

import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import Image from "next/image";
// import Link from "next/link";
// import {
//   CheckCircle,
//   Clock,
//   Calendar,
//   Users,
//   Code,
//   Database,
//   Globe,
// } from "lucide-react";

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <h2 className="text-3xl font-bold mb-6">
            The Return of Debug Tech: A Journey of Renewal
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="mb-4">
                In 1997, the heart of Hyderabads tech education scene saw the
                birth of a pioneering institution—Debug Tech Educational
                Institute. Founded with the vision of shaping young minds to
                meet the ever-growing demands of the technology industry, Debug
                Tech quickly gained a reputation for its innovative curriculum,
                dedicated faculty, and cutting-edge training. Students from all
                over the city flocked to the institute, eager to equip
                themselves with the tools to build their futures.
              </p>
              <p className="mb-4">
                For over a decade, Debug Tech was synonymous with excellence. It
                was the launching pad for many successful careers in software
                development, IT management, and tech entrepreneurship. But as
                the years passed, unforeseen circumstances began to challenge
                the institution. Changes in the educational landscape, economic
                shifts, and internal challenges led to the decision to pause
                operations. In 2010, Debug Tech closed its doors in Hyderabad,
                leaving behind fond memories and a deep void in the local tech
                education community.
              </p>
              <p className="mb-4">
                And now, in 2024, after years of anticipation, Debug Tech is
                back—stronger, more dynamic, and brimming with new joy, energy,
                and knowledge. This is not just a relaunch; it iss a rebirth. The
                institute has evolved to meet the demands of a new era,
                embracing advancements in AI, machine learning, cloud computing,
                and cybersecurity, all while staying true to its core values of
                nurturing talent and fostering innovation.
              </p>
              <p className="font-bold">
                Debug Techs legacy continues, and its future looks brighter
                than ever. The institution that once stood as a beacon of hope
                is now back, ready to shape the tech leaders of tomorrow.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/abtus.jpg"
                alt="Debug Tech in 1997"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                Debug Tech in 1997
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">E-Verify</h2>
            <Image
              src="/images/e-verify.png"
              alt="E-Verify Logo"
              width={100}
              height={50}
            />
          </div>
          <p className="text-sm">
            Our company is proud to be E-Verified, adhering to U.S. employment
            standards to ensure legal and compliant hiring practices. This
            certification underscores our commitment to providing a trustworthy
            and secure work environment, and our dedication to onboard eligible
            employees who meet U.S. federal regulations. As an E-Verified
            organization, we strive to maintain the highest standards of
            integrity in our operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Meet Our Team of DebugTech
          </h2>
          <div className="flex flex-col items-center">
            {[
              { name: "Masood quraishi", role: "CEO" },
              { name: "Nawaz quraishi", role: "Director" },
              { name: "Altaf Ali", role: "Manager" },
              { name: "Muhammed Wajid Ali", role: "Team Lead" },
              { name: "Mohammad Dariya begum", role: "UI/UX Designer" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-yellow-500 text-white p-4 rounded-lg mb-4 w-64 text-center"
              >
                <h3 className="font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {Array(5)
                .fill("User Developer")
                .map((role, index) => (
                  <div
                    key={index}
                    className="bg-yellow-500 text-white p-4 rounded-lg w-48 text-center"
                  >
                    <p>{role}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024 DEBUG-TECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
