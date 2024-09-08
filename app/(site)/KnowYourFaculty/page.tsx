import React from "react";
import FacultyVideoSection from "@/components/VideoPlayer";
import SectionHeader from "@/components/Common/SectionHeader";


const videodetails = [{
    name: "Dr. Akash Chaudhary",
     department: "CHE",
     description: "In this brief video, the Faculty member provides insights into the groundbreaking research conducted within his laboratory. For further details, you are encouraged to visit the homepage.",
     videoUrl: "https://youtu.be/M8ENsQuyBss?si=I_xQCOs_SbXYKJx4",
     homepage: "https://www.iitk.ac.in/che/achoudhary.htm",
     isMounted: true,
   },
   {
     name: "Dr. Anjali Verma",
     department: "PHY",
     description: "Dr. Verma discusses the challenges in modern physics and invites students to explore her latest findings in particle physics.",
     videoUrl: "https://iitk-my.sharepoint.com/:v:/g/personal/achoudhary_iitk_ac_in/ERx6EKjgQdJJsHc0eT7P9gAB3f__mcC3UG-ufoguq78kjQ?e=DYJJGr",
     homepage: "https://example.com/anjali-verma-homepage",
     isMounted: true,
   
 

}];

const KnowYourFaculty = () => {
  return (
    
    <div className="pb-20 pt-40">
      <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: "Meet Your Faculties: Learn, Engage, and Inspire",
              description: `"Teaching is not the filling of a pail, but the lighting of a fire." — William Butler Yeats`,
            }}
          />
        <FacultyVideoSection faculties={videodetails}/>
    </div>
  );
};

export default KnowYourFaculty;