import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Textarea,
  FormLabel,
  Text,
  Flex,
  Box,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextComponent from "./NextComponent";
function SpecialRequest(props) {
  console.log(props.userData.request);
  const handleCheck = (check, price) => {
    console.log(props.userData);
    console.log(props.userData.request.length);
    if (props.userData.request.length === 0) {
      props.setdata({
        ...props.userData,
        request: [
          ...props.userData.request,
          { ["req"]: check, ["price"]: price },
        ],
      });
    } else {
      for (let i of props.userData.request) {
        const index = props.userData.request.indexOf(i);
        if (i.req === check) {
          props.userData.request.splice(index, 1);
        } else {
          props.setdata({
            ...props.userData,
            request: [
              ...props.userData.request,
              { ["req"]: check, ["price"]: price },
            ],
          });
        }
      }
    }
    // props.setdata({
    //   ...props.userData,
    //   request: [
    //     ...props.userData.request,
    //     { ["req"]: check, ["price"]: price },
    //   ],
    // });
    // for (let i of props.userData.request) {
    //   const index = props.userData.request.indexOf(i);

    //   if (i["req"] === check) {
    //     props.userData.request.splice(index, 1);
    //     console.log(props.userData);
    //   } else {
    //     props.setdata({
    //       ...props.userData,
    //       request: [...i, ...{ ["req"]: check, ["price"]: price }],
    //     });
    //   }
    // }
  };
  const bgColorBox = (index) => {
    if (index === 0) {
    }
  };
  return (
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
            These requests are not confirmed (Depend on the available room)
          </Text>

          <CheckboxGroup
            colorScheme="orange"
            focusBorderColor="rgba(243, 181, 156, 1)"
            defaultValue={[]}
          >
            <Stack spacing="20px" direction={["column"]} color="#646D89">
              <Checkbox
                value="Early check-in"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("earlyCheckin", event.target.value);
                }}
              >
                Early check-in
              </Checkbox>
              <Checkbox
                value="Late check-out"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("lateCheckin", event.target.value);
                }}
              >
                Late check-out
              </Checkbox>
              <Checkbox
                value="Non-smoking room"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("nonSmoke", event.target.value);
                }}
              >
                Non-smoking room
              </Checkbox>
              <Checkbox
                value="A room on the high floor"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("highFloor", event.target.value);
                }}
              >
                A room on the high floor
              </Checkbox>
              <Checkbox
                value="A quiet room"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("quietRoom", event.target.value);
                }}
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
            <Stack spacing="20px" direction={["column"]} color="#646D89">
              <Checkbox
                value="Baby cot"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("babyCot", 400);
                }}
              >
                Baby cot (+THB 400)
              </Checkbox>
              <Checkbox
                value="Airport transfer"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("airport", 200);
                }}
              >
                Airport transfer (+THB 200)
              </Checkbox>
              <Checkbox
                value="Extra bed"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("extraBed", 500);
                }}
              >
                Extra bed (+THB 500)
              </Checkbox>
              <Checkbox
                value="Extra pillows"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("extraPillow", 100);
                }}
              >
                Extra pillows (+THB 100)
              </Checkbox>
              <Checkbox
                value="Phone chargers and adapters"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("charger", 100);
                }}
              >
                Phone chargers and adapters (+THB 100)
              </Checkbox>
              <Checkbox
                value="Breakfast"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("breakfast", 150);
                }}
              >
                Breakfast (+150)
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>

        <Box mb="40px">
          <FormLabel htmlFor="desc" fontFamily={"Inter"} fontSize="16px">
            Additional Request
          </FormLabel>
          <Textarea id="desc" />
        </Box>
        <NextComponent />
      </Flex>
    </TabPanel>
  );
}
export default SpecialRequest;
