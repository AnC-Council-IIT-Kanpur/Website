"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const JumpLinks = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    let currentSection = "";
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && window.scrollY >= element.offsetTop - 100) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed left-0 top-20 z-50 w-64 bg-white p-4 shadow-lg dark:bg-black dark:shadow-none">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li
            key={section.id}
            className={
              activeSection === section.id
                ? "text-primary dark:text-primary"
                : ""
            }
          >
            <Link href={`#${section.id}`}>{section.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JumpLinks;
