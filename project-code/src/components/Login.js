import { connect } from "react-redux";

const Login = ({ users }) => {
  return (
    <div>
      <select>
        {users
          ? users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })
          : ""}
      </select>
      <button>Login</button>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users),
  };
};

export default connect(mapStateToProps)(Login);
