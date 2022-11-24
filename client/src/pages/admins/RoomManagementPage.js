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
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import { Tag, Select } from "antd";

function RoomManagementPage() {
  const [roomManagement, setRoomManagement] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms/admin/manage`);

    setRoomManagement(res.data.data);
  };

  const handleChange = async (value, room_no) => {
    const res = await axios.put(
      `http://localhost:4000/rooms/admin/manage?status_id=${value}&room_no=${room_no}`
    );
  };

  const options = [
    {
      label: <Tag color="default">Vacant</Tag>,
      value: "Vacant",
    },
    {
      label: <Tag color="blue">Occupied</Tag>,
      value: "Occupied",
    },
    {
      label: <Tag color="cyan">Assign Clean</Tag>,
      value: "Assign Clean",
    },
    {
      label: <Tag color="red">Assign Dirty</Tag>,
      value: "Assign Dirty",
    },
    {
      label: <Tag color="cyan">Vacant Clean</Tag>,
      value: "Vacant Clean",
    },
    {
      label: <Tag color="gold">Vacant Clean Inspected</Tag>,
      value: "Vacant Clean Inspected",
    },
    {
      label: <Tag color="cyan">Vacant Clean Pick Up</Tag>,
      value: "Vacant Clean Pick Up",
    },
    {
      label: <Tag color="blue">Occupied Clean</Tag>,
      value: "Occupied Clean",
    },
    {
      label: <Tag color="gold">Occupied Clean Inspected</Tag>,
      value: "Occupied Clean Inspected",
    },
    {
      label: <Tag color="red">Occupied Dirty</Tag>,
      value: "Occupied Dirty",
    },
    {
      label: <Tag color="lightgray">Out of Order</Tag>,
      value: "Out of Order",
    },
    {
      label: <Tag color="lightgray">Out of Service</Tag>,
      value: "Out of Service",
    },
    {
      label: <Tag color="lightgray">Out of Inventory</Tag>,
      value: "Out of Inventory",
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  //bg="#F6F7FC"
  return (
    <Flex direction="row" h="full" bg="#F6F7FC">
      <SideBar />
      <Flex w="100%" h="100vh" bg="#F6F7FC" justifyContent="center">
        <Flex direction="column" bg="#F6F7FC" w="full" h="100%">
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
                      return (
                        <Tbody bg="white" key={data.room_no}>
                          <Tr>
                            <Td>{data.room_no}</Td>
                            <Td>{data.type_name}</Td>
                            <Td>{data.bed_type}</Td>

                            <Td>
                              <Select
                                bordered={false}
                                showArrow={false}
                                defaultValue={data.status_name}
                                style={{
                                  width: 180,
                                }}
                                options={options}
                                onChange={(e) => {
                                  handleChange(e, data.room_no);
                                }}
                              />
                            </Td>
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
