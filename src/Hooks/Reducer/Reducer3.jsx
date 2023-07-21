import { useReducer } from "react";
import { initialState, reducer } from "./ReducerFun";
import {
  initialState2,
  reducer2,
  increment,
  decrement,
  reset,
} from "./ReducerFun2";

const Reducer3 = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer2, initialState2);

  return (
    <div>
      <h2>count One : {countOne}</h2>
      <button onClick={() => dispatchOne("+")}>+</button>
      <button onClick={() => dispatchOne("-")}>-</button>
      <button onClick={() => dispatchOne("reset")}>Reset</button>
      <p>-----------------------------------------------------</p>
      <h2>count Two count: {countTwo.count}</h2>
      <button onClick={() => dispatchTwo({ type: increment, payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatchTwo({ type: decrement, payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatchTwo({ type: reset })}>Reset</button>
    </div>
  );
};

export default Reducer3;
