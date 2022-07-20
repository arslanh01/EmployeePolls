import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginUser } from "../actions/loginUser";

const Nav = (props) => {
  const handleLogout = () => {
    props.dispatch(setLoginUser(null));
  };
  return (
    <nav className="nav" data-testid="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add" data-testid="create-btn">
            Create New Poll
          </Link>
        </li>
        <li onClick={handleLogout} className="logout-btn">
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default connect()(Nav);
