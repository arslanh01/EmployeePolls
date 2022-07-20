import { RECEIVE_QUESTIONS } from "../actions/questions";
import { SAVE_ANSWER } from "../actions/questions";
import { SAVE_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.question_id]: {
          ...state[action.question_id],
          [action.answer]: {
            ...state[action.question_id][action.answer],
            votes: state[action.question_id][action.answer].votes.concat(
              action.loginUser
            ),
          },
        },
      };
    default:
      return state;
  }
}
