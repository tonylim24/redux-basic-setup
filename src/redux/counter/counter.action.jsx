import { CounterActionType } from "./counter.types";

export const increment = () => ({
  // This type must be exactly the same as our action.type in our reducer.
  type: CounterActionType.INCREMENT,
});

export const decrement = () => ({
  // This type must be exactly the same as our action.type in our reducer.
  type: CounterActionType.DECREMENT,
});
