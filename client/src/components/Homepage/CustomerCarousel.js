import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Center, Text, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";
import { Avatar } from "antd";

const SlideData = [
  {
    topic: "Our Customer Says",
    comment:
      "The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone.",
    customername: "Jisoo, BlackPink®",
    image:
      "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669784437/slidedata/20518952_zofhwb.jpg",
  },
  {
    topic: "Our Customer Says",
    comment:
      "They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The service was exceptional as well. Would definitely send a friend there.",
    customername: "Rose , BlackPink®",
    image:
      "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669784442/slidedata/com.RoseBlackpinkWallpaper.adnapps-645da9a8-d70a-4ae9-a6fe-adea30bbfdc0_i2xxsh.jpg",
  },
  {
    topic: "Our Customer Says",
    comment:
      "I had a wonderful experience at Neatly. Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!",
    customername: "Lisa , BlackPink®",
    image:
      "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669784439/slidedata/HD-wallpaper-lisa-blackpink-blackpink-kpop-lalisa-lisa-thumbnail_xpztud.jpg",
  },
];

function CustomerCarousel() {
  const [slides, useSlides] = useState([...SlideData]);
  return (
    <Flex justify="center" bg="#E6EBE9">
      <Box w="80%">
        <Box w="100%" pb="150">
          <Carousel
            style={{ position: "relative", zIndex: "1" }}
            interval="8000"
            autoPlay
            infiniteLoop
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <button
                  onClick={clickHandler}
                  style={{
                    position: "absolute",
                    zIndex: "2",
                    left: "30px",
                    top: "300px",
                  }}
                >
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                    }}
                    src="images/CustomerCarousel/arrow.svg"
                  />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <button
                  onClick={clickHandler}
                  style={{
                    position: "absolute",
                    zIndex: "2",
                    right: "25px",
                    bottom: "269px",
                  }}
                >
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                    }}
                    src="images/CustomerCarousel/right-arrow.svg"
                  />
                </button>
              )
            }
            renderThumbs={() => null}
          >
            {slides.map((slide, index) => {
              return (
                <Box
                  w="100%"
                  h="100%"
                  key={index}
                >
                  <Heading
                    as="h1"
                    pt="125"
                    w="100%"
                    fontSize="60px"
                    fontWeight="500"
                    fontFamily={"Noto Serif Display"}
                    color="#2F3E35"
                  >
                    {slide.topic}
                  </Heading>
                  <Center bg="#E6EBE9">
                    <Text
                      pt="125"
                      pb="50"
                      w="60%"
                      h="300px"
                      fontSize="20px"
                      fontWeight="600"
                      fontFamily={"Inter"}
                      color="#465C50"
                    >
                      {" "}
                      {slide.comment}
                    </Text>
                  </Center>

                  <Flex justify="center" w="100%" pt="55" pb="50">
                    <Box boxSize="32px">
                      <Avatar src={slide.image} />
                    </Box>
                    <Text
                      pl="5"
                      fontSize="20px"
                      fontWeight="400"
                      fontFamily={"Inter"}
                      color="#9AA1B9"
                    >
                      {slide.customername}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </Carousel>

        </Box>
      </Box>
    </Flex>
  );
}

export default CustomerCarousel;

