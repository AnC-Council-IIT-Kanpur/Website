"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ObjectivesSection = ({ title, objectives }) => {
  return (
    <section
      id="objectives"
      className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700"></div>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex w-full max-w-sm transform flex-col items-center rounded-lg bg-white p-6 shadow-solid-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-solid-4 dark:bg-gray-800"
            >
              <FontAwesomeIcon
                icon={objective.icon}
                className="mb-4 transform rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-4 text-4xl text-white shadow-md transition-all duration-500 hover:rotate-12"
              />
              <h3 className="mb-2 text-center text-xl font-semibold text-gray-800 dark:text-white">
                {objective.title}
              </h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                {objective.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
