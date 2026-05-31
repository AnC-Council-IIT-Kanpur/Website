"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import SingleGazette from "./SingleGazette";

const ResearchGazette = ({ data, headerInfo }) => {
  return (
    <section id="research-gazettes" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader headerInfo={headerInfo} />

        <motion.div
          className="mb-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Removed filter input */}
        </motion.div>

        <motion.div
          className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((gazette) => (
            <SingleGazette gazette={gazette} key={gazette.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchGazette;
