import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
function SearchSection() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bgImage="url('/images/hero_section.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      py="450px"
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
          >
            Search
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SearchSection;
