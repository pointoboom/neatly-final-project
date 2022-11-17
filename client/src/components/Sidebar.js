import { Box, Flex, VStack, Image, Text } from "@chakra-ui/react";
function Sidebar() {
  return (
    <Flex
      backgroundColor="#2F3E35"
      w="240px"
      h="1024px"
      pt={"48px"}
      display="flex"
      direction="column"
      justify="flex-start"
      position="sticky"
      top="0"
    >
      <VStack>
        <Image
          src="./images/whitelogo.svg"
          alt="Neatly Logo"
          w="150px"
          h="30px"
        />
        <Text
          pt={"2px"}
          pb={"80px"}
          font-family="Inter"
          font-style="normal"
          font-weight="400"
          font-size="16px"
          line-height="150%"
          letter-spacing="-0.02em"
          color="#ABC0B4"
        >
          Admin Panel Control
        </Text>
        <Box
          w="240px"
          h="72px"
          p="30px"
          _hover={{ background: "#465C50" }}
          _selected={{ background: "#5D7B6A" }}
        >
          <Flex display="flex" direction="row">
            <Image boxSize="27px" pr="10px" src="./images/booking.svg" />
            <Text
              font-family="Inter"
              font-style="normal"
              font-weight="500"
              font-size="16px"
              line-height="150%"
              letter-spacing="-0.02em"
              textAlign={"center"}
              color="#F1F5F3"
            >
              Customer Booking
            </Text>
          </Flex>
        </Box>
        <Box
          w="240px"
          h="72px"
          p="30px"
          gap="0"
          _hover={{ background: "#465C50" }}
          _selected={{ background: "#5D7B6A" }}
        >
          <Flex display="flex" direction="row">
            <Image boxSize="27px" pr="10px" src="./images/manage.svg" />
            <Text
              font-family="Inter"
              font-style="normal"
              font-weight="500"
              font-size="16px"
              line-height="150%"
              letter-spacing="-0.02em"
              textAlign={"center"}
              color="#F1F5F3"
            >
              Room Management
            </Text>
          </Flex>
        </Box>
        <Box
          w="240px"
          h="72px"
          p="30px"
          gap="0"
          _hover={{ background: "#465C50" }}
          _selected={{ background: "#5D7B6A" }}
        >
          <Flex display="flex" direction="row">
            <Image boxSize="27px" pr="10px" src="./images/hotel.svg" />
            <Text
              font-family="Inter"
              font-style="normal"
              font-weight="500"
              font-size="16px"
              line-height="150%"
              letter-spacing="-0.02em"
              textAlign={"center"}
              color="#F1F5F3"
            >
              Hotel Information
            </Text>
          </Flex>
        </Box>
        <Box
          w="240px"
          h="72px"
          p="30px"
          gap="0"
          _hover={{ background: "#465C50" }}
          _selected={{ background: "#5D7B6A" }}
        >
          <Flex display="flex" direction="row">
            <Image boxSize="27px" pr="10px" src="./images/room.svg" />
            <Text
              font-family="Inter"
              font-style="normal"
              font-weight="500"
              font-size="16px"
              line-height="150%"
              letter-spacing="-0.02em"
              textAlign={"center"}
              color="#F1F5F3"
            >
              Room & Property
            </Text>
          </Flex>
        </Box>
        <Box w="240px" h="292px"></Box>
        <Box
          w="240px"
          h="72px"
          p="30px"
          gap="0"
          borderTop="1px"
          borderColor="#465C50"
          _hover={{ background: "#465C50" }}
          _selected={{ background: "#5D7B6A" }}
        >
          <Flex display="flex" direction="row">
            <Image boxSize="27px" pr="10px" src="./images/logout.svg" />
            <Text
              font-family="Inter"
              font-style="normal"
              font-weight="500"
              font-size="16px"
              line-height="150%"
              letter-spacing="-0.02em"
              textAlign={"center"}
              color="#F1F5F3"
            >
              Log Out
            </Text>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Sidebar;
