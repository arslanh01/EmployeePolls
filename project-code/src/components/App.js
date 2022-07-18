import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <LoadingBar />
      <Login />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ loginUser }) => ({
  loading: loginUser === null,
});

export default connect(mapStateToProps)(App);
