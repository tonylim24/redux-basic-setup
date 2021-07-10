import { CounterActionType } from "./counter.types";

const INITIAL_STATE = {
  hidden: false,
  value: 0,
};

// If state is undefined, use INITIAL_STATE as default value.
// This is ES6 syntax. Note: null is a value.
const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        // Always spread out the state, before setting the state with a payload.
        // This ensures re-rendering, since we are passing object.
        ...state,
        value: state.value + 1,
      };
    case CounterActionType.DECREMENT:
      return {
        // Always spread out the state, before setting the state with a payload.
        // This ensures re-rendering, since we are passing object.
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
