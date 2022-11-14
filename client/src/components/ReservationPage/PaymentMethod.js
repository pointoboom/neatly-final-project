import {
  GridItem,
  Input,
  Text,
  Flex,
  Button,
  TabPanel,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/authentication";
import React, { useState, useEffect } from "react";
import { useHotel } from "../../contexts/reservation";
import jwtDecode from "jwt-decode";
import axios from "axios";

function PaymentNethod() {
  const [cardnum, setCardnum] = useState("");
  const [cardowner, setCardowner] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const tab = useHotel();
  const { handleTabsBack, getUserFromToken } = useHotel();
  const bgColorBox = (index) => {
    if (index === 0) {
    }
  };

  useEffect(() => {
    tab.getDataFromToken();
    console.log(tab.userFromToken);
    // const getCardDetails = async () => {
    //   const id = tab.userFromToken.id;
    //   console.log(id);
    //   const res = await axios.get(
    //     `http://localhost:4000/auth/carddetails/${id}`
    //   );
    //   setUser(res.data.data);
    // };
    // getCardDetails();
  }, []);

  // const getData = async () => {
  //   const id = tab.userFromToken.id;
  //   console.log(id);
  //   const res = await axios.get(`http://localhost:4000/auth/carddetails/${id}`);
  //   setUser(res.data.data);
  // };

  return (
    <TabPanel className="third-page">
      <Flex
        w="740px"
        className="info-form"
        direction="column"
        // bgColor="gray"
        // pl="40px"
        // pt="40px"
      >
        <Flex
          className="info-form"
          w="660px"
          direction="column"
          // bgColor="gray"
        >
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
              value={cardnum}
              onChange={(event) => {
                setCardnum(event.target.value);
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
              value={cardowner}
              onChange={(event) => {
                setCardowner(event.target.value);
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
                value={expdate}
                onChange={(event) => {
                  setExpdate(event.target.value);
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
                value={cvc}
                onChange={(event) => {
                  setCvc(event.target.value);
                }}
                focusBorderColor="orange.500"
              ></Input>
            </Flex>
          </Flex>

          <GridItem mb="24px" w="100%" h="1px" bg="rgba(228, 230, 237, 1)" />

          <Flex
            className="input-form"
            direction="column"
            fontFamily={"Inter"}
            fontSize="16px"
            mb="40px"
          >
            <Text mb="15px">Promotion Code</Text>
            <Input
              placeholder=""
              width="660px"
              fontFamily={"Inter"}
              fontSize="16px"
              id="promotion-code"
              name="promotion-code"
              type="text"
              focusBorderColor="orange.500"
            ></Input>
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
            >
              Confirm Booking
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </TabPanel>
  );
}

export default PaymentNethod;
