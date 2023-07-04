import { useState } from "react";

export default function State4() {
  const [name, setName] = useState({
    fName: "",
    lName: "",
  });

  const inputName = () => {
    setName({ ...name, fName: "mazen" });
  };
  return (
    <>
      <input
        type="text"
        placeholder="F Name"
        value={name.fName}
        onChange={(e) => setName({ ...name, fName: e.target.value })}
      />
      <input
        type="text"
        placeholder="L Name"
        value={name.lName}
        onChange={(e) => setName({ ...name, lName: e.target.value })}
      />

      <h2>
        {name.fName} {name.lName}
      </h2>
    </>
  );
}
