import { _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveAnswer(loginUser, question_id, answer) {
  return {
    type: SAVE_ANSWER,
    loginUser,
    question_id,
    answer,
  };
}

export function handleSaveAnswer(loginUser, question_id, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser: loginUser,
      qid: question_id,
      answer: answer,
    }).then((res) => {
      dispatch(saveAnswer(loginUser, question_id, answer));
      dispatch(saveAnswerToUser(loginUser, question_id, answer));
      dispatch(hideLoading());
    });
  };
}
