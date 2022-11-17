import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../contexts/authentication";
function RoomManagement() {
  const auth = useAuth();
  console.log(auth.state);
  return (
    <Flex direction="row">
      <Sidebar />
    </Flex>
  );
}

export default RoomManagement;
