"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaFlask, FaLaptopCode, FaMicroscope, FaDna, FaAtom } from 'react-icons/fa';
import { TbMathFunction, TbMathIntegrals } from 'react-icons/tb';
import { GiMagnetBlast } from 'react-icons/gi';

const ccgKits = [
  { name: "MTH111 & 112", link: "https://heyzine.com/flip-book/ac92227734.html", icon: <TbMathFunction /> },
  { name: "MTH113 & 114", link: "https://heyzine.com/flip-book/9e06c06c56.html", icon: <TbMathIntegrals /> },
  { name: "CHM112 & 113", link: "https://heyzine.com/flip-book/dbb83957df.html", icon: <FaFlask /> },
  { name: "ESC111 & 112", link: "https://heyzine.com/flip-book/f85565aa91.html", icon: <FaLaptopCode /> },
  { name: "PHY113", link: "https://heyzine.com/flip-book/70b2a9b651.html", icon: <GiMagnetBlast /> },
  { name: "PHY112", link: "https://heyzine.com/flip-book/f27533ebe3.html", icon: <FaMicroscope /> },
  { name: "PHY114", link: "https://heyzine.com/flip-book/723c7061ee.html", icon: <FaAtom /> },
  { name: "LIF 111", link: "https://heyzine.com/flip-book/edf2e79584.html", icon: <FaDna /> },
];

const CCGKits = () => {
  return (
    <section id="ccg-kits" className="py-20 overflow-hidden lg:py-25 xl:py-30">
      <div className="px-4 mx-auto max-w-c-1315 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white">CCG Kits</h2>
          <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Here are the CCG kits available for various courses. Click on the links to access the kits.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              className="flex flex-col items-center p-6 transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2"
            >
              <div className="p-4 mb-4 text-4xl text-white transition-all duration-500 transform rounded-full shadow-md bg-gradient-to-br from-blue-500 to-blue-700 hover:rotate-12">
                {kit.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{kit.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCGKits;
