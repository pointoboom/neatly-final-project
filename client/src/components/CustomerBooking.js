import React from "react";
import {
  Flex,
  Text,
  Input,
  VStack,
  StackDivider,
  Spacer,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SideBar from "./Sidebar.js";
import { useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";
import { SearchIcon } from "@chakra-ui/icons";
import usePersistedState from "use-persisted-state-hook";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function CustomerBooking() {
  const [customerBooking, setCustomerBooking] = usePersistedState(
    "booking",
    null
  );
  const getData = async () => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    console.log(userdata);
    const res = await axios.get(
      `http://localhost:4000/reserve/customerbooking/${userdata.id}`
    );
    const data = res.data.data.map((data) => {
      const check_in_date = moment(data.check_in_date).format("dd,DD MMM YYYY");
      const check_out_date = moment(data.check_out_date).format(
        "dd,DD MMM YYYY"
      );

      data = { ...data, check_in_date, check_out_date };
      return data;
    });
    setCustomerBooking(data);
    console.log(data);
    console.log(customerBooking);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex direction="row">
      <SideBar />
      <Flex direction="column" my="10">
        <Flex mb="10">
          <Text ml="20" fontWeight="semibold">
            Customer Booking
          </Text>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="gray.400" />} />
            <Input mr="10" placeholder="Search..." size="md" width="400px" />
          </InputGroup>
        </Flex>
        <Flex bg="#F6F7FC" align="center" justify="center" display="flex">
          {/* <Flex direction="column" m="10">
            <Flex p="2" bg="#E4E6ED">
              <Text mx="8">Customer Name</Text>
              <Text mx="8">Guest(s)</Text>
              <Text mr="24">Roomtype</Text>
              <Text mx="8">Amount</Text>
              <Text mr="24">Bed Type</Text>
              <Text mr="24">Check-in</Text>
              <Text mr="24">Check-out</Text>
            </Flex> */}
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Customer Name</Th>
                  <Th>Guest(s)</Th>
                  <Th>Roomtype</Th>
                  <Th>Amount</Th>
                  <Th>Bed-Type</Th>
                  <Th>Check-in</Th>
                  <Th>Check-out</Th>
                </Tr>
              </Thead>
              {customerBooking.map((data) => {
                return (
                  // <Flex h="80px" align="center" pl="8" bg="white">
                  //   <Text width="200px">{data.fullname}</Text>
                  //   <Text width="70px">{data.guest}</Text>
                  //   <Text width="190px">{data.type_name}</Text>
                  //   <Text width="75px">{data.total_price}</Text>
                  //   <Text width="160px">{data.bed_type}</Text>
                  //   <Text width="160px">{data.check_in_date}</Text>
                  //   <Text>{data.check_out_date}</Text>
                  // </Flex>
                  <Tbody bg="white">
                    <Tr>
                      <Td>{data.fullname}</Td>
                      <Td>{data.guest}</Td>
                      <Td>{data.type_name}</Td>
                      <Td>{data.total_price}</Td>
                      <Td>{data.bed_type}</Td>
                      <Td>{data.check_in_date}</Td>
                      <Td>{data.check_out_date}</Td>
                    </Tr>
                  </Tbody>
                );
              })}
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default CustomerBooking;
