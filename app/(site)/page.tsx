import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import Team from "@/components/Teams";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import TeamsTab from "@/components/TeamsTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import MainEvents from "@/components/MainEvents";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";
import { link } from "fs";
import PastSessions from "@/components/PastSessions";

export const metadata: Metadata = {
  title: "AnC Council IIT Kanpur",
  description: "Academic and Cultural Council, IIT Kanpur",
  // other metadata
};

const PastSessionsHeader = {
  title: "OUR PREVIOUS SESSIONS",
  subtitle: "Details of Our Past Sessions",
  description:
    "Find resources like presentations and recordings of our past sessions.",
};


export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      {/* <TeamsTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      <MainEvents />
    
      <Testimonial />
      
      
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
      <FAQ />
    </main>
  );
}
