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
      <Flex
        borderRadius="5px"
        py="40px"
        px="120px"
        background="white"
        direction="row"
        justify="center"
        align="center"
        position="sticky"
        top="100"
        boxShadow="md"
        zIndex="10"
      >
        <Flex direction="column" mr="25px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Check In
          </Flex>
          <Flex direction="row">
            <Flex mr="25px" fontFamily={"Inter"} fontSize="16px">
              <DatePicker format="dd,DD MMM YYYY" style={{ width: "170px" }} />
            </Flex>
            <Box>-</Box>
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Check Out
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <DatePicker format="dd,DD MMM YYYY" style={{ width: "170px" }} />
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Room&Guests
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <Select
              placeholder="1 room,2 guests"
              dropdownRender={(menu) => (
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div>Room</div>
                    <div className=" flex flex-row">
                      <img src="./images/Search/minus.svg" alt="" />
                      <div className="mx-[5px]">1</div>
                      <img src="./images/Search/plus.svg" alt="" />
                    </div>
                  </div>
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div>Guest</div>
                    <div className=" flex flex-row">
                      <img src="./images/Search/minus.svg" alt="" />
                      <div className="mx-[5px]">2</div>
                      <img src="./images/Search/plus.svg" alt="" />
                    </div>
                  </div>
                </div>
              )}
            />
          </Flex>
        </Flex>
        <Box mt="20px">
          <Button
            background="orange.600"
            color="white"
            px="40px"
            fontFamily={"Inter"}
            _hover={{ background: "#E76B39" }}
          >
            Search
          </Button>
        </Box>
      </Flex>
      <RoomsSearch />
      <Footerbar />
    </>
  );
}

export default RoomSearchPage;
