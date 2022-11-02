// import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SliderImage from "./components/SliderImage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
