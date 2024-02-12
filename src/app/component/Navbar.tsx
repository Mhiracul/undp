"use client";
import React, { useState } from "react";
import Logo from "../../../public/undp.svg";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setMobileMenuOpen(false);
  };

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="bg-white w-full shadow-md shadow-[#878787]">
      <div className=" container  mx-auto md:px-10 px-10 w-full py-2 flex items-center flex-row justify-between ">
        <div className=" ">
          <Image src={Logo} alt="logo" className="w-[40px] h-14" />
        </div>
        <div className="block md:hidden">
          <h1 className="text-black">+(713) 364-4066</h1>
        </div>

        <div className="inline-flex items-center gap-2">
          <FaPhone color="#000" size={12} />
          <h1 className="text-black text-sm">+(713) 364-4066</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
