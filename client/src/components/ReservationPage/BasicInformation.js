import {
  FormErrorMessage,
  FormControl,
  Input,
  Text,
  Flex,
  TabPanel,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/authentication";
import React, { useEffect, useState } from "react";
import { DatePicker, Select, Form } from "antd";
import NextComponent from "./NextComponent";
import { countryList } from "../../data/country";
import moment from "moment";
import usePersistedState from "use-persisted-state-hook";
const dateFormat = "dd,DD MMM YYYY";
function BasicInformation(props) {
  const date = moment(props.userData.date_of_birth).format("YYYY-MM-DD");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [dob, setDob] = usePersistedState("dob", null);
  const [country, setCountry] = useState("");
  const auth = useAuth();
  const onChangeDate = (value) => {
    setDob(value._d);
  };
  const handleCountry = (value) => {
    setCountry(value);
  };

  return (
    <TabPanel className="first-page">
      <Flex w="740px" className="info-form" direction="column">
        <Flex className="info-form" w="660px" direction="column">
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
              disabled
              fontSize="16px"
              id="fullname"
              name="fullname"
              type="text"
              value={props.userData.fullname}
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
                  disabled
                  width="660px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  id="email"
                  name="email"
                  type="text"
                  value={props.userData.email}
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
                value={props.userData.id_number}
                onChange={(event) => {
                  setIdnumber(event.target.value);
                }}
                focusBorderColor="orange.500"
                disabled
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
                <Form>
                  <Form.Item>
                    <DatePicker
                      format="dd,DD MMM YYYY"
                      onSelect={moment(date)}
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
                  </Form.Item>
                </Form>
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
                value={props.userData.country}
                onChange={handleCountry}
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
