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
import { faCalendarAlt, faStar, faDatabase, faGraduationCap, faGlobe, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const activitiesData = [
  {
    icon: faCalendarAlt,
    name: "Event Organisation",
    text: "Plan and organise a variety of events such as talks, sessions, and workshops covering career options, research opportunities, guidance, and departmental orientations. Organise a lab tour for new students to familiarise them with the campus research environment.",
  },
  {
    icon: faStar,
    name: "Flagship Events",
    text: "Plan and execute the annual National Students’ Research Convention (NSRC) and Institute Research Symposium (IRS). Introduce new ideas for these events and ensure their smooth and efficient implementation.",
  },
  {
    icon: faDatabase,
    name: "Information Management",
    text: "Collate and maintain a database of research projects, including lists of professors, their current projects, student involvement, and available research positions with qualifications required. Collaborate with the DORD office to organise and streamline campus research projects and activities.",
  },
  {
    icon: faGraduationCap,
    name: "Funding and Grant Support",
    text: "Host workshops on writing research proposals and applying for grants. Provide a database of available funding opportunities and deadlines. Highlight success stories and achievements in research to motivate and inspire students.",
  },
  {
    icon: faGlobe,
    name: "Online Management",
    text: "Manage the research portal on the council’s website, ensuring it is up-to-date and user-friendly. Maintain the official websites for NSRC and IRS. Oversee the social media presence for the research wing and related activities.",
  },
  {
    icon: faHandsHelping,
    name: "Support and Guidance",
    text: "Provide guidance sessions for students interested in research. Offer support to students working on research projects through mentorship and resources. Promote research activities and achievements through various channels to increase visibility.",
  },
];
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
const info = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Explore various activities organized by our team, including events, workshops, and more. Get involved and enhance your experience.`,
}
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
      <Activities activitiesData={activitiesData} Info={info} />
      <CalendarView title='Upcoming Talks & Seminars' content='The Research wing routinely conducts a number of events, talks, and sessions, covering various aspects of research and work (including career options, research opportunities (on & off campus), guidance sessions, departmental orientation sessions, and technical workshops). Managers of the wing bear the responsibility of organizing these sessions with the assistance of the council secretaries.
            Join us for insightful talks and seminars hosted by leading experts in various fields. Stay updated with our calendar to never miss an event.' link='#' />
      <ResearchGazette />
      <PastSessions />
      <DirectorNote />
      <NoteSection />
    </div>
  );
};

export default ResearchPage;
