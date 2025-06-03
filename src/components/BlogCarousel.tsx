import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import BlogContainer from "./BlogContainer";

const BlogCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.5,
          spacing: 10,
        },
      },
      "(max-width: 700px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  const BlogInfos = [
    {
      title: "How to Navigate International Payments without Stress",
      image: "/images/pay4meicon.png",
      link: "/blog/how-to-navigate-international-payments-without-stress",
      bgColor: "#FEF1FF",
    },
    {
      title: "Overcoming Challenges in Foreign Currency Tuition Payments",
      image: "/images/pay4meicon.png",
      link: "/blog/overcoming-challenges-foreign-currency-tuition-payments",
      bgColor: "#EFF8FF",
    },
    {
      title: "Step-by-Step: How to Pay Tuition From Nigeria or Ghana",
      image: "/images/pay4meicon.png",
      link: "/blog/step-by-step-how-to-pay-tuition-from-nigeria-or-ghana",
      bgColor: "#FEF1FF",
    },
    {
      title: "The Future of International Payments: Trends to Watch",
      image: "/images/pay4meicon.png",
      link: "/blog/future-international-payments-trends",
      bgColor: "#EFF8FF",
    },
    {
      title: "How to Choose the Right Payment Method for Your Business",
      image: "/images/pay4meicon.png",
      link: "/blog/choose-right-payment-method-business",
      bgColor: "#FEF1FF",
    },
  ];

  return (
    <section className="my-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-4 md:gap-0 mb-8 px-7 md:px-14">
        <div className="flex justify-between items-center">
          <h4 className="font-normal text-[32px] md:text-[40px] leading-14 text-start md:text-center">
            Latest Blogs & Resources
          </h4>
        </div>
        <div>
          <button
            onClick={() => slider.current?.prev()}
            className="bg-white rounded-lg shadow-md p-3 mr-2 cursor-pointer"
            aria-label="Previous"
          >
            <GrFormPrevious size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="bg-white rounded-lg shadow-md p-3 cursor-pointer"
            aria-label="Next"
          >
            <GrFormNext size={20} />
          </button>
        </div>
      </div>

      <div
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
        className="keen-slider px-2 md:px-14"
      >
        {BlogInfos.map((info, index) => (
          <BlogContainer key={index} {...info} />
        ))}
      </div>
    </section>
  );
};

export default BlogCarousel;
