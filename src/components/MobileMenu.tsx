import type React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import * as motion from "motion/react-client";
import { useEffect } from "react";

interface MobileMenuProps {
  toggleMenu?: () => void;
  menuIsOpen?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMenu, menuIsOpen }) => {
  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuIsOpen]);

  return (
    <>
      {menuIsOpen && (
        <motion.menu
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white fixed top-0 left-0 w-full h-dvh"
        >
          <header className="w-full lg:w-auto flex items-center justify-around lg:justify-between lg:gap-4 py-4 px-6 lg:px-8">
            <div className="flex items-center w-full lg:w-auto">
              <a
                className="shadow-gray-200 shadow-lg rounded-xl bg-white"
                href="/"
              >
                <img
                  className="w-16 md:w-20"
                  src="/images/pay4meicon.png"
                  alt="Pay for me icon"
                />
              </a>
            </div>
            <div
              onClick={toggleMenu}
              className="flex lg:hidden items-center shadow-gray-200 shadow-lg rounded-xl bg-white p-2.5 cursor-pointer"
            >
              <div className="bg-black text-white rounded-xl p-2 md:p-3 lg:p-4">
                <MdClose size={27} />
              </div>
            </div>
          </header>
          <ul className="flex lg:hidden flex-col justify-center items-start gap-10 px-5 text-black text-[18px] font-normal leading-6 bg-white mt-10 p-4">
            <li>
              <a className="flex items-center gap-1" href="/">
                <PiStarFourFill size={15} />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li className="relative">
              <button className="flex items-center gap-1 bg-black hover:bg-white transition duration-300 text-white hover:text-black hover:shadow-gray-100 hover:shadow-md py-3 px-8 md:px-6 md:py-3 rounded-4xl">
                <p>Download Pay4Me</p>
                <FaChevronDown size={15} />
              </button>
              <div className="absolute top-full left-0 w-full bg-white mt-2 flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-4 w-full z-10">
                  <a href="/apple.com" className="flex items-center gap-2">
                    <p>Get On Iphone</p>
                    <GrAppleAppStore size={20} className="sm:h-6 sm:w-6" />
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-4 w-full z-10">
                  <a href="/android.com" className="flex items-center gap-2">
                    <p>Get On Android</p>
                    <BiLogoPlayStore size={20} className="sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </motion.menu>
      )}
    </>
  );
};

export default MobileMenu;
