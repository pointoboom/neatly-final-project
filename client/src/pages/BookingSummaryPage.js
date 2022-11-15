import Navbar from "../components/Navbar";
import { Text, Flex, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GridItem } from "@chakra-ui/react";
import { useHotel } from "../contexts/reservation";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import moment from "moment";

function BookingSummaryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [reserveData, setReserveData] = useState([]);
  const tab = useHotel();
  const getReserveDetail = async () => {
    const results = await axios(
      `http://localhost:4000/reserve/${params.reserveId}`
    );
    const data = results.data.data.map((data) => {
      const check_in_date = moment(data.check_in_date).format("dd,DD MMM YYYY");
      const check_out_date = moment(data.check_out_date).format(
        "dd,DD MMM YYYY"
      );

      data = { ...data, check_in_date, check_out_date };
      return data;
    });
    setReserveData(data);
  };
  useEffect(() => {
    getReserveDetail();
  }, []);

  return (
    <>
      <Navbar />;
      <Flex
        className="booking-summary-page"
        width="100vw"
        height="100vh"
        fontFamily={"Inter"}
        bgColor="rgba(247, 247, 251, 1)"
        display="flex"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <Flex
          className="booking-summary-box"
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="738px"
          // bgColor="light green"
          bgColor="#465C50"
          borderRadius="4px"
          ml="20px"
          mb="20px"
          mt="50px"
        >
          <Flex
            className="booking-summary-headline"
            display="flex"
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="210px"
            borderTopRadius="4px"
            // bgColor="darkgreen"
            bg="rgba(47, 62, 53, 1)"
          >
            <Text
              className="thankyou-text"
              color="white"
              fontSize="44px"
              fontWeight="400"
              fontFamily={"Noto Serif Display"}
              pl="10px"
              mb="20px"
            >
              Thank you for booking
            </Text>
            <Flex
              className="thankyou-content"
              fontSize="14px"
              fontWeight="500"
              color="rgba(171, 192, 180, 1)"
              pl="10px"
              display="flex"
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Text>We are looking forward to hosting you at our place.</Text>
              <Text>
                We will send you more information about check-in and staying at
                our Neatly
              </Text>
              <Text> closer to your date of reservation</Text>
            </Flex>
          </Flex>

          <Flex
            className="booking-date-datail"
            w="658px"
            h="112px"
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            m="20px"
            borderRadius="4px"
            // bg="mid-green"
            bg="#5d7b6a"
          >
            <Flex
              className="booking-date"
              display="flex"
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              w="50%"
              pt="20px"
              fontSize="16px"
            >
              {reserveData.map((data) => {
                return (
                  <Flex color="white" fontWeight="600" m="20px">
                    <Text>{data.check_in_date}</Text>
                    <Text mx="10px">-</Text>
                    <Text>{tab.checkOut}</Text>
                  </Flex>
                );
              })}

              <Flex>
                <Text color="white" fontWeight="400" ml="20px" mb="40px">
                  2 Guests
                </Text>
              </Flex>
            </Flex>
            <Flex
              className="booking-date-cond"
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
              w="50%"
            >
              <Flex
                className="check-in-cond"
                display="flex"
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                mb="20px"
                p="20px"
                color="white"
                fontSize="16px"
              >
                <Text fontWeight="600" mb="8px">
                  Check-in
                </Text>
                <Text fontWeight="400">After 2:00 PM</Text>
              </Flex>

              <Flex
                className="Check-out-cond"
                display="flex"
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                mb="20px"
                p="20px"
                color="white"
                fontSize="16px"
              >
                <Text fontWeight="600" mb="8px">
                  Check-out
                </Text>
                <Text fontWeight="400">Before 12:00 PM</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            className="payment-method"
            w="658px"
            display="flex"
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            color="rgba(213, 223, 218, 1)"
            fontWeight="400"
            mb="40px"
            fontSize="16px"
          >
            <Text className="payment-via" mr="20px">
              Payment success via
            </Text>
            <Text className="credit-card" fontWeight="600">
              Credit Card - *888
            </Text>
          </Flex>

          <Flex
            className="cost-detail-box"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            alignItems="space-between"
            w="658px"
            color="white"
            fontWeight="400"
            mb="24px"
          >
            <Flex
              className="room-type-cost"
              display="flex"
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              color="white"
              fontWeight="400"
              mb="24px"
              fontSize="16px"
            >
              <Text
                className="room-type-name"
                dispyContent="space-between"
                color="rgba(213, 223, 218, 1)"
              >
                Superior Garden View Room
              </Text>
              <Text className="room-type-price" fontWeight="600">
                2,500.00
              </Text>
            </Flex>
            {reserveData.map((data) => {
              return (
                <>
                  <Flex
                    className="spacial-req-cost"
                    display="flex"
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    color="white"
                    fontWeight="400"
                    mb="24px"
                    fontSize="16px"
                  >
                    <Text
                      className="spacial-req-option"
                      dispyContent="space-between"
                      color="rgba(213, 223, 218, 1)"
                    >
                      {data.have}
                    </Text>
                    <Text className="spacial-req-price" fontWeight="600">
                      {data.price}.00
                    </Text>
                  </Flex>
                </>
              );
            })}

            <Flex
              className="promotion-discount"
              display="flex"
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              color="white"
              fontWeight="400"
              mb="24px"
              fontSize="16px"
            >
              <Text
                className="promotion-code"
                dispyContent="space-between"
                color="rgba(213, 223, 218, 1)"
              >
                Promotion Code
              </Text>
              <Text className="discount-price" fontWeight="600">
                00.00
              </Text>
            </Flex>

            <GridItem
              w="100%px"
              align="center"
              h="1px"
              bg="rgba(228, 230, 237, 1)"
              mb="20px"
            />
            {reserveData.map((data) => {
              if (reserveData.indexOf(data) === 0) {
                return (
                  <>
                    <Flex
                      className="total"
                      display="flex"
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="space-between"
                      color="white"
                      fontWeight="400"
                      mb="24px"
                    >
                      <Text
                        className="total-text"
                        dispyContent="space-between"
                        fontSize="16px"
                        color="rgba(213, 223, 218, 1)"
                      >
                        Total
                      </Text>
                      <Text
                        className="total-price"
                        fontSize="20px"
                        fontWeight="600"
                      >
                        THB {data.total_price}.00
                      </Text>
                    </Flex>
                  </>
                );
              }
            })}
          </Flex>
        </Flex>

        <Flex
          display="flex"
          direction="row"
          alignItems="center"
          justify="space-between"
          mt="40px"
        >
          <Button
            w="190px"
            h="48px"
            fontSize="16px"
            color="rgba(231, 107, 57, 1)"
            _hover={{ background: "#E76B39", color: "white" }}
            bgColor="rgba(247, 247, 251, 1)"
            mr="20px"
          >
            Check Booking Detail
          </Button>
          <Button
            w="190px"
            h="48px"
            fontSize="16px"
            color="white"
            bg="rgba(193, 72, 23, 1)"
            _hover={{ background: "#E76B39" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default BookingSummaryPage;
