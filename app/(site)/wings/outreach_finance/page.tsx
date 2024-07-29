import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";

import { Note } from "@/types/note";

import { faHandshake, faBullhorn, faCoins, faMagnifyingGlass, faCalendarAlt, faStar, faDatabase, faGraduationCap, faGlobe, faHandsHelping, faO, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';




export const metadata: Metadata = {
  title: "Outreach and Finance Wing Page",
  description: "This is the Outreach and Finance Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,

    className: 'dark:hidden',
    slides: [
      { src: '/images/banner/anciitk_cover.jpeg', alt: 'Slide 1' },
      { src: '/images/banner/light-02.jpg', alt: 'Slide 2' },
      { src: '/images/banner/light-03.jpg', alt: 'Slide 3' }
    ]
  },
  {
    delay: 3000,
    className: 'dark:block',
    slides: [
      { src: '/images/banner/bg1.jpg', alt: 'Slide 1' },
      { src: '/images/banner/dark-02.jpg', alt: 'Slide 2' },
      { src: '/images/banner/dark-03.jpg', alt: 'Slide 3' }
    ]
  }
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/anciitk",
    label: "linkedin icon",
    iconPath:
      "M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
  {
    href: "https://www.instagram.com/anciitk/",
    label: "instagram icon",
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
  title: "Empowering Careers",
  highlight: "",
  text: "The Outreach and Finance Vertical of AnC Council at IIT Kanpur is dedicated to driving success through strategic sponsorships, efficient financial management, impactful outreach and bring global opportunities for our students. We secure valuable collaborations, manage the council’s finances, and handle all outreach activities, ensuring the seamless execution and growth of our initiatives, empowering student achievements and fostering innovation."
};




const objectives = [
  {
    icon: faBullhorn,
    title: "Increase Awareness and Secure Funding",
    text: "Develop and implement marketing strategies to raise awareness of council activities and secure adequate financial resources through fundraising and partnerships."
  },
  {
    icon: faHandshake,
    title: "Build Partnerships and Manage Budget",
    text: "Establish and maintain relationships with industry professionals, alumni, and organizations, while ensuring a balanced budget and conducting regular financial reviews.",
  },
  {
    icon: faMagnifyingGlass,

    title: "Promote Inclusivity and Financial Transparency",
    text: "Ensure outreach efforts are inclusive, reaching diverse student groups, and maintain transparency in financial operations by providing regular reports.",
  },
  {
    icon: faCoins  ,
    title: "Evaluate Programs and Enhance Financial Literacy",
    text: "Continuously assess and improve the effectiveness of outreach programs and enhance students' understanding of financial management through targeted workshops and seminars.",
  },
  {
    icon: faGlobe  ,
    title: "Impactful Outreach",
    text: "Organize impactful outreach activities to engage students, faculty, and the community, promoting the council's mission and vision and fostering a culture of innovation and collaboration.",
  }
];


const activitiesData = [
  {
    icon: faStar,
    name: "Budget Planning and Monitoring",
    text: "Develop detailed budget plans for council activities and regularly monitor expenditures to ensure financial health and efficiency.",
  },
  {
    icon: faDatabase,
    name: "Fundraising Initiatives",
    text: "Launch fundraising initiatives, including grant writing, alumni donations, and sponsorships from businesses, to secure financial support for council activities.",
  },
  {
    icon: faPeopleGroup,
    name: "Social Media Campaigns",
    text: "Run social media campaigns to promote the council's activities, resources, and events, ensuring maximum reach and engagement among students."
  },
  {
    icon: faHandsHelping,
    name: "Financial Audits and Compliance",
    text: "Conduct regular financial audits and ensure compliance with college policies and external regulations to maintain financial integrity and accountability.",
  },
  {
    icon: faGlobe  ,
    name: "Provide Global opportunities",
    text: "Bring global opportunities for students to enhance their skills and knowledge through various programs and collaborations.",
  },
];

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Explore various activities organized by our team, including events, workshops, and more. Get involved and enhance your experience.`,
};

const bannerlogos = {
  src: "/images/logo/outreach and finance.png",
  alt: "UG acads logo",
};













const ResearchPage = () => {
  return (
    <div>
        <Banner banners={banners} 
        logo={bannerlogos}
      title="Welcome to IIT-Kanpur's Outreach and Finance Wing" 
      description={description} 
      socialLinks={socialLinks} />
        <ObjectivesSection title="Our Objectives" 
      objectives={objectives} />
        <Activities headerInfo={activitiesHeader} 
      activities={activitiesData} />
       
        
      
    </div>
  );
};

export default ResearchPage;
