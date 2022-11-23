import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles.css";

function App() {
  const [page, setPage] = useState("Home");

  const handleClick = (event) => {
    const pageButtonClicked = event.target.name;
    setPage(pageButtonClicked);
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
      {page === "Home" && <Home title="Home" />}
      {page === "About" && <About title="About" />}
      {page === "Contact" && <Contact title="Contact" />}
    </div>
  );
}

export default App;
