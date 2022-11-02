import { Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function RoomsDetails() {
  return (
    <Flex direction="column" align="center" margin="25px">
      <Text
        fontSize="6xl"
        color="#2F3E35"
        textAlign="center"
        fontWeight="black"
        fontFamily={"Noto Serif Display"}
      >
        Rooms & Suits
      </Text>
      <Flex position="relative">
        <Flex
          zIndex="popover"
          position="absolute"
          bottom="100px"
          left="80px"
          color="white"
          direction="column"
        >
          <Text
            fontSize="3rem"
            fontFamily={"Noto Serif Display"}
            fontWeight="black"
          >
            Superior Garden View
          </Text>
          <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
            <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
              Explore room
            </Text>
            <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
          </Flex>
        </Flex>
        <Image
          src="./images/rooms_details/superior_garden_view.svg"
          alt="Superior Garden View"
          margin="15px"
        />
      </Flex>
      <Flex position="relative">
        <Flex
          zIndex="popover"
          position="absolute"
          bottom="100px"
          left="80px"
          color="white"
          direction="column"
        >
          <Text
            fontSize="3rem"
            fontFamily={"Noto Serif Display"}
            fontWeight="black"
          >
            Deluxe
          </Text>
          <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
            <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
              Explore room
            </Text>
            <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
          </Flex>
        </Flex>
        <Image
          src="./images/rooms_details/deluxe.svg"
          alt="Deluxe"
          margin="15px"
        />
        <Flex
          zIndex="popover"
          position="absolute"
          bottom="100px"
          right="230px"
          color="white"
          direction="column"
        >
          <Text
            fontSize="3rem"
            fontFamily={"Noto Serif Display"}
            fontWeight="black"
          >
            Superior
          </Text>
          <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
            <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
              Explore room
            </Text>
            <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
          </Flex>
        </Flex>
        <Image
          src="./images/rooms_details/superior.svg"
          alt="Superior"
          margin="15px"
        />
      </Flex>
      <Flex position="relative">
        <Flex
          zIndex="popover"
          position="absolute"
          bottom="100px"
          left="80px"
          color="white"
          direction="column"
        >
          <Text
            fontSize="3rem"
            fontFamily={"Noto Serif Display"}
            fontWeight="black"
          >
            Premier Sea View
          </Text>
          <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
            <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
              Explore room
            </Text>
            <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
          </Flex>
        </Flex>

        <Image
          src="./images/rooms_details/premier_sea_view.svg"
          alt="Premier Sea View"
          margin="15px"
        />
        <Flex direction="column" position="relative">
          <Flex
            zIndex="popover"
            position="absolute"
            top="180px"
            left="80px"
            color="white"
            direction="column"
          >
            <Text
              fontSize="3rem"
              fontFamily={"Noto Serif Display"}
              fontWeight="black"
            >
              Supreme
            </Text>
            <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
              <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
                Explore room
              </Text>
              <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
            </Flex>
          </Flex>
          <Image
            src="./images/rooms_details/supreme.svg"
            alt="Supreme"
            margin="15px"
          />
          <Flex
            zIndex="popover"
            position="absolute"
            bottom="100px"
            left="80px"
            color="white"
            direction="column"
          >
            <Text
              fontSize="3rem"
              fontFamily={"Noto Serif Display"}
              fontWeight="black"
            >
              Suite
            </Text>
            <Flex position="relative" left="10px" _hover={{ color: "orange" }}>
              <Text fontSize="1.5rem" fontFamily={"Open Sans"}>
                Explore room
              </Text>
              <ArrowForwardIcon position="absolute" left="145px" bottom="8px" />
            </Flex>
          </Flex>
          <Image
            src="./images/rooms_details/suite.svg"
            alt="Suite"
            margin="15px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RoomsDetails;
