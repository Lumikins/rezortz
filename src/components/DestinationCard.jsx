import React from "react";
import { LiaSadCrySolid } from "react-icons/lia";

const DestinationCard = ({ destination }) => {
  return (
    <div className="relative w-full h-[300px] group">
      <img
        loading="lazy"
        src={destination.link}
        alt={destination.alt}
        title={destination.alt}
        className="h-full w-full object-cover group-hover:opacity-80 duration-300"
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/20 group-hover:cursor-pointer">
        <p className="text-white text-xl font-bold absolute top-2 left-2">
          {destination.name}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
