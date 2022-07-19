import { RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER_TO_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER_TO_USER:
      return {
        ...state,
        [action.loginUser]: {
          ...state[action.loginUser],
          answers: {
            ...state[action.loginUser].answers,
            [action.question_id]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
