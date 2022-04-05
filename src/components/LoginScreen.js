import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/img/logo.svg";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function Login() {
    const LoginObjectPost = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        LoginObjectPost
      )
      .then(() => {
        navigate(`/hoje`);
      });
  }

  return (
    <>
      <main>
        <img className="login-screen-logo" src={logo} />
        <input
          className="login-email-input"
          type="text"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="login-password-input"
          type="password"
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login-enter-button" onClick={Login}>
          Entrar
        </button>
        <span
          className="signup-link link"
          onClick={() => {
            navigate(`/sign-up`);
          }}
        >
          Não tem uma conta? Cadastre-se!
        </span>
      </main>
    </>
  );
}