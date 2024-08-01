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
// <<<<<<< main
//     <>
//       <button
//         aria-label="Hamburger Toggler"
//         className="fixed -left-90 -top-60 z-50 m-96 block rounded-lg  p-2 text-white bg-blue-500"
//         onClick={() => setNavigationOpen(!navigationOpen)}
//       >
//         <span className="relative block h-5.5 w-5.5 cursor-pointer">
//           <span className="absolute right-0 block h-full w-full">
//             <span
//               className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out ${
//                 !navigationOpen ? "!w-full delay-300" : "w-0"
//               }`}
//             ></span>
//             <span
//               className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
//                 !navigationOpen ? "delay-400 !w-full" : "w-0"
//               }`}
//             ></span>
//             <span
//               className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
//                 !navigationOpen ? "!w-full delay-500" : "w-0"
//               }`}
//             ></span>
//           </span>
//           <span className="absolute right-0 h-full w-full rotate-45">
//             <span
//               className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
//                 !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//               }`}
//             ></span>
//             <span
//               className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
//                 !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//               }`}
//             ></span>
//           </span>
//         </span>
//       </button>

//       <div
//         className={`fixed left-4 top-24 z-50 w-60 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:shadow-none ${
//           navigationOpen ? "block" : "hidden"
//         }`}
//       >
//         <button
//           className="absolute right-2 top-2 text-gray-800 dark:text-gray-200"
//           onClick={() => setNavigationOpen(false)}
//         >
//           &#x2715; {/* Unicode character for cross */}
//         </button>
//         <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
//           Quick Links
//         </h3>
//         <ul className="space-y-2">
//           {sections.map((section) => (
//             <li key={section.id}>
//               <Link href={`#${section.id}`} legacyBehavior>
//                 <a
//                   onClick={handleLinkClick}
//                   className={`block rounded-md px-3 py-2 transition-colors ${
//                     activeSection === section.id
//                       ? "dark:bg-primary-dark bg-primary text-white"
//                       : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
//                   }`}
//                 >
//                   {section.label}
//                 </a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
// =======
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