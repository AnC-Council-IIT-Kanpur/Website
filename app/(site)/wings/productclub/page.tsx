import React from "react";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import ProductClubFeaturesTab from "@/components/InstagramPosts";
import PastCollaborators from "@/components/ProductClubPastCollaboration";
import ResearchGazette from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import DirectorNote from "@/components/Quote/DirectorNote";
import NoteSection from "@/components/Note/NoteSection";
import Banner from "@/components/Banner";
import activitiesData from "./activitiesData";
import noteData from "./noteData";
import dynamic from "next/dynamic";
import {
  faTrophy,
  faComments,
  faBullhorn,
  faObjectGroup,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
// import caseBookData from "./CaseBookData";
import { productClubQuoteData } from "./productClubQuoteData";
import Feature from "@/components/Features";
import { instagramLinkData } from "./instagramLinkData";

export const metadata: Metadata = {
  title: "Product Club",
  description: "This is the Product Club page for ANC council",
  // other metadata
};
const JumpLinks = dynamic(() => import("@/components/JumpLinks"), {
  ssr: false,
});
const banners = [
  {
    delay: 3000,
    className: "dark:hidden",
    slides: [
      { src: "/images/banner/anciitk_cover.jpeg", alt: "Slide 1" },
      { src: "/images/banner/prodclub.jpg", alt: "Slide 2" },
      { src: "/images/banner/prodclub2.jpg", alt: "Slide 3" },
    ],
  },
  {
    delay: 3000,
    className: "dark:block",
    slides: [
      { src: "/images/banner/anciitk_cover.jpeg", alt: "Slide 1" },
      { src: "/images/banner/prodclub.jpg", alt: "Slide 2" },
      { src: "/images/banner/prodclub2.jpg", alt: "Slide 3" },
    ],
  },
];

const socialLinks = [
  // {
  //   href: "https://www.facebook.com/ANCIITK",
  //   label: "facebook icon",
  //   iconPath:
  //     "M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z",
  // },
  // {
  //   href: "https://www.twitter.com/anciitk",
  //   label: "twitter icon",
  //   iconPath:
  //     "M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z",
  // },
  {
    href: "https://in.linkedin.com/company/product-management-interestgroup-iitk",
    label: "linkedin icon",
    iconPath:
      "M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
  {
    href: "https://www.instagram.com/productiitk",
    label: "Instagram icon",
    iconPath:
      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
  },
  {
    href: "https://www.youtube.com/playlist?list=PLwh2ew7arGtm35fSFghjm0hiqngLaROD2",
    label: "Youtube icon",
    iconPath:
      "M23.499 6.203c0-.176-.034-1.767-.716-2.543-.689-.809-1.464-.908-1.816-.96-2.53-.183-6.334-.199-6.968-.199H9.997c-.633 0-4.437.016-6.967.199-.354.052-1.127.151-1.816.96-.682.776-.717 2.367-.717 2.543C.486 8.28.499 10.498.499 12s-.013 3.72.001 5.797c0 .176.034 1.767.716 2.543.69.809 1.465.908 1.817.96 2.53.183 6.334.199 6.968.199h4.001c.633 0 4.438-.016 6.968-.199.354-.052 1.128-.151 1.816-.96.683-.776.717-2.367.717-2.543C23.514 15.72 23.499 13.502 23.499 12s.013-3.72-.001-5.797zM9.809 15.353v-6.706L15.843 12 9.809 15.353z",
  },
];

const description = {
  title: "About Us",
  // highlight: "a Sustainable Future",
  text: "The Product Club at IIT Kanpur is committed to nurturing a community of passionate and skilled individuals focused on delivering innovation and impactful solutions. By a variety of initiatives, including events, workshops, networking sessions, andmentorship programs. We unite aspiring product managers, designers, and developers",
};

const ProductHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "What We Do",
  description: `Discover the exciting activities organized by the Product Club at IITK, including workshops, hackathons, mentorship programs, and more. Engage with peers, develop your skills, and bring your ideas to life.`,
};

const objectives = [
  {
    icon: faComments,
    title: "Collaborative Problem-Solving Culture",
    text: "Develop an environment where members can enhance their skills in product management through hands-on projects, collaboration, and continuous learning.",
  },
  {
    icon: faBullhorn,
    title: "Showcase Innovations and Provide Guidance",
    text: "Highlight innovative projects and offer mentorship to students aiming to create impactful products. Provide resources and support for budding product managers.",
  },
  {
    icon: faObjectGroup,
    title: "Organize Workshops and Competitions",
    text: "Conduct workshops, hackathons, and competitions to ignite interest in product management. Provide platforms for students to present and refine their ideas.",
  },
  {
    icon: faMagic,
    title: "Enhance Online Presence and Alumni Network",
    text: "Manage the club's online presence on social media and the official website. Engage with alumni to offer networking and mentorship opportunities.",
  },
];

const achivements = [
  {
    icon: faTrophy,
    title: "INTER IIT TECHMEET 11.0",
    rank: "1st Rank (Gold)",
    text: "We won gold at Inter IIT TECHMEET 11.0 and the problem statement was to build a community driven marketplace as a product for analytics engineers in Paradime.io with a minimised number of clicks.",
    link: (
      <a href="https://drive.google.com/drive/folders/1lNkiXZcBnLbzZrkuNHwub1DQhQw763cy">
        Our Submission
      </a>
    ),
  },
  {
    icon: faBullhorn,
    title: "Samsung Edge 8.0",
    rank: "Among top 10 National Finalists",
    text: "Using the user roadmap, we identified various problems and brainstormed solutions to enhance engagement with Samsung. Our goal is to leverage AI for improving customer centricity, experience, and personalization.",
  },
  {
    icon: faObjectGroup,
    title: "ImTheFUTURE 8.0",
    rank: "3rd Position",
    text: "After recognizing the health issues faced by pet owners, we conducted market research to address these challenges. Our research led to the development of effective solutions, aimed at enhancing the overall quality of pet healthcare.",
  },
  {
    icon: faMagic,
    title: "Product Management Championship",
    rank: "1st Position",
    text: "We devised a solution to make and integrate a chatbot in an app interface via general management, design, pricing model, marketing, strategy, and operations",
  },
  // {
  //   icon: faBullhorn,
  //   title: "PROD-A-THON",
  //   rank: "1st Position",
  //   text: "The problem was to reduce uninstall rates for the Chrome extension, we performed user behavior analysis, UX enhancement, and communication. Gathered industry-standard uninstallation rates, understood reasons behind user uninstallations, analyzed feedback to identify pain points, and resolved critical issues or functionality gaps.",
  // },
];

const calendarInfo = {
  title: "Upcoming Events and Workshop",
  description:
    "The Product Club organizes a variety of events and workshops aimed at innovation and entrepreneurship among students. Join us for engaging sessions on product development, startup strategies, and industry insights. Stay updated with our calendar to participate in our upcoming activities.",
  buttonText: "Calendar",
  buttonUrl: "#",
};

const caseBookHeaderInfo = {
  // title: "PRODUCT CASE BOOKS",
  // subtitle: "Archive of Previous Year's Product Case Books",
  // description: `Downloadable PDF versions of each case book. Filter by year or topic.`,
};

const pastHeaderInfo = {
  title: `OUR PAST SESSIONS`,
  subtitle: `Previous Speakers`,
  description: `Discover presentations and recordings from our past workshops.`,
};

const sessions = [
  {
    title: "Session 1: Product Ideation Workshop",
    description: "Learn the process of generating and refining product ideas.",
    image: "/images/banner/light-03.jpeg", // Update with actual image path
    resources: [
      { type: "Presentation", link: "#", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "Session 2: Prototyping Essentials",
    description:
      "Master the fundamentals of prototyping for product development.",
    image: "/images/banner/light-03.jpeg", // Update with actual image path
    resources: [
      { type: "Presentation", link: "#", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  // Add more sessions as needed
];
const bannerlogos = {
  src: "/images/logo/pmig.png",
  alt: "UG acads logo",
};
const quoteHeaderInfo = {
  title: `PRODUCT CLUB`,
  subtitle: `Member Quotes`,
  description: `A collection of inspiring quotes from members of the Product Club about their experiences and contributions.`,
};
const sections = [
  { id: "objectives", label: "Objectives" },
  { id: "activities", label: "Activities" },
  { id: "achivements", label: "Our Achivements" },
  { id: "calender", label: "Calender" },
  { id: "feature", label: "Posts" },
  { id: "pastcollab", label: "OUR COLLABORATORS " },
  { id: "past", label: "Past Sessions" },
  { id: "director", label: "Director's Note" },
  { id: "note", label: "Member Quotes" },
];

const ProductPage = () => {
  return (
    <div className="relative">
      <Banner
        banners={banners}
        logo={bannerlogos}
        title={"Welcome to Product Club"}
        description={description}
        socialLinks={socialLinks}
      />
      <JumpLinks sections={sections} />
      <section id="objectives">
        <ObjectivesSection title={"Our Mission"} objectives={objectives} />
      </section>
      <section id="activities">
        <Activities headerInfo={ProductHeader} activities={activitiesData} />
      </section>
      <section id="achivements">
        <ObjectivesSection title={"Our Achivements"} objectives={achivements} />
      </section>
      <section id="calender">
        <CalendarView calendarInfo={calendarInfo} />
      </section>
      <section id="feature">
        <ProductClubFeaturesTab
          title={"Latest Posts"}
          postList={instagramLinkData}
        />
      </section>
      <section id="pastcollab">
        <PastCollaborators />
      </section>
      <section id="past">
        <PastSessions PastSessionsHeader={pastHeaderInfo} sessions={sessions} />
      </section>
      <section id="director">
        <DirectorNote
          headerInfo={quoteHeaderInfo}
          quotes={productClubQuoteData}
        />
      </section>
      <section id="note">
        <NoteSection notes={noteData} />
      </section>

      {/* <ResearchGazette headerInfo={caseBookHeaderInfo} data={caseBookData} /> */}
    </div>
  );
};

export default ProductPage;
