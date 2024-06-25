import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import Team from "@/components/Teams";
import Product from "@/components/Product"
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
import Academic from "@/components/Academic";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Team />
      <Academic/>
      <Product/>
      
      <About />
      <FeaturesTab />
      <TeamsTab />
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      <MainEvents />
      <Testimonial />
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <Blog />
      <FAQ />
    </main>
  );
}
