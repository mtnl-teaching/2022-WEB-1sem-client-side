import { useEffect, useState } from "react";

export default function DropdownExample() {
  const [timeslot, setTimeslot] = useState("");

  const handleChange = (event) => {
    setTimeslot(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Selected time: {timeslot}</p>
      <br></br>
      <form>
        <label htmlFor="timeslots">Choose a time:</label>

        <select id="timeslots" value={timeslot} onChange={handleChange}>
          <option disabled value={""}>
            -- Choose time --
          </option>
          <option value="8.30 - 12.00">8.30 - 12.00</option>
          <option value="12.30 - 16.00">12.30 - 16.00</option>
        </select>
      </form>
    </div>
  );
}
