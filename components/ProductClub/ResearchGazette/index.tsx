"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import caseBookData from "./CaseBookData";
import SingleCaseBook from "./SingleCaseBook";
import SectionHeader from "components/Common/SectionHeader";

const CaseBookSection = () => {
  const [filterYear, setFilterYear] = useState("");
  const [filterTopic, setFilterTopic] = useState("");

  const filteredCaseBooks = caseBookData.filter((caseBook) => {
    return (
      (filterYear ? caseBook.year === parseInt(filterYear) : true) &&
      (filterTopic ? caseBook.topic.toLowerCase().includes(filterTopic.toLowerCase()) : true)
    );
  });

  return (
    <section id="case-books" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "PRODUCT CASE BOOKS",
            subtitle: "Archive of Previous Year's Product Case Books",
            description: `Downloadable PDF versions of each case book. Filter by year or topic.`,
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
            placeholder="Filter by Topic"
            className="rounded-full border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            value={filterTopic}
            onChange={(e) => setFilterTopic(e.target.value)}
          />
        </motion.div>

        <motion.div
          className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCaseBooks.map((caseBook, key) => (
            <SingleCaseBook caseBook={caseBook} key={key} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseBookSection;
