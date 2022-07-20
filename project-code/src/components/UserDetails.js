import { connect } from "react-redux";

const UserDetails = (props) => {
  const { user } = props;
  return (
    <div className="user-detail">
      <img src={user.avatarURL} alt="avatar" className="avatar" />
      <div>
        <h3>{user.name}</h3>
      </div>
      <div className="center">
        <h5>Question Asked</h5>
        <h3>{user.questions.length}</h3>
      </div>
      <div className="center">
        <h5>Questions Answered</h5>
        <h3>{Object.keys(user.answers).length}</h3>
      </div>
    </div>
  );
};
const mapStateToProps = ({ users }, { id }) => {
  const user = users[id];
  return {
    user,
  };
};
export default connect(mapStateToProps)(UserDetails);
