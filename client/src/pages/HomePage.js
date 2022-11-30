import React from "react";
import About from "../components/Homepage/About";
import CustomerCarousel from "../components/Homepage/CustomerCarousel";
import SliderImage from "../components/Homepage/SliderImage";
import SearchSection from "../components/Homepage/SearchSection";
import Service from "../components/Homepage/Service";
import RoomsDetails from "../components/Homepage/RoomsDetails";
import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";
import axios from "axios";
import { useEffect, useState } from "react";
import usePersistedState from "use-persisted-state-hook";
import { useHotel } from "../contexts/reservation";

function HomePage() {
  const { getHotelInfo } = useHotel();
  useEffect(() => {
    getHotelInfo();
  }, []);

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
