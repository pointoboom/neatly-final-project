import { Input, Text, Flex, Button, TabPanel } from "@chakra-ui/react";
import { useAuth } from "../../contexts/authentication";
import React from "react";
import { useHotel } from "../../contexts/reservation";
import moment from "moment";
import jwtDecode from "jwt-decode";

function PaymentMethod(props) {
  const { handleTabsBack, reserveRooms } = useHotel();
  const searchDetail = useHotel();
  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    event.preventDefault();
    const checkIn = searchDetail.checkIn;
    const checkOut = searchDetail.checkOut;
    const guest = searchDetail.guest;
    const userId = userdata.id;
    const roomId = Number(props.roomId);
    const specialRequest = props.specialRequest;
    const standardRequest = props.standardRequest;
    const cardNumber = props.userData.card_number;
    const cardOwner = props.userData.card_owner;
    const cvc = props.userData.cvc_cvv;
    const exp_month = props.userData.expiry_date.slice(0, 2);
    const exp_year = props.userData.expiry_date.slice(3);
    const sumPrice =
      props.reserveDetail.reduce((acc, item) => {
        return (
          acc +
          Number(item.promotion_price) *
            Number(
              moment(searchDetail.checkOut).diff(
                moment(searchDetail.checkIn),
                "days"
              )
            )
        );
      }, 0) +
      props.specialRequest.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    const amountRoom = searchDetail.room;
    const data = {
      checkIn,
      checkOut,
      guest,
      userId,
      roomId,
      specialRequest,
      standardRequest,
      sumPrice,
      amountRoom,
      cardNumber,
      cardOwner,
      cvc,
      exp_month,
      exp_year,
    };
    reserveRooms(data);
  };

  return (
    <TabPanel className="third-page">
      <Flex w="740px" className="info-form" direction="column">
        <Flex className="info-form" w="660px" direction="column">
          <Flex mb="40px">
            <Text
              fontFamily={"Inter"}
              fontSize="20px"
              color="gray.600"
              fontStyle="600"
            >
              Credit Card
            </Text>
          </Flex>

          <Flex direction="column" mr="50px" mb="40px">
            <Text
              mb="15px"
              fontFamily={"Inter"}
              fontSize="16px"
              color="gray.900"
              fontStyle="400"
            >
              Card Number
            </Text>

            <Input
              placeholder="Enter your card number"
              width="660px"
              fontFamily={"Inter"}
              fontSize="16px"
              id="cardnumber"
              name="cardnumber"
              type="number"
              value={props.userData.card_number}
              onChange={(event) => {
                props.setdata({
                  ...props.userData,
                  ["card_number"]: event.target.value,
                });
              }}
              focusBorderColor="orange.500"
            ></Input>
          </Flex>

          <Flex direction="column" mb="40px">
            <Text
              mb="15px"
              fontFamily={"Inter"}
              fontSize="16px"
              color="gray.900"
              fontStyle="400"
            >
              Card Owner
            </Text>
            <Input
              placeholder="Enter your card name"
              width="660px"
              fontFamily={"Inter"}
              fontSize="16px"
              id="cardowner"
              name="cardowner"
              type="text"
              value={props.userData.card_owner}
              onChange={(event) => {
                props.setdata({
                  ...props.userData,
                  ["card_owner"]: event.target.value,
                });
              }}
              focusBorderColor="orange.500"
            ></Input>
          </Flex>

          <Flex mb="40px">
            <Flex direction="column" mr="50px">
              <Text
                mb="15px"
                fontFamily={"Inter"}
                fontSize="16px"
                color="gray.900"
                fontStyle="400"
              >
                Expire Date
              </Text>
              <Input
                placeholder="MM/YY"
                width="305px"
                fontFamily={"Inter"}
                fontSize="16px"
                id="expiredate"
                name="expiredate"
                type="text"
                value={props.userData.expiry_date}
                onChange={(event) => {
                  props.setdata({
                    ...props.userData,
                    ["expiry_date"]: event.target.value,
                  });
                }}
                focusBorderColor="orange.500"
              ></Input>
            </Flex>
            <Flex direction="column">
              <Text
                mb="15px"
                fontFamily={"Inter"}
                fontSize="16px"
                color="gray.900"
                fontStyle="400"
              >
                CVC/CVV
              </Text>
              <Input
                placeholder="CVC/CVV"
                width="305px"
                fontFamily={"Inter"}
                fontSize="16px"
                id="cvc"
                name="cvc"
                type="text"
                value={props.userData.cvc_cvv}
                onChange={(event) => {
                  props.setdata({
                    ...props.userData,
                    ["cvc_cvv"]: event.target.value,
                  });
                }}
                focusBorderColor="orange.500"
              ></Input>
            </Flex>
          </Flex>

          <Flex
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              w="100px"
              h="48px"
              fontSize="16px"
              color="rgba(231, 107, 57, 1)"
              _hover={{ background: "#E76B39", color: "white" }}
              bg="white"
              onClick={handleTabsBack}
            >
              Back
            </Button>
            <Button
              w="194px"
              h="48px"
              fontSize="16px"
              color="white"
              bg="rgba(193, 72, 23, 1)"
              _hover={{ background: "#E76B39" }}
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              Confirm Booking
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </TabPanel>
  );
}

export default PaymentMethod;
