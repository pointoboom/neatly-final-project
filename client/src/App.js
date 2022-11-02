import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import CustomerCarousel from "./components/CustomerCarousel";
// import TestCompoent from "./components/TestCompoent";

function App() {
  return (
    <div className="App">

      <CustomerCarousel/>

    </div>
  );
}

export default App;
