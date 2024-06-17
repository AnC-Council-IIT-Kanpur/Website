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


export const metadata: Metadata = {
  title: "Research Wing Page",
  description: "This is the Research Wing page for ANC council",
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
        <NoteSection />
        
      
    </div>
  );
};

export default ResearchPage;
