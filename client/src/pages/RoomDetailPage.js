import React from "react";
import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import RoomsDetail from "../components/RoomsDetail";

function RoomDetailPage() {
  return (
    <>
      <Navbar />
      <RoomsDetail />
      <Footerbar/>
    </>
  );
}

export default RoomDetailPage;
