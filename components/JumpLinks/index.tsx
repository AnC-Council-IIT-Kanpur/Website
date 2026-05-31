"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const JumpLinks = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);

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
    <>
      <button
        aria-label="Menu Toggler"
        className={`fixed z-50 rounded-r-lg bg-blue-500 p-2 text-white transition-all duration-300 ease-in-out ${
          navigationOpen
            ? "top-24 translate-x-0"
            : "top-36 -translate-x-10 pl-20"
        }`}
        onClick={() => setNavigationOpen(!navigationOpen)}
        style={{ left: navigationOpen ? "240px" : "0" }}
      >
        <span
          className={`block transform transition-transform duration-300 ease-in-out ${
            navigationOpen ? "rotate-180" : ""
          }`}
        >
          &#x25B6; {/* Unicode character for left arrow */}
        </span>
      </button>

      <div
        className={`fixed top-24 z-50 w-60 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-900 dark:shadow-none ${
          navigationOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ left: "0" }}
      >
        <button
          className="absolute right-2 top-2 text-gray-800 dark:text-gray-200"
          onClick={() => setNavigationOpen(false)}
        >
          &#x2715; {/* Unicode character for cross */}
        </button>
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Quick Links
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`} legacyBehavior>
                <a
                  onClick={handleLinkClick}
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
    </>
  );
};

export default JumpLinks;
