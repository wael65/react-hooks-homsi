import { useRef, useEffect, useState } from "react";

export default function Ref3() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <h1>Timer - {timer}</h1>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          setTimer(0);
        }}
      >
        Clear Timer
      </button>
    </>
  );
}
