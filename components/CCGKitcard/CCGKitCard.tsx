"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaLaptopCode,
  FaMicroscope,
  FaDna,
  FaAtom,
} from "react-icons/fa";
import { TbMathFunction, TbMathIntegrals } from "react-icons/tb";
import { GiMagnetBlast } from "react-icons/gi";
import Image from "next/image";

const ccgKits = [
  {
    name: "MTH111 & 112",
    link: "https://heyzine.com/flip-book/ac92227734.html",
    icon: <TbMathFunction />,
    alt: "Math Functions Icon",
  },
  {
    name: "MTH113 & 114",
    link: "https://heyzine.com/flip-book/9e06c06c56.html",
    icon: <TbMathIntegrals />,
    alt: "Math Integrals Icon",
  },
  {
    name: "CHM112 & 113",
    link: "https://heyzine.com/flip-book/dbb83957df.html",
    icon: <FaFlask />,
    alt: "Chemistry Icon",
  },
  {
    name: "ESC111 & 112",
    link: "https://heyzine.com/flip-book/f85565aa91.html",
    icon: <FaLaptopCode />,
    alt: "Coding Icon",
  },
  {
    name: "PHY113",
    link: "https://heyzine.com/flip-book/70b2a9b651.html",
    icon: <GiMagnetBlast />,
    alt: "Physics Magnet Icon",
  },
  {
    name: "PHY112",
    link: "https://heyzine.com/flip-book/f27533ebe3.html",
    icon: <FaMicroscope />,
    alt: "Microscope Icon",
  },
  {
    name: "PHY114",
    link: "https://heyzine.com/flip-book/723c7061ee.html",
    icon: <FaAtom />,
    alt: "Atom Icon",
  },
  {
    name: "LIF 111",
    link: "https://heyzine.com/flip-book/edf2e79584.html",
    icon: <FaDna />,
    alt: "DNA Icon",
  },
];

const CCGKits = () => {
  // Calculate the number of kits and determine if the last row has fewer than 3 items
  const numberOfKits = ccgKits.length;
  const isLastRowIncomplete = numberOfKits % 3 !== 0;
  const lastRowItems = numberOfKits % 3;

  return (
    <section id="ccg-kits" className="overflow-hidden py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="absolute -bottom-16 -z-1 h-full w-full">
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white">
            CCG Kits
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Here are the CCG kits available for various courses. Click on the
            links to access the kits.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ccgKits.slice(0, numberOfKits - lastRowItems).map((kit, index) => (
            <motion.a
              key={index}
              href={kit.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex w-full transform flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800"
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
        {isLastRowIncomplete && (
          <div className="mt-10 flex justify-center gap-10">
            {ccgKits.slice(numberOfKits - lastRowItems).map((kit, index) => (
              <motion.a
                key={index}
                href={kit.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex w-full transform flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 lg:w-1/3"
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
        )}
      </div>
    </section>
  );
};

export default CCGKits;
