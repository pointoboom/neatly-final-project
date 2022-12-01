import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import RoomsSearch from "../components/RoomsSearch";
import { Flex, Box, Button } from "@chakra-ui/react";
import React from "react";
import { DatePicker, Select } from "antd";
import useScrollDirection from "../hooks/useScrollDirection";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";

import { useHotel } from "../contexts/reservation";
import moment from "moment";
const dateFormat = "dd,DD MMM YYYY";

function RoomSearchPage() {
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();
  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guest,
    setGuest,
    getData,
  } = useHotel();

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
                defaultValue={checkIn ? moment(checkIn, dateFormat) : ""}
                disabledDate={(current) => {
                  let customDate = moment().format("YYYY-MM-DD");
                  return current && current < moment(customDate, "YYYY-MM-DD");
                }}
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
              defaultValue={checkOut ? moment(checkOut, dateFormat) : ""}
              disabledDate={(current) => {
                let customDate = moment().format("YYYY-MM-DD");
                return current && current < moment(customDate, "YYYY-MM-DD");
              }}
            />
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Room&Guests
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <Select
              placeholder={`${guest} guests`}
              dropdownRender={(menu) => (
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div className=" mr-[5px]">Guest</div>
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
              getData();
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
