import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Poll from "./Poll";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <LoadingBar />
      {props.loginUser ? (
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/questions/:question_id" element={<Poll />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = ({ loginUser }) => ({
  loading: loginUser === null,
  loginUser,
});

export default connect(mapStateToProps)(App);
