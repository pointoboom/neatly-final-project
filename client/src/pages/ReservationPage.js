import Navbar from "../components/Navbar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import React, { useState } from "react";
import BasicInformation from "../components/ReservationPage/BasicInformmation";
import SpecialRequest from "../components/ReservationPage/SpecialRequest";
import PaymentNethod from "../components/ReservationPage/PaymentMethod";
import BookingDetail from "../components/ReservationPage/BookingDetail";
import { useHotel } from "../contexts/reservation";

function ReservationPage() {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [cardowner, setCardowner] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const { register } = useAuth();
  const auth = useAuth();
  const tab = useHotel();
  const onChangeDate = (value) => {
    setDob(value._d);
  };
  const handleCountry = (value) => {
    setCountry(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      fullname,
      email,
      idnumber,
      cardnum,
      cardowner,
      expdate,
      cvc,
      dob,
      country,
      role: "user",
      profile_picture: "test",
    };
    // console.log(data);
    register(data);
  };

  const bgColorBox = (index) => {
    if (index === 0) {
    }
  };

  return (
    <>
      <Navbar />;
      <Flex
        className="reservation-page"
        // width="100vw"
        // height="100vh"
        fontFamily={"Inter"}
        bgColor="rgba(247, 247, 251, 1)"
        display="flex"
        direction="column"
        align="center"
        justify="flex-start"
        pb="40px"
      >
        <Flex
          display="flex"
          direction="column"
          align="flex-start"
          justify="center"
          // bgColor="pink"
        >
          <Text
            className="Booking"
            fontSize="68px"
            align="center"
            // textColor="rgba(47, 62, 53, 1)"
            fontFamily={"Noto Serif Display"}
            paddingBottom="40px"
            mt="50px"
            // bgColor="pink.200"
          >
            Booking Room
          </Text>

          <Tabs variant="unstyled" index={tab.tabIndex}>
            <TabList
              w="100%"
              h="146px"
              display="flex"
              direction="row"
              align="flex-start"
              justify="center"
              // color="gray"
              // bgColor="pink.300"
            >
              <Tab _selected={{ color: "orange" }}>
                <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor="gray.100"
                  _selected={{ colorScheme: "orange" }}
                >
                  1
                </Button>
                Basic Information
              </Tab>

              <Tab _selected={{ color: "orange" }}>
                <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor={bgColorBox}
                  _selected={{ colorScheme: "orange" }}
                >
                  2
                </Button>
                Special Request
              </Tab>
              <Tab _selected={{ color: "orange" }}>
                <Button
                  // boxSize="66px"
                  mr="15px"
                  bgColor="gray.100"
                  _selected={{ colorScheme: "orange" }}
                >
                  3
                </Button>
                Payment Method
              </Tab>
            </TabList>

            <Flex
              // w="1122px"
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              // bgColor="yellow"
            >
              <TabPanels bgColor="white">
                <BasicInformation />
                <SpecialRequest />
                <PaymentNethod />
              </TabPanels>

              <BookingDetail />
            </Flex>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}

export default ReservationPage;