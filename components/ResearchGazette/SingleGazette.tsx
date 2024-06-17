import React from "react";
import { Gazette } from "@/types/gazette";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleGazette = ({ gazette }: { gazette: Gazette }) => {
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
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-dark"
      >
        Download PDF
      </a>
    </motion.div>
  );
};

export default SingleGazette;
