import React from "react";

interface TestimonialTextProps {
  image: string;
  text: string;
  name: string;
  position: string;
}

const TestimonialText: React.FC<TestimonialTextProps> = ({
  image,
  text,
  name,
  position,
}) => {
  return (
    <div className="keen-slider__slide bg-[#FBFBFB] p-8 flex flex-col justify-between items-baseline rounded-4xl h-[500px] w-[486px]">
      <div>
        <img className="w-[80px]" src={image} alt="Image Placeholder" />
      </div>
      <div>
        <p className="text-xl md:text-2xl leading-10 font-medium">{text}</p>
      </div>
      <div>
        <p className="text-[20px] font-bold leading-8">{name}</p>
        <p className="text-[16px] font-normal leading-6">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialText;
