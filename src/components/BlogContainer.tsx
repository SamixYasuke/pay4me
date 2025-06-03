import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IBlogContainerProps {
  title: string;
  image: string;
  link: string;
  bgColor: string;
}

const BlogContainer: React.FC<IBlogContainerProps> = ({
  title,
  image,
  link,
  bgColor,
}) => {
  return (
    <div
      className={`keen-slider__slide bg-[${bgColor}] p-8 flex flex-col justify-between items-baseline rounded-4xl h-[500px] w-[486px]`}
    >
      <div>
        <img className="w-[80px]" src={image} alt="Image Placeholder" />
      </div>
      <div>
        <p className="text-xl md:text-2xl leading-10 font-medium">{title}</p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <a
          className="bg-white flex items-center justify-between gap-2.5 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full"
          href={link}
        >
          <p>Read Article</p>
          <FaExternalLinkAlt size={15} />
        </a>
      </div>
    </div>
  );
};

export default BlogContainer;
