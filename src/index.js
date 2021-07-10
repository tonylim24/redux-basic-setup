import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * REDUX SETUP (src/redux/counter)
 * 1. Store: the globalized state.
 * 2. Action: Action that redux will listen to, to perform an action.
 * 3. Reducer: Describes how action will transform from current state to the next state.
 * 4. Dispatch: Dispatch the action to the reducer.
 */

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
