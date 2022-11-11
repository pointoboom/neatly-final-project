import usePersistedState from "use-persisted-state-hook";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const hotelContext = React.createContext();

function HotelProvider(props) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = usePersistedState("checkIn", null);
  const [checkOut, setCheckOut] = usePersistedState("checkOut", null);
  const [room, setRoom] = usePersistedState("room", 2);
  const [guest, setGuest] = usePersistedState("guest", 3);
  const [tabIndex, setTabIndex] = useState(0);
  const [roomId, setRoomId] = usePersistedState("roomID", null);
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
      }}
    >
      {props.children}
    </hotelContext.Provider>
  );
}

// this is a hook that consume hotelContext
const useHotel = () => React.useContext(hotelContext);

export { HotelProvider, useHotel };
