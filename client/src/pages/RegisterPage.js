import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
function RegisterPage() {
  return (
    <>
      <Navbar />
      <Flex
        className="register"
        direction="row"
        justify="center"
        align="center"
        bgImage="url('/images/hero_section.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        pt="60px"
      >
        <Flex
          className="register-container"
          bg="white"
          p="80px"
          direction="column"
        >
          <Flex className="register-title">
            <Text
              fontFamily={"Noto Serif"}
              fontSize="70px"
              color="grey.800"
              fontStyle="500"
              mb="80px"
            >
              Register
            </Text>
          </Flex>
          <Flex className="info-form"></Flex>
          <Flex className="card-form" direction="column" mb="60px">
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
            <Flex mb="40px">
              <Flex direction="column" mr="50px">
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
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
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
                  Card Owner
                </Text>
                <Input
                  placeholder="Enter your card name"
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
            </Flex>
            <Flex>
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
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
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
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="register-btn" direction="column">
            <Flex>
              <Button
                bg="orange.600"
                color="white"
                width="550px"
                mb="10px"
                _hover={{ background: "#E76B39" }}
              >
                Register
              </Button>
            </Flex>
            <Flex>
              <Text mr="10px">Already have an account?</Text>
              <Text color="orange.500">Login</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default RegisterPage;
