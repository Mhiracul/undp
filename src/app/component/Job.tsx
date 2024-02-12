import React from "react";
import TypeWriter from "../api/TypeWriter";
import Image from "next/image";
import Link from "next/link";

const Job = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className="py-20">
        <div
          className="relative font-sans bg-cover bg-center h-full md:h-[60vh]  flex items-center w-full"
          style={{
            background: "url('/newsletter1.svg') lightgray",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="container mx-auto md:px-20 px-10 py-20">
            <h1 className=" text-white text-xl mb-6 font-bold text-center">
              <TypeWriter text="Join Our Team: Exciting Job Opportunities Await!" />
            </h1>
            <p className=" text-[#fff] font-medium">
              The UNDP in cooperation with elite coast group are Urgently
              looking for a part time virtual personal assistant. This is a
              remote job that will only take few hours of your day, 3 to 4 hours
              daily job and the duties would include:
            </p>
            <ul className="text-sm text-[#fff] flex flex-col gap-2">
              <li>
                • Review, evaluate and distribute all incoming and outgoing
                mail;
              </li>
              <li>
                • Interact with financial institutions with respect to making
                deposits and clients satisfaction;
              </li>
              <li>
                • Maintain a high level of confidentiality in all interactions;
              </li>
              <li>• Going to store once in a while when required etc;</li>
              <li>
                • Assist in recruitment as required  Very low stress job with no
                prior experience needed. Experience in Personal Assistant is a
                plus but not required as this is a home based office work only
                available for people currently in the USA only PAY : $2100 every
                21 days The company is not requesting for any money from you but
                only need your 100% honest and faithfulness ..
              </li>
            </ul>
            <div className="flex flex-col items-center mt-6">
              <button className="bg-[#2a8dff] text-white rounded px-3 py-3 mt-4 ">
                <Link href="/Employment">Apply Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
