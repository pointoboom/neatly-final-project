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
      {/* <TestCompoent/> */}

      {/* <Text
        fontSize="5xl"
        fontWeight="400px"
        fontFamily={("Noto Serif Display", "serif")}
      >
        Neatly Hotel
      </Text>
      <Text>TEST TESTSTSTSTSTSTSTSTSTS</Text>
      <Text
        fontWeight="bold
      "
      >
        Service & Facilities
      </Text>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
