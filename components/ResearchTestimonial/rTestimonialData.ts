import image1 from "./adityaa.jpeg";
import image2 from "./sanyukta.jpeg";
import { Testimonial } from "@/types/testimonial";

export const rTestimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Aditya A",
    designation: "Y19",
    image: image1,
    intern: "Research Intern @ University of New Brunswick, Canada",
    content:
      "You should always be eager to learn things you are interested in and never hesitate to seek help from your mates or professors or anyone who is involved in the field.",
  } ,
  {
    id: 2,
    name: "Sanyukta",
    designation: "Y19",
    image: image2,
    intern: "Trading Analyst Intern @ Axxela",
    content:"In Caltech there is greater independence. The bridge between being felt like an undergrad and a researcher becomes thinner with more freedom. When we do an UGP here at IITK there is constant guidance from the mentors. Both the systems have their own pros and cons but working in Caltech was a great experience for me.",
  }
];
