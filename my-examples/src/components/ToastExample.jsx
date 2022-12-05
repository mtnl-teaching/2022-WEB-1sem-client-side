import { useState } from "react";

export default function Example() {
  // condition state
  const [kvm, setKvm] = useState(0);
  const [projector, setProjecter] = useState(false);

  const booking = { kvm, projector };

  return (
    <>
      <input
        type={"number"}
        placeholder={"kvm"}
        value={kvm}
        onChange={(event) => setKvm(event.target.value)}
      />
      <label htmlFor="projector">Projektor</label>
      <input
        id="projector"
        type={"checkbox"}
        checked={projector}
        onChange={(event) => setProjecter(event.target.checked)}
      />
    </>
  );
}
