"use client";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const categories = {
  Academics: [
    {
      href: "https://www.iitk.ac.in/doaa/data/UG-Manual.pdf",
      text: "UG Manual",
      bgColor: "bg-purple-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/pg-manual",
      text: "PG Manual",
      bgColor: "bg-indigo-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Course-Template-B.Tech-BS.pdf",
      text: "Course Template (B.Tech,BS,Dual Degree)",
      bgColor: "bg-pink-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Course_Schedule_2024-25-1.pdf",
      text: "Course Schedule and Venue: 2024-25/I",
      bgColor: "bg-cyan-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/exam-schedule",
      text: "Exam Schedule",
      bgColor: "bg-rose-500",
    },
    {
      href: "https://pingala.iitk.ac.in/",
      text: "Pingala Portal",
      bgColor: "bg-blue-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Calendar-2024.pdf",
      text: "Academic Calendar 2024",
      bgColor: "bg-lime-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Holidays-2024.pdf",
      text: "List of Holidays 2024",
      bgColor: "bg-amber-500",
    },
  ],
  "Student Resources": [
    {
      href: "https://docs.google.com/spreadsheets/d/1imcduxzVQIkBUG23vwQ4qwLbHfyDZVtZTGfNwzSkYpU/edit?gid=0#gid=0",
      text: "Student Senate Nominee to SUGC",
      bgColor: "bg-red-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/sugcmember.pdf",
      text: "List of SUGC Members and DUGC Conveners",
      bgColor: "bg-teal-500",
    },
    {
      href: "https://docs.google.com/spreadsheets/d/1Civ7RtqDAf0i6JIEDoL1XSqUCwgQdVl77nXv6nJUQxk/edit?gid=0#gid=0",
      text: "Student Senate Nominee to DUGC",
      bgColor: "bg-yellow-500",
    },
    {
      href: "https://docs.google.com/spreadsheets/d/1jwGc0Kqccd4pT898HQadgihxBkIq2XhBU0qfyqUAhkk/edit?gid=0#gid=0",
      text: "Academic Department Mentors",
      bgColor: "bg-fuchsia-500",
    },
    {
      href: "https://docs.google.com/spreadsheets/d/1jkl_CGoTwrRMUZYY1kTbCucZ5q7_GxBxDd7QxjatQCk/edit?gid=0#gid=0",
      text: "Career Department Mentors",
      bgColor: "bg-purple-500",
    },

    {
      href: "https://iitk.ac.in/new/key-administrators",
      text: "Deans and HODs",
      bgColor: "bg-green-500",
    },
  ],
};

const QuickLinks = () => {
  const [currentTab, setCurrentTab] = useState("Academics");

  return (
    <section className="relative pb-30">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src="/images/shape/shape-dotted-light.svg"
          alt="Dotted Background"
          className="dark:hidden"
        />
        <Image
          fill
          src="/images/shape/shape-dotted-dark.svg"
          alt="Dotted Background"
          className="hidden dark:block"
        />
      </div>

      <div className="mx-auto mb-8 max-w-c-1315 px-4 text-center md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: ``,
            subtitle: `Quick Links`,
            description: ``,
          }}
        />
      </div>

      <motion.div
        className="mb-12 flex justify-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentTab(category)}
            className={`mx-2 px-4 py-2 font-semibold ${
              currentTab === category
                ? "bg-primary text-white"
                : "text-gray-800 dark:text-gray-300"
            } rounded-lg transition duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {categories[currentTab].map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform"
          >
            <Link href={link.href} passHref legacyBehavior>
              <a
                aria-label={link.text}
                target="_blank"
                className={`flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-medium text-white shadow-lg transition duration-500 ease-in-out hover:bg-opacity-80 dark:bg-primary ${link.bgColor}`}
              >
                <span>{link.text}</span>
                <FaExternalLinkAlt />
              </a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default QuickLinks;
