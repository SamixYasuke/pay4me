import { GrAppleAppStore } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <main className="mt-8 md:mt-14 px-6 lg:px-8 mb-10">
      <div className="mb-8 md:mb-10 text-center max-w-[582px] lg:max-w-[786px] mx-auto">
        <h1 className="font-medium text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
          Effortless International Payments for <TypingEffect /> with{" "}
          <span className="text-[#7AC52D]">Pay4Me</span>
        </h1>
        <p className="text-base sm:text-lg max-w-[700px] md:text-xl leading-relaxed text-[#171717] pt-4 md:pt-6 pb-2 mx-auto">
          The quickest and simplest way to pay tuition and fees to schools,
          businesses, and government agencies worldwide.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <a
          href="https://www.apple.com/app-store/"
          className="py-3 px-2 sm:px-8 flex items-center gap-2 bg-[#171717] text-white rounded-full w-full sm:w-auto text-center justify-center hover:bg-[#333] transition-colors"
        >
          <p className="text-sm sm:text-base">Get on iPhone</p>
          <GrAppleAppStore size={20} className="sm:h-6 sm:w-6" />
        </a>
        <a
          href="https://play.google.com/store"
          className="py-3 px-2 sm:px-8 flex items-center gap-2 bg-[#171717] text-white rounded-full w-full sm:w-auto text-center justify-center hover:bg-[#333] transition-colors"
        >
          <p className="text-sm sm:text-base">Get on Android</p>
          <BiLogoPlayStore size={20} className="sm:h-6 sm:w-6" />
        </a>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-10">
        <img
          className="object-contain w-full max-w-[90vw] md:max-w-[700px]"
          src="/images/Map.png"
          alt="Map"
        />
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-10">
        <img
          className="w-full max-w-[160px] sm:max-w-[194px] object-contain"
          src="/images/Techstars.png"
          alt="Techstars"
        />
      </div>
    </main>
  );
};

export default HeroSection;
