import { GridItem, Text, Flex, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
function BookingDetail() {
  return (
    <Flex
      className="booking-detail"
      display="flex"
      direction="column"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Flex
        className="booking-detail"
        display="flex"
        direction="column"
        alignItems="flex-start"
        w="358px"
        bgColor="#5d7b6a"
        borderRadius="4px"
        ml="20px"
        mb="20px"
        fontFamily={"Inter"}
      >
        <Flex
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          w="full"
          h="62px"
          bg="rgba(47, 62, 53, 1)"
        >
          <Img
            src="./images/reservationpage/reservation-icon.svg"
            alt=""
            pl="30px"
          />
          <Text
            color="white"
            fontSize="20px"
            fontWeight="600"
            fontFamily={"Inter"}
            pl="10px"
          >
            Booking Detail
          </Text>
        </Flex>

        <Flex
          className="conditon-booking"
          w="full"
          display="flex"
          direction="row"
          alignItems="flex-start"
          justifyContent="space-around"
          m="20px"
        >
          <Flex
            className="check-in"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="50%"
            mb="20px"
          >
            <Text
              color="white"
              fontSize="16px"
              fontWeight="600"
              fontFamily={"Inter"}
              mb="8px"
            >
              Check-in
            </Text>
            <Text
              color="white"
              fontSize="16px"
              fontWeight="400"
              fontFamily={"Inter"}
            >
              After 2:00 PM
            </Text>
          </Flex>

          <Flex
            className="check-out"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="50%"
          >
            <Text
              color="white"
              fontSize="16px"
              fontWeight="600"
              fontFamily={"Inter"}
              mb="8px"
            >
              Check-out
            </Text>
            <Text
              color="white"
              fontSize="16px"
              fontWeight="400"
              fontFamily={"Inter"}
            >
              Before 12:00 PM
            </Text>
          </Flex>
        </Flex>

        <Flex
          className="booking-date"
          display="flex"
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          w="100%"
          color="white"
          fontSize="16px"
          fontWeight="400"
          fontFamily={"Inter"}
          m="20px"
        >
          <Text>Th, 19 Oct 2022</Text>
          <Text> - </Text>
          <Text>Fri, 20 Oct 2022</Text>
        </Flex>
        <Text
          color="white"
          fontSize="16px"
          fontWeight="400"
          fontFamily={"Inter"}
          ml="20px"
          mb="40px"
        >
          2 Guests
        </Text>

        <Flex
          className="room-booking"
          display="flex"
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          w="310px"
          color="white"
          fontWeight="400"
          fontFamily={"Inter"}
          ml="20px"
          mb="24px"
          // bg="blue.100"
        >
          <Flex
            className="room-type"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="70%"
            // bg="blue.200"
            fontSize="16px"
          >
            Superior Garden View Room
          </Flex>
          <Flex
            className="room-price"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            // bg="blue.200"
            fontSize="16px"
          >
            2500.00
          </Flex>
        </Flex>

        <Flex
          className="special-request"
          display="flex"
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          w="310px"
          color="white"
          fontWeight="400"
          fontFamily={"Inter"}
          ml="20px"
          mb="24px"
          // bg="blue.100"
        >
          <Flex
            className="special-request-option"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="70%"
            // bg="blue.200"
            fontSize="16px"
          >
            Airport tranfer
          </Flex>
          <Flex
            className="special-request-cost"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            // bg="blue.200"
            fontSize="16px"
          >
            200.00
          </Flex>
        </Flex>

        <Flex
          className="special-request"
          display="flex"
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          w="310px"
          color="white"
          fontWeight="400"
          fontFamily={"Inter"}
          ml="20px"
          mb="24px"
          // bg="blue.100"
        >
          <Flex
            className="special-request-option"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="70%"
            // bg="blue.200"
            fontSize="16px"
          >
            Promotion Code
          </Flex>
          <Flex
            className="special-request-cost"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            // bg="blue.200"
            fontSize="16px"
          >
            -400.00
          </Flex>
        </Flex>

        <GridItem
          w="310px"
          ml="20px"
          mr="20px"
          align="center"
          h="1px"
          bg="rgba(228, 230, 237, 1)"
        />

        <Flex
          className="special-request"
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          w="310px"
          color="white"
          fontWeight="400"
          fontFamily={"Inter"}
          ml="20px"
          mb="24px"
          mt="24px"
          // bg="blue.100"
        >
          <Flex
            className="special-request-option"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            w="30%"
            // bg="blue.200"
            fontSize="16px"
          >
            Total
          </Flex>
          <Flex
            className="special-request-cost"
            display="flex"
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            // bg="blue.200"
            fontSize="20px"
          >
            THB 2,300.00
          </Flex>
        </Flex>
      </Flex>

      <Flex
        className="booking-detail"
        w="358px"
        bgColor="rgba(228, 230, 237, 1)"
        borderRadius="4px"
        ml="20px"
        color="rgba(93, 123, 106, 1)"
        fontSize="12px"
        fontWeight="400"
        fontFamily={"Inter"}
        mb="20px"
        p="20px"
      >
        <Flex
          className="check-in"
          display="flex"
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
          w="100%"
        >
          <UnorderedList>
            <ListItem mb="20px">
              Cancel booking will get full refund if the cancelation occurs
              before 24 hours of the check-in date.
            </ListItem>
            <ListItem>
              Able to change check-in or check-out date booking within 24 hours
              of the booking date
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BookingDetail;