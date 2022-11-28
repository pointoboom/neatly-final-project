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
  Button,
} from "@chakra-ui/react";
import SideBar from "../../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import usePersistedState from "use-persisted-state-hook";
import { useNavigate } from "react-router-dom";

function RoomProperty() {
  const [roomProp, setRoomProp] = usePersistedState("roomstatus", null);
  const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms`);

    setRoomProp(res.data.data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Flex direction="row" bg="#F6F7FC">
      <SideBar />
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
              <Text fontSize="20px" ml="60px" fontWeight="semibold">
                Room & Property
              </Text>
            </Flex>
            <Flex my="20px">
              <InputGroup>
                <InputLeftElement children={<SearchIcon color="gray.400" />} />
                <Input placeholder="Search..." width="400px" />
              </InputGroup>
              <Button
                mr="20px"
                background="#C14817"
                color="white"
                px="50px"
                onClick={() => {
                  navigate("/roomproperty/createroom");
                }}
              >
                + Create Room
              </Button>
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
                        <Tbody
                          bg="white"
                          _hover={{ bg: "gray.100" }}
                          onClick={() => {
                            console.log(data.room_types_id);
                            navigate(`roompropertyedit/${data.room_types_id}`);
                          }}
                        >
                          <Tr>
                            <Td>
                              <Image
                                src={data.main_images}
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
