import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ActivityCard = ({ activity, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg transition-transform transform hover:-translate-y-2 duration-3000 shadow-solid-3  hover:shadow-solid-4"
    >
      <div className="flex justify-center items-center w-16 h-16 mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-md transition-all duration-500 transform hover:rotate-12">
        <FontAwesomeIcon icon={activity.icon} className="text-2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {activity.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {activity.text}
      </p>
    </motion.div>
  );
};

export default ActivityCard;
