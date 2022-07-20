import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { handleSaveAnswer } from "../actions/questions";

const Poll = (props) => {
  const [selection, setSelection] = useState("");
  const { question_id } = useParams();
  const { questions, users, loginUser } = props;
  const question = questions[question_id];
  if (question === undefined) {
    return <Navigate to="/404" />;
  }
  const votes = [...question.optionOne.votes, ...question.optionTwo.votes];
  const answered = votes.includes(loginUser);
  const handleChange = (e) => {
    setSelection(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser, question_id, selection);
    props.dispatch(handleSaveAnswer(loginUser, question_id, selection));
  };
  return (
    <div>
      <Nav />
      <div className="center">
        <div className="center">
          <img
            src={users[question.author].avatarURL}
            alt="avatar"
            className="avatar"
          />
          <h3>Would You Rather?</h3>
        </div>
        <div>
          <form>
            <input
              type="radio"
              id="optionOne"
              name="poll"
              value="optionOne"
              onClick={handleChange}
              disabled={answered}
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
            <br />
            <br />
            {answered && (
              <div>
                <i>{`${question.optionOne.votes.length} of ${votes.length} people voted for this option `}</i>
                <i>
                  {(
                    (question.optionOne.votes.length / votes.length) *
                    100
                  ).toFixed(2)}
                  {"% votes"}
                </i>
              </div>
            )}
            <br />
            <input
              type="radio"
              id="optionTwo"
              name="poll"
              value="optionTwo"
              onClick={handleChange}
              disabled={answered}
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            <br />
            <br />
            {answered && (
              <div>
                <i>{`${question.optionTwo.votes.length} of ${votes.length} people voted for this option `}</i>
                <i>
                  {(
                    (question.optionTwo.votes.length / votes.length) *
                    100
                  ).toFixed(2)}
                  {"% votes"}
                </i>
              </div>
            )}
            <input
              type="submit"
              onClick={handleSubmit}
              value="Submit"
              disabled={selection === ""}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginUser, questions, users }, props) => {
  return {
    loginUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(Poll);
