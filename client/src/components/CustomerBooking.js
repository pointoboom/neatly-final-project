import React from "react";
import {
  Flex,
  Text,
  Input,
  VStack,
  Box,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import SideBar from "./SideBar";

function CustomerBooking() {
  return (
    <Flex direction="row">
      <SideBar />
      <Flex direction="column" my="10">
        <Flex align="center" mb="10">
          <Text ml="20" fontWeight="semibold">
            Customer Booking
          </Text>
          <Spacer />
          <Input mr="10" placeholder="Search..." size="md" width="400px" />
        </Flex>
        <Flex bg="#F6F7FC">
          <Flex direction="column" m="10">
            <Flex p="2" bg="#E4E6ED">
              <Text mx="8">Customer Name</Text>
              <Text mx="8">Guest(s)</Text>
              <Text mr="24">Roomtype</Text>
              <Text mx="8">Amount</Text>
              <Text mr="24">Bed Type</Text>
              <Text mr="24">Check-in</Text>
              <Text mr="24">Check-out</Text>
            </Flex>
            {/* {data.map((data) => {
              return;
            })} */}
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              align="stretch"
            >
              <Flex h="60px" justify="center" align="center">
                <Text mx="8">Customer Name</Text>
                <Text mx="8">Guest(s)</Text>
                <Text mr="24">Roomtype</Text>
                <Text mx="8">Amount</Text>
                <Text mr="24">Bed Type</Text>
                <Text mr="24">Check-in</Text>
                <Text mr="24">Check-out</Text>
              </Flex>
              <Box h="60px" justify="center" align="center">
                2
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CustomerBooking;
