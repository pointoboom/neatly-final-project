import Navbar from "../components/Navbar";
import { Input, Text, Flex, Button, Link, Box } from "@chakra-ui/react";
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
import { Checkbox, CheckboxGroup, Stack, Textarea } from "@chakra-ui/react";

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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
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

  return (
    <>
      <Navbar />;
      <Flex
        className="reservation-page"
        width="100vw"
        height="100vh"
        fontFamily={"Inter"}
        bgColor="orange.100"
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
          bgColor="pink"
        >
          <Text
            className="Booking"
            fontSize="68px"
            align="center"
            // textColor="rgba(47, 62, 53, 1)"
            fontFamily={"Noto Serif Display"}
            paddingBottom="40px"
            mt="50px"
            bgColor="pink.200"
          >
            Booking Room
          </Text>

          <Tabs variant="unstyled">
            <TabList
              w="100%"
              h="146px"
              display="flex"
              direction="row"
              align="flex-start"
              justify="center"
              color="gray"
              bgColor="pink.300"
            >
              <Tab _selected={{ color: "orange" }}>Basic Information</Tab>
              <Tab _selected={{ color: "orange" }}>
                <Box
                  boxSize="66px"
                  mr="15px"
                  bgColor="gray"
                  _focus={{ bgColor: "orange" }}
                >
                  1
                </Box>
                Special Request
              </Tab>
              <Tab _selected={{ color: "orange" }}>Payment Method</Tab>
            </TabList>

            <Flex
              w="1122px"
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              bgColor="yellow"
            >
              <TabPanels>
                <TabPanel className="first-page" display="flex" direction="row">
                  <Flex
                    w="740px"
                    className="info-form"
                    direction="column"
                    bgColor="white"
                    pl="40px"
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
                      direction="column"
                      fontFamily={"Inter"}
                      fontSize="16px"
                      mb="40px"
                    >
                      <Text mb="15px">Fullname</Text>
                      <Input
                        placeholder="Enter your fullname"
                        width="full"
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
                          //   width="550px"
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
                              width: "550px",
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
                        justify="space-between"
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
                        >
                          Next
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>

                <TabPanel className="second-page">
                  <Flex
                    w="740px"
                    className="info-form"
                    direction="column"
                    bgColor="white"
                  >
                    <Flex mb="40px" direction="column">
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
                        mb="40px"
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

                    <Flex mb="40px" direction="column">
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
                        mb="40px"
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
                      >
                        Next
                      </Button>
                    </Flex>
                  </Flex>
                </TabPanel>

                <TabPanel className="third-page">
                  <p>tdfffff!</p>
                </TabPanel>
              </TabPanels>
              <Flex
                className="booking-detail"
                h="700px"
                w="358px"
                bgColor="green"
              ></Flex>
            </Flex>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}

export default ReservationPage;
