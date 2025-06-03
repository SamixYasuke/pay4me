import React from "react";

const Pay4MePurpose: React.FC = () => {
  return (
    <section className="px-10 bg-[#02D54A] py-20">
      <div className="text-center mb-8">
        <h2 className="font-medium text-[32px] leading-12 md:leading-14 text-white">
          Why We Created the Pay4Me App?
        </h2>
      </div>

      <div className="relative w-full md:max-w-2xl mx-auto">
        <img
          className="absolute w-[50px] md:w-[60px] -right-6 -top-6 z-30"
          src="/images/Logo-video.png"
          alt="Pay4Me logo decoration"
        />
        <img
          className="absolute w-[50px] md:w-[60px] -left-6 -top-6 z-30"
          src="/images/Star-video.png"
          alt="Top-left star decoration"
        />
        <img
          className="absolute w-[50px] md:w-[60px] -right-6 -bottom-6 z-30"
          src="/images/Star-video.png"
          alt="Bottom-right star decoration"
        />
        <img
          className="absolute w-[50px] md:w-[60px] -left-6 -bottom-6 z-30"
          src="/images/Star-video.png"
          alt="Bottom-left star decoration"
        />

        <div className="relative border-2 border-white rounded-lg overflow-hidden shadow-lg bg-black z-10 h-[400px] md:h-auto">
          <video
            className="w-full h-full object-cover"
            src="/videos/video.mp4"
            controls
            aria-label="Pay4Me App introduction video"
          />
        </div>
      </div>
    </section>
  );
};

export default Pay4MePurpose;
