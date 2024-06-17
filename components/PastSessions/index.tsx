"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const PastSessions = () => {
  const sessions = [
    {
      title: "Session 1: Introduction to React",
      description: "An introductory session on React fundamentals.",
      image: "/images/banner/light-03.jpeg", // Add the path to the image
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
      title: "Session 2: Advanced JavaScript",
      description: "A deep dive into advanced JavaScript concepts.",
      image: "/images/banner/light-03.jpeg", // Add the path to the image
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    // Add more sessions as needed
  ];

  return (
    <>
      {/* <!-- ===== Past Sessions Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate-fadeInUp mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `OUR PREVIOUS SESSIONS`,
                subtitle: `Details of Our Past Sessions`,
                description: `Find resources like presentations and recordings of our past sessions.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0 animate-fadeInUp">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {sessions.map((session, index) => (
              <div
                key={index}
                className=" p-7.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark group relative rounded-lg border border-stroke bg-white  shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 animate-fadeInUp"
              >
                <div className="relative h-40 w-full mb-7.5">
                  <Image
                    src={session.image}
                    alt={session.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h3 className="mb-2.5 text-xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  {session.title}
                </h3>
                <p className="mb-7.5 text-black dark:text-white">
                  {session.description}
                </p>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    {session.resources.map((resource, resIndex) => (
                      <li
                        key={resIndex}
                        className="mb-4 text-primary last:mb-0 dark:text-primary"
                      >
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          {resource.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Past Sessions End ===== --> */}
    </>
  );
};

export default PastSessions;
