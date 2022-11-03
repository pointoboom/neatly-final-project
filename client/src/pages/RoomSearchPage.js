import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import RoomsSearch from "../components/RoomsSearch";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";

function RoomSearchPage() {
  return (
    <>
      <Navbar />
      <RoomsSearch />
      <Footerbar />
    </>
  );
}

export default RoomSearchPage;
