import React from "react";
import About from "../components/About";
import CustomerCarousel from "../components/CustomerCarousel";
import SliderImage from "../components/SliderImage";
import SearchSection from "../components/SearchSection";
import Service from "../components/Service";
import RoomsDetails from "../components/RoomsDetails";
import Footerbar from "../components/Footerbar";

function HomePage() {
  return (
    <>
      {/* // kwan navbar  */}
      <SearchSection />
      <About />
      <SliderImage />
      {/* // nan service  */}
      <Service />
      {/* // boy room */}
      <RoomsDetails />

      <CustomerCarousel />
      {/* // nan footer */}
      <Footerbar/>
    </>
  );
}

export default HomePage;
