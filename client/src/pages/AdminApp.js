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
function AdminApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/room-detail/:roomId" element={<RoomDetailPage />} />
        <Route path="/roommanagement" element={<RoomManagementPage />} />
      </Routes>
    </div>
  );
}

export default AdminApp;
