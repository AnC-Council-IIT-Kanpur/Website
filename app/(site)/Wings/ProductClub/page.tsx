import React from "react";
import Banner from "@/components/ProductClub/Banner";
import ObjectivesSection from "@/components/ProductClub/Objectives";
import { Metadata } from "next";
import Activities from "@/components/ProductClub/Activities/Activities";
import CalendarView from "@/components/ProductClub/CalenderView";
import ResearchGazette from "@/components/ProductClub/ResearchGazette";
import PastSessions from "@/components/ProductClub/PastSessions";
import DirectorNote from "@/components/ProductClub/Quote/DirectorNote";
import FeaturesTab from "@/components/ProductClub/FeaturesTab";
import NoteSection from "@/components/ProductClub/Note/NoteSection";


export const metadata: Metadata = {
  title: "Product Club",
  description: "This is the Product Club page for ANC council",
  // other metadata
};

const ResearchPage = () => {
  return (
    <div>
        <Banner />
        <ObjectivesSection />
        <Activities />
        <CalendarView />
        <ResearchGazette />
        <PastSessions />
        <DirectorNote />
        <FeaturesTab />
        <NoteSection />
        
      
    </div>
  );
};

export default ResearchPage;
