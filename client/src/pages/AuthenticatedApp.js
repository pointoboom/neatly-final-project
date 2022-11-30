import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RoomSearchPage from "./RoomSearchPage";
import "../App.css";
import NotFoundPage from "./NotFoundPage";
import ReservationPage from "./ReservationPage";
import BookingSummaryPage from "./BookingSummaryPage";
import RoomDetailPage from "./RoomDetailPage";
import EditProfilePage from "./EditProfilePage";
import EditPaymentPage from "./EditPaymentPage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/reservation/:roomId" element={<ReservationPage />} />
        <Route
          path="/bookingsummary/:reserveId"
          element={<BookingSummaryPage />}
        />
        <Route path="/room-detail/:roomId" element={<RoomDetailPage />} />

        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/edit-payment-method" element={<EditPaymentPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
