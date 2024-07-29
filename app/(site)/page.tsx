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


export const metadata: Metadata = {
  title: "AnC Council IIT Kanpur",
  description: "Academic and Cultural Council, IIT Kanpur",
  // other metadata
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
