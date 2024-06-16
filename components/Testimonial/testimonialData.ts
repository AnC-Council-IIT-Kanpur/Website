import image1 from "./id1.jpg";
import image2 from "./id2.jpg";
import image3 from './id3.jpg'
import image4 from './id4.jpg'
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vishal Himmatsinghka",
    designation: "Y21, Btech-EE department,IIT Knapur",
    image: image1,
    intern: "SD intern at Atlassian",
    content:"Every error like any failure hides a lesson; persist, just never give up",
   } ,
   {
    id: 2,
    name: "Siddhant Singh",
    designation: "Y21,Btech-ME department,IIT Kanpur",
    image: image2,
    intern: "Trading Analyst intern at Axxela",
    content:
      "Grit and perseverance are your greatest allies. Don’t lose them, and you will find a way.",
  },
  {
    id: 3,
    name: "Diptansu",
    designation: "Y21,Btech-CHE department,IIT Kanpur",
    image: image3,
    intern: "Intern at Hindustan Unilever as RnD engineer",
    content:
      "Be calm and composed before and during your interviews. Don’t worry too much and remember plenty of opportunities will be waiting for you.",
  },
  {
    id: 4,
    name: "Siddharth Maurya",
    designation: "Y21,Btech-CHE department,IIT Kanpur",
    image: image4,
    intern: "Strategy and Consulting Associate intern at Accenture",
    content:
      "In the pursuit of excellence, persistence stands as it’s twin sister. Keep your tenacity alive and consistently offer your best effort, for there’s always a greater reward waiting ahead”",
  },
];
