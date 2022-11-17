export default function RadioGroupExample() {
  return (
    <div className="default-div">
      <form>
        <input type={"radio"} name="theme" value={"dark"} id="dark" required />
        <label htmlFor="dark">Dark</label>
        <input
          type={"radio"}
          name="theme"
          value={"light"}
          id="light"
          required
        />
        <label htmlFor="light">Light</label>
        <input type={"submit"} value="Submit" />
      </form>
    </div>
  );
}
