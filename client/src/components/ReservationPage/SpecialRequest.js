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
import React from "react";
import NextComponent from "./NextComponent";
function SpecialRequest(props) {
  const handleCheck = (check, price, event) => {
    event.preventDefault();
    const hasRequest = props.specialRequest.find((item) => item.req === check);
    if (hasRequest) {
      const newRequest = props.specialRequest.filter((item) => {
        return item.req !== check;
      });
      props.setSpecialRequest(newRequest);
      const sum = props.specialRequest.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      props.setTotalPrice(props.totalPrice - sum);
    } else {
      props.setSpecialRequest([
        ...props.specialRequest,
        { ["req"]: check, ["price"]: price },
      ]);
      const sum = props.specialRequest.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      props.setTotalPrice(props.totalPrice + sum);
    }
  };
  const handleCheckStandard = (check, event) => {
    event.preventDefault();
    const hasRequest = props.standardRequest.find(
      (item) => item.standard_req === check
    );
    if (hasRequest) {
      const newRequest = props.standardRequest.filter((item) => {
        return item.standard_req !== check;
      });

      props.setStandardRequest(newRequest);
    } else {
      props.setStandardRequest([
        ...props.standardRequest,
        { ["standard_req"]: check },
      ]);
    }
  };
  return (
    <TabPanel className="second-page">
      <Flex w="740px" className="info-form" direction="column">
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
                  handleCheckStandard("Early check-in", event);
                }}
              >
                Early check-in
              </Checkbox>
              <Checkbox
                value="Late check-out"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheckStandard("Late check-out", event);
                }}
              >
                Late check-out
              </Checkbox>
              <Checkbox
                value="Non-smoking room"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheckStandard("Non-smoking room", event);
                }}
              >
                Non-smoking room
              </Checkbox>
              <Checkbox
                value="A room on the high floor"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheckStandard("A room on the high floor", event);
                }}
              >
                A room on the high floor
              </Checkbox>
              <Checkbox
                value="A quiet room"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheckStandard("A quiet room", event);
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
                  handleCheck("Baby cot", 400, event);
                }}
              >
                Baby cot (+THB 400)
              </Checkbox>
              <Checkbox
                value="Airport transfer"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("Airport transfer", 200, event);
                }}
              >
                Airport transfer (+THB 200)
              </Checkbox>
              <Checkbox
                value="Extra bed"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("Extra bed", 500, event);
                }}
              >
                Extra bed (+THB 500)
              </Checkbox>
              <Checkbox
                value="Extra pillows"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("Extra pillows", 100, event);
                }}
              >
                Extra pillows (+THB 100)
              </Checkbox>
              <Checkbox
                value="Phone chargers and adapters"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("Phone chargers and adapters", 100, event);
                }}
              >
                Phone chargers and adapters (+THB 100)
              </Checkbox>
              <Checkbox
                value="Breakfast"
                _checked={{ color: "black" }}
                onChange={(event) => {
                  handleCheck("Breakfast", 150, event);
                }}
              >
                Breakfast (+150)
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>

        <NextComponent />
      </Flex>
    </TabPanel>
  );
}
export default SpecialRequest;
