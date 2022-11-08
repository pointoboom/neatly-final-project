import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Avatar,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineBriefcase } from "react-icons/hi";
import { useAuth } from "../contexts/authentication";
import React, { useState, useEffect } from "react";
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
              <Menu>
                <MenuButton>
                  <Avatar
                    name="Dan Abrahmov"
                    src={auth.state.user.profile_picture}
                  />
                </MenuButton>
                <MenuList color="gray.600">
                  <MenuItem icon={<AiOutlineUser />}>Profile</MenuItem>
                  <MenuItem icon={<AiOutlineCreditCard />}>
                    Payment Method
                  </MenuItem>
                  <MenuItem icon={<HiOutlineBriefcase />}>
                    Booking History
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    icon={<IoIosLogOut />}
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
