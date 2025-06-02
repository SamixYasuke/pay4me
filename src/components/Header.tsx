import { FaChevronDown } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import MobileMenuBtn from "./MobileMenuBtn";

const Header = () => {
  return (
    <header className="bg-white w-full flex justify-center items-center mt-5 lg:mt-0">
      <div className="w-full lg:w-auto flex items-center justify-around lg:justify-between lg:gap-4 py-4 px-6 lg:px-8">
        <div className="flex items-center w-full lg:w-auto">
          <a className="shadow-gray-200 shadow-lg rounded-xl bg-white" href="/">
            <img
              className="w-16 md:w-20"
              src="/images/pay4meicon.png"
              alt="Pay for me icon"
            />
          </a>
        </div>
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-16 px-5 text-black text-[16px] font-normal leading-6 shadow-gray-200 shadow-lg py-4 rounded-xl bg-white">
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
          <li>
            <a
              className="flex items-center gap-1 bg-black hover:bg-white transition duration-300 text-white hover:text-black hover:shadow-gray-100 hover:shadow-md px-4 py-2 md:px-6 md:py-3 rounded-4xl"
              href="/download"
              target="_blank"
            >
              <p>Download Pay4Me</p>
              <FaChevronDown
                size={15}
                className="animate-bounce transition-transform duration-500"
              />
            </a>
          </li>
        </ul>
        <MobileMenuBtn />
      </div>
    </header>
  );
};

export default Header;
