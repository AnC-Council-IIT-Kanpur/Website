import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import Grad from "@/components/Grad";
import {
  faComments,
  faBullhorn,
  faObjectGroup,
  faMagic,
  faCalendarAlt,
  faStar,
  faDatabase,
  faGraduationCap,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserFriends,
  faGlobe,
  faUniversity,
  faBookOpen,
  faExchangeAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export const metadata: Metadata = {
  title: "International Relations Wing Page",
  description: "This is the International Relations Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: "dark:hidden",
    slides: [
      { src: "/images/banner/bg-1.JPG", alt: "Slide 1" },
      { src: "/images/banner/bg-2.JPG", alt: "Slide 2" },
      { src: "/images/banner/bg-3.JPG", alt: "Slide 3" },
    ],
  },
  {
    delay: 3000,
    className: "dark:block",
    slides: [
      { src: "/images/banner/bg-1.JPG", alt: "Slide 1" },
      { src: "/images/banner/bg-2.JPG", alt: "Slide 2" },
      { src: "/images/banner/bg-3.JPG", alt: "Slide 3" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/international-relations-wing-iitk/",
    label: "linkedin icon",
    iconPath:
      "M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z",
  },
  {
    href: "https://www.instagram.com/iitkinternationalrelations/",
    label: "instagram icon",
    iconPath:
      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
  },

  {
    href: "https://www.facebook.com/oiriitk",
    label: "facebook icon",
    iconPath:
      "M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z",
  },

  {
    href: "mailto:oir@iitk.ac.in",
    label: "mailbox icon",
    iconPath:
      "M4.5 4h15c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm0 2v.511l7.5 4.744 7.5-4.744v-.511h-15zm15 11v-8.745l-7.5 4.744-7.5-4.744v8.745h15z",
  },
];

const description = {
  title: "International Collaboration,",
  highlight: " Universal Success",
  text: "The International Relations(IR) wing of Academics and Career Council is a student organisation dedicated to work in close association with the Dean, International Relations(DoIR) and the Office of International Relations(OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts . It also acts as a complementary link between the student community and the office.",
};

const objectives = [
  {
    icon: faComments,
    title: "Global University Partnerships",
    text: "Our aim is to establish robust partnerships with leading international universities, promoting academic exchanges and joint research to enhance academic and research efforts at IITK.",
  },
  {
    icon: faBullhorn,
    title: "Fostering Connections for Academic Excellence",
    text: "The International Relations wing and OIR will enhance IITK's relationships with international counterparts, promoting exchange programs, internships, and academic career opportunities.",
  },
  {
    icon: faObjectGroup,
    title: "Cross-Border Research Partnerships",
    text: "We actively facilitate and support collaborative research initiatives with esteemed international partners, strategically leveraging their diverse expertise to effectively address pressing global challenges",
  },
  {
    icon: faMagic,
    title: "Internationalization in Higher Education",
    text: "We advocate for policies that enhance internationalization, ensuring our institution remains a global leader in higher education. These initiatives promote global diversity and academic excellence.",
  },
];
const activitiesData = [
  {
    icon: faUserFriends,
    name: "Buddy Program",
    text: "The Buddy Program pairs incoming international students with volunteers from the fourth/fifth years. Volunteers assist with day-to-day challenges, including academics and socio-cultural integration, helping international students acclimatize to IITK and India.",
  },
  {
    icon: faGlobe,
    name: "Foreign Exposure Program",
    text: "The Foreign  Exposure Program allows undergraduates to gain international exposure through research or training at prestigious institutions abroad. The IR wing recruits professors globally and offers financial assistance, fostering academic and research excellence.",
  },
  {
    icon: faUniversity,
    name: "International Programs",
    text: "Sessions like MITACS, Summer@EPFL, and DAAD-WISE feature speakers and representatives who share insights and experiences. These sessions expand students' horizons academically and professionally, providing valuable international exposure.",
  },
  {
    icon: faBookOpen,
    name: "Exam Preparations",
    text: "We provide resources and support for GRE/GMAT exam preparations, including discounted study materials and test series. Sessions led by prep school staff and seniors offer general doubt clearing and guidance, familiarizing students with these exams.",
  },
  {
    icon: faExchangeAlt,
    name: "SemEx Sessions",
    text: "SemEx Sessions ahead of the spring and fall semesters dispel myths, raise awareness, and encourage overseas semester exchanges. Information from seniors and the OIR helps students prepare and explore their options for international programs.",
  },
  {
    icon: faUsers,
    name: "Foreign Students Orientation",
    text: "The Foreign Students Orientation in MnC clubs helps international students integrate into IITK. This brief orientation introduces them to the campus culture, helping to resolve academic pressure and homesickness, and fostering a welcoming environment.",
  },
];

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Join activities like international programs, exam prep, and cultural integration. Enhance your academic journey and personal growth.`,
};

const calendarInfo = {
  title: "Dynamic IR Calender",
  description: `Tracking the timelines for Semester Exchange and Internship opportunities across various universities can be challenging due to their scattered schedules throughout the year. To address this, we are introducing a dynamic calendar that provides a tentative timeline for all major international program opportunities and deadlines. This calendar will help you to stay informed and aware of upcoming opportunities by including essential details such as requirements and eligibility criteria.`,
  buttonText: "View Calendar",
  buttonUrl: "#",
};
const bannerlogos = {
  src: "/images/logo/internationalRelations.png",
  alt: "IR wing logo",
};

const ResearchPage = () => {
  return (
    <div>
      <Banner
        banners={banners}
        logo={bannerlogos}
        title="Welcome to IIT-Kanpur's International Research Wing"
        description={description}
        socialLinks={socialLinks}
      />
      <ObjectivesSection title="Our Objectives" objectives={objectives} />
      <Activities headerInfo={activitiesHeader} activities={activitiesData} />
      <CalendarView calendarInfo={calendarInfo} />
      <Grad />
    </div>
  );
};

export default ResearchPage;
