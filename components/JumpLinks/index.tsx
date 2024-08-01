"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const JumpLinks = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(true);

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
  const handleLinkClick = () => {
    setNavigationOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed left-4 top-24 z-50 w-60 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:shadow-none">
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Quick Links
      </h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link href={`/${sections.id}`} legacyBehavior>
              <a
                className={`block rounded-md px-3 py-2 transition-colors ${
                  activeSection === section.id
                    ? "dark:bg-primary-dark bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                {section.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JumpLinks;