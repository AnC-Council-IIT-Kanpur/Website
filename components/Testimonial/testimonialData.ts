import image1 from "./id1.jpg";
import image2 from "./id2.jpg";
import image3 from './id3.jpg'
import image4 from './id4.jpg'
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vishal Himmatsinghka",
    designation: "a Y21 pursuing a B.Tech in Electrical Engineering at IIT Kanpur",
    image: image1,
    intern: "Working as software developement intern at Atlassian",
    content:"Every error like any failure hides a lesson; persist, just never give up",
   } ,
   {
    id: 2,
    name: "Siddhant Singh",
    designation: "a Y21 student pursuing Mechanical Engineering at IIT Kanpur",
    image: image2,
    intern: "Working as a Trading Analyst intern at Axxela",
    content:
      "Grit and perseverance are your greatest allies. Don’t lose them, and you will find a way.",
  },
  {
    id: 3,
    name: "Diptansu",
    designation: "  Y21 student pursuing Chemical Engineering at IIT Kanpur ",
    image: image3,
    intern: "Interning at Hindustan Unilever as an RnD engineer",
    content:
      "Be calm and composed before and during your interviews. Don’t worry too much and remember plenty of opportunities will be waiting for you.",
  },
  {
    id: 4,
    name: "Siddharth Maurya",
    designation: "a Y21 student pursuing Chemical engineering at IIT Kanpur ",
    image: image4,
    intern: "Interning as a Strategy and Consulting Associate at Accenture",
    content:
      "In the pursuit of excellence, persistence stands as it’s twin sister. Keep your tenacity alive and consistently offer your best effort, for there’s always a greater reward waiting ahead”",
  },
];
