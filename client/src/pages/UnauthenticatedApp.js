import { Routes, Route } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import RoomSearchPage from "./RoomSearchPage";
import RoomDetailPage from "./RoomDetailPage";
function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        {/* <Route path="/createorder" element={<CreateOrders />} /> */}
        {/* <Route path="*" element={<HomePage />} /> */}
        {/* <Route path="*" element={<LoginPage />} /> */}
        {/* <Route path="/room-detail" element={<RoomDetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
