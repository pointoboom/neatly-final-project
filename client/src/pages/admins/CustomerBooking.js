import React from "react";
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { SearchIcon } from "@chakra-ui/icons";
import usePersistedState from "use-persisted-state-hook";
import {} from "@chakra-ui/react";
function CustomerBooking() {
  const [customerBooking, setCustomerBooking] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "http://localhost:4000/reserve/admin/customerbooking"
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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex direction="row" h="100vh" bg="#F6F7FC">
      <Sidebar />
      <Flex w="100%" h="100vh" bg="blue" justifyContent="center">
        <Flex direction="column" bg="#F6F7FC" w="full">
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
              <Text fontSize="20px" ml="60px" fontWeight="semibold">
                Customer Booking
              </Text>
            </Flex>
            <Flex>
              <InputGroup>
                <InputLeftElement children={<SearchIcon color="gray.400" />} />
                <Input
                  mr="10"
                  placeholder="Search..."
                  size="md"
                  width="400px"
                />
              </InputGroup>
            </Flex>
          </Flex>

          <Flex align="center" justify="center" display="flex">
            <TableContainer w="1080px" mt="50px">
              <Table variant="simple" size="md" align="center">
                <Thead bg="#CCCCCC" color="gray.800" mt="50px">
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

                <Tbody bg="white"></Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default CustomerBooking;
