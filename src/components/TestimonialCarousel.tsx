import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TestimonialCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div className="relative my-32">
      {/* Navigation Buttons */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Previous"
      >
        &#8592;
      </button>

      <div
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
        className="keen-slider"
      >
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>

      <button
        onClick={() => slider.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};

export default TestimonialCarousel;
