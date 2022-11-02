import { Routes, Route } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/createorder" element={<CreateOrders />} /> */}
        {/* <Route path="*" element={<HomePage />} /> */}
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
