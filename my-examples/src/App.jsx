import "./App.css";
import { Routes, Route } from "react-router-dom";
import RadioGroupExample from "./components/RadioGroupExample";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/radiogroup" element={<RadioGroupExample />} />
      </Routes>
    </div>
  );
}

export default App;
