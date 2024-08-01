import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import PastSessions from "@/components/PastSessions";
import Link from "next/link";

import {
  faComments,
  faBullhorn,
  faObjectGroup,
  faMagic,
  faCalendarAlt,
  faStar,
  faDatabase,
  faGraduationCap,
  faGlobe,
  faHandsHelping,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import JumpLinks from "@/components/JumpLinks";

export const metadata: Metadata = {
  title: "Career Development Wing Page",
  description: "This is the Career Development Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: "dark:hidden",
    slides: [
      { src: "/images/banner/Cdev6.jpg", alt: "Slide 1" },
      { src: "/images/banner/Cdev2.jpg", alt: "Slide 2" },
      { src: "/images/banner/Cdev3.jpg", alt: "Slide 3" },
      { src: "/images/banner/Cdev4.jpg", alt: "Slide 4" },
      { src: "/images/banner/Cdev5.jpg", alt: "Slide 5" },
      { src: "/images/banner/Cdev1.jpg", alt: "Slide 6" },
    ],
  },
  {
    delay: 3000,
    className: "dark:block",
    slides: [
      { src: "/images/banner/Cdev6.jpg", alt: "Slide 1" },
      { src: "/images/banner/Cdev2.jpg", alt: "Slide 2" },
      { src: "/images/banner/Cdev3.jpg", alt: "Slide 3" },
      { src: "/images/banner/Cdev4.jpg", alt: "Slide 4" },
      { src: "/images/banner/Cdev5.jpg", alt: "Slide 5" },
      { src: "/images/banner/Cdev1.jpg", alt: "Slide 6" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/cdeviitk/about/",
    label: "linkedIn icon",
    iconPath:
      " M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
  {
    href: "https://www.instagram.com/career_development_iitk/",
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

const description = {
  title: "Providing an Extraordinary Boost in Career",
  // highlight: "a Better Future",
  text: "The Career Development Wing of the council aims to provide students proper guidance in Career related aspects and helps them develop careers in the fields that align with their professional interests.",
};

const objectives = [
  {
    icon: faComments,
    // title: "To Organise Tests, Workshops and guiding sessions for Skills ",
    // title: "Providing Assistance to Students for upskilling them",
    title: "Increase Career Awareness",
    text: "Raise awareness among the student community about the diverse career opportunities available across various industries",
  },
  // {
  //   icon: faBullhorn,
  //   title: "Calling the best Internship Opportunities for Students",
  //   text: "We aim to call internship oportunities by the government and private agencies and companies for the students.",
  // },
  {
    icon: faObjectGroup,
    // title: "To Contact Alumni & Professionals in Diverse Career Fields",
    title: "Promote Career Readiness",
    text: "Foster a culture of career readiness by motivating students to actively engage in skill-building and career planning activities",
  },
  {
    icon: faMagic,
    title: "Provide Support and Guidance",
    text: "Offer comprehensive support and guidance to students seeking internships, placements, and career advancement",
  },
  {
    icon: faMagic,
    title: "Streamline Career Information",
    text: "Collate, organize, and host career-related information online for easy student access and effective career planning",
  },
  {
    icon: faMagic,
    title: "Organize Career Events",
    text: "Conduct events, workshops, and sessions on various career-related topics, including industry insights, resume building, and interview preparation",
  },
  {
    icon: faMagic,
    title: "Mentorship and Networking",
    text: "Facilitate mentorship and networking by connecting successful alumni and senior students with current students primarily focused on providing guidance for internships and placements",
  },
];

const activitiesData = [
  {
    icon: faCalendarAlt,
    name: "Internship Mentorship Program",
    text: "Our Internship Mentorship Program pairs second-year students with third-year mentors, guiding them through the internship preparation period and the recruitment drive. This supportive system ensures students are well-prepared and confident",
  },
  {
    icon: faStar,
    name: "Skill Upliftment",
    text: "We’ve partnered with ‘Geeks For Geeks’ to offer specialized courses at highly subsidized rates. These courses, designed for students from various batches, provide a focused trajectory for skill enhancement and future career opportunities",
  },
  {
    icon: faHandsHelping,
    name: "Internship Preparation Sessions",
    text: "Our series of internship preparation sessions focuses on equipping students with the necessary skills for successful internships. Covering areas such as Quant, Consulting, Software, Analytics, Finance, Core, and Techno-Managerial, these sessions serve as a comprehensive guide for aspiring interns",
  },
  {
    icon: faGraduationCap,
    name: "Placement Fundae",
    text: "Our Placement Fundae blog series documents the placement preparation journeys of final-year students. With key tactics, interview tips, and inspirational experiences, these blogs offer invaluable insights for students gearing up for placements",
  },
  {
    icon: faBullseye,
    name: "Higher Studies guidance",
    text: "Alumni from IIT Kanpur who have pursued MBA, MTech, CFA, and PhD programs share their motivations, preparation strategies, and personal journeys. This section provides valuable guidance for those considering further education",
  },
  {
    icon: faHandsHelping,
    name: "Internship and Placement Training Program",
    text: "Our comprehensive Internship and Placement Training Program is designed to prepare students for the professional world. Through targeted training and practical guidance, we ensure students are ready to excel in their careers",
  },
  {
    icon: faHandsHelping,
    name: "Career Connect",
    text: "Our Career Connect initiative bridges the gap between students and industry professionals. Through various events and networking opportunities, students can gain insights, build connections, and explore diverse career paths",
  },
];

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Explore various activities organized by our team, including events, workshops, and more. Get involved and enhance your experience.`,
};



const PastSessionsHeader = {
  title: "OUR PREVIOUS SESSIONS",
  subtitle: "Details of Our Past Sessions",
  description:
    "Find resources like presentations and recordings of our past sessions.",
};

const BlogsHeader = {
  title: "BLOGS",
  subtitle: "Details of Our Blog Series",
  description: "Find resources like presentations and recordings of our blogs.",
};

const sessions = [
  {
    title: "Group Discussions",
    description: "A session for Y22s for GD preparation.",
    image: "/images/banner/GD.jpg", // Add the path to the image
    resources: [
      {
        type: "Presentation",
        link: "https://drive.google.com/file/d/1sF3xDKK2J2N014dO3GqiakOjSifimYbk/view",
        label: "Resources",
      },
      // { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "Resume Making Session",
    description: "A session to mentor Y22s for resume-making.",
    image: "/images/banner/resume.jpg", // Add the path to the image
    resources: [
      {
        type: "Presentation",
        link: "https://tr.ee/iV8zctCZl-",
        label: "Resources",
      },
      {
        type: "Presentation",
        link: "https://tr.ee/hxfIJtzdnG ",
        label: "Resume Repositories",
      },
      // { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "Internship Training Program",
    description:
      "A training program for Y22s to mentor them for various profile.",
    image: "/images/banner/quant.jpg", // Add the path to the image
    resources: [
      {
        type: "Presentation",
        link: "https://docs.google.com/document/d/1CCzPS5p-1A50FfKXK7Apbu5F3NDM2VFFMA10zRNlst4/edit?usp=sharing",
        label: "View Resources",
      },
      {
        type: "Recording",
        link: "https://drive.google.com/drive/u/0/folders/153QbwBDmppuWOAGpTTWrSEZi-QXXQ9GV ",
        label: "Watch Recording",
      },
    ],
  },
  // Add more sessions as needed
];

const Blogs = [
  {
    title: "The More You Know",
    description: "For Quant Profile by Varun Tokas",
    image: "/images/banner/quantBlog.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "#", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "The More You Know",
    description: "For Core Profile by Pranjal Singh",
    image: "/images/banner/coreBlog.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "#", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "The More You Know",
    description: "For Finance Profile by Siddhant Singh",
    image: "/images/banner/financeBlog.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "#", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  // Add more sessions as needed
];

const headerInfo = {
  title: "DIRECTOR’S NOTE",
  subtitle: "Director’s Note on Research",
  description: `A personal note from the Director about the importance and impact of research at IIT-Kanpur.
                ○ A slideshow of quotes from prominent researchers on campus.
                ○ Each slide should include the quote, the researcher’s name, and their photo.`,
};

const quotes = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
    designation: "Professor of Physics",
    image: "/images/researcher/researcher-03.jpg",
    content:
      "Research at IIT-Kanpur is paving the way for groundbreaking advancements in science and technology. Our efforts are aimed at making a global impact.",
  },
  {
    id: 2,
    name: "Dr. Bob Smith",
    designation: "Head of Chemistry Department",
    image: "/images/researcher/researcher-03.jpg",
    content:
      "Innovation and curiosity drive our research. At IIT-Kanpur, we are committed to pushing the boundaries of knowledge and solving real-world problems.",
  },
  {
    id: 3,
    name: "Dr. Carol White",
    designation: "Director of Research",
    image: "/images/researcher/researcher-03.jpg",
    content:
      "Our research initiatives are focused on creating sustainable solutions for the future. We believe in the power of collaboration and interdisciplinary research.",
  },
  {
    id: 4,
    name: "Dr. David Brown",
    designation: "Associate Professor of Engineering",
    image: "/images/researcher/researcher-03.jpg",
    content:
      "The research community at IIT-Kanpur is dedicated to excellence and innovation. We are constantly exploring new frontiers and making significant contributions to society.",
  },
];

const CareerCHeader = {
  title: "CAREER CONNECT",
  subtitle: "Previous Years' Career Connect",
  description: `Details about our Annual Flagship event`,
};

const CareerCData = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "CAREER CONNECT 2023",
    description: "Career Connect held in 2023.",
    pdfUrl: "#",
    year: 2023,
    area: "Technology",
  },
  {
    id: 2,
    icon: "/images/icon/icon-qc.svg",
    title: "CAREER CONNECT 2022",
    description: "Career Connect held in 2022.",
    pdfUrl: "#",
    year: 2022,
    area: "Science",
  },
  // Add more gazette data as needed
];
const bannerlogos = {
  src: "/images/logo/cdev.png",
  alt: "CDev wing logo",
};
const sections = [
  { id: "objectives", label: "Objectives" },
  { id: "activities", label: "Activities" },
  { id: "past-sessions", label: "Past Sessions" },
];

const ResearchPage = () => {
  return (
    <div className="relative">
      <JumpLinks sections={sections} />
      <Banner
        banners={banners}
        logo={bannerlogos}
        title="Welcome to Career Development Wing"
        description={description}
        socialLinks={socialLinks}
      />
      <section id="objectives">
        <ObjectivesSection title="Our Objectives" objectives={objectives} />
      </section>
      <section id="activities">
        <Activities headerInfo={activitiesHeader} activities={activitiesData} />
      </section>

      <section id="past-sessions">
        <PastSessions
          PastSessionsHeader={PastSessionsHeader}
          sessions={sessions}
        />
        <Link
          href="https://medium.com/@ug_anc/list/career-development-b2ebf3ffd81e"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-primary-dark  mb-5 flex justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out "
        >
          Read more insightful stories here
        </Link>
      </section>

      {/* <ResearchGazette headerInfo={CareerCHeader} data={CareerCData} /> */}
    </div>
  );
};

export default ResearchPage;
