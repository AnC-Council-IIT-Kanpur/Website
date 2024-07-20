"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const DepartmentGuideCard = ({ gazette }) => {
  const { icon, title, description, pdfUrl } = gazette;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 w-full rounded-lg border border-white bg-white p-5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <h3 className="mb-5 mt-7.5 text-lg font-semibold text-black dark:text-white sm:text-xl xl:text-itemtitle">
        {title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <Link
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-primary-dark mt-auto inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300"
      >
        View
      </Link>
    </motion.div>
  );
};

const DeptartmentGuide = ({ data, headerInfo }) => {
  return (
    <section
      id="research-gazettes"
      className="py-10 sm:py-20 lg:py-25 xl:py-30"
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader headerInfo={headerInfo} />

        <motion.div
          className="flex flex-wrap justify-center gap-5 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((gazette) => (
            <DepartmentGuideCard gazette={gazette} key={gazette.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeptartmentGuide;
