"use client";
import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardsData from "../api/Cards";
import Image from "next/image";

interface Card {
  id: number;
  image: string;
  name: string;
  title: string;
  testimonial: string;
  star: JSX.Element;
}

const Testimonials: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial" className="bg-[#f6f6f6]">
      <div className="py-16 ">
        <div className="px-10  py-10">
          <h1 className="text-3xl font-extrabold text-black text-center">
            OUR TESTIMONIALS
          </h1>

          <Slider {...settings}>
            {cardsData.map((cards) => (
              <div key={cards.id} className="px-2 ">
                <div className={` rounded-lg shadow-lg  p-6 flex-col py-10`}>
                  <Image src={cards.image} alt="" className="h-40" />
                  <h1 className="text-black text-center mt-3 font-medium">
                    {cards.name}
                  </h1>
                  <p className="text-black text-sm mt-3">{cards.testimonial}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: ResponsiveSettings[];
}

interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
  };
}
