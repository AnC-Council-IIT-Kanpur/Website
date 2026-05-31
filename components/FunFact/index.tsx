"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Welcome to Fun Facts!
            </h2>
            <p className="mx-auto lg:w-11/12">
            Discover a world of knowledge with our collection of educational fun facts! From groundbreaking scientific discoveries to intriguing historical tidbits, our fun facts are designed to inspire curiosity and spark a love for learning. While we strive to provide accurate and up-to-date information, please note that some facts may be simplified for entertainment purposes. For more detailed and comprehensive explanations, we encourage you to explore further through our academic resources and courses.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              General Education
              </h3>
              <p className="text-lg lg:text-para2">
              The Concept of Zero: The number zero was invented by ancient mathematicians in India around the 5th century.
              </p>
              <p className="text-lg lg:text-para2">
              Human Brain Storage: The human brain can hold around 2.5 petabytes (or a million gigabytes) of information.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Science and Technology
              </h3>
              <p className="text-lg lg:text-para2">
                Periodic Table: Dmitri Mendeleev created the first periodic table in 1869 and predicted the existence and properties of elements yet to be discovered.
              </p>
              <p className="text-lg lg:text-para2">
                Internet Growth: It took the internet just four years to reach 50 million users. It took television 13 years to reach the same milestone.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Mathematics
              </h3>
              <p className="text-lg lg:text-para2">
                Mathematical Pi: Pi (π) is an irrational number, meaning it has an infinite number of digits that never repeat. The current record for memorizing pi is over 70,000 digits.
              </p>
              <p className="text-lg lg:text-para2">
                Fibonacci Sequence: The Fibonacci sequence, where each number is the sum of the two preceding ones, appears frequently in nature, such as in the arrangement of leaves on a stem.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Space and Astronomy
              </h3>
              <p className="text-lg lg:text-para2">
                Galaxies: There are more stars in the universe than grains of sand on all the beaches on Earth.
              </p>
              <p className="text-lg lg:text-para2">
                Moon Footprints: The footprints left by astronauts on the Moon will likely remain there for millions of years because there is no wind or water to erode them.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Careers and Professional Development
              </h3>
              <p className="text-lg lg:text-para2">
                Lifelong Learning: According to the World Economic Forum, 65% of children entering primary school today will end up working in jobs that do not yet exist.
              </p>
              <p className="text-lg lg:text-para2">
                First Job: Steve Jobs once worked at Atari as a technician before co-founding Apple Inc.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
