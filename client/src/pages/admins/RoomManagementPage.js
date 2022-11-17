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
import SideBar from "../../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import usePersistedState from "use-persisted-state-hook";
import {} from "@chakra-ui/react";

function RoomManagementPage() {
  const [roomManagement, setRoomManagement] = usePersistedState(
    "roomstatus",
    null
  );
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms/admin/manage`);

    setRoomManagement(res.data.data);
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
                    <Th>Room no.</Th>
                    <Th>Room type</Th>
                    <Th>Bed Type</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                {roomManagement == null
                  ? null
                  : roomManagement.map((data) => {
                      // console.log(data);
                      return (
                        <Tbody bg="white">
                          <Tr>
                            <Td>{data.room_no}</Td>
                            <Td>{data.type_name}</Td>
                            <Td>{data.bed_type}</Td>
                            <Td>{data.status_name}</Td>
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

export default RoomManagementPage;
