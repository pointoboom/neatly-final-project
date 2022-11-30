import { Routes, Route } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import RoomSearchPage from "./RoomSearchPage";
import LoginPage from "./LoginPage";
import BookingSummaryPage from "./BookingSummaryPage";
import RoomDetailPage from "./RoomDetailPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/bookingsummary" element={<BookingSummaryPage />} />
        <Route path="/room-detail/:roomId" element={<RoomDetailPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
