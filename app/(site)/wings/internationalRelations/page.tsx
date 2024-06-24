import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import Grad from "@/components/Grad";
import CalendarView from "@/components/CalenderView";
import { faComments, faBullhorn, faObjectGroup, faMagic } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends, faGlobe, faUniversity, faBookOpen, faExchangeAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "International Relations Page",
  description: "This is the International Relations Wing page for ANC council",
  // other metadata
};
const activitiesData = [
  {
    icon: faUserFriends,
    name: "Buddy Program",
    text: "The Buddy Program pairs incoming international students with volunteers from the fourth/fifth years. Volunteers assist with day-to-day challenges, including academics and socio-cultural integration, helping international students acclimatize to IITK and India."
  },
  {
    icon: faGlobe,
    name: "Foreign Training Program",
    text: "The Foreign Training Program allows undergraduates to gain international exposure through research or training at prestigious institutions abroad. The IR wing recruits professors globally and offers financial assistance, fostering academic and research excellence."
  },
  {
    icon: faUniversity,
    name: "International Programs",
    text: "Sessions like MITACS, Summer@EPFL, and DAAD-WISE feature speakers and representatives who share insights and experiences. These sessions expand students' horizons academically and professionally, providing valuable international exposure."
  },
  {
    icon: faBookOpen,
    name: "Exam Preparations",
    text: "We provide resources and support for GRE/GMAT exam preparations, including discounted study materials and test series. Sessions led by prep school staff and seniors offer general doubt clearing and guidance, familiarizing students with these exams."
  },
  {
    icon: faExchangeAlt,
    name: "SemEx Sessions",
    text: "SemEx Sessions ahead of the spring and fall semesters dispel myths, raise awareness, and encourage overseas semester exchanges. Information from seniors and the OIR helps students prepare and explore their options for international programs."
  },
  {
    icon: faUsers,
    name: "Foreign Students Orientation",
    text: "The Foreign Students Orientation in MnC clubs helps international students integrate into IITK. This brief orientation introduces them to the campus culture, helping to resolve academic pressure and homesickness, and fostering a welcoming environment."
  },
];
const objectives = [
  {
    icon: faComments,
    title: "Building Academic Partnerships with Universities Globally",
    text: "Our goal is to build strong partnerships with leading international universities and institutions. These collaborations will promote academic exchanges, facilitate joint research projects, enriching academic and research endeavors at IITK.",
  },
  {
    icon: faBullhorn,
    title: "Fostering Global Connections for Academic Excellence",
    text: "The International Relations wing shall work along with OIR (Office of International Relations) towards improving the relations of IITK with its international counterparts, and hence promoting Exchange programmes, Internships and Career opportunities in academia.",
  },
  {
    icon: faObjectGroup,
    title: "Advancing Global Research via International Collaborations",
    text: "We promote and support joint research projects with international partners, driving knowledge and innovation across borders. By fostering collaboration, we aim to leverage diverse expertise and resources to tackle global challenges and drive impactful discoveries.",
  },
  {
    icon: faMagic,
    title: "Advocating for Policies to Support Global Higher Education Leadership",
    text: "Our goal is to advocate for policies that bolster internationalization efforts, ensuring our institution maintains its role as a global leader in higher education. By championing these initiatives, we aim to enhance global collaboration, diversity, and academic excellence across borders.",
  },
]
const info = {
  title: "OUR ACTIVITIES",
  subtitle: "Explore Our Programs and Events",
  description: `Join activities like international programs, exam prep, and cultural integration. Enhance your academic journey and personal growth.`,
}
const ResearchPage = () => {
  return (
    <div>
      <Banner
        title="INTERNATIONAL RELATIONS WING"
        subtitle="International Collaboration, Universal Success"
        description="The International Relations(IR) wing of Academics and Career Council is a student organisation dedicated to work in close association with the Dean, International Relations(DoIR) and the Office of International Relations(OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts . It also acts as a complementary link between the student community and the office."
      />
      <ObjectivesSection objectives={objectives} />
      <Activities activitiesData={activitiesData} Info={info} />
      <CalendarView title='Dynamic IR Calender' content='Tracking the timelines for Semester Exchange and Internship opportunities across various universities can be challenging due to their scattered schedules throughout the year. To address this, we are introducing a dynamic calendar that provides a tentative timeline for all major international program opportunities and deadlines. This calendar will help you to stay informed and aware of upcoming opportunities by including essential details such as requirements and eligibility criteria.' link='#' />
      <Grad />
    </div>
  );
};

export default ResearchPage;
