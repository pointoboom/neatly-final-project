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
function SpecialRequest() {
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
              <Checkbox value="Early check-in" _checked={{ color: "black" }}>
                Early check-in
              </Checkbox>
              <Checkbox value="Late check-out" _checked={{ color: "black" }}>
                Late check-out
              </Checkbox>
              <Checkbox value="Non-smoking room" _checked={{ color: "black" }}>
                Non-smoking room
              </Checkbox>
              <Checkbox
                value="A room on the high floor"
                _checked={{ color: "black" }}
              >
                A room on the high floor
              </Checkbox>
              <Checkbox value="A quiet room" _checked={{ color: "black" }}>
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
              <Checkbox value="Baby cot" _checked={{ color: "black" }}>
                Baby cot (+THB 400)
              </Checkbox>
              <Checkbox value="Airport transfer" _checked={{ color: "black" }}>
                Airport transfer (+THB 200)
              </Checkbox>
              <Checkbox value="Extra bed" _checked={{ color: "black" }}>
                Extra bed (+THB 500)
              </Checkbox>
              <Checkbox value="Extra pillows" _checked={{ color: "black" }}>
                Extra pillows (+THB 100)
              </Checkbox>
              <Checkbox
                value="Phone chargers and adapters"
                _checked={{ color: "black" }}
              >
                Phone chargers and adapters (+THB 100)
              </Checkbox>
              <Checkbox value="Breakfast" _checked={{ color: "black" }}>
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
