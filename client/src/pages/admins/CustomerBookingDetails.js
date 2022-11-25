import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
// import { SearchIcon } from "@chakra-ui/icons";
// import usePersistedState from "use-persisted-state-hook";
import {} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function CustomerBookingDetails() {
  const params = useParams();
  // console.log(params);
  const [customerBooking, setCustomerBooking] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      `http://localhost:4000/reserve/admin/customerbookingdetails/${params.id}`
    );
    const data = res.data.data.map((data) => {
      const check_in_date = moment(data.check_in_date).format(
        "ddd, DD MMM YYYY"
      );
      const check_out_date = moment(data.check_out_date).format(
        "ddd, DD MMM YYYY"
      );
      const booking_date = moment(data.booking_date).format("ddd, DD MMM YYYY");
      data = { ...data, check_in_date, check_out_date, booking_date };
      return data;
    });
    console.log(data);
    setCustomerBooking(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // #F6F7FC
  return (
    <Flex direction="row" bg="#F6F7FC">
      <Sidebar />
      <Flex w="100%" justifyContent="center" direction="column">
        <Flex direction="column" w="full">
          <Flex
            h="80px"
            bg="white"
            mb="5px"
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex>
              {customerBooking.map((data, index) => {
                {
                  if (index === 0) {
                    return (
                      <Text
                        fontSize="20px"
                        ml="60px"
                        fontWeight="semibold"
                        py="20"
                      >
                        {data.fullname} - {data.type_name}
                      </Text>
                    );
                  }
                }
              })}
              <Text
                fontSize="20px"
                ml="60px"
                fontWeight="normal"
                py="20"
                color="#2A2E3F  "
              ></Text>
            </Flex>
          </Flex>
          <Flex
            justify="center"
            display="flex"
            bg="white"
            direction="column"
            m="10"
            p="10"
          >
            {customerBooking.map((data, index) => {
              {
                if (index === 0) {
                  return (
                    <>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Customer Name
                      </Text>
                      <Text mb="5">{data.fullname}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Guest(s)
                      </Text>
                      <Text mb="5">{data.guest}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Room type
                      </Text>
                      <Text mb="5">{data.type_name}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Amount
                      </Text>
                      <Text mb="5">{data.amount}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Bed type
                      </Text>
                      <Text mb="5">{data.bed_type}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Check-in
                      </Text>
                      <Text mb="5">{data.check_in_date}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Check-out
                      </Text>
                      <Text mb="5">{data.check_out_date}</Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Stay
                      </Text>
                      <Text mb="5">
                        {moment(data.check_out_date).diff(
                          moment(data.check_in_date),
                          "days"
                        )}{" "}
                        night
                      </Text>
                      <Text color="#9AA1B9" fontWeight="semibold">
                        Booking date
                      </Text>
                      <Text mb="5">{data.booking_date}</Text>
                    </>
                  );
                } else {
                  return null;
                }
              }
            })}

            <Flex bg="#F6F7FC" direction="column" mt="5" p="5">
              {customerBooking.map((data, index) => {
                {
                  if (index === 0) {
                    return (
                      <>
                        {" "}
                        <Text p="2" align="end" color="#9AA1B9">
                          Payment Success via - {data.payment_method} *
                          {data.card_number.slice(12, 16)}
                        </Text>
                        <Flex justify="space-between">
                          <Text p="2">{data.type_name} room</Text>
                          <Text p="2" fontWeight="bold">
                            {data.promotion_price *
                              moment(data.check_out_date).diff(
                                moment(data.check_in_date),
                                "days"
                              )}
                            .00
                          </Text>
                        </Flex>
                      </>
                    );
                  }
                }
              })}

              {customerBooking.map((data) => {
                if (data.type === "specialRequest") {
                  if (data.have === "Airport transfer") {
                    return (
                      <Flex justify="space-between">
                        <Text p="2"> {data.have}</Text>
                        <Text p="2" fontWeight="bold">
                          {data.req_price}.00
                        </Text>
                      </Flex>
                    );
                  } else if (data.have === "Breakfast") {
                    return (
                      <Flex justify="space-between">
                        <Text p="2"> {data.have}</Text>
                        <Text p="2" fontWeight="bold">
                          {data.req_price *
                            data.guest *
                            moment(data.check_out_date).diff(
                              moment(data.check_in_date),
                              "days"
                            )}
                          .00
                        </Text>
                      </Flex>
                    );
                  } else {
                    return (
                      <Flex justify="space-between">
                        <Text p="2"> {data.have}</Text>
                        <Text p="2" fontWeight="bold">
                          {data.req_price *
                            moment(data.check_out_date).diff(
                              moment(data.check_in_date),
                              "days"
                            )}
                          .00
                        </Text>
                      </Flex>
                    );
                  }
                }
              })}

              {customerBooking.map((data, index) => {
                {
                  if (index === 0) {
                    return (
                      <>
                        <Flex justify="space-between">
                          <Text p="2">Total</Text>
                          <Text p="2" fontWeight="bold">
                            THB {data.total_price}.00
                          </Text>
                        </Flex>
                      </>
                    );
                  }
                }
              })}
            </Flex>
            <Flex bg="#E4E6ED" direction="column" p="5" mt="10">
              <Text p="2">Additional Request</Text>
              {customerBooking.map((data) => {
                if (data.type === "additionalRequest") {
                  return (
                    <Text p="2" color="#646D89">
                      {data.have}
                    </Text>
                  );
                }
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CustomerBookingDetails;
