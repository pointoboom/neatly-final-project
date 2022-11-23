import usePersistedState from "use-persisted-state-hook";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
const hotelContext = React.createContext();

function HotelProvider(props) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = usePersistedState("checkIn", null);
  const [checkOut, setCheckOut] = usePersistedState("checkOut", null);
  const [room, setRoom] = usePersistedState("room", 2);
  const [guest, setGuest] = usePersistedState("guest", 3);
  const [tabIndex, setTabIndex] = useState(0);
  const [roomId, setRoomId] = usePersistedState("roomID", null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isProcess, setProcess] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [reserveId, setReserveId] = useState("");
  const [roomDetails, setRoomDetails] = useState([]);

  const handleSetRoomId = (id) => {
    setRoomId(id);
  };
  const handleTabsChange = () => {
    setTabIndex(tabIndex + 1);
  };

  const handleTabsBack = () => {
    if (tabIndex === 0) {
      navigate("/search");
      // setTabIndex(1);
    } else {
      setTabIndex(tabIndex - 1);
    }
  };
  const reserveRooms = async (data) => {
    onOpen();
    const result = await axios.post("http://localhost:4000/reserve/", data);
    if (result) {
      setProcess(false);
      if (result.data.success === true) {
        setSuccess(true);
      }
    }
    setReserveId(result.data.reservationsid);
  };

  const getData = async () => {
    const res = await axios.get(
      `http://localhost:4000/rooms?startdate=${checkIn}&enddate=${checkOut}`
    );

    const data = res.data.data.map((item) => {
      if (res.data.dissableroom.length === 0) {
        return item;
      } else {
        for (let i of res.data.dissableroom) {
          if (i.room_types_id === item.room_types_id) {
            item = { ...item, disable: true };
            return item;
          } else if (
            res.data.dissableroom.indexOf(i) ===
            res.data.dissableroom.length - 1
          ) {
            item = { ...item, disable: false };
            return item;
          } else {
            continue;
          }
        }
      }
    });
    setRoomDetails(data);
  };
  return (
    <hotelContext.Provider
      value={{
        // hotel,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        room,
        setRoom,
        guest,
        setGuest,
        tabIndex,
        handleTabsBack,
        handleTabsChange,
        roomId,
        setRoomId,
        handleSetRoomId,
        reserveRooms,
        setTabIndex,
        isOpen,
        onClose,
        isProcess,
        isSuccess,
        setProcess,
        setSuccess,
        reserveId,
        roomDetails,
        getData,
      }}
    >
      {props.children}
    </hotelContext.Provider>
  );
}

// this is a hook that consume hotelContext
const useHotel = () => React.useContext(hotelContext);

export { HotelProvider, useHotel };
