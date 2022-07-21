import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginUser } from "../actions/loginUser";

const Login = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    console.log(window.location);
    setUser(e.target.value);
  };
  const handleLogin = () => {
    props.dispatch(setLoginUser(user));
    if (window.location.pathname === "/") {
      navigate("/");
    }
  };
  return (
    <div className="center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&usqp=CAU"
        alt="login"
      />
      <br />
      <h3>Please login as a user to continue</h3>
      <br />
      <select onChange={handleChange} data-testid="select">
        <option value="None"></option>
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
      <br />
      <br />
      <button onClick={handleLogin} disabled={user === ""} data-testid="login">
        Login
      </button>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users),
  };
};

export default connect(mapStateToProps)(Login);
