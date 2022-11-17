import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import usePersistedState from "use-persisted-state-hook";
import { useHotel } from "./reservation";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const tab = useHotel();
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  const [emailRegistered, setEmailRegis] = useState(false);
  const [loginfail, setLoginSuccess] = useState(true);
  const [isAdmin, setIsAdmin] = usePersistedState("admin", false);
  let isEmailRegistered = false;
  const navigate = useNavigate();
  // make a login request
  const login = async (data) => {
    const result = await axios.post("http://localhost:4000/auth/login", data);
    if (result.data.success === true) {
      const token = result.data.token;
      localStorage.setItem("token", token);
      const DataFromToken = jwtDecode(token);
      setState({ ...state, user: DataFromToken });
      setLoginSuccess(true);
      if (result.data.role === "admin") {
        setIsAdmin(true);
        navigate("/");
      } else {
        navigate("/");
      }
    } else {
      setLoginSuccess(false);
    }
  };

  // register the user
  const register = async (data) => {
    const result = await axios.post(
      "http://localhost:4000/auth/register",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (result.data.success === true) {
      navigate("/");
    } else {
      setEmailRegis(true);
    }
  };

  // clear the token in localStorage and the user data
  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
    setIsAdmin(false);
    tab.setTabIndex(0);
    navigate("/login");
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        isAuthenticated,
        isEmailRegistered,
        emailRegistered,
        loginfail,
        isAdmin,
        setLoginSuccess,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
