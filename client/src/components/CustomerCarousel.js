import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Center, Text, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";

const SlideData = [
  {
    topic: "Our Customer Says",
    comment:
      "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt.",
    customername: "Katherine, Company®",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    topic: "Our Customer Says2",
    comment:
      "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt.",
    customername: "Katherine, Company®",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    topic: "Our Customer Says3",
    comment:
      "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt.",
    customername: "Katherine, Company®",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
];

function CustomerCarousel() {
  const [slides, useSlides] = useState([...SlideData]);
  // const [hasNext, setHasNext] = React.useState(true);
  // const [hasPrev, setHasPrev] = React.useState(true);
  // const [labelPrev] = React.useState("PREVIOUS");
  // const [labelNext] = React.useState("NEXT");

  // const clickHandler = () => {
  //   console.log("clickHandlerCalled");
  // };
  return (
    <Flex justify="center" bg="#E6EBE9">
      {/* <img src="images/CustomerCarousel/right-arrow.svg" />
      <img src="images/arrow.svg" /> */}
      <Box w="80%">
        <Box w="100%" pb="150">
          <Carousel
            style={{ position: "relative", zIndex: "1" }}
            interval="8000"
            autoPlay
            infiniteLoop
            //   centerMode="true"
            //   mx="auto"
            showStatus={false}
            ////////
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
                  // bg="blue"
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
                  <Center>
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
                      <Image
                        src={slide.image}
                        alt="customerImage"
                        borderRadius="full"
                      />
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

          {/* 
          <Carousel
            interval="1000"
            autoPlay
            infiniteLoop
            //   centerMode="true"
            //   mx="auto"
            showStatus={false}
          >
            {SlideData.map((slide) => {
              return <Image src={slide.image} height="auto" width="800px" />;
            })}
          </Carousel> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default CustomerCarousel;

// import React from "react";
// import { Box } from "@chakra-ui/react";

// import { Image } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// export const SlideData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
//   },
// ];

// function TestCompoent() {
//   return (
//     <Box w="100%" p={4} color="white">
//       <Carousel infiniteLoop>
//         {SlideData.map((slide) => {
//           return <Image src={slide.image} height="auto" width="800px" />;
//         })}
//       </Carousel>
//     </Box>
//   );
// }

// export default TestCompoent;
