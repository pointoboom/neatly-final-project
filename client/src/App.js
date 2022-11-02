import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SearchSection from "./components/SearchSection";
function App() {
  return (
    <div className="App">
      <SearchSection />
    </div>
  );
}

export default App;
