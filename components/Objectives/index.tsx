"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ObjectivesSection = ({ title, objectives }) => {
  return (
    <section id="objectives" className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg transition-all transform hover:-translate-y-2 duration-300 shadow-solid-3  hover:shadow-solid-4"
            >
              <FontAwesomeIcon
                icon={objective.icon}
                className="text-4xl mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-md transition-all duration-500 transform hover:rotate-12"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {objective.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
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
