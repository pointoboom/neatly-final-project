import { Box, Text } from "@chakra-ui/react";
function About() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
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
          Neatly Hotel
        </Text>
      </Box>

      <Box flex justifyContent flexDirection={"column"} px="170px" mb="100px">
        <Text fontSize="16px" fontFamily={"Inter"} mb="20px">
          Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
          with an outdoor pool, kids' club, sports facilities and a fitness
          centre. There is also a spa, an indoor pool and saunas.
        </Text>
        <Text fontSize="16px" fontFamily={"Inter"} mb="20px">
          All units at the hotel are equipped with a seating area, a flat-screen
          TV with satellite channels, a dining area and a private bathroom with
          free toiletries, a bathtub and a hairdryer. Every room in Neatly Hotel
          features a furnished balcony. Some rooms are equipped with a coffee
          machine.
        </Text>
        <Text fontSize="16px" fontFamily={"Inter"}>
          Free WiFi and entertainment facilities are available at property and
          also rentals are provided to explore the area.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
