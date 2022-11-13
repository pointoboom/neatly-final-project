import React from "react";
import About from "../components/Homepage/About";
import CustomerCarousel from "../components/Homepage/CustomerCarousel";
import SliderImage from "../components/Homepage/SliderImage";
import SearchSection from "../components/Homepage/SearchSection";
import Service from "../components/Homepage/Service";
import RoomsDetails from "../components/Homepage/RoomsDetails";
import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <SearchSection />
      <About />
      <SliderImage />
      <Service />
      <RoomsDetails />
      <CustomerCarousel />
      <Footerbar />
    </>
  );
}

export default HomePage;
