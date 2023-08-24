import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HeroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <video
        src={HeroVideo}
        title="Man driving with hand outside the vehicle. Video by Harshit Patel on Pexels"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="capitalize">voyage en première classe</h1>
        <h2 className="capitalize pb-4">
          les meilleures destinations dans le monde entier
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              type="text"
              placeholder="Trouvez votre destination"
              className="bg-transparent w-[300px] sm:w-[500px] focus:outline-none"
            />
          </div>
          <div>
            <button className="group">
              <AiOutlineSearch
                size={20}
                className="icon group-hover:scale-125"
                color="white"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
