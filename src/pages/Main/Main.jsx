import { connect } from "react-redux";
import { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counter/counter.action";
import { setCurrentUser } from "../../redux/user/user.action";

const Main = ({ currentUser, counter, mockLogin, mockLogout }) => {
  // Get user and counter value through react-redux connect's mapStateToProps.

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  // ComponentDidMount like on user.
  useEffect(() => {
    console.log("useEffect called");
  }, [currentUser]);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => incrementCounter()}>+</button>
      <button onClick={() => decrementCounter()}>-</button>

      {currentUser ? (
        <button onClick={() => dispatch(setCurrentUser(null))}>Logout</button>
      ) : (
        <button onClick={() => mockLogin()}>Login</button>
      )}

      {currentUser ? <h3>User: {currentUser.name}</h3> : <h3>Please Login.</h3>}
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
