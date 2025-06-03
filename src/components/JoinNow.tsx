import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";

const JoinNow = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 my-12">
      <div className="bg-[#FFF4EA] flex flex-col lg:flex-row items-center justify-between gap-12 p-8 sm:p-12 lg:p-16 rounded-4xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight text-center font-medium">
            Join over 20k students that trust the Pay4Me App
          </h1>
          <div className="mt-8 flex items-center justify-center mx-auto">
            <img
              className="w-[230px] md:w-[300px] h-300px object-contain"
              src="/images/join-now-qr.png"
              alt="QR code to download the app"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto mx-auto">
            <a
              href="https://www.apple.com/app-store/"
              className="py-3 px-6 flex items-center gap-2 bg-[#171717] text-white rounded-full w-full sm:w-auto justify-center hover:bg-[#333] transition-colors"
            >
              <p className="text-sm sm:text-base">Get on iPhone</p>
              <GrAppleAppStore size={20} />
            </a>
            <a
              href="https://play.google.com/store"
              className="py-3 px-6 flex items-center gap-2 bg-[#171717] text-white rounded-full w-full sm:w-auto justify-center hover:bg-[#333] transition-colors"
            >
              <p className="text-sm sm:text-base">Get on Android</p>
              <BiLogoPlayStore size={20} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[500px]">
          <img
            className="w-full h-auto object-contain"
            src="/images/join-now-1.png"
            alt="Students using the app"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
