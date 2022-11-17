import Navbar from "../components/Navbar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Icon,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import React, { useEffect, useState } from "react";
import BasicInformation from "../components/ReservationPage/BasicInformation";
import SpecialRequest from "../components/ReservationPage/SpecialRequest";
import PaymentMethod from "../components/ReservationPage/PaymentMethod";
import BookingDetail from "../components/ReservationPage/BookingDetail";
import { useHotel } from "../contexts/reservation";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import jwtDecode from "jwt-decode";

function ReservationPage() {
  const navigate = useNavigate();
  const params = useParams();
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
  const { onClose } = useHotel();
  const auth = useAuth();
  const tab = useHotel();
  const getData = async () => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    const res = await axios.get(`http://localhost:4000/auth/${userdata.id}`);
    setUserdata({ ...res.data.data[0], ["request"]: [] });
    const result = await axios.get(
      `http://localhost:4000/rooms/${params.roomId}`
    );
    setReserveDetail(result.data.data);
  };

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

                <PaymentMethod
                  userData={user}
                  setdata={setUserdata}
                  specialRequest={specialRequest}
                  setSpecialRequest={setSpecialRequest}
                  standardRequest={standardRequest}
                  setStandardRequest={setStandardRequest}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  reserveDetail={reserveDetail}
                  roomId={params.roomId}
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
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal
          isOpen={tab.isOpen}
          isCentered
          onClose={onClose}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent pt="50px" pl="50px">
            <ModalBody display="flex" direction="row" alignItems="center">
              {tab.isProcess === true ? (
                <>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="orange.500"
                    size="xl"
                    mr="40px"
                  />
                  <Text fontFamily={"Inter"} textColor="rgba(47, 62, 53, 1)">
                    Payment Processing
                  </Text>
                </>
              ) : tab.isSuccess === true ? (
                <>
                  <Icon
                    w={12}
                    h={12}
                    as={AiOutlineCheckCircle}
                    color="green"
                    mr="40px"
                  />
                  <Text fontFamily={"Inter"} textColor="rgba(47, 62, 53, 1)">
                    Payment Complete
                  </Text>
                </>
              ) : (
                <>
                  <Icon
                    w={12}
                    h={12}
                    as={AiOutlineCloseCircle}
                    color="red"
                    mr="40px"
                  />
                  <Text fontFamily={"Inter"} textColor="rgba(47, 62, 53, 1)">
                    Payment fail. Please check credit card detail
                  </Text>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              {tab.isProcess === false ? (
                <>
                  <Button
                    backgroundColor="orange.600"
                    mr={3}
                    onClick={() => {
                      onClose();
                      if (tab.isSuccess === true) {
                        navigate(`/bookingsummary/${tab.reserveId}`);
                        tab.setProcess(true);
                        tab.setSuccess(false);
                        tab.setTabIndex(0);
                        onClose();
                      } else {
                        tab.setProcess(true);
                        tab.setSuccess(false);
                        onClose();
                      }
                    }}
                    textColor="white"
                    _hover={{ background: "#E76B39" }}
                    fontFamily={"Inter"}
                  >
                    Close
                  </Button>
                </>
              ) : null}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default ReservationPage;
