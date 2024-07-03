import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import Grad from "@/components/Grad";
import { faComments, faBullhorn, faObjectGroup, faMagic, faCalendarAlt, faStar, faDatabase, faGraduationCap, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends, faGlobe, faUniversity, faBookOpen, faExchangeAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
export const metadata: Metadata = {
  title: "International Relations Wing Page",
  description: "This is the International Relations Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: 'dark:hidden',
    slides: [
      { src: '/images/banner/bg-1.JPG', alt: 'Slide 1' },
      { src: '/images/banner/bg-2.JPG', alt: 'Slide 2' },
      { src: '/images/banner/bg-3.JPG', alt: 'Slide 3' }
    ]
  },
  {
    delay: 3000,
    className: 'dark:block',
    slides: [
      { src: '/images/banner/bg-1.JPG', alt: 'Slide 1' },
      { src: '/images/banner/bg-2.JPG', alt: 'Slide 2' },
      { src: '/images/banner/bg-3.JPG', alt: 'Slide 3' }
    ]
  }
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/oiriitk',
    label: 'facebook icon',
    iconPath: 'M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
  },
  {
    href: 'https://twitter.com/oiriitk',
    label: 'twitter icon',
    iconPath: 'M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
  },
  {
    href: 'https://www.linkedin.com/company/international-relations-wing-iitk/',
    label: 'linkedin icon',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.666 20h-2.668v-11h2.668v11zm-1.334-12.284c-.86 0-1.558-.702-1.558-1.558s.698-1.558 1.558-1.558 1.558.702 1.558 1.558-.698 1.558-1.558 1.558zm13.334 12.284h-2.666v-5.568c0-1.331-.026-3.042-1.855-3.042-1.857 0-2.141 1.448-2.141 2.947v5.663h-2.666v-11h2.56v1.503h.037c.356-.674 1.227-1.383 2.528-1.383 2.704 0 3.202 1.779 3.202 4.093v6.787z'

  },
  {
    href: 'mailto:oir@iitk.ac.in',
    label: 'mailbox icon',
    iconPath: 'M4.5 4h15c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm0 2v.511l7.5 4.744 7.5-4.744v-.511h-15zm15 11v-8.745l-7.5 4.744-7.5-4.744v8.745h15z'
  },
  {
    href: 'https://www.instagram.com/iitkinternationalrelations/',
    label: 'instagram icon',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.796.24 2.214.403.55.213.944.469 1.357.883.414.414.67.807.883 1.357.163.418.349 1.043.403 2.214.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.796-.403 2.214-.213.55-.469.944-.883 1.357-.414.414-.807.67-1.357.883-.418.163-1.043.349-2.214.403-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.796-.24-2.214-.403-.55-.213-.944-.469-1.357-.883-.414-.414-.67-.807-.883-1.357-.163-.418-.349-1.043-.403-2.214-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.796.403-2.214.213-.55.469-.944.883-1.357.414-.414.807-.67 1.357-.883.418-.163 1.043-.349 2.214-.403 1.267-.058 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.272.058-2.147.24-2.904.513a5.919 5.919 0 0 0-2.14 1.384 5.919 5.919 0 0 0-1.384 2.14c-.273.757-.455 1.632-.513 2.904-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.058 1.272.24 2.147.513 2.904a5.919 5.919 0 0 0 1.384 2.14 5.919 5.919 0 0 0 2.14 1.384c.757.273 1.632.455 2.904.513 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.272-.058 2.147-.24 2.904-.513a5.919 5.919 0 0 0 2.14-1.384 5.919 5.919 0 0 0 1.384-2.14c.273-.757.455-1.632.513-2.904.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.058-1.272-.24-2.147-.513-2.904a5.919 5.919 0 0 0-1.384-2.14 5.919 5.919 0 0 0-2.14-1.384c-.757-.273-1.632-.455-2.904-.513-1.28-.06-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z'
  },
];

const description = {
  title: "International Collaboration,",
  highlight: " Universal Success",
  text: "The International Relations(IR) wing of Academics and Career Council is a student organisation dedicated to work in close association with the Dean, International Relations(DoIR) and the Office of International Relations(OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts . It also acts as a complementary link between the student community and the office."
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
  ]
const activitiesData = [
    {
      icon: faUserFriends,
      name: "Buddy Program",
      text: "The Buddy Program pairs incoming international students with volunteers from the fourth/fifth years. Volunteers assist with day-to-day challenges, including academics and socio-cultural integration, helping international students acclimatize to IITK and India."
    },
    {
      icon: faGlobe,
      name: "Foreign Exposure Program",
      text: "The Foreign  Exposure Program allows undergraduates to gain international exposure through research or training at prestigious institutions abroad. The IR wing recruits professors globally and offers financial assistance, fostering academic and research excellence."
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

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Join activities like international programs, exam prep, and cultural integration. Enhance your academic journey and personal growth.`,
};


const calendarInfo = {
  title: "Dynamic IR Calender",
  description: `Tracking the timelines for Semester Exchange and Internship opportunities across various universities can be challenging due to their scattered schedules throughout the year. To address this, we are introducing a dynamic calendar that provides a tentative timeline for all major international program opportunities and deadlines. This calendar will help you to stay informed and aware of upcoming opportunities by including essential details such as requirements and eligibility criteria.`,
  buttonText: "View Calendar",
  buttonUrl: "#"
};


const ResearchPage = () => {
  return (
    <div>
        <Banner banners={banners} 
      title="Welcome to IIT-Kanpur's International Research Wing" 
      description={description} 
      socialLinks={socialLinks} />
        <ObjectivesSection title="Our Objectives" 
      objectives={objectives} />
        <Activities headerInfo={activitiesHeader} 
      activities={activitiesData} />
        <CalendarView calendarInfo={calendarInfo}/>
        <Grad />
      
    </div>
  );
};

export default ResearchPage;
