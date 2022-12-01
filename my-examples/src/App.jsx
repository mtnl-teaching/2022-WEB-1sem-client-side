import "./App.css";
import { Routes, Route } from "react-router-dom";
import RadioGroupExample from "./components/RadioGroupExample";
import Home from "./Home";
import DropdownExample from "./components/DropdownExample";

function App() {
  return (
    <div className="App">
      <div className="default-div">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/radiogroup" element={<RadioGroupExample />} />
          <Route path="/dropdown" element={<DropdownExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
