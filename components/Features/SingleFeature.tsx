import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title,designation, description  } = feature;

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
       
        <div className="relative flex h-100 w-100 items-center  justify-center justify-content-center rounded-[50%] ">
          <Image src={icon} width={200} height={200} alt="title" className = "rounded-[50%]" />
        </div>
        
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle  justify-center text-center ">
          {title}
        </h3>
        <h3 className="mb-5 mt-7.5 text-s font-semibold text-black dark:text-white s:text-itemtitle text-center">
          {designation}
        </h3>
        <p className="text-center">
          {description}
          </p>


            
      </motion.div>
    </>
  );
};

export default SingleFeature;
