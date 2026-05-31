"use client";

import { Quote } from "@/types/quote";
import Image from "next/image";

const SingleQuote = ({ quote }: { quote: Quote }) => {
  const { name, designation, image, content } = quote;
  return (
    <div className=" border-white bg-white  shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark rounded-lg p-6 duration-300">
      <div className="flex items-center mb-4">
        <Image width={60} height={60} className="rounded-full" src={image} alt={name} />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{designation}</p>
        </div>
      </div>
      <p className="text-base text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default SingleQuote;
