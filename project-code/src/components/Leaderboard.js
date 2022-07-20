import { connect } from "react-redux";
import Nav from "./Nav";
import UserDetails from "./UserDetails";

const Leaderboard = (props) => {
  const { sortedUsers } = props;
  return (
    <div>
      <Nav />
      <h3 className="center">Leaderboard</h3>
      {sortedUsers.map((id) => {
        return <UserDetails key={id} id={id} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
