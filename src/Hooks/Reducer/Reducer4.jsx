import { useReducer } from "react";

const initialState3 = {
  firstCount: 0,
};

const increment = "increment";
const decrement = "decrement";

const reducer3 = (state, action) => {
  switch (action.type) {
    case increment:
      return { firstCount: state.firstCount + action.value };
    case decrement:
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState3;
    default:
      return state;
  }
};

const Reducer4 = () => {
  const [count3, dispatch3] = useReducer(reducer3, initialState3);

  return (
    <div>
      <h2>count One : {count3.firstCount}</h2>
      <button onClick={() => dispatch3({ type: increment, value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch3({ type: decrement, value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch3({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer4;
