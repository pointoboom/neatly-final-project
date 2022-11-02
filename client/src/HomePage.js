import React from "react";
import About from "./components/About";
import CustomerCarousel from "./components/CustomerCarousel";
import SliderImage from "./components/SliderImage";

function HomePage() {
  return (
    <>
      {/* // kwan navbar  */}
      {/* // nan boom search  */}
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
