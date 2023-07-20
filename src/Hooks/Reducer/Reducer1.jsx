import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => state + action;

const Reducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch(1)}>Increase</button>
    </div>
  );
};

export default Reducer1;
