import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import { useHotel } from "../../contexts/reservation";

function About() {
  const { hotelInfo } = useHotel();
  return (
    <Flex
      id="about"
      direction="column"
      alignItems="center"
      display="flex"
      justifyContent="center"
      px="150px"
    >
      <Box display="flex" justifyContent="center">
        <Text
          fontFamily={"Noto Serif Display"}
          fontSize="70px"
          fontWeight="500px"
          letterSpacing="-0.02em"
          textShadow={
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"
          }
          mb="60px"
          mt="70px"
        >
          {hotelInfo.hotel_name} Hotel
        </Text>
      </Box>

      <Flex
        justifyContent="center"
        flexDirection={"column"}
        px="170px"
        mb="100px"
      >
        <Textarea
          h="400px"
          w="1000px"
          resize="none"
          isReadOnly="true"
          border={false}
          fontSize="16px"
          fontFamily={"Inter"}
          mb="20px"
        >
          {hotelInfo.hotel_desc}
        </Textarea>
        {/* <Text fontSize="16px" fontFamily={"Inter"} mb="20px">
          All units at the hotel are equipped with a seating area, a flat-screen
          TV with satellite channels, a dining area and a private bathroom with
          free toiletries, a bathtub and a hairdryer. Every room in Neatly Hotel
          features a furnished balcony. Some rooms are equipped with a coffee
          machine.
        </Text>
        <Text fontSize="16px" fontFamily={"Inter"}>
          Free WiFi and entertainment facilities are available at property and
          also rentals are provided to explore the area.
        </Text> */}
      </Flex>
    </Flex>
  );
}

export default About;
