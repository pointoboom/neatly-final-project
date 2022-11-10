import usePersistedState from "use-persisted-state-hook";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Text,
  Flex,
  TabPanel,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/authentication";
import React, { useState, useEffect } from "react";
import { DatePicker, Select } from "antd";
import NextComponent from "./NextComponent";
import { useHotel } from "../../contexts/reservation";
import jwtDecode from "jwt-decode";
import moment from "moment";

function BasicInformation(props) {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [cardowner, setCardowner] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");
  // const [dob, setDob] = useState("");
  // const [country, setCountry] = useState("");
  const { register } = useAuth();
  const auth = useAuth();
  const tab = useHotel();
  const [dob, setDob] = usePersistedState("dob", null);
  const [country, setCountry] = usePersistedState("country", null);

  const dateFormat = "dd,DD MMM YYYY";

  const { checkIn } = useHotel();

  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const userdata = jwtDecode(token);
      setUserdata(userdata);
      // setDob(moment(userdata.dob).format("dd,DD MMM YYYY"));
      setDob(moment(userdata.dob).format("dd,DD MMM YYYY"));
      setFullName(userdata.fullname);
      setEmail(userdata.email);
      setIdnumber(userdata.idnumber);
      setCountry(userdata.country);
    }
  }, []);

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

  const bgColorBox = (index) => {
    if (index === 0) {
    }
  };
  return (
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
              disabled
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
                  disabled
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
                disabled
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
                  defaultValue={dob ? moment(dob, dateFormat) : ""}
                  disabled
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
                style={{
                  width: "660px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                }}
                onChange={handleCountry}
                defaultValue={country}
                disabled
              ></Select>
            </Flex>
            <NextComponent />
          </Flex>
        </Flex>
      </Flex>
    </TabPanel>
  );
}

export default BasicInformation;
