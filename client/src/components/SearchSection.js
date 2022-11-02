import { Container } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import {
  Image,
  Box,
  Stack,
  Text,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";

function SearchSection() {
  return (
    // <Flex direction="column" alignItems="center" margin="0px" width="100%">
    <Flex
      display="flex"
      position="relative"
      justify="center"
      width="100%"
      align="center"
    >
      <Flex
        display="flex"
        justify="center"
        align="center"
        zIndex="popover"
        position="absolute"
        top="20%"
        color="white"
        direction="column"
        width="100%"
      >
        <Text fontSize="60px" lineHeight="110px" align="center">
          A Best Place for Your{" "}
        </Text>
        <Text fontSize="60px" lineHeight="110px">
          Neatly Experience{" "}
        </Text>
        <Flex w="1120px" h="196px" bg="white" m="100px">
          <Box>//calendar //botton</Box>
        </Flex>
      </Flex>
      <Image
        width="100%"
        src="./images/search-section/background.png"
        alt="Neatly Experience"
      />
    </Flex>
    // </Flex>
  );
}

export default SearchSection;
