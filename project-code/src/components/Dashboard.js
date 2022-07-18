import { connect } from "react-redux";
import Login from "./Login";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div>
      {props.id ? (
        <div>
          <img src={props.user.avatarURL} alt="Avatar" className="avatar" />
          <h3>Dashboard for {props.id}</h3>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = ({ users }, props) => {
  const user = users[props.id];
  return {
    user,
  };
};

export default connect(mapStateToProps)(Dashboard);
