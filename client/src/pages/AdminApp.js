import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import "../App.css";
import NotFoundPage from "./NotFoundPage";
import CustomerBooking from "./admins/CustomerBooking";
import RoomProperty from "./admins/RoomProperty";
import RoomManagementPage from "./admins/RoomManagementPage";
import CreateRoom from "./admins/CreateRoom";
import CustomerBookingDetails from "./admins/CustomerBookingDetails";
import HotelInformationPage from "./admins/HotelInformationPage";
import RoomPropertyEdit from "./admins/EditRoom";

function AdminApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerBooking />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customerbooking" element={<CustomerBooking />} />
        <Route path="/roomproperty" element={<RoomProperty />} />
        <Route path="/roomproperty/createroom" element={<CreateRoom />} />
        <Route
          path="/roomproperty/roompropertyedit/:id"
          element={<RoomPropertyEdit />}
        />
        <Route path="/roommanagement" element={<RoomManagementPage />} />
        <Route
          path="/customerbooking/customerbookingdetails/:id"
          element={<CustomerBookingDetails />}
        />
        <Route path="/hotelinfo/:id" element={<HotelInformationPage />} />
      </Routes>
    </div>
  );
}

export default AdminApp;
