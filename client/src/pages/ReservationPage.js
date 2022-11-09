import Navbar from "../components/Navbar";
import { Input, Text, Flex, Button, Link, Box, Img } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import React, { useState } from "react";
import { DatePicker, Select, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { countryList } from "../data/country";
import validator from "validator";
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Textarea,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function ReservationPage() {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [cardowner, setCardowner] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [isError, setError] = useState("false");
  const { register } = useAuth();
  const auth = useAuth();

  const onChangeDate = (value) => {
    setDob(value._d);
  };
  const handleCountry = (value) => {
    setCountry(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      fullname,
      email,
      idnumber,
      cardnum,
      cardowner,
      expdate,
      cvc,
      dob,
      country,
      role: "user",
      profile_picture: "test",
    };
    // console.log(data);
    register(data);
  };

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(tabIndex + 1);
  };

  const handleTabsBack = (index) => {
    setTabIndex(tabIndex - 1);
  };

const bgColorBox=(index)=>{
  if(index===0){
   
  }
}

  return (
    <>
      <Navbar />;
      <Flex
        className="reservation-page"
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
          display="flex"
          direction="column"
          align="flex-start"
          justify="center"
          // bgColor="pink"
        >
          <Text
            className="Booking"
            fontSize="68px"
            align="center"
            // textColor="rgba(47, 62, 53, 1)"
            fontFamily={"Noto Serif Display"}
            paddingBottom="40px"
            mt="50px"
            // bgColor="pink.200"
          >
            Booking Room
          </Text>

          <Tabs variant="unstyled" index={tabIndex}>
            <TabList
              w="100%"
              h="146px"
              display="flex"
              direction="row"
              align="flex-start"
              justify="center"
              // color="gray"
              // bgColor="pink.300"
            >
              <Tab _selected={{ color: "orange" }} >
              <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor="gray.100"
                  _selected={{ colorScheme: "orange" }}
                >
                  1
                </Button>
                Basic Information
              </Tab>

              <Tab _selected={{ color: "orange" }}>
                <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor={bgColorBox}
                  _selected={{ colorScheme: "orange" }}
                >
                  2
                </Button>
                Special Request
              </Tab>
              <Tab _selected={{ color: "orange" }}>
                <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor="gray.100"
                  _selected={{ colorScheme: "orange" }}
                >
                  3
                </Button>
                Payment Method
              </Tab>
            </TabList>

            <Flex
              // w="1122px"
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              // bgColor="yellow"
            >
              <TabPanels bgColor="white">
                <TabPanel className="first-page">
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
                          Basic Information
                        </Text>
                      </Flex>

                      <Flex
                        className="input-form"
                        direction="column"
                        fontFamily={"Inter"}
                        fontSize="16px"
                        mb="40px"
                      >
                        <Text mb="15px">Fullname</Text>
                        <Input
                          placeholder="Enter your fullname"
                          width="660px"
                          fontFamily={"Inter"}
                          fontSize="16px"
                          id="fullname"
                          name="fullname"
                          type="text"
                          value={fullname}
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                          focusBorderColor="orange.500"
                        ></Input>
                      </Flex>

                      <Flex direction="column">
                        <Flex
                          direction="column"
                          fontFamily={"Inter"}
                          fontSize="16px"
                          mb="40px"
                        >
                          <Text mb="15px">Email</Text>
                          <FormControl isInvalid={auth.emailRegistered}>
                            <Input
                              placeholder="Enter your email"
                              width="660px"
                              fontFamily={"Inter"}
                              fontSize="16px"
                              id="email"
                              name="email"
                              type="text"
                              value={email}
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                              focusBorderColor="orange.500"
                            ></Input>
                            {auth.emailRegistered === true ? (
                              <FormErrorMessage>
                                This email has been registered
                              </FormErrorMessage>
                            ) : null}
                          </FormControl>
                        </Flex>
                        <Flex
                          direction="column"
                          fontFamily={"Inter"}
                          fontSize="16px"
                          mb="40px"
                        >
                          <Text mb="15px">Id Number</Text>
                          <Input
                            placeholder="Enter your ID Number"
                            width="660px"
                            fontFamily={"Inter"}
                            fontSize="16px"
                            id="idnumber"
                            name="idnumber"
                            type="number"
                            value={idnumber}
                            onChange={(event) => {
                              setIdnumber(event.target.value);
                            }}
                            focusBorderColor="orange.500"
                          ></Input>
                        </Flex>

                        <Flex>
                          <Flex
                            direction="column"
                            fontFamily={"Inter"}
                            fontSize="16px"
                            mb="40px"
                          >
                            <Text mb="15px">Date of Birth</Text>
                            <DatePicker
                              format="dd,DD MMM YYYY"
                              style={{
                                width: "660px",
                                fontFamily: "Inter",
                                fontSize: "30px",
                                paddingLeft: "15px",
                              }}
                              onChange={onChangeDate}
                              placeholder="Enter your birthday"
                            />
                          </Flex>
                        </Flex>

                        <Flex
                          direction="column"
                          fontFamily={"Inter"}
                          fontSize="16px"
                          mb="40px"
                        >
                          <Text mb="15px">Country</Text>
                          <Select
                            placeholder="Select your country"
                            options={countryList.map((item) => ({
                              label: item.name,
                              value: item.name,
                            }))}
                            style={{
                              width: "660px",
                              fontFamily: "Inter",
                              fontSize: "16px",
                            }}
                            onChange={handleCountry}
                          ></Select>
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
                          >
                            Back
                          </Button>
                          <Button
                            w="100px"
                            h="48px"
                            fontSize="16px"
                            color="white"
                            bg="rgba(193, 72, 23, 1)"
                            _hover={{ background: "#E76B39" }}
                            onClick={handleTabsChange}
                          >
                            Next
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>

                <TabPanel className="second-page">
                  <Flex
                    w="740px"
                    className="info-form"
                    direction="column"
                    // bgColor="gray"
                    // pl="40px"
                    // pt="40px"
                  >
                    <Flex mb="45px" direction="column">
                      <Text
                        fontFamily={"Inter"}
                        fontSize="20px"
                        color="gray.600"
                        fontStyle="600"
                      >
                        Standard Request
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize="14px"
                        color="gray.600"
                        fontStyle="600"
                        mb="25px"
                      >
                        These requests are not confirmed (Depend on the
                        available room)
                      </Text>

                      <CheckboxGroup
                        colorScheme="orange"
                        focusBorderColor="rgba(243, 181, 156, 1)"
                        defaultValue={[]}
                      >
                        <Stack
                          spacing="20px"
                          direction={["column"]}
                          color="#646D89"
                        >
                          <Checkbox
                            value="Early check-in"
                            _checked={{ color: "black" }}
                          >
                            Early check-in
                          </Checkbox>
                          <Checkbox
                            value="Late check-out"
                            _checked={{ color: "black" }}
                          >
                            Late check-out
                          </Checkbox>
                          <Checkbox
                            value="Non-smoking room"
                            _checked={{ color: "black" }}
                          >
                            Non-smoking room
                          </Checkbox>
                          <Checkbox
                            value="A room on the high floor"
                            _checked={{ color: "black" }}
                          >
                            A room on the high floor
                          </Checkbox>
                          <Checkbox
                            value="A quiet room"
                            _checked={{ color: "black" }}
                          >
                            A quiet room
                          </Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </Flex>

                    <Flex mb="45px" direction="column">
                      <Text
                        fontFamily={"Inter"}
                        fontSize="20px"
                        color="gray.600"
                        fontStyle="600"
                      >
                        Special Request
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize="14px"
                        color="gray.600"
                        fontStyle="600"
                        mb="25px"
                      >
                        Additional charge may apply
                      </Text>

                      <CheckboxGroup
                        colorScheme="orange"
                        focusBorderColor="rgba(243, 181, 156, 1)"
                        defaultValue={[]}
                      >
                        <Stack
                          spacing="20px"
                          direction={["column"]}
                          color="#646D89"
                        >
                          <Checkbox
                            value="Baby cot"
                            _checked={{ color: "black" }}
                          >
                            Baby cot (+THB 400)
                          </Checkbox>
                          <Checkbox
                            value="Airport transfer"
                            _checked={{ color: "black" }}
                          >
                            Airport transfer (+THB 200)
                          </Checkbox>
                          <Checkbox
                            value="Extra bed"
                            _checked={{ color: "black" }}
                          >
                            Extra bed (+THB 500)
                          </Checkbox>
                          <Checkbox
                            value="Extra pillows"
                            _checked={{ color: "black" }}
                          >
                            Extra pillows (+THB 100)
                          </Checkbox>
                          <Checkbox
                            value="Phone chargers and adapters"
                            _checked={{ color: "black" }}
                          >
                            Phone chargers and adapters (+THB 100)
                          </Checkbox>
                          <Checkbox
                            value="Breakfast"
                            _checked={{ color: "black" }}
                          >
                            Breakfast (+150)
                          </Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </Flex>

                    <Box mb="40px">
                      <FormLabel
                        htmlFor="desc"
                        fontFamily={"Inter"}
                        fontSize="16px"
                      >
                        Additional Request
                      </FormLabel>
                      <Textarea id="desc" />
                    </Box>

                    <Flex
                      display="flex"
                      direction="row"
                      alignItems="center"
                      justify="space-between"
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
                        w="100px"
                        h="48px"
                        fontSize="16px"
                        color="white"
                        bg="rgba(193, 72, 23, 1)"
                        _hover={{ background: "#E76B39" }}
                        onClick={handleTabsChange}
                      >
                        Next
                      </Button>
                    </Flex>
                  </Flex>
                </TabPanel>

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

                      <GridItem
                        mb="24px"
                        w="100%"
                        h="1px"
                        bg="rgba(228, 230, 237, 1)"
                      />

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
              </TabPanels>

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
                        Cancel booking will get full refund if the cancelation
                        occurs before 24 hours of the check-in date.
                      </ListItem>
                      <ListItem>
                        Able to change check-in or check-out date booking within
                        24 hours of the booking date
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}

export default ReservationPage;
