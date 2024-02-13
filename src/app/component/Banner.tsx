"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../api/Motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className="relative font-sans bg-cover bg-center h-[80vh] md:h-[100vh] flex items-center w-full"
        style={{
          background:
            "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/happy.svg') lightgray",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", // Change this to "contain"
          width: "100%",
        }}
      >
        <div className="container mx-auto md:px-10 px-10">
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="font-Montserrat relative flex items-center font-bold text-primary text-[36px] md:text-[56px] md:leading-[63px] leading-[40px]"
          >
            Empowering Communities <br className="sm:flex hidden" /> Through
            Grants
          </motion.h2>
          <motion.h2
            className=" font-Montserrat font-medium text-[16px] text-black text-md mt-5"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            <h1 className="font-bold text-base">
              The UNDP have got Good news.
            </h1>
            <h1 className="gap-2">
              <h1> Get your Grant processed as soon as possible with the</h1>
              <Link href="https://ID.me">
                {" "}
                <h1 className="text-2xl text-[#202C3B] hover:text-[#2d4b70] underline">
                  ID
                  <span className="relative -top-0 -left-1  text-[#2DC064]">
                    .
                  </span>
                  <span className="font-semibold  relative top-0 -left-1 italic text-xl text-[#222F3F] hover:text-[#2d4b70] dancingScript">
                    me
                  </span>
                </h1>
              </Link>
            </h1>
            <br className="sm:flex hidden" />
            Secure,safe and fast Identity verification{" "}
          </motion.h2>
          <button className="bg-[#0C51A1] hover:bg-[#35659b] px-10 py-3 rounded-md text-white font-Montserrat text-lg mt-10">
            <Link href="/Form">Apply for Grants</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
