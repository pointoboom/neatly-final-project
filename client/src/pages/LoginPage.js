import Navbar from "../components/Navbar";
import { Image, Stack, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

function LoginPage() {
  return (
    <>
      <Navbar />;
      <Flex display="flex" direction="row">
        <Flex
          className="picture-part"
          width="50%"
          align="center"
          height="100vh"
          bgImage="url('/images/loginpage/backgroundpic.svg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        ></Flex>
        <Flex
          className="register-part"
          display="flex"
          direction="column"
          align="center"
          justify="center"
          width="50%"
          height="100vh"
          fontFamily={"Inter"}
          bgColor="rgba(247, 247, 251, 1)"
        >
          <Flex
            className="register-box"
            bgColor="rgba(100, 100, 251, 1)"
            width="452px"
            height="452px"
          >
            <Text
              fontSize="68px"
              align="center"
              textColor="rgba(47, 62, 53, 1)"
              fontFamily={"Noto Serif Display"}
              paddingBottom="68px"
            >
              Log In
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default LoginPage;
