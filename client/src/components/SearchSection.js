import { Flex, Box, Text } from "@chakra-ui/react";
function SearchSection() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      border="2px"
      borderColor="cyan.800"
    >
      <Flex direction="column" justify="center" align="center">
        <Text
          fontFamily={("Noto Serif Display", "serif")}
          fontSize="70px"
          fontWeight="500px"
        >
          A Best Place for Your
        </Text>
        <Text
          fontFamily={("Noto Serif Display", "serif")}
          fontSize="70px"
          fontWeight="500px"
        >
          Neatly Experience
        </Text>
      </Flex>
    </Flex>
  );
}

export default SearchSection;
