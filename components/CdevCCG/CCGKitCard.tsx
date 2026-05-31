"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaPlug, FaChartLine,FaCode, FaDollarSign, FaChartPie, FaProjectDiagram, FaBolt, FaCog, FaRocket, FaVideo } from 'react-icons/fa';

import { TbMathFunction, TbMathIntegrals } from "react-icons/tb";
import { GiMagnetBlast } from "react-icons/gi";
import Image from "next/image";

const ccgKits = [
  {
    name: "Consulting",
    link: "https://docs.google.com/presentation/d/1_cZ_Oi9Kj5C3XwZ1S0d4FqrFrPWZFUBu5Cafx-rBcqY/edit?usp=sharing",
    icon: <FaHandshake />,
    alt: "Consulting Fa icon",
  },
  {
    name: "Quant",
    link: "https://docs.google.com/presentation/d/1lZpKe7FnA9mvPj2VJ5NAnHnLgiTJ04uE2Suur9t2JgU/edit?usp=sharing ",
    icon: <FaChartLine />,
    alt: "Quant Fa Icon",
  },
  {
    name: "Software",
    link: "https://docs.google.com/presentation/d/17tR4_eTFLJdjiU5rG9WMas4Wk0YJDEILRhn5EvzZu_A/edit?usp=sharing ",
    icon: <FaCode />,
    alt: "Software Fa Icon",
  },
  {
    name: "Finance",
    link: " https://docs.google.com/presentation/d/1Bj3UJtO1jvWd9WjvZ1D1dcJb3fJks8Z-z_qPZ2aBcek/edit?usp=sharing ",
    icon: <FaDollarSign />,
    alt: "Finance Fa Icon",
  },
  {
    name: "Analytics",
    link: "https://docs.google.com/presentation/d/1Qt8eox1BDHv2_Y7CSRpKUbDgSAqVaYUG6r-pwA2FGm4/edit?usp=sharing",
    icon: <FaChartPie />,
    alt: "Analytics FaIcon",
  },
  {
    name: "Techno-Managerial",
    link: "https://docs.google.com/presentation/d/1j8P-6_ckE_uuDv73ZN-rop5bvlCqMs0cPYc3uy-fArM/edit?usp=sharing",
    icon: <FaProjectDiagram />,
    alt: "Techno Fa Icon",
  },
  {
    name: "EE Core",
    link: "https://docs.google.com/presentation/d/1rK6plgbo9QurnrhtB0fh8CTrjGRU4XyLbkUjMAhTgGs/edit?usp=sharing",
    icon: <FaPlug />,
    alt: "EE Fa Icon",
  },
  {
    name: "ME and CHE Core",
    link: "https://docs.google.com/presentation/d/16XcaeufTH11jY9hTQwMQw_mRIz5FIWNY5hwrkhTiJLE/edit?usp=sharing",
    icon: <FaCog />,
    alt: "ME and CHE Fa Icon",
  },
  {
    name: "ME and AE Core",
    link: "https://docs.google.com/presentation/d/1hJorsyRkbOudMiSzzEU-yWtRJV_7WGVD_mvzKezVkbk/edit#slide=id.g1f87997393_0_782",
    icon: <FaRocket />,
    alt: "ME and AE Fa Icon",
  },
];

const CCGKits = () => {
  return (
    <section id="ccg-kits" className="overflow-hidden py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Internship Preparation Guides
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Internship Preparation Guides provide comprehensive insights into various profiles, including the necessary preparation resources and interview tips to help you excel in your desired role.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {ccgKits.map((kit, index) => (
            <motion.a
              key={index}
              href={kit.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex w-full max-w-xs transform flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800"
              title={`CCG Kit for ${kit.name}`}
            >
              <div className="mb-4 transform rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-4 text-4xl text-white shadow-md transition-all duration-500 hover:rotate-12">
                {React.cloneElement(kit.icon, { alt: kit.alt })}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                {kit.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCGKits;
