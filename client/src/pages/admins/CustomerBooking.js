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
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import { SearchIcon } from "@chakra-ui/icons";
import {} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CustomerBooking() {
  const [customerBooking, setCustomerBooking] = useState([]);
  const [keywords, setKeyWords] = useState("");
  console.log(keywords);
  const getData = async (search) => {
    const res = await axios.get(
      `http://localhost:4000/reserve/admin/customerbooking?keywords=${search}`
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

  const handleChange = (e) => {
    setKeyWords(e);
  };

  useEffect(() => {
    getData(keywords);
  }, [keywords]);

  const navigate = useNavigate();

  return (
    <Flex direction="row" bg="#F6F7FC">
      <Sidebar />
      <Flex w="100%" bg="blue" justifyContent="center">
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
              <Text fontSize="20px" ml="60px" fontWeight="semibold" py="20">
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
                  // onChange={(e) => debounce(handleChange(e.target.value), 1000)}
                  onChange={(e) => handleChange(e.target.value)}
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
                {customerBooking ? (
                  <>
                    {customerBooking.map((data) => {
                      return (
                        <Tbody
                          bg="white"
                          _hover={{ bg: "gray.100" }}
                          onClick={() => {
                            console.log(data.reservation_id);
                            navigate(
                              `/customerbooking/customerbookingdetails/${data.reservation_id}`
                            );
                          }}
                        >
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
                  </>
                ) : null}

                <Tbody bg="white"></Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CustomerBooking;
