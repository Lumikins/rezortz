import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { destinations } from "../data";

const Carousel = () => {
  // slide logic - if shown slide is the last one in the array, clicking the buttons will start the slide from the start
  const [slide, setSlide] = useState(1);
  const length = destinations.length;

  const prevSlide = () => {
    setSlide(slide === 1 ? length : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length ? 1 : slide + 1);
  };
  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4 relative flex justify-center items-center">
      <BsArrowLeftCircle
        onClick={prevSlide}
        className="absolute top-[45%] cursor-pointer text-3xl md:text-5xl lg:text-6xl text-white left-8"
      />
      <BsArrowRightCircle
        onClick={nextSlide}
        className="absolute top-[45%] cursor-pointer text-3xl md:text-5xl lg:text-6xl text-white right-8"
      />
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className={destination.id === slide ? "opacity-100" : "opacity-0"}
        >
          {destination.id === slide && (
            <img
              loading="lazy"
              src={destination.link}
              alt={destination.alt}
              className="w-screen h-[500px] object-cover rounded-md"
              title={destination.alt}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carousel;
