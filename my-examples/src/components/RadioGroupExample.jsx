import { useState } from "react";

export default function RadioGroupExample() {
  const [theme, setTheme] = useState("");

  const switchTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="default-div">
      <form>
        <input
          checked={theme === "dark"}
          type={"radio"}
          name="theme"
          value={"dark"}
          id="dark"
          onChange={switchTheme}
          required
        />
        <label htmlFor="dark">Dark</label>
        <input
          checked={theme === "light"}
          type={"radio"}
          name="theme"
          value={"light"}
          id="light"
          onChange={switchTheme}
          required
        />
        <label htmlFor="light">Light</label>
        <input type={"submit"} value="Submit" />
      </form>
    </div>
  );
}
