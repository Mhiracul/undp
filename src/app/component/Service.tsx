import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";

const Service = () => {
  return (
    <div className="h-full w-full bg-white text-black">
      <div className="container mx-auto py-20 lg:px-20 md:px-6 px-10">
        <div className="flex flex-col items-center gap-4">
          <h2>Awesome Feature</h2>
          <h1 className="text-3xl font-extrabold">How You Could Help</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20">
          <div className="bg-[#EFF2F0] py-10 px-8 shadow-lg">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <BsFillLightbulbFill size={28} color="#0C51A1" />
                <h1 className="text-black font-bold text-xl">
                  Apply for Grants
                </h1>
              </div>

              <p className="text-[#6C6C6C] text-sm">
                Discover funding opportunities and apply for grants to support
                your projects.
              </p>
            </div>
          </div>
          <div className="bg-[#EFF2F0] py-10 px-8 shadow-lg">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <BsFillLightbulbFill size={28} color="#0C51A1" />
                <h1 className="text-black font-bold text-xl">
                  Grant Consultation
                </h1>
              </div>

              <p className="text-[#6C6C6C] text-sm">
                Get expert advice and guidance on navigating the grant
                landscape.
              </p>
            </div>
          </div>

          <div className="bg-[#EFF2F0] py-10 px-8 shadow-lg">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <BsFillLightbulbFill size={28} color="#0C51A1" />
                <h1 className="text-black font-bold text-xl">
                  Grant Management
                </h1>
              </div>

              <p className="text-[#6C6C6C] text-sm">
                Receive support in managing and reporting on grant-funded
                projects.
              </p>
            </div>
          </div>

          <div className="bg-[#EFF2F0] py-10 px-8 shadow-lg">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <FaPiggyBank size={28} color="#0C51A1" />
                <h1 className="text-black font-bold text-xl">
                  Fundraising Strategies
                </h1>
              </div>

              <p className="text-[#6C6C6C] text-sm">
                Explore innovative fundraising strategies to supplement grant
                funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
