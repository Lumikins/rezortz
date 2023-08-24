import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const message = () =>
    toast(
      "Site web créé uniquement à des fins de présentation - certains éléments peuvent ne pas fonctionner.\n\nCe service n'existe pas et n'a aucune affiliation avec des services similaires.",
      {
        duration: 10000,
        className:
          "p-3 border bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-md hover:opacity-80 duration-300",
      }
    );

  useEffect(() => {
    setTimeout(() => {
      message();
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Booking />
      <Destinations />
      <Carousel />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
