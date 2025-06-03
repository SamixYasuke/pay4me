import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialText from "./TestimonialText";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const TestimonialCarousel: React.FC = () => {
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

  const TestimonialInfos = [
    {
      image: "https://avatar.iran.liara.run/public/49",
      text: "“The app was very good and I enjoyed using it, receiving and sending money to pay my fees was super easy”",
      name: "Chukwu Joseph",
      position: "Student at Ensign College",
    },
    {
      image: "https://avatar.iran.liara.run/public/50",
      text: "“This app has made my life so much easier, I can now manage my finances with ease.”",
      name: "Jane Doe",
      position: "Student at Tech University",
    },
    {
      image: "https://avatar.iran.liara.run/public/51",
      text: "“I love the user-friendly interface and the quick transaction times!”",
      name: "John Smith",
      position: "Student at Science College",
    },
    {
      image: "https://avatar.iran.liara.run/public/52",
      text: "“A fantastic app that has simplified my financial transactions significantly.”",
      name: "Alice Johnson",
      position: "Student at Arts Academy",
    },
    {
      image: "https://avatar.iran.liara.run/public/53",
      text: "“This app is a game-changer for students, making it easy to handle money matters.”",
      name: "Bob Brown",
      position: "Student at Business School",
    },
  ];

  return (
    <section className="my-24">
      <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-4 md:gap-0 mb-8 px-7 md:px-14">
        <div className="flex justify-between items-center">
          <h4 className="font-normal text-[32px] md:text-[40px] leading-14 text-start md:text-center">
            Hear it from our users
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
        {TestimonialInfos.map((info, index) => (
          <TestimonialText key={index} {...info} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
