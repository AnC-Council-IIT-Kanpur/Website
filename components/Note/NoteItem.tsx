"use client";

import { Note } from "@/types/note";

const NoteItem = ({ note }: { note: Note }) => {
  const { title, content } = note;

  return (
    <div className="rounded-lg   border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">{title}</h2>
      <p className="text-base text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default NoteItem;
