import { connect } from "react-redux";
import { useEffect, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counter/counter.action";
import { setCurrentUser } from "../../redux/user/user.action";

import axios from "axios";

const Main = ({ currentUser, counter, mockLogin }) => {
  const [listings, setListings] = useState([]);

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

  useEffect(() => {
    async function getDataFromAPI() {
      const request = await axios.get(
        "https://u988lf8sne.execute-api.us-west-2.amazonaws.com/development/api/listings/all"
      );
      // console.log("request.data.listings: ", request.data.listings);
      setListings(request.data.listings);
      return request;
    }
    getDataFromAPI();
  }, []);

  console.log("listing state: ", listings);

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
