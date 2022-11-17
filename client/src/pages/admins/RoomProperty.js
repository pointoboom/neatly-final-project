import React from "react";
import {
  Flex,
  Text,
  Input,
  Image,
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
import SideBar from "../../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import usePersistedState from "use-persisted-state-hook";

function RoomProperty() {
  const [roomProp, setRoomProp] = usePersistedState("roomstatus", null);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms`);

    setRoomProp(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex direction="row" h="100vh" bg="#F6F7FC">
      <SideBar />
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
                Room Management
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
                    <Th>Image</Th>
                    <Th>Room type</Th>
                    <Th>Price</Th>
                    <Th>Promotion Price</Th>
                    <Th>Guest</Th>
                    <Th>Bed Type</Th>
                    <Th>Room Size</Th>
                  </Tr>
                </Thead>
                {roomProp == null
                  ? null
                  : roomProp.map((data) => {
                      // console.log(data);
                      return (
                        <Tbody bg="white">
                          <Tr>
                            <Td>
                              <Image
                                src={data.main_image_url}
                                w="200px"
                                h="100px"
                                objectFit="cover"
                                borderRadius="5px"
                              />
                            </Td>
                            <Td>{data.type_name}</Td>
                            <Td>{data.price}</Td>
                            <Td>{data.promotion_price}</Td>
                            <Td>{data.guest}</Td>
                            <Td>{data.bed_type}</Td>
                            <Td>{data.room_size}</Td>
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

export default RoomProperty;
