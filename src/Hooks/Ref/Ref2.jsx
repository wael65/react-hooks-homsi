import { useRef, useEffect } from "react";

export default function Ref2() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Type Your Name</h2>

      <input ref={inputRef} type="text" />
    </>
  );
}
