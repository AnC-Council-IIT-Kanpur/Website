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
    href: 'https://www.facebook.com/ANCIITK',
    label: 'facebook icon',
    iconPath: 'M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
  },
  {
    href: 'https://www.twitter.com/anciitk',
    label: 'twitter icon',
    iconPath: 'M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
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















const ResearchPage = () => {
  return (
    <div>
        <Banner banners={banners} 
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
