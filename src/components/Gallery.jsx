import React from "react";
import { resorts } from "../data";

const Gallery = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4 text-center capitalize">
      <h1>Villages de vacances tout compris</h1>
      <p className="py-4">qui n&apos;attendent que vous</p>
      {/* photo gallery grid */}
      <div className="grid grid-rows-none md:grid-cols-5 py-2 gap-2 md:gap-4">
        {resorts.map((resort) => (
          <img
            key={resort.id}
            src={resort.link}
            alt={resort.alt}
            className={`${resort.class} first-of-type:col-span-2 first-of-type:md:col-span-3 first-of-type:row-span-2 hover:opacity-80 hover:cursor-pointer duration-300`}
            loading="lazy"
            title={resort.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
