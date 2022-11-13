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
import React, { useEffect, useState } from "react";
import BasicInformation from "../components/ReservationPage/BasicInformmation";
import SpecialRequest from "../components/ReservationPage/SpecialRequest";
import PaymentNethod from "../components/ReservationPage/PaymentMethod";
import BookingDetail from "../components/ReservationPage/BookingDetail";
import { useHotel } from "../contexts/reservation";
import axios from "axios";

function ReservationPage() {
  const [user, setUserdata] = useState({
    request: "",
  });
  const [specialRequest, setSpecialRequest] = useState([]);
  const [standardRequest, setStandardRequest] = useState([]);
  const [reserveDetail, setReserveDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const searchDetail = useHotel();
  const { roomId } = useHotel();
  const { register } = useAuth();
  const auth = useAuth();
  const tab = useHotel();
  const getData = async () => {
    const res = await axios.get(
      `http://localhost:4000/auth/${auth.state.user.id}`
    );
    setUserdata({ ...res.data.data[0], ["request"]: [] });
    const result = await axios.get(`http://localhost:4000/rooms/${roomId}`);
    setReserveDetail(result.data.data);
    // setTotalPrice(
    //   Number(reserveDetail[0].promotion_price) * Number(searchDetail.guest)
    // );
  };
  // console.log(user);
  useEffect(() => {
    getData();
  }, []);

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
            textColor="rgba(47, 62, 53, 1)"
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
              color="gray"
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
                  mr="15px"
                  bgColor="gray.100"
                  _selected={{ colorScheme: "orange" }}
                >
                  2
                </Button>
                Special Request
              </Tab>
              <Tab _selected={{ color: "orange" }}>
                <Button
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
                <BasicInformation userData={user} />
                <SpecialRequest
                  userData={user}
                  setdata={setUserdata}
                  specialRequest={specialRequest}
                  setSpecialRequest={setSpecialRequest}
                  standardRequest={standardRequest}
                  setStandardRequest={setStandardRequest}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />

                <PaymentNethod
                  userData={user}
                  setdata={setUserdata}
                  specialRequest={specialRequest}
                  setSpecialRequest={setSpecialRequest}
                  standardRequest={standardRequest}
                  setStandardRequest={setStandardRequest}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  reserveDetail={reserveDetail}
                />
              </TabPanels>

              <BookingDetail
                userData={user}
                specialRequest={specialRequest}
                standardRequest={standardRequest}
                reserveDetail={reserveDetail}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </Flex>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}

export default ReservationPage;
