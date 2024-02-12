// path-to-your-assets/cardsData.ts
import { AiFillStar } from "react-icons/ai";
import Card from "../../../public/test2.jpeg";
import Paul from "../../../public/test.jpeg";
import Samwize from "../../../public/test3.jpeg";

const cardsData = [
  {
    id: 1,
    name: "William Cole",
    title: "Residential appraiser",
    image: Paul,
    testimonial:
      "“I highly recommend UNDP Grant to anyone seeking grant assistance for their projects. Their expertise and dedication in navigating the grant landscape are unparalleled.”",
    backgroundColor: "bg-[#052087]",
  },
  {
    id: 2,
    name: "Thomas Westwood",
    title: "Commercial Property Manager",
    image: Card,
    testimonial:
      "“UNDP Grant is the go-to choice for anyone seeking grant assistance. Their dedication and expertise in securing funding for projects are unmatched. I couldn't be happier with their service.”",

    backgroundColor: "bg-[#868686]",
  },
  {
    id: 3,
    name: "Terry Johnson",
    title: "Project Developer",
    image: Samwize,
    testimonial:
      "“For anyone seeking grant assistance, UNDP Grant is the ultimate solution. Their unmatched expertise and dedication ensure success in navigating the complex world of grants.”",

    backgroundColor: "bg-[#052087]",
  },
  // Add more objects for additional clients
];

export default cardsData;
