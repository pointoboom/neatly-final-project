import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import usePersistedState from "use-persisted-state-hook";
import { useNavigate } from "react-router-dom";
function CreateRoom() {
  const [roomProp, setRoomProp] = usePersistedState("roomstatus", null);
  const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms`);

    setRoomProp(res.data.data);
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

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
                Create New Room
              </Text>
            </Flex>
            <Flex my="20px">
              <Button
                mr="20px"
                background="white"
                borderColor="#C14817"
                border="1px"
                color="#C14817"
                px="50px"
                onClick={() => {
                  navigate("/roomproperty");
                }}
              >
                Cancel
              </Button>
              <Button
                mr="20px"
                background="#C14817"
                color="white"
                px="50px"
                onClick={() => {
                  navigate("/roomproperty/createroom");
                }}
              >
                Create
              </Button>
            </Flex>
          </Flex>

          <Flex align="center" justify="center" display="flex"></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CreateRoom;
