import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
          <div className="option">SIGN OUT</div>
        ) : (
          // Link to Login Page
          <Link className="option">LOGIN</Link>
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
