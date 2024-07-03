"use client";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";

const QuickLinks = () => {
  return (
    <>
      <section className="pb-30">
        <div className="mx-auto mb-32 max-w-c-1315 px-4 md:px-8 xl:px-0 ">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: ``,
                subtitle: `Quick Links `,
                description: ``,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          className="animate_top mx-auto mt-15 max-w-c-1235 px-1 md:px-8 xl:mt-20 xl:px-0  "
        >
          {/* <!-- Slider main container --> */}
          <div className="flex flex-wrap justify-center gap-7">
            <Link href="https://pingala.iitk.ac.in/">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Pingala Portal
              </button>
            </Link>
            <Link href="https://docs.google.com/spreadsheets/d/1imcduxzVQIkBUG23vwQ4qwLbHfyDZVtZTGfNwzSkYpU/edit?gid=0#gid=0">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Student Senate Nominee to SUGC
              </button>
            </Link>
            <Link href="https://iitk.ac.in/new/key-administrators">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                List of HODs
              </button>
            </Link>
            <Link href="">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Student Senate Nominee to DUGC
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/UG-Manual.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                UG Manual
              </button>
            </Link>
            <Link href="https://iitk.ac.in/doaa/pg-manual">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                PG Manual
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/Course-Template-B.Tech-BS.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Course Template (B.Tech,BS,Dual Degree)
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/sugcmember.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                List of SUGC Members and DUGC Conveners
              </button>
            </Link>
            <Link href="http://www.iitk.ac.in/doaa/data/Form-Financial-Support-for-Participation-in-I-C.pdf?fbclid=IwAR1f72vpdTNmW1BUCa5uOvCs7t1xijtoqZqucZLS1026WRxBmlCIxNQDx2w">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Conference Support
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/Calendar-2023.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Academic Calendar 2023
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/exam-schedule">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Exam Schedule
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/Holidays-2023.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                List of Holidays 2023
              </button>
            </Link>
            <Link href="https://www.iitk.ac.in/doaa/data/Course_Schedule_2023-24-1.pdf">
              <button
                aria-label="get started button"
                className="mt-1 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Course Schedule and Venue: 2023-24/I
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default QuickLinks;
