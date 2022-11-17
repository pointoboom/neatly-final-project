import { Box, Button, Flex, Input, HStack, VStack, Text } from "@chakra-ui/react";
import SideBar from "./SideBar.js";
function HotelInfo() {
  return (
    <>
      <Flex direction={"row"}>
        <SideBar />
        <Flex direction={"column"}>
          <Box bgColor="#FFFFFF" w="1200px" h="80px" pt="15px"><HStack>
            <Text font-family="Inter" font-weight="600" font-size="20px" fontStyle="normal"
              line-height="150%" letter-spacing="-0.02em" color="#2A2E3F" w="943px" h="30px" pl="60px" pr="16px">
              Hotel Information</Text>
            <Button w="121px" h="48px" bgColor="#C14817" fontSize="16px" textAlign="center"
              lineHeight="16px" fontFamily="Open Sans" fontStyle="normal" fontWeight="600px"
              textColor="#FFFFFF" _hover={{ background: "#E76B39" }}>
              Update</Button></HStack></Box>
          <Flex classname="grey" bgColor="#F6F7FC" w="1200px" h="100%" px="60px" pt="40px">
            <Flex classname="white" bgColor="#FFFFFF" w="1080px" h="747px" px="80px" py="40px"
              justifyContent="flex-start" alignItems="flex-start">
              <VStack>
                <Box justifyContent="flex-start" alignItems="flex-start">
                  <Text font-family="Inter" font-style="normal" font-weight="400" font-size="16px"
                    line-height="150%" pb="4px">Hotel name *</Text>
                  <Input placeholder='  Neatly Hotel' size="16px" w="920px" h="48px" />
                  <Text font-family="Inter" font-style="normal" font-weight="400" font-size="16px" pb="4px"
                    line-height="150%" justifyContent="flex-start" alignItems="flex-start" pt="40px">Hotel description *</Text>
                  <Input placeholder='  Description' size="16px" w="920px" h="264px" />
                  <Text font-family="Inter" font-style="normal" font-weight="400" font-size="16px" pb="8px"
                    line-height="150%" justifyContent="flex-start" alignItems="flex-start" pt="40px">Hotel logo *</Text></Box>
              </VStack></Flex></Flex></Flex>
      </Flex>
    </>)
}
export default HotelInfo;
