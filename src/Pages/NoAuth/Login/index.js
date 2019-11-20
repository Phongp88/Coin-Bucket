import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


// Redux 
import { connect } from "react-redux";
import { login } from "../../../Redux/Actions/auth";
// CSS
import "./Login.scss";

const Login = ({login}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin () {
    login(email, password);
  }
  return (
    <section className="login">
      <div className="login__formWrapper">
        <TextField
          autoFocus
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          //handleSubmit={e => [e.preventDefault(), this.handleLoginRequest()]}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          //handleSubmit={e => [e.preventDefault(), this.handleLoginRequest()]}
        />
        <Button variant="contained" color="primary" onClick={()=>handleLogin()}>
          Log In
        </Button>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
