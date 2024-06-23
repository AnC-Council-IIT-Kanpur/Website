import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import Grad from "@/components/Grad";
import ResearchGazette from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import DirectorNote from "@/components/Quote/DirectorNote";
import FeaturesTab from "@/components/FeaturesTab";
import NoteSection from "@/components/Note/NoteSection";
import { faComments, faBullhorn, faObjectGroup, faMagic } from '@fortawesome/free-solid-svg-icons';


export const metadata: Metadata = {
    title: "International Relations Page",
    description: "This is the International Relations Wing page for ANC council",
    // other metadata
};

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
const ResearchPage = () => {
    return (
        <div>
            <Banner
                title="INTERNATIONAL RELATIONS WING"
                subtitle="International Collaboration, Universal Success"
                description="The International Relations(IR) wing of Academics and Career Council is a student organisation dedicated to work in close association with the Dean, International Relations(DoIR) and the Office of International Relations(OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts . It also acts as a complementary link between the student community and the office."
            />
         <ObjectivesSection objectives={objectives} />
            {/* <Activities /> */}
            <Grad />
            {/* <ResearchGazette /> */}
            {/* <PastSessions /> */}
            {/* <DirectorNote /> */}
            {/* <NoteSection /> */}
        </div>
    );
};

export default ResearchPage;
