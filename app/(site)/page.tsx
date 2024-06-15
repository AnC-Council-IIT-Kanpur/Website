import { Metadata } from "next";
import CalendarView from "@/components/CalenderView";
import NewBanner from "@/components/Banner";
import ResearchGazettes from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import Activities from "@/components/Activities/Activities";
import ObjectivesSection from "@/components/Objectives";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      
      
      <NewBanner />
      <ObjectivesSection />
      <Activities />
      <CalendarView />
      <ResearchGazettes />
      <PastSessions />
      
      
      

      
    </main>
  );
}
