import { useState, useEffect } from "react";

export default function Effect3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mousePosition);
  });
  return (
    <>
      <h2>{x}</h2>
      <h2>{y}</h2>
    </>
  );
}
