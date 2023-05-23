import React, { useState } from "react";
import DummyAccounts from "../../data";
import { LogIn } from "./Login";
import { Navbar } from "../../components/navbar/Navbar";
//import axios from "axios";

//const API_URL = "http://localhost:3000/";

export const LoginAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notif, setNotif] = useState({ message: "", style: "" });
  const [client, setClient] = useState(null);

  const localUsers = localStorage.getItem("users");
  if (!localUsers) {
    localStorage.setItem("users", JSON.stringify(DummyAccounts));
  }
  const clients = JSON.parse(localStorage.getItem("users"));
  const isLoginSuccess = (email, password) => {
    let isFound = false;

    clients.forEach((user) => {
      if (user.email === email && user.password === password) {
        setClient(user);
        isFound = true;
        setNotif("");
      }
    });

    if (!isFound)
      setNotif({ message: "Wrong email and password.", style: "danger" });
    return isFound;
  };

  const login = (username, password) => {
    if (isLoginSuccess(username, password)) {
      setIsLoggedIn(true);
      window.localStorage.setItem("isLoggedIn", true);
    }
  };

  //Login using api

  /* const login = (username, password) => {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setIsLoggedIn(true);
          window.localStorage.setItem("isLoggedIn", true);
        }

        return response.data;
      });
  };
*/
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("client");
    window.localStorage.removeItem("isLoggedIn");
    setNotif({ message: "You have logged out.", style: "success" });
  };

  if (isLoggedIn) {
    localStorage.setItem("currentUser", JSON.stringify(client));
  }

  if (isLoggedIn) {
    return (
      <Navbar
        client={client}
        users={clients}
        setClient={setClient}
        logout={logout}
      />
    );
  } else {
    return <LogIn loginHandler={login} notif={notif} isLoggedIn={isLoggedIn} />;
  }
};
