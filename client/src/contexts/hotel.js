import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const hotelContext = React.createContext();

function HotelProvider(props) {
  const [hotel, setHotel] = useState({
    search: { checkIn: null, checkOut: null, room: null, guest: null },
  });
  const [search, setSearch] = useState({
    checkIn: "",
    checkOut: null,
    room: 1,
    guest: 2,
  });
  const navigate = useNavigate();

  const getCheckIn = (data) => {
    setSearch({ ...search, checkIn: data });
  };
  const getCheckOut = (data) => {
    setSearch({ ...search, checkOut: data });
  };
  const getRoom = (data, counter) => {
    setSearch({ ...search, room: data });
  };
  const getGuest = (data) => {
    setSearch({ ...search, guest: data });
  };

  

  console.log(search);

  return (
    <hotelContext.Provider
      value={{
        search,
        getCheckIn,
        getCheckOut,
        getRoom,
        getGuest,
      }}
    >
      {props.children}
    </hotelContext.Provider>
  );
}

// this is a hook that consume hotelContext
const useHotel = () => React.useContext(hotelContext);

export { HotelProvider, useHotel };
