"use client";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";

const QuickLinks = () => {
  const links = [
    {
      href: "https://pingala.iitk.ac.in/",
      text: "Pingala Portal",
      bgColor: "bg-blue-500",
    },
    {
      href: "https://docs.google.com/spreadsheets/d/1imcduxzVQIkBUG23vwQ4qwLbHfyDZVtZTGfNwzSkYpU/edit?gid=0#gid=0",
      text: "Student Senate Nominee to SUGC",
      bgColor: "bg-red-500",
    },
    {
      href: "https://iitk.ac.in/new/key-administrators",
      text: "List of HODs",
      bgColor: "bg-green-500",
    },
    {
      href: "",
      text: "Student Senate Nominee to DUGC",
      bgColor: "bg-yellow-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/UG-Manual.pdf",
      text: "UG Manual",
      bgColor: "bg-purple-500",
    },
    {
      href: "https://iitk.ac.in/doaa/pg-manual",
      text: "PG Manual",
      bgColor: "bg-indigo-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Course-Template-B.Tech-BS.pdf",
      text: "Course Template (B.Tech,BS,Dual Degree)",
      bgColor: "bg-pink-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/sugcmember.pdf",
      text: "List of SUGC Members and DUGC Conveners",
      bgColor: "bg-teal-500",
    },
    {
      href: "http://www.iitk.ac.in/doaa/data/Form-Financial-Support-for-Participation-in-I-C.pdf?fbclid=IwAR1f72vpdTNmW1BUCa5uOvCs7t1xijtoqZqucZLS1026WRxBmlCIxNQDx2w",
      text: "Conference Support",
      bgColor: "bg-orange-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Calendar-2023.pdf",
      text: "Academic Calendar 2023",
      bgColor: "bg-lime-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/exam-schedule",
      text: "Exam Schedule",
      bgColor: "bg-rose-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Holidays-2023.pdf",
      text: "List of Holidays 2023",
      bgColor: "bg-amber-500",
    },
    {
      href: "https://www.iitk.ac.in/doaa/data/Course_Schedule_2023-24-1.pdf",
      text: "Course Schedule and Venue: 2023-24/I",
      bgColor: "bg-cyan-500",
    },
  ];

  return (
    <>
      <section className="pb-30">
        <div className="mx-auto mb-32 max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: ``,
                subtitle: `Quick Links `,
                description: ``,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1  }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-1 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Flexbox container --> */}
          <div className="flex flex-wrap justify-center gap-7">
            {links.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <Link href={link.href} passHref legacyBehavior>
                  <a
                    aria-label="get started button"
                    className={`flex items-center justify-center rounded-full px-4 py-2.5 text-center text-sm font-medium text-white transition duration-900 ease-in-out hover:bg-opacity-80 ${link.bgColor} dark:bg-blue-500`}
                    
                  >
                    {link.text}
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default QuickLinks;
