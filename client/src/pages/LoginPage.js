import Navbar from "../components/Navbar";
import { Input, Text, Flex, Button, Link } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
<<<<<<< HEAD
import { useAuth } from "../contexts/authentication";
import { useState } from "react";
=======
>>>>>>> 2fefb6c (feat: (UI) login page)

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username,
      password,
    });
    console.log(username);
    console.log(password);
  };

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2fefb6c (feat: (UI) login page)
            display="flex"
            direction="column"
            align="flex-start"
            justify="flex-start"
<<<<<<< HEAD
            width="452px"
            height="600px"
          >
            <Text
              className="login"
=======
            bgColor="rgba(100, 100, 251, 1)"
=======
>>>>>>> 2fefb6c (feat: (UI) login page)
            width="452px"
            height="600px"
          >
            <Text
<<<<<<< HEAD
>>>>>>> f93b2cd (feat: login page test)
=======
              className="login"
>>>>>>> 2fefb6c (feat: (UI) login page)
              fontSize="68px"
              align="center"
              textColor="rgba(47, 62, 53, 1)"
              fontFamily={"Noto Serif Display"}
              paddingBottom="68px"
            >
              Log In
            </Text>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2fefb6c (feat: (UI) login page)

            <Flex
              className="input"
              display="flex"
              direction="column"
              align="flex-start"
              justify="flex-start"
              fontFamily={"Inter"}
            >
              <FormControl>
                <FormLabel fontSize="16px">Username or Email</FormLabel>
                <Input
                  type="email"
                  fontSize="16px"
                  placeholder="Enter your username or email"
                  mb="40px"
<<<<<<< HEAD
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </FormControl>

              <FormLabel fontSize="16px">Password</FormLabel>
              <Input
                type="password"
                fontSize="16px"
                placeholder="Enter your password"
                mb="40px"
                value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
              />
=======
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="16px">Password</FormLabel>
                <Input
                  type="password"
                  fontSize="16px"
                  placeholder="Enter your password"
                  mb="40px"
                />
              </FormControl>
>>>>>>> 2fefb6c (feat: (UI) login page)

              <Button
                fontFamily={"Open Sans"}
                bg="orange.600"
                color="white"
                width="450px"
                mb="10px"
                type="submit"
                _hover={{ background: "rgba(193, 72, 23, 1)" }}
<<<<<<< HEAD
                onClick={(event) => {
                  handleSubmit(event);
                }}
=======
>>>>>>> 2fefb6c (feat: (UI) login page)
              >
                Log In
              </Button>

              <Text fontSize="16px" mb="10px" color="rgba(100, 109, 137, 1)">
                Don’t have an account yet?
                <Link
                  fontFamily={"Open Sans"}
                  color="rgba(193, 72, 23, 1)"
                  href="/register"
                  paddingLeft="10px"
                >
                  Register
                </Link>
              </Text>
            </Flex>
<<<<<<< HEAD
=======
>>>>>>> f93b2cd (feat: login page test)
=======
>>>>>>> 2fefb6c (feat: (UI) login page)
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default LoginPage;
