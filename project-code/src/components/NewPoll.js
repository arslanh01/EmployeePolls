import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";
import Nav from "./Nav";

const NewPoll = (props) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleSaveQuestion(props.loginUser, optionOne, optionTwo));
    navigate("/");
  };
  return (
    <div>
      <Nav />
      <div className="center">
        <h3>Create New Poll</h3>
        <div>
          <h3>Would You Rather?</h3>
          <form>
            <input
              type="text"
              placeholder="Enter first option"
              onChange={(e) => {
                setOptionOne(e.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter second option"
              onChange={(e) => {
                setOptionTwo(e.target.value);
              }}
            />
            <br />
            <input
              type="submit"
              value="Create Poll"
              disabled={optionOne === "" || optionTwo === ""}
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ loginUser }) => ({
  loginUser,
});

export default connect(mapStateToProps)(NewPoll);
