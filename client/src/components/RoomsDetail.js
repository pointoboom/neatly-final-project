import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { VStack, StackDivider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function RoomsDetail() {
  const SlideData = [
    {
      image: "./images/RoomsDetail/img1.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
    {
      image: "./images/RoomsDetail/img3.svg",
    },
    {
      image: "./images/RoomsDetail/img1.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
    {
      image: "./images/RoomsDetail/img2.svg",
    },
  ];

  const RoomAmenities = [
    {
      Amenities: "Safe in Room",
    },
    {
      Amenities: "Air Conditioning",
    },
    {
      Amenities: "High speed internet connection",
    },
    {
      Amenities: "Hairdryer",
    },
    {
      Amenities: "Shower",
    },
    {
      Amenities: "Bathroom amenities",
    },
    {
      Amenities: "Lamp",
    },
    {
      Amenities: "Minibar",
    },
    {
      Amenities: "Telephone",
    },
    {
      Amenities: "Ironing board",
    },
    {
      Amenities: "A floor only accessible via a guest room key",
    },
    {
      Amenities: "Alarm clock",
    },
    {
      Amenities: "Bathrobe",
    },
  ];

  return (
    <>
      <Box bg="#F7F7FB">
        <Box w="100%" color="white" pt={85}>
          <Carousel
            infiniteLoop
            showStatus={false}
            centerMode
            interval="8000"
            autoPlay
            // centerSlidePercentage="20"
            // showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute z-10 top-[300px]  left-[200px] "
                >
                  <Image src="./images/About/Prevarrow.svg" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute z-10
                   top-[300px] right-[200px]
                    "
                >
                  <Image src="./images/About/Nextarrow.svg" />
                </button>
              )
            }
          >
            {SlideData.map((slide, index) => {
              return (
                <Image
                  src={slide.image}
                  height="650px"
                  width="800px"
                  objectFit={"cover"}
                  key={index}
                />
              );
            })}
          </Carousel>
        </Box>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          alignItems="center"
          margin="2rem"
          mt={50}
        >
          <Flex direction="column" w="60%">
            <Heading
              fontSize="5xl"
              fontFamily={"Noto Serif Display"}
              fontWeight="500"
            >
              Superior Garden View
            </Heading>

            <Flex direction="row" justify="space-between" mt={10}>
              <Text fontSize="s" fontFamily={"inter"}>
                Rooms (36sqm) with full garden views, 1 single <br />
                bed, bathroom with bathtub & shower.
              </Text>

              <Flex direction="column" justify="center">
                <Text fontSize="sm" as="s" textAlign="end" fontFamily={"Inter"}>
                  THB 3,100.00
                </Text>
                <Heading
                  fontSize="md"
                  textAlign="end"
                  fontFamily={"Inter"}
                  fontWeight="600"
                >
                  THB 2,500.00
                </Heading>
              </Flex>
            </Flex>

            <Flex direction="row" justify="space-between" mt={10} mb={10}>
              <Text
                fontSize="s"
                color="gray.700"
                fontWeight="thin"
                my="1rem"
                fontFamily={"Inter"}
              >
                2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
              </Text>

              <Flex direction="column" justify="center">
                <Button
                  bg="orange.600"
                  color="white"
                  size="lg"
                  fontFamily={"Open Sans"}
                  fontSize="lg"
                  _hover={{ background: "#E76B39" }}
                >
                  Book Now
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" w="60%" mt={5} mb={200}>
            <Heading
              fontSize="2xl"
              fontFamily={"Noto Serif Display"}
              fontWeight="600"
              mb={5}
            >
              Room Amenities
            </Heading>

            <UnorderedList mt={2}>
              <Flex direction="column" h={200} wrap={"wrap"}>
                {RoomAmenities.map((item, index) => {
                  return (
                    <ListItem
                      fontFamily={"Inter"}
                      fontWeight="400"
                      pt={1}
                      w="50%"
                      fontSize="md"
                      color="#646D89 "
                      key={index}
                    >
                      {item.Amenities}
                    </ListItem>
                  );
                })}
              </Flex>
            </UnorderedList>
          </Flex>
        </VStack>

        <Flex align="center" direction="column" bg="#E6EBE9">
          <Heading
            fontSize="4xl"
            fontFamily={"Noto Serif Display"}
            fontWeight="500"
            mt={100}
            mb={50}
          >
            Other Rooms
          </Heading>

          <Flex mb={100}>
            <Flex position="relative">
              <Image
                src="./images/rooms_details/superior.svg"
                alt="Deluxe"
                margin="15px"
                height="350px"
                width="550px"
                objectFit={"cover"}
              ></Image>

              <Flex
                zIndex="popover"
                position="absolute"
                bottom="100px"
                left="80px"
                color="white"
                direction="column"
              >
                <Text fontSize="2.5rem" fontFamily={"Noto Serif Display"}>
                  Deluxe
                </Text>
                <Flex
                  position="relative"
                  left="10px"
                  _hover={{ color: "orange" }}
                >
                  <Text fontSize="1rem" fontFamily={"Open Sans"}>
                    Explore room
                  </Text>
                  <ArrowForwardIcon
                    position="absolute"
                    left="115px"
                    bottom="4px"
                  />
                </Flex>
              </Flex>
            </Flex>

            <Flex position="relative">
              <Image
                src="./images/roomsDetail/suite.svg"
                alt="Deluxe"
                margin="15px"
                height="350px"
                width="550px"
                objectFit={"cover"}
              ></Image>

              <Flex
                zIndex="popover"
                position="absolute"
                bottom="100px"
                left="80px"
                color="white"
                direction="column"
              >
                <Text fontSize="2.5rem" fontFamily={"Noto Serif Display"}>
                  Deluxe
                </Text>
                <Flex
                  position="relative"
                  left="10px"
                  _hover={{ color: "orange" }}
                >
                  <Text fontSize="1rem" fontFamily={"Open Sans"}>
                    Explore room
                  </Text>
                  <ArrowForwardIcon
                    position="absolute"
                    left="115px"
                    bottom="4px"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default RoomsDetail;
