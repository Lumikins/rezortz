import React from "react";
import { destinations } from "../data";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations
        .concat()
        .sort((a, b) => a.name > b.name)
        .map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
    </section>
  );
};

export default Destinations;
