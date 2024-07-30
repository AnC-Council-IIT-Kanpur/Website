"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  faHandsHelping,
  faGraduationCap,
  faBullhorn,
  faComments,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

// Dynamic import of components
const QuickLink = dynamic(() => import("@/components/Quicklinks"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/components/Banner"), { ssr: false });
const ObjectivesSection = dynamic(() => import("@/components/Objectives"), {
  ssr: false,
});
const CCGKits = dynamic(() => import("@/components/CCGKitcard/CCGKitCard"), {
  ssr: false,
});
const DeptartmentGuide = dynamic(
  () => import("@/components/DepartmentGuideCard/departmentGuideCard"),
  { ssr: false },
);
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const JumpLinks = dynamic(()=> import("@/components/JumpLinks"),{ssr: false })

// Metadata for the page
// export const metadata = {
//   title: "UG Academics Wing Page",
//   description: "This is the UG Academics Wing page for ANC council",
// };

// Banner data for UG Academics Wing
const banners = [
  {
    delay: 3000,
    className: "dark:hidden",
    slides: [
      { src: "/images/banner/Banner1.png", alt: "Event Image 1" },
      {
        src: "/images/banner/Acdemic orientation 2.0.jpg",
        alt: "Event Image 2",
      },
      { src: "/images/banner/Banner3.jpg", alt: "Event Image 3" },
    ],
  },
  {
    delay: 3000,
    className: "dark:block",
    slides: [
      { src: "/images/banner/Banner2png.png", alt: "Event Image 1" },
      { src: "/images/banner/Banner3.jpg", alt: "Event Image 2" },
      { src: "/images/banner/file1.jpg", alt: "Event Image 3" },
    ],
  },
];
const bannerlogos = {
  src: "/images/logo/ugacad.png",
  alt: "UG acads logo",
};

// Description for the banner
const description = {
  title: "Enabling Excellence in Undergraduate",
  highlight: "Education",
  text: "The UG Academics wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia. The wing endeavors to protect the students’ academic interests and is the voice of the student body on this front.",
};

const socialLinks = [
  {
    href: "#",
    label: "linkedin icon",
    iconPath:
      "M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
  {
    href: "https://www.instagram.com/ug_academics_iitk",
    label: "Instagram icon",
    iconPath:
      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
  },
 

  {
    href: "https://www.facebook.com/ANCIITK",
    label: "facebook icon",
    iconPath:
      "M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z",
  },
];

const ugAcademicsObjectives = [
  {
    icon: faHandsHelping,
    title: "Student Support",
    text: "Helping the students to contact Institute bodies for academics and related purposes.",
  },
  {
    icon: faGraduationCap,
    title: "Coordinating With Senate",
    text: "Assisting and Coordinating with students senate nominees to Academic committees of the Institute.",
  },
  {
    icon: faBullhorn,
    title: "Policy Awareness",
    text: "Spreading importance about academic policies, rules & regulations, and changes in them (if any).",
  },
  {
    icon: faComments,
    title: "Gathering Student Opinions",
    text: "Gathering students opinion on matters of critical importance.",
  },
  {
    icon: faObjectGroup,
    title: "Orientation Sessions",
    text: "Conducting academic orientation sessions.",
  },
];

const DepartmentGuideHeader = {
  title: "",
  subtitle: "Department Guide",
  description: " ",
};

const DepartmentGuideData = [
  {
    id: 1,
    icon: "/images/icon/icon-phy.png",
    title: "Physics Department Guide",
    description:
      "Discover the department of Physics at IIT Kanpur which established itself as a premier science department internationally. Through engaging in cutting-edge research and teaching and grooming future leaders. Click ‘View’ to learn more about its curriculum and departmental opportunities",
    pdfUrl: "https://heyzine.com/flip-book/5a659a1b72.html",
  },
  {
    id: 2,
    icon: "/images/icon/icon-ES.png",
    title: "Earth Science Department Guide",
    description:
      "Discover the dynamic world of Earth Sciences at IIT Kanpur, where contemporary courses meet cutting-edge research. Unveil the secrets of our planet, from its core to the cosmos. Click ‘View’ to learn more about its curriculum and departmental opportunities",
    pdfUrl: "https://heyzine.com/flip-book/3631bb5347.html",
  },
  {
    id: 3,
    icon: "/images/icon/icon-ee.png",
    title: "Electrical Department Guide",
    description:
      "Discover the dynamic world of Electrical Engineering at IIT Kanpur, where innovation meets excellence. From Power Systems to 5G/6G networks, explore the future of EE. Click ‘View’ to learn more about its curriculum and departmental opportunities",
    pdfUrl: "https://heyzine.com/flip-book/52976ce5fc.html",
  },
  {
    id: 4,
    icon: "/images/icon/icon-ce.png",
    title: "Civil Department Guide",
    description:
      "Discover the dynamic world of Civil Engineering at IIT Kanpur, where diverse programs meet active student engagement. From Structural Engineering to Geoinformatics, explore the future of civil infrastructure. Click ‘View’ to learn more about its curriculum and departmental opportunities",
    pdfUrl: "https://heyzine.com/flip-book/880c979ce9.html",
  },
  {
    id: 5,
    icon: "/images/icon/icon-me.png",
    title: "Mechanical Department Guide",
    description:
      "Discover the heart of innovation at the Mechanical Engineering department! Immerse yourself in a dynamic curriculum that spans fluid mechanics, heat transfer, and systems analysis. From mechanical measurements to thermal systems, equipping you with practical skills. Click ‘View’ to learn more about its curriculum and departmental opportunities",
    pdfUrl: "https://heyzine.com/flip-book/637c5544eb.html",
  },
];


const sections = [
  { id: "banner", label: "Banner" },
  { id: "objectives", label: "Objectives" },
  { id: "ccg-kits", label: "CCG Kits" },
  { id: "department-guide", label: "Department Guide" },
  { id: "quick-links", label: "Quick Links" },
  { id: "faq", label: "FAQ" },
];


const UGAcademicsPage = () => {
  return (
    <div className="relative">
      <Banner
        banners={banners}
        logo={bannerlogos}
        title="Welcome to UG Academics Wing"
        description={description}
        socialLinks={socialLinks}
      />
      <JumpLinks sections={sections} />
      <ObjectivesSection
        title="Our Objectives"
        objectives={ugAcademicsObjectives}
      />
      <CCGKits />
      <DeptartmentGuide
        headerInfo={DepartmentGuideHeader}
        data={DepartmentGuideData}
      />
      <QuickLink />
      <FAQ />
    </div>
  );
};

export default UGAcademicsPage;
