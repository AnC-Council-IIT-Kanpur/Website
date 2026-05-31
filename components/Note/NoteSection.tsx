"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NoteItem from "./NoteItem";
import { Note } from "@/types/note";

interface NoteSectionProps {
  notes: Note[];
}

const NoteSection: React.FC<NoteSectionProps> = ({ notes }) => {
  const [currentTab, setCurrentTab] = useState(notes[0].id);

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Tab Menus */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-10 flex flex-wrap justify-center rounded-lg border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-blacksection md:flex-nowrap md:items-center lg:gap-8 xl:mb-14 xl:gap-12"
        >
          {notes.map((note, index) => (
            <div
              key={note.id}
              onClick={() => setCurrentTab(note.id)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-4 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-16 xl:py-6 ${
                currentTab === note.id
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-lg font-medium text-black dark:text-white">
                  {index + 1}
                </p>
              </div>
              <div>
                <button className="text-sm font-medium text-black dark:text-white xl:text-base">
                  {note.title}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-3xl"
        >
          {notes.map((note) => (
            <div className={note.id === currentTab ? "block" : "hidden"} key={note.id}>
              <NoteItem note={note} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NoteSection;
