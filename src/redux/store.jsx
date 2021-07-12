import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Setting up Middleware
// const middlewares = [logger];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
