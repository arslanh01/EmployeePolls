import { useState } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Question from "./Question";

const Dashboard = (props) => {
  const [answered, setAnswered] = useState(false);
  const handleToggle = () => {
    setAnswered(!answered);
  };
  const unansweredQuestionIds = props.answeredQuestions
    ? Object.values(props.questions)
        .filter((question) => !props.answeredQuestions.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp)
    : null;
  return (
    <div>
      <div>
        <Nav />
        <div className="center">
          <img src={props.user.avatarURL} alt="Avatar" className="avatar" />
          <h3>{props.user.name}</h3>
          <button onClick={handleToggle}>
            Show {answered ? "unanswered" : "answered"} Polls
          </button>
          {!answered ? (
            <div>
              <h3>Unanswered Polls</h3>
              {unansweredQuestionIds.map((question) => {
                return <Question key={question.id} id={question.id} />;
              })}
            </div>
          ) : (
            <div>
              <h3>Answered Polls</h3>
              {props.answeredQuestions.map((id) => {
                return <Question key={id} id={id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginUser, users, questions }) => {
  const user = users[loginUser];
  const answeredQuestions = user
    ? Object.keys(users[loginUser].answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    : null;
  return {
    user,
    answeredQuestions,
    questions,
  };
};
export default connect(mapStateToProps)(Dashboard);
