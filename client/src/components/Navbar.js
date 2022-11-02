import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
function Navbar() {
  return (
    <Box color="#F7F7FB" w="100%" h="100px" px="160px" py="26px">
      <Flex>
        <HStack spacing={"42px"}>
          <Image src="./images/logo.svg" alt="Neatly Logo" w="167px" h="45px" />
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            About Neatly
          </Text>
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            Service & Facilities
          </Text>
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            Rooms & Suits
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing={"30px"}>
          <Text
            textAlign="center"
            lineHeight="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="600px"
            textColor="#E76B39"
          >
            Log in
          </Text>
          <Button
            w="143px"
            h="48px"
            bgColor="#C14817"
            fontSize="16px"
            textAlign="center"
            lineHeight="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="600px"
            textColor="#FFFFFF"
            _hover={{ background: "#E76B39" }}
          >
            Book Now
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
