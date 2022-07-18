import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <LoadingBar />
      <Routes>
        <Route exact path="/" element={<Dashboard id={props.loginUser} />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ loginUser }) => ({
  loading: loginUser === null,
  loginUser,
});

export default connect(mapStateToProps)(App);
