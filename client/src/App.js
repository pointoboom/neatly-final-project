import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Text fontSize="5xl">Neatly Hotel</Text>
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
      </header>
    </div>
  );
}

export default App;
