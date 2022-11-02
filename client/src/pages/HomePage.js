import React from "react";
import About from "../components/About";
import CustomerCarousel from "../components/CustomerCarousel";
import SliderImage from "../components/SliderImage";
import SearchSection from "../components/SearchSection";

function HomePage() {
  return (
    <>
      {/* // kwan navbar  */}
      <SearchSection />
      <About />
      <SliderImage />
      {/* // nan service  */}
      {/* // boy room */}
      <CustomerCarousel />
      {/* // kwan footer */}
    </>
  );
}

export default HomePage;
