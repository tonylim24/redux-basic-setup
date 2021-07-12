import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// Redux
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

const Header = ({ currentUser, mockLogin }) => {
  const dispatch = useDispatch();
  // This is similar to componentDidMount. It forces a rerender of the component
  // if changes in currentUser is detected.
  useEffect(() => {
    console.log("header useEffect called.");
  }, [currentUser]);

  return (
    <div className="header">
      {/* We can create navigation using react-router-dom's Link */}
      <div className="options">
        <Link className="option">PLACEHOLDER 1</Link>
        <Link className="option">PLACEHOLDER 2</Link>
        {currentUser ? (
          // Signout
          <div
            className="option"
            onClick={() => dispatch(setCurrentUser(null))}
          >
            SIGN OUT
          </div>
        ) : (
          // Link to Login Page
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

// Connecting to root reducer.
// state variable here is the root reducer
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser: currentUser,
});

export default connect(mapStateToProps)(Header);
