import { useState } from "react";
import { connect } from "react-redux";
import { setLoginUser } from "../actions/loginUser";

const Login = (props) => {
  console.log(props);
  const [user, setUser] = useState();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = () => {
    props.dispatch(setLoginUser(user));
  };
  return (
    <div>
      <select onChange={handleChange}>
        {props.users
          ? props.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })
          : ""}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users),
  };
};

export default connect(mapStateToProps)(Login);
