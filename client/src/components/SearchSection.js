import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.min.css";

import { useHotel } from "../contexts/hotel";
import moment from "moment";
const dateFormat = "dd,DD MMM YYYY";

function SearchSection() {
  const navigate = useNavigate();
  const { search, getCheckIn, getCheckOut, getRoom, getGuest } = useHotel();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bgImage="url('/images/hero_section.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      py="250px"
    >
      <Flex direction="column" justify="center" align="center" mb="90px">
        <Text
          fontFamily={"Noto Serif Display"}
          fontSize="70px"
          fontWeight="400px"
          color="white"
        >
          A Best Place for Your
        </Text>
        <Text
          fontFamily={"Noto Serif Display"}
          fontSize="70px"
          fontWeight="400px"
          color="white"
        >
          Neatly Experience
        </Text>
      </Flex>
      <Flex
        borderRadius="5px"
        py="40px"
        px="120px"
        background="white"
        direction="row"
        justify="center"
        align="center"
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
                onChange={(date, dateString) => getCheckIn(dateString)}
                defaultValue={
                  search.checkIn ? moment(search.checkIn, dateFormat) : ""
                }
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
              onChange={(date, dateString) => getCheckOut(dateString)}
              defaultValue={
                search.checkOut ? moment(search.checkOut, dateFormat) : ""
              }
            />
          </Flex>
        </Flex>
        <Flex direction="column" mr="50px">
          <Flex fontFamily={"Inter"} fontSize="16px">
            Room&Guests
          </Flex>
          <Flex fontFamily={"Inter"} fontSize="16px">
            <Select
              placeholder={`${search.room} room,${search.guest} guests`}
              dropdownRender={(menu) => (
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-between px-[5px]">
                    <div>Room</div>
                    <div className=" flex flex-row">
                      <button
                        onClick={() => {
                          if (search.room === 1) getRoom(1);
                          else getRoom(search.room - 1);
                        }}
                      >
                        {" "}
                        <img src="./images/Search/minus.svg" alt="" />
                      </button>

                      <div className="mx-[5px]">{search.room}</div>
                      <button
                        onClick={() => {
                          getRoom(search.room + 1);
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
                          if (search.guest === 1) getGuest(1);
                          else getGuest(search.guest - 1);
                        }}
                      >
                        <img src="./images/Search/minus.svg" alt="" />
                      </button>
                      <div className="mx-[5px]">{search.guest}</div>
                      <button
                        onClick={() => {
                          getGuest(search.guest + 1);
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
              navigate("/search");
            }}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SearchSection;
