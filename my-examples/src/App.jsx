import "./App.css";
import { Routes, Route } from "react-router-dom";
import RadioGroupExample from "./components/RadioGroupExample";
import Home from "./Home";
import DropdownExample from "./components/DropdownExample";

function App() {
  const examples = [
    {
      key: "radiogroup",
      component: <RadioGroupExample />,
    },
    {
      key: "dropdown",
      component: <DropdownExample />,
    },
  ];

  return (
    <div className="App">
      <div className="default-div">
        <Routes>
          <Route index element={<Home examples={examples} />} exact />
          {examples.map((example) => (
            <Route
              key={`link-route-${example.key}`}
              path={example.key}
              element={example.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
