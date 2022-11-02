import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Service from "./components/Service.js";

function App() {
  return (
    <div className="App">
      <Service/>
      <header></header>
    </div>
  );
}

export default App;
