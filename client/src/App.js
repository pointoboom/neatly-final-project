import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SliderImage from "./components/SliderImage";
import About from "./components/About";

import CustomerCarousel from "./components/CustomerCarousel";
// import TestCompoent from "./components/TestCompoent";

function App() {
  return (
    <div className="App">
      <About />
      <SliderImage />

      <CustomerCarousel/>

    </div>
  );
}

export default App;
