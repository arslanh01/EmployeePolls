import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveAnswerToUser, saveQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

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

export function saveQuestion(loginUser, question) {
  return {
    type: SAVE_QUESTION,
    loginUser,
    question,
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

export function handleSaveQuestion(loginUser, optionOne, optionTwo) {
  return (dispatch) => {
    dispatch(showLoading());
    const question = {};
    question.optionOneText = optionOne;
    question.optionTwoText = optionTwo;
    question.author = loginUser;
    return _saveQuestion(question).then((q) => {
      dispatch(saveQuestion(loginUser, q));
      dispatch(saveQuestionToUser(loginUser, q.id));
      dispatch(hideLoading());
    });
  };
}
