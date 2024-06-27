"use client";

import React from "react";
import { motion } from "framer-motion";

const CalendarView: React.FC<CalenderProps> = ({title,content,link}) => {

  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="mb-5 text-3xl font-bold text-black dark:text-white">
            {title}
          </h2>
          <p className="mb-5 text-lg text-black dark:text-white">
            {content}
          </p>
          <a
            href={link}

            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-dark"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarView;
