"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CalendarView = ({ calendarInfo }) => {
  const { title, description, buttonText, buttonUrl } = calendarInfo;

  return (
    <section className="relative pb-20 overflow-hidden pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="px-4 mx-auto max-w-c-1390 md:px-8 2xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-5 text-3xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="mb-5 text-lg text-black dark:text-white">
            {description}
          </p>
          <Link
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-dark"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarView;
