import { Routes, Route } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import RoomSearchPage from "./RoomSearchPage";
import LoginPage from "./LoginPage";
// import TestStep from "../components/TestStep";
import ReservationPage from "./ReservationPage";


function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        {/* <Route path="/createorder" element={<CreateOrders />} /> */}
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/test" element={<TestStep />} /> */}
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
