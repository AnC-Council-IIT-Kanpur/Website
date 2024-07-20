import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import ResearchGazette from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import DirectorNote from "@/components/Quote/DirectorNote";
import { Note } from "@/types/note";
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
  faPeopleArrows,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import RTestimonial from "@/components/ResearchTestimonial";

export const metadata: Metadata = {
  title: "Research Wing Page",
  description: "This is the Research Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: "dark:hidden",
    slides: [
      { src: "/images/banner/anciitk_cover.jpeg", alt: "Slide 1" },
      { src: "/images/banner/rw1.jpeg", alt: "Slide 2" },
      { src: "/images/banner/rw3.jpeg", alt: "Slide 2" },
      { src: "/images/banner/rw4.jpg", alt: "Slide 3" },
      { src: "/images/banner/rw5.png", alt: "Slide 3" },
    ],
  },
  {
    delay: 3000,
    className: "dark:block",
    slides: [
      { src: "/images/banner/anciitk_cover.jpeg", alt: "Slide 1" },
      { src: "/images/banner/rw1.jpeg", alt: "Slide 2" },
      { src: "/images/banner/rw3.jpeg", alt: "Slide 2" },
      { src: "/images/banner/rw4.jpg", alt: "Slide 3" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/research-wing-anc-iitk/",
    label: "linkedin icon",
    iconPath:
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.666 20h-2.668v-11h2.668v11zm-1.334-12.284c-.86 0-1.558-.702-1.558-1.558s.698-1.558 1.558-1.558 1.558.702 1.558 1.558-.698 1.558-1.558 1.558zm13.334 12.284h-2.666v-5.568c0-1.331-.026-3.042-1.855-3.042-1.857 0-2.141 1.448-2.141 2.947v5.663h-2.666v-11h2.56v1.503h.037c.356-.674 1.227-1.383 2.528-1.383 2.704 0 3.202 1.779 3.202 4.093v6.787z",
  },
  {
    href: "mailto:researchwing.iitk@gmail.com",
    label: "mailbox icon",
    iconPath:
      "M4.5 4h15c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm0 2v.511l7.5 4.744 7.5-4.744v-.511h-15zm15 11v-8.745l-7.5 4.744-7.5-4.744v8.745h15z",
  },
  {
    href: "https://www.instagram.com/iitk_research_wing/",
    label: "instagram icon",
    iconPath:
      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
  },
  {
    href: "https://www.linkedin.com/company/research-wing-anc-iitk/",
    label: "linkedIn icon",
    iconPath:
      " M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
];

const description = {
  title: "Pioneering Research for",
  highlight: "a Better Future",
  text: "The aim of the Research Wing is to increase awareness about the variety of research going on the campus and instill a sense of motivation towards the same, among the student community, by promoting a thriving research culture. The wing envisions to provide a platform to budding researchers, support and guidance to the research enthusiasts and voice to those who are excelling in the field.",
};

const objectives = [
  {
    icon: faComments,
    title: "Increase Awareness and Promote Research Culture ",
    text: "Raise awareness about the variety of research activities on campus among the student community. Foster a thriving research culture by motivating students to engage in research activities.",
  },
  {
    icon: faBullhorn,
    title: "Showcase Excellence & Provide Support and Guidance",
    text: "Offer support and guidance to budding researchers and research enthusiasts. Highlight and give voice to students excelling in the field of research.",
  },
  {
    icon: faObjectGroup,
    title: "Organise Events and Cultivate Interests",
    text: "Conduct events, talks, and sessions related to various aspects of research and career opportunities. Encourage research interests among students and provide platforms to showcase their research potential.",
  },
  {
    icon: faMagic,
    title: "Driving Research Initiatives",
    text: "Oversee the research portal on the council’s website, NSRC and IRS official sites, and social media handles.",
  },
  {
    icon: faPeopleGroup,
    title: "Alumni Engagement",
    text: "Engage with alumni who are active in research to mentor current students and provide networking opportunities.",
  },
];

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
    name: "IITK Research Portal",
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

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Explore various activities organized by our team, including events, workshops, and more. Get involved and enhance your experience.`,
};

const calendarInfo = {
  title: "Upcoming Talks & Seminars",
  description: `The Research wing routinely conducts a number of events, talks, and sessions, covering various aspects of research and work (including career options, research opportunities (on & off campus), guidance sessions, departmental orientation sessions, and technical workshops). Managers of the wing bear the responsibility of organizing these sessions with the assistance of the council secretaries.
  Join us for insightful talks and seminars hosted by leading experts in various fields. Stay updated with our calendar to never miss an event.`,
  buttonText: "View Calendar",
  buttonUrl:
    "https://calendar.google.com/calendar/u/0?cid=cmVzZWFyY2h3aW5nLmlpdGtAZ21haWwuY29t",
};

const reserachAlumInfo = {
  title: "Research Wing X IITK Alumni",
  description: `The Research Wing is committed to engaging with alumni who are active in research. We aim to provide mentorship opportunities for current students and create networking opportunities for alumni and students. Stay connected with our alumni community to learn from their experiences and insights.`,
  buttonText: "Join here",
  buttonUrl: "https://forms.gle/2EdyGQu4dk8PKW749",
};

const PastSessionsHeader = {
  title: "OUR PREVIOUS SESSIONS",
  subtitle: "Details of Our Past Sessions",
  description:
    "Find resources like presentations and recordings of our past sessions.",
};

const sessions = [
  {
    title: "Surge Info Session",
    description:
      "Have you heard about SURGE (Students-Undergraduate Research Graduate Excellence), a research program meant to develop and promote a research and interdisciplinary education culture amongst undergraduates. Under this program, students from IIT-K and other participating institutions all across India and SAARC nations undertake short-duration but focused research projects under professors. The duration of the program is approximately eight weeks.",
    image: "/images/wings/research/surge.jpeg", // Add the path to the image
    resources: [
      {
        type: "Post",
        link: "https://www.instagram.com/p/CnucUXYrbiU/",
        label: "View Post",
      },
      {
        type: "External link",
        link: "https://surge.iitk.ac.in/",
        label: "Surge website",
      },
    ],
  },
  {
    title: "Intro to foreign Research Internships",
    description: `Ready to explore research opportunities abroad? Join us for an exclusive online session on "Foreign Research Internships" and gain insights from IIT Kanpur peers who have secured prestigious internships at top international universities`,
    image: "/images/wings/research/research_s.jpeg", // Add the path to the image
    resources: [
      {
        type: "Presentation",
        link: "https://drive.google.com/drive/folders/1DjgvskrWcIECtfd5bFpt8pX1nggVOfWf?usp=sharing",
        label: "View Presentation",
      },
      {
        type: "Recording",
        link: "https://drive.google.com/file/d/1oIjNyf5JTXagT8nhuFw0g04WCZCm1q5C/view",
        label: "Watch Recording",
      },
    ],
  },
  // Add more sessions as needed
];

const headerInfo = {
  title: "DIRECTOR’S NOTE",
  subtitle: "Director’s take on NSRC",
  description: `Talking about NSRC ’23, Prof. Abhay Karandikar, Director IIT Kanpur, said, “The pandemic has emphasized not only the need to have a healthcare system in place, but the important role that technology can play in making it more efficient. There are exciting innovations taking place in this field. This is the reason why medtech is the focus of NSRC ’23 this year. We hope that NSRC’23 will excite our young students.”`,
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

const noteData: Note[] = [
  {
    id: "noteAlumni",
    title: "Note to Alumni",
    content: `Esteemed alumni are invited to stay connected with IIT-Kanpur. They can reach out via the
      provided mailing address or contact details to share and guide the institution about research
      opportunities, including internships. Alumni are encouraged to join the alumni WhatsApp
      community to remain connected and contribute to the IIT-Kanpur research network perpetually.`,
  },
  {
    id: "noteProfessors",
    title: "Note to Professors",
    content: `Distinguished professors are encouraged to stay in touch with IIT-Kanpur. They can connect
      through the provided contact details and mailing address to inform the institution about research
      opportunities and collaborations. Professors are invited to join the WhatsApp community to
      engage and contribute to the ongoing research initiatives at IIT-Kanpur.`,
  },
];

const ResearchGazetteHeader = {
  title: "RESEARCH GAZETTES",
  subtitle: "Archive of Previous Year's Research Gazettes",
  description: `Downloadable PDF versions of each gazette with summaries. Filter by year or research area.`,
};

const researchGazetteData = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Research Gazette 2023",
    description: "Summary of research activities and achievements in 2023.",
    pdfUrl: "https://heyzine.com/flip-book/32a6bdf64a.htm#page/1",
    year: 2023,
    area: "Technology",
  },
  {
    id: 2,
    icon: "/images/icon/icon-qc.svg",
    title: "Research Gazette 2022",
    description: "Summary of research activities and achievements in 2022.",
    pdfUrl:
      "https://drive.google.com/file/d/1dO9t-k_LA44kS6ng5QeolEHDUbZ8HXSU/view",
    year: 2022,
    area: "Science",
  },
  // Add more gazette data as needed
];

const ResearchPage = () => {
  return (
    <div>
      <Banner
        banners={banners}
        title="Welcome to Research Wing"
        description={description}
        socialLinks={socialLinks}
      />
      <ObjectivesSection title="Our Objectives" objectives={objectives} />
      <Activities headerInfo={activitiesHeader} activities={activitiesData} />
      <CalendarView calendarInfo={calendarInfo} />
      <CalendarView calendarInfo={reserachAlumInfo} />
      <ResearchGazette
        headerInfo={ResearchGazetteHeader}
        data={researchGazetteData}
      />
      <PastSessions
        PastSessionsHeader={PastSessionsHeader}
        sessions={sessions}
      />
      <DirectorNote headerInfo={headerInfo} quotes={quotes} />
      {/* <NoteSection notes={noteData}/> */}
      <RTestimonial />
    </div>
  );
};

export default ResearchPage;
