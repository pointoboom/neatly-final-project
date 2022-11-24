import { Button, Text } from "@chakra-ui/react";
import { Flex, Image } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHotel } from "../contexts/reservation";

function RoomsSearch() {
  const navigate = useNavigate();
  const { roomDetails, getData, guest } = useHotel();
  useEffect(() => {
    getData();
  }, []);

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      alignItems="center"
      margin="2rem"
    >
      {roomDetails.map((data) => {
        return (
          <Flex>
            <Flex>
              <Image
                w="350px"
                h="200px"
                objectFit="cover"
                src={data.main_image_url}
                mr="50px"
              />
            </Flex>
            <Flex direction="column" justify="center" ml="1rem" mb="2rem">
              <Heading fontSize="2xl" fontFamily={"Inter"}>
                {data.type_name}
              </Heading>
              <Text
                fontSize="s"
                color="gray.700"
                fontWeight="thin"
                my="1rem"
                fontFamily={"Inter"}
              >
                {data.guest} Guests&ensp;|&ensp;{data.no_of_bed}&nbsp;
                {data.bed_type}&ensp;|&ensp;
                {data.room_size}
              </Text>
              <Text fontSize="s" fontFamily={"inter"} width="270px">
                {data.description}
              </Text>
            </Flex>
            <Flex direction="column" justify="center" mt="3rem">
              <Text fontSize="s" as="s" textAlign="end" fontFamily={"Inter"}>
                THB {data.price}
              </Text>
              <Heading fontSize="sm" textAlign="end" fontFamily={"Inter"}>
                THB {data.promotion_price}
              </Heading>
              <Text
                fontSize="s"
                mt="1rem"
                mb="3rem"
                textAlign="end"
                fontFamily={"Inter"}
              >
                Per Night <br /> (Including Taxes & Fees)
              </Text>
              <Flex align="center" mb="1rem" pt="1rem">
                <Button
                  color="orange.500"
                  mr="2rem"
                  fontWeight="semibold"
                  fontFamily={"Open Sans"}
                  fontSize="lg"
                  onClick={() => {
                    console.log(data.room_types_id);
                    // navigate(`/room-detail/`);
                    navigate(`/room-detail/${data.room_types_id}`);
                  }}
                  bg="white"
                >
                  Room Detail
                </Button>
                {data.disable === true || data.max_guest < guest ? (
                  <Button
                    bg="orange.600"
                    color="white"
                    size="lg"
                    fontFamily={"Open Sans"}
                    isDisabled="true"
                    fontSize="lg"
                    _hover={{ background: "#E76B39" }}
                    onClick={() => {
                      navigate(`/reservation/${data.room_types_id}`);
                    }}
                  >
                    Book Now
                  </Button>
                ) : (
                  <Button
                    bg="orange.600"
                    color="white"
                    size="lg"
                    fontFamily={"Open Sans"}
                    fontSize="lg"
                    _hover={{ background: "#E76B39" }}
                    onClick={() => {
                      navigate(`/reservation/${data.room_types_id}`);
                    }}
                  >
                    Book Now
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        );
      })}
      ;
    </VStack>
  );
}

export default RoomsSearch;
