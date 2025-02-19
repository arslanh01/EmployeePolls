import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}
