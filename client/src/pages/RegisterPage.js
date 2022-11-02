import { Flex, Box, Text, Button } from "@chakra-ui/react";
function RegisterPage() {
  return (
    <Flex direction="row" justify="center" align="center">
      <Flex>
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
        <Flex
          className="register"
          direction="column"
          justify="center"
          align="center"
        >
          <Flex>
            <Button bg="orange.600">Register</Button>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default RegisterPage;
