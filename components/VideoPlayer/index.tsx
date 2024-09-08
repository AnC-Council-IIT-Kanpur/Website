"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy"; 
import Link from "next/link";



const FacultyVideoSection = ({ faculties }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col gap-8">
          {faculties.map((faculty, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:bg-blacksection"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                    {faculty.title}
                  </h4>
                  <p className="mb-4 text-black dark:text-white">
                    {faculty.description}
                  </p>
                  <Link href={faculty.homepage} legacyBehavior passHref>
                    <a
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                    >
                      Visit Homepage
                    </a>
                  </Link>
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2">
                  {faculty.videoUrl ? (
                    <ReactPlayer
                      url={faculty.videoUrl}
                      width="100%"
                      height="300px"
                      className="rounded-lg shadow-xl"
                      controls={true} 
                      playing={false} 
                    />
                  ) : (
                    <p className="text-center text-red-500">
                      Video URL not available
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyVideoSection;
