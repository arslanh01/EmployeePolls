import { render, screen } from "@testing-library/react";
import { store } from "./index";
import { _saveQuestion, _saveQuestionAnswer } from "../src/utils/_DATA";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import App from "./components/App";
import Login from "./components/Login";

describe("_saveQuestion tests", () => {
  it("test 1", async () => {
    const question = {};
    question.optionOneText = "Go to movies";
    question.optionTwoText = "Go to walk";
    question.author = "sarahedo";
    const result = await _saveQuestion(question);
    expect(result.author).toEqual("sarahedo");
  });
  it("test 2", async () => {
    const question = {};
    question.optionOneText = "Go to movies";
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer tests", () => {
  it("test 1", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    });
    expect(result).toEqual(true);
  });
  it("test 2", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "sarahedo",
        answer: "optionOne",
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

describe("snapshot test", () => {
  it("dashboard", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
