import React, { useState } from "react";
import { Notification } from "../../components/notification";
import { LoginButton } from "./components/LoginButton";
import {
  CardBody,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardInput,
  Container,
} from "./Login.styles";

export const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.loginHandler(username, password);
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <CardHeader>
        <CardHeading>Welcome</CardHeading>
      </CardHeader>

      <Notification message={props.notif.message} style={props.notif.style} />
      <CardBody onSubmit={onSubmitHandler}>
        <CardFieldset>
          <CardInput
            id="username"
            placeholder="E-mail"
            type="text"
            onChange={onChangeUsername}
            value={username}
            required
          />
        </CardFieldset>

        <CardFieldset>
          <CardInput
            placeholder="Password"
            type="password"
            onChange={onChangePassword}
            value={password}
            required
          />
        </CardFieldset>
        <LoginButton />
      </CardBody>
    </Container>
  );
};
