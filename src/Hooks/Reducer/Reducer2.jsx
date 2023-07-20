import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Reducer2;
