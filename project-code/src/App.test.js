import { render, fireEvent } from "@testing-library/react";
import { store } from "./index";
import { _saveQuestion, _saveQuestionAnswer } from "../src/utils/_DATA";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import App from "./components/App";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

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
  it("login", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("fireEvent test", () => {
  it("dashboard", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const select = component.getByTestId("select");
    fireEvent.change(select, { target: { value: "sarahedo" } });
    const login = component.getByTestId("login");
    fireEvent.click(login);
    expect(component.getByTestId("avatar")).tobeinthedocument;
  });
});

describe("404 test", () => {
  it("checking message", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <PageNotFound />
        </BrowserRouter>
      </Provider>
    );
    const message = component.getByTestId("message");
    expect(message).tobeinthedocument;
  });
});

describe("dashboard test", () => {
  it("toggler", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const toggler = component.getByTestId("toggler");
    expect(toggler).tobeinthedocument;
  });
});

describe("dashboard test", () => {
  it("navbar", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const navbar = component.getByTestId("navbar");
    expect(navbar).tobeinthedocument;
  });
});

describe("create poll test", () => {
  it("form", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const create_btn = component.getByTestId("create-btn");
    fireEvent.click(create_btn);
    expect(component.getByTestId("create-form")).tobeinthedocument;
  });
});
