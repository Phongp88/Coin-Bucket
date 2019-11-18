import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initAuthListener } from "./Redux/Actions/auth";
import Login from "./Pages/NoAuth/Login/";
import Dashboard from "./Pages/Auth/Dashboard";

const App = ({
  initAuthListener,
  isAuthed = false,
  hasCheckedForAuth = false
}) => {
  useEffect(() => {
    initAuthListener();
  }, []);
  // To Avoid a flash on the login screen from login -> dashboard
  if (!hasCheckedForAuth) return null;
  if (!isAuthed) return <Login />;
  return <Dashboard />;
};

const mapStateToProps = state => ({
  isAuthed: state.auth.isAuthed,
  hasCheckedForAuth: state.auth.hasCheckedForAuth
});

const mapDispatchToProps = dispatch => ({
  initAuthListener: payload => dispatch(initAuthListener(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
