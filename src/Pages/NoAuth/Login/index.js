import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <section className="login">
      <div className="login__formWrapper">
        <TextField
          autoFocus
          label="Email"
          type="email"
          onChange={email => setEmail(email)}
          //handleSubmit={e => [e.preventDefault(), this.handleLoginRequest()]}
        />
        <TextField
          label="Password"
          type="password"
          onChange={password => setPassword(password)}
          //handleSubmit={e => [e.preventDefault(), this.handleLoginRequest()]}
        />
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </div>
    </section>
  );
};

export default Login;
