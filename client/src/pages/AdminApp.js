import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import RoomSearchPage from "./RoomSearchPage";
import LoginPage from "./LoginPage";
import TestStep from "../components/TestStep";
import "../App.css";
import NotFoundPage from "./NotFoundPage";
import ReservationPage from "./ReservationPage";
import BookingSummaryPage from "./BookingSummaryPage";
import CustomerBooking from "./admins/CustomerBooking";
import RoomProperty from "./admins/RoomProperty";
import RoomDetailPage from "./RoomDetailPage";
import RoomManagementPage from "./admins/RoomManagementPage";
import CreateRoom from "./admins/CreateRoom";
import CustomerBookingDetails from "./admins/CustomerBookingDetails";
import EditProfilePage from "./EditProfilePage";
import EditPaymentPage from "./EditPaymentPage";
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
