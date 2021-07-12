import "./App.css";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();

  const mockLogin = (props) => {
    console.log("mockLogin called");
    dispatch(
      setCurrentUser({
        name: "Tony Lim",
        email: "tonolim24@gmail.com",
        ...props,
      })
    );
  };

  return (
    <div className="App">
      <Header mockLogin={mockLogin} />
      <Switch>
        {/* To pass props: use render
          Reference: https://ui.dev/react-router-v4-pass-props-to-components/
        */}
        <Route
          exact
          path="/"
          render={(props) => <Main {...props} mockLogin={mockLogin} />}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

// Grabs currentUser props from user variable.
// Note that we can do this because on index.js we have set the store so it knows where to get and store state.
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  counter: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  // Action to be dispatched.
  // We store in action called setCurrentUser from the global user reducer.
  // We then dispatching the setCurrentUser action that we imported from ./redux/user/user.action
  // and pass the payload.
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
