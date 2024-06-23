import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import ResearchGazette from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import DirectorNote from "@/components/Quote/DirectorNote";
import FeaturesTab from "@/components/FeaturesTab";
import NoteSection from "@/components/Note/NoteSection";
import { faComments, faBullhorn, faObjectGroup, faMagic } from '@fortawesome/free-solid-svg-icons';

const objectives = [
  {
    icon: faComments,
    title: "Increase Awareness and Promote Research Culture",
    text: "Raise awareness about the variety of research activities on campus among the student community. Foster a thriving research culture by motivating students to engage in research activities.",
  },
  {
    icon: faBullhorn,
    title: "Showcase Excellence and Provide Support and Guidance",
    text: "Offer support and guidance to budding researchers and research enthusiasts. Highlight and give voice to students excelling in the field of research.",
  },
  {
    icon: faObjectGroup,
    title: "Organise Events and Cultivate Interests",
    text: "Conduct events, talks, and sessions related to various aspects of research and career opportunities. Encourage research interests among students and provide platforms to showcase their research potential.",
  },
  {
    icon: faMagic,
    title: "Manage Online Presence and Alumni Engagement",
    text: "Oversee the research portal on the council’s website, NSRC and IRS official sites, and social media handles. Engage with alumni who are active in research to mentor current students and provide networking opportunities.",
  },
];

export const metadata: Metadata = {
  title: "Research Wing Page",
  description: "This is the Research Wing page for ANC council",
  // other metadata
};

const ResearchPage = () => {
  return (
    <div>
         <Banner
                title="RESEARCH WING"
                subtitle="Pioneering Research for a Better Future"
                description="The Research Wing of the council aims at cultivating and promoting research interests in the student community. It aims to provide students the freedom and opportunities to work upon diverse areas of business, technology and existing industrial and national challenges as well as pursue their own ideas so as to become innovators and future leaders."
            />
        <ObjectivesSection objectives={objectives} />
        <Activities />
        <CalendarView />
        <ResearchGazette />
        <PastSessions />
        <DirectorNote />
        <NoteSection />
    </div>
  );
};

export default ResearchPage;
