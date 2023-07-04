import { useState } from "react";

export default function State3() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    setColor(!color);
    // setColor(true);
  };
  return (
    <>
      <h2 className={color ? "red" : ""}>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
