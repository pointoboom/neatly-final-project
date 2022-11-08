import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import RoomsSearch from "../components/RoomsSearch";
import { Flex, Box, Button } from "@chakra-ui/react";
import React from "react";
import { DatePicker, Select } from "antd";
import useScrollDirection from "../hooks/useScrollDirection";
import "antd/dist/antd.min.css";

import { useState } from "react";

function RoomSearchPage() {
  const scrollDirection = useScrollDirection();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(2);

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
        top={scrollDirection === "down" ? "-24" : "100"}
        transition="all"
        transitionDuration="2s"
        boxShadow="md"
        zIndex="10"
      >
        <Flex direction="column" mr="25px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Check In
          </Flex>
          <Flex direction="row">
            <Flex mr="25px" fontFamily={"Inter"} fontSize="16px">
              <DatePicker
                format="dd,DD MMM YYYY"
                style={{ width: "170px" }}
                onChange={(date, dateString) => setCheckIn(dateString)}
              />
            </Flex>
            <Box>-</Box>
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Check Out
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <DatePicker
              format="dd,DD MMM YYYY"
              style={{ width: "170px" }}
              onChange={(date, dateString) => setCheckOut(dateString)}
            />
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Room&Guests
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <Select
              placeholder={`${room} room,${guest} guests`}
              dropdownRender={(menu) => (
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div>Room</div>
                    <div className=" flex flex-row">
                      <button
                        onClick={() => {
                          if (room === 1) setRoom(1);
                          else setRoom(room - 1);
                        }}
                      >
                        {" "}
                        <img src="./images/Search/minus.svg" alt="" />
                      </button>

                      <div className="mx-[5px]">{room}</div>
                      <button
                        onClick={() => {
                          setRoom(room + 1);
                        }}
                      >
                        <img src="./images/Search/plus.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div>Guest</div>
                    <div className=" flex flex-row">
                      <button
                        onClick={() => {
                          if (guest === 1) setGuest(1);
                          else setGuest(guest - 1);
                        }}
                      >
                        <img src="./images/Search/minus.svg" alt="" />
                      </button>
                      <div className="mx-[5px]">{guest}</div>
                      <button
                        onClick={() => {
                          setGuest(guest + 1);
                        }}
                      >
                        <img src="./images/Search/plus.svg" alt="" />
                      </button>
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
            onClick={() => {
              console.log(checkIn, checkOut);
              console.log(room, guest);
              // navigate("/search");
            }}
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
