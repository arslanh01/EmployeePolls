import { connect } from "react-redux";
import Nav from "./Nav";
import UserDetails from "./UserDetails";

const Leaderboard = (props) => {
  const { sortedUsers } = props;
  return (
    <div>
      <Nav />
      <div className="center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgve9Zfmk_Obf8covSDFPtZVYR7iHN79pr_w&usqp=CAU"
          alt="leaderboard"
        />
      </div>
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
