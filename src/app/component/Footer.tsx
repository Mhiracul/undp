import { AiFillMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="w-full"
      style={{
        background: `#0C0E16`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full py-10">
        <div className="container w-full mx-auto md:px-0 px-10">
          <div className="">
            <Image
              src="/undp.svg"
              alt=""
              width={100}
              height={100}
              className="hidden lg:block md:block w-10 h-10"
            />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              <div className="flex flex-col w-full text-left gap-4 border-r md:border-[#2e2f2f] border-none">
                <h1 className="font-normal text-2xl">Contact Us</h1>
                <div className="inline-flex items-center gap-4">
                  <BiSolidCheckbox color="#0C51A1" size={20} />
                  <div className="border border-[#0C51A1]  w-20"></div>
                </div>

                <div className="inline-flex gap-4 items-center">
                  <MdLocationPin color="#0C51A1" size={28} />
                  <h4 className="text-sm text-[#939393]">
                    2343 Hoskins Dr, Houston, TX77080
                  </h4>
                </div>
                <div className="inline-flex gap-4 items-center">
                  <AiFillMail color="#0C51A1" size={18} />
                  <h4 className="text-sm text-[#939393]">
                    <a
                      className="text-[#939393]"
                      href="mailto:workreport99@outlook.com?subject=Your%20Subject&body=Your%20Message"
                    >
                      Workreport99@outlook.com
                    </a>
                  </h4>
                </div>
              </div>

              <div className="flex flex-col w-full text-left gap-4 border-r md:border-[#2e2f2f] border-none">
                <h1 className="font-normal text-2xl">Newsletter</h1>
                <div className="inline-flex items-center gap-4">
                  <BiSolidCheckbox color="#0C51A1" size={20} />
                  <div className="border-[0.5px] border-[#0018A8]  w-20"></div>
                </div>

                <div className="">
                  <p className="text-[#939393] text-sm">
                    Sign up for our newsletter to receive updates.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full text-left gap-4">
                <h1 className="font-normal text-2xl">About Us</h1>
                <div className="inline-flex items-center gap-4">
                  <BiSolidCheckbox color="#0C51A1" size={20} />
                  <div className="border border-[#0C51A1]  w-20"></div>
                </div>

                <div>
                  <h4 className="text-sm text-[#939393]">
                    Apply For Grant With Us
                  </h4>
                </div>
                <Link href="/Form">
                  <button className="bg-[#0C51A1] w-1/2 text-white px-4 py-3 rounded-sm">
                    Apply Grant
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2e2f2f] w-full mt-8">
          <p className="text-sm text-center text-[#939393] mt-3">
            &copy; {new Date().getFullYear()} undp.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
