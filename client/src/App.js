// import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SliderImage from "./components/SliderImage";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";

function App() {
  return <UnauthenticatedApp />;
}

export default App;
