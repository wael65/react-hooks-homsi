import { useReducer } from "react";
import { initialState, reducer } from "./ReducerFun";

const Reducer3 = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count One : {countOne}</h2>
      <button onClick={() => dispatchOne("+")}>+</button>
      <button onClick={() => dispatchOne("-")}>-</button>
      <button onClick={() => dispatchOne("reset")}>Reset</button>
      <p>-----------------------------------------------------</p>
      <h2>count Two : {countTwo}</h2>
      <button onClick={() => dispatchTwo("+")}>+</button>
      <button onClick={() => dispatchTwo("-")}>-</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
};

export default Reducer3;
