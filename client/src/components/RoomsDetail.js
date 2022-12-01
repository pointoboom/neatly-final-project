import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { VStack, StackDivider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RoomsDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [randomRoom, setRandomRoom] = useState(null);
  const [slideData, setSlideData] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const getData = async () => {
    const results = await axios(
      `http://localhost:4000/rooms/room-detail/${params.roomId}?random=2`
    );


    setSlideData([
      ...slideData,
      results.data.data.main_images,
      ...results.data.data.gallery_images,
    ]);
    setRoom(results.data.data);
    setRandomRoom(results.data.randomRoom);
    setAmenities([...amenities, ...results.data.data.amenity.split(",")]);
  };


  useEffect(() => {
    getData();
  }, []);

  const RoomAmenities = [
    "Safe in Room",
    "Air Conditioning",
    "High speed internet connection",
    "Hairdryer",
    "Shower",
    "Bathroom amenities",
    "Lamp",
    "Minibar",
    "Telephone",
    "Ironing board",
    "A floor only accessible via a guest room key",
    "Alarm clock",
    "Bathrobe",
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
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute z-10 top-[300px]  left-[200px] "
                >
                  <Image src="/images/About/Prevarrow.svg" />
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
                  <Image src="/images/About/Nextarrow.svg" />
                </button>
              )
            }
          >
            {slideData.length !== 0 &&
              slideData.map((slide, index) => {
                return (
                  <Image
                    src={slide}
                    height="650px"
                    width="800px"
                    objectFit={"cover"}
                    key={index}
                  />
                );
              })}
          </Carousel>
        </Box>

        {room !== null && (
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
                {room.type_name}
              </Heading>

              <Flex direction="row" justify="space-between" mt={10}>
                <Text fontSize="s" fontFamily={"inter"}>
                  {room.description}
                </Text>

                <Flex direction="column" justify="center">
                  <Text
                    fontSize="sm"
                    as="s"
                    textAlign="end"
                    fontFamily={"Inter"}
                  >
                    THB{" "}
                    {room.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                  <Heading
                    fontSize="md"
                    textAlign="end"
                    fontFamily={"Inter"}
                    fontWeight="600"
                  >
                    THB{" "}
                    {room.promotion_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                  {room.guest} Guests&ensp;|&ensp; {room.no_of_bed} Double
                  bed&ensp;|&ensp; {room.room_size}
                </Text>

                <Flex direction="column" justify="center">
                  <Button
                    bg="orange.600"
                    color="white"
                    size="lg"
                    fontFamily={"Open Sans"}
                    fontSize="lg"
                    _hover={{ background: "#E76B39" }}
                    onClick={() => {
                      navigate(`/search`);
                      // navigate(`/reservation/${room.room_types_id}`);
                    }}
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
                  {amenities.map((item, index) => {
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
                        {item}
                      </ListItem>
                    );
                  })}
                </Flex>
              </UnorderedList>
            </Flex>
          </VStack>
        )}

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
            {randomRoom !== null &&
              randomRoom.map((item) => {
                return (
                  <Flex position="relative" key={item.room_types_id}>
                    <Image
                      src={item.main_images}
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
                        {item.type_name}
                      </Text>
                      <Flex
                        position="relative"
                        left="10px"
                        _hover={{ color: "orange" }}
                        cursor="pointer"
                        onClick={() => {
                          console.log(item.room_types_id);
                          navigate(`/room-detail/${item.room_types_id}`);
                        }}
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
                );
              })}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default RoomsDetail;
