import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useHotel } from "../../contexts/reservation";
function NextComponent() {
  const { handleTabsChange, handleTabsBack } = useHotel();

  return (
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
  );
}
export default NextComponent;
