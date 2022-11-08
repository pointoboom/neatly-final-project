import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Img,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import React, { useState } from "react";
function Navbar() {
  const auth = useAuth();
  const { logout } = useAuth();

  return (
    <Box
      color="#F7F7FB"
      w="100%"
      h="100px"
      px="160px"
      py="26px"
      position="sticky"
      top="0"
      background="white"
      zIndex="sticky"
    >
      <Flex>
        <HStack spacing={"42px"}>
          <Image src="./images/logo.svg" alt="Neatly Logo" w="167px" h="45px" />
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            About Neatly
          </Text>
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            Service & Facilities
          </Text>
          <Text
            textAlign="center"
            h="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="400px"
            fontSize="14px"
            textColor="#000000"
          >
            Rooms & Suits
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing={"30px"}>
          <Button
            w="143px"
            h="48px"
            bgColor="#C14817"
            fontSize="16px"
            textAlign="center"
            lineHeight="16px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="600px"
            textColor="#FFFFFF"
            _hover={{ background: "#E76B39" }}
            onClick={() => {
              logout();
            }}
          >
            Log out
          </Button>
          {auth.state.user === null ? (
            <>
              <Text
                textAlign="center"
                lineHeight="16px"
                fontFamily="Open Sans"
                fontStyle="normal"
                fontWeight="600px"
                textColor="#E76B39"
              >
                Log in
              </Text>
              <Button
                w="143px"
                h="48px"
                bgColor="#C14817"
                fontSize="16px"
                textAlign="center"
                lineHeight="16px"
                fontFamily="Open Sans"
                fontStyle="normal"
                fontWeight="600px"
                textColor="#FFFFFF"
                _hover={{ background: "#E76B39" }}
              >
                Book Now
              </Button>
            </>
          ) : (
            <>
              <Img src="./images/Nav/noti.svg"></Img>
              <Avatar
                name="Dan Abrahmov"
                src={auth.state.user.profile_picture}
              />
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
