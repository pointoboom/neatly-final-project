// import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import AdminApp from "./pages/AdminApp";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? (
    auth.isAdmin === true ? (
      <AdminApp />
    ) : (
      <AuthenticatedApp />
    )
  ) : (
    <UnauthenticatedApp />
  );
}

export default App;
