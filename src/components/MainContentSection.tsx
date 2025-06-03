import React from "react";

const MainContentSection: React.FC = () => {
  return (
    <section className="pt-8 sm:pt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pb-12 sm:pb-20 md:pb-28">
      <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-28 max-w-3xl mx-auto text-center">
        <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#171717]">
          Trusted by thousands of students and immigrants across the globe
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <img
              src="/images/Frame1.png"
              alt="Frame1"
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[486px] object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 sm:gap-6">
            <h3 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#171717]">
              Access Fast and Reliable Tuition Payments
            </h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#171717]">
              Pay local and international educational expenses quickly and
              easily — all from the comfort of your home with our secure online
              payment platform.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 sm:gap-6">
            <h3 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#171717]">
              Fast Payments for Your Study Abroad and Relocation Goals
            </h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#171717]">
              We help you achieve your study abroad and relocation goals faster
              by quickly processing payments for credential evaluations,
              immigration, and visa applications.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <img
              src="/images/Frame2.png"
              alt="Frame2"
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[486px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
