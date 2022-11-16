import { Routes, Route } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import RoomSearchPage from "./RoomSearchPage";
import RoomDetailPage from "./RoomDetailPage";
import LoginPage from "./LoginPage";
<<<<<<< HEAD
// import TestStep from "../components/TestStep";
import ReservationPage from "./ReservationPage";
import BookingSummaryPage from "./BookingSummaryPage";

import RoomDetailPage from "./RoomDetailPage";

=======
>>>>>>> 6534462bb25625a0aa2ff5cc51135fd9d38f0189
function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        {/* <Route path="/createorder" element={<CreateOrders />} /> */}
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/test" element={<TestStep />} /> */}
<<<<<<< HEAD
        <Route path="*" element={<LoginPage />} />
        <Route path="/bookingsummary" element={<BookingSummaryPage />} />
=======
>>>>>>> 6534462bb25625a0aa2ff5cc51135fd9d38f0189
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path="/room-detail/:roomId" element={<RoomDetailPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
