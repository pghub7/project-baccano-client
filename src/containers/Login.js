import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import { useAppContext } from "../libs/contextLib";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import "./Login.css";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

   async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <img src={require('./logo/The_Greys_Logo_med.png')} alt="The Greys" class="center"/>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateForm()}
            >
            Login
        </LoaderButton>
      </form>
    </div>
  );
}