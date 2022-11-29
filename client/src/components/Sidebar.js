import { Box, Flex, VStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Flex
      backgroundColor="#2F3E35"
      w="240px"
      h="100vh"
      pt={"48px"}
      display="flex"
      direction="column"
      justify="flex-start"
      position="sticky"
      top="0"
    >
      <VStack
        font-family="Inter"
        font-style="normal"
        font-size="16px"
        line-height="150%"
        letter-spacing="-0.02em"
      >
        <Image
          src="/images/whitelogo.svg"
          alt="Neatly Logo"
          w="150px"
          h="30px"
        />
        <Text pt={"2px"} pb={"80px"} font-weight="400" color="#ABC0B4">
          Admin Panel Control
        </Text>

        <Box font-weight="500" textAlign={"center"} color="#F1F5F3">
          <Box
            w="240px"
            h="72px"
            p="30px"
            _hover={{ background: "#465C50" }}
            _selected={{ background: "#5D7B6A" }}
            onClick={() => {
              navigate("/customerbooking");
            }}
          >
            <Flex display="flex" direction="row">
              <Image boxSize="27px" pr="10px" src="/images/booking.svg" />
              <Text>Customer Booking</Text>
            </Flex>
          </Box>
          <Box
            w="240px"
            h="72px"
            p="30px"
            gap="0"
            _hover={{ background: "#465C50" }}
            _selected={{ background: "#5D7B6A" }}
            onClick={() => {
              navigate("/roommanagement");
            }}
          >
            <Flex display="flex" direction="row">
              <Image boxSize="27px" pr="10px" src="/images/manage.svg" />
              <Text>Room Management</Text>
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
              <Image boxSize="27px" pr="10px" src="/images/hotel.svg" />
              <Text
                onClick={() => {
                  navigate("/hotel");
                }}
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
              <Image boxSize="27px" pr="10px" src="/images/room.svg" />
              <Text
                onClick={() => {
                  navigate("/roomproperty");
                }}
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
            onClick={() => {
              logout();
            }}
          >
            <Flex display="flex" direction="row">
              <Image boxSize="27px" pr="10px" src="/images/logout.svg" />
              <Text>Log Out</Text>
            </Flex>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Sidebar;
