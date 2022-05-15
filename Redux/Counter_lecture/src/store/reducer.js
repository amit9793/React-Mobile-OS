import { ADD_TODO } from "./actionType";

const init = { counter: 0 };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        counter: state.counter + payload,
      };
    default:
      return state;
  }
};
