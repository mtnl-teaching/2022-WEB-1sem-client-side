import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles.css";

function App() {
  const handleClick = (event) => {
    const pageButtonClicked = event.target.name;
    console.log(pageButtonClicked);
  };

  return (
    <div>
      <nav>
        <button name={"Home"} key={"Home"} onClick={handleClick}>
          Home
        </button>
        <button name={"Contact"} key={"Contact"} onClick={handleClick}>
          Contact
        </button>
        <button name={"About"} key={"About"} onClick={handleClick}>
          About
        </button>
      </nav>
      <Home title="Home" />
      <About title="About" />
      <Contact title="Contact" />
    </div>
  );
}

export default App;
