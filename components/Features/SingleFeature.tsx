import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, link } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 w-1/5 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 "
      >
        <Link href={link}>
          <div className=" justify-content-center  h-100 relative flex items-center justify-center ">
            <Image src={icon} width={200} height={200} alt="title" />
          </div>
          <h3 className="mb-2 mt-7.5 text-center text-xl font-semibold text-black dark:text-white">
            {title}
          </h3>
        </Link>

        {/* <p className="text-center">{description}</p> */}
      </motion.div>
    </>
  );
};

export default SingleFeature;
