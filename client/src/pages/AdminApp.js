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

import RoomPropertyEdit from "./admins/EditRoom";
function AdminApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerBooking />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reservation/:roomId" element={<ReservationPage />} />
        <Route path="/test" element={<TestStep />} />

        <Route
          path="/bookingsummary/:reserveId"
          element={<BookingSummaryPage />}
        />
        <Route path="/customerbooking" element={<CustomerBooking />} />
        <Route path="/roomproperty" element={<RoomProperty />} />
        <Route path="/roomproperty/createroom" element={<CreateRoom />} />
        <Route
          path="/roomproperty/roompropertyedit/:id"
          element={<RoomPropertyEdit />}
        />
        <Route path="/room-detail/:roomId" element={<RoomDetailPage />} />
        <Route path="/roommanagement" element={<RoomManagementPage />} />

        <Route
          path="/customerbooking/customerbookingdetails/:id"
          element={<CustomerBookingDetails />}
        />

        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/edit-payment-method" element={<EditPaymentPage />} />
      </Routes>
    </div>
  );
}

export default AdminApp;
