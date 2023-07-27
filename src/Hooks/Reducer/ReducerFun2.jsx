export const initialState2 = {
  count: 0,
};

export const increment = "increment";
export const decrement = "decrement";
export const reset = "reset";

export const reducer2 = (state, action) => {
  switch (action.type) {
    case increment:
      return { count: state.count + action.payload };
    case decrement:
      return { count: state.count - action.payload };
    case reset:
      return initialState2;
    default:
      return state;
  }
};
