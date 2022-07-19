import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { id } = props.question;
  return (
    <Link to={`/questions/${id}`} className="tweet">
      <img
        src={props.avatar}
        alt={`Avatar of ${props.author}`}
        className="avatar"
      />
      <div className="tweet-info">
        <span>{props.author}</span>
        <div>
          {new Date(props.timestamp).toLocaleTimeString()}{" "}
          {new Date(props.timestamp).toLocaleDateString()}{" "}
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ users, questions }, { id }) => {
  const question = questions[id];
  const author = question.author;
  const timestamp = question.timestamp;
  const avatar = users[author].avatarURL;

  return {
    question,
    author,
    timestamp,
    avatar,
  };
};

export default connect(mapStateToProps)(Question);
