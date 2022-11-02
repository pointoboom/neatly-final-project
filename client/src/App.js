import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SearchSection from "./components/SearchSection.js";

function App() {
  return (
    <div className="App">
      <SearchSection />
      <header></header>
    </div>
  );
}

export default App;
