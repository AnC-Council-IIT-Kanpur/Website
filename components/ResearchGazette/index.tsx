"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import researchGazetteData from "./ResearchGazetteData";
import SingleGazette from "./SingleGazette";
import SectionHeader from "../Common/SectionHeader";

const ResearchGazette = () => {
  const [filterYear, setFilterYear] = useState("");
  const [filterArea, setFilterArea] = useState("");

  const filteredGazettes = researchGazetteData.filter((gazette) => {
    return (
      (filterYear ? gazette.year === parseInt(filterYear) : true) &&
      (filterArea ? gazette.area.toLowerCase().includes(filterArea.toLowerCase()) : true)
    );
  });

  return (
    <section id="research-gazettes" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "RESEARCH GAZETTES",
            subtitle: "Archive of Previous Year's Research Gazettes",
            description: `Downloadable PDF versions of each gazette with summaries. Filter by year or research area.`,
          }}
        />

        <motion.div
          className="mb-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="number"
            placeholder="Filter by Year"
            className="rounded-full border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white no-arrows"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Research Area"
            className="rounded-full border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
          />
        </motion.div>

        <motion.div
          className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredGazettes.map((gazette, key) => (
            <SingleGazette gazette={gazette} key={key} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchGazette;
