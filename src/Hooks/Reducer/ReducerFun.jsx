export const initialState = 0;
export const reducer = (state, action) => {
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
