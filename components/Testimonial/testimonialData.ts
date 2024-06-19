import image1 from "./id1.jpg";
import image2 from "./id2.jpg";
import image3 from './id3.jpg'
import image4 from './id4.jpg'
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vishal Himmatsinghka",
    designation: "Y21, BT-EE",
    image: image1,
    intern: "SD Intern @ Atlassian",
    content:"Every error like any failure hides a lesson; persist, just never give up",
   } ,
   {
    id: 2,
    name: "Siddhant Singh",
    designation: "Y21, BT-ME",
    image: image2,
    intern: "Trading Analyst Intern @ Axxela",
    content:
      "Grit and perseverance are your greatest allies. Don’t lose them, and you will find a way.",
  },
  {
    id: 3,
    name: "Diptansu",
    designation: "Y21, BT-CHE",
    image: image3,
    intern: "RnD Engineer Intern @ Hindustan Unilever",
    content:
      "Don’t worry too much and remember plenty of opportunities will be waiting for you.",
  },
  {
    id: 4,
    name: "Siddharth Maurya",
    designation: "Y21, BT-CHE",
    image: image4,
    intern: "Strategy and Consulting Associate Intern @ Accenture",
    content:
      "Keep your tenacity alive and consistently offer your best effort, for there’s always a greater reward waiting ahead",
  },
];
