import { Flex } from "@chakra-ui/react";
import SideBar from "../../components/Sidebar";
import { useAuth } from "../../contexts/authentication";
function RoomManagement() {
  const auth = useAuth();
  console.log(auth.state);
  return (
    <Flex direction="row">
      <SideBar />
    </Flex>
  );
}

export default RoomManagement;