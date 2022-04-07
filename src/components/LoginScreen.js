import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import logo from "../assets/img/logo.svg";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const {setUserData} = useContext(UserContext);

  function Login() {
    const LoginObjectPost = {
      email: email,
      password: password,
    };
    
    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
        LoginObjectPost
      )
      .then((data) => {
       setUserData(data.data)
       data.data.membership === null ? navigate(`/subscriptions`) : navigate(`/home`)
      })
      .catch((error) => {alert("Alguma coisa deu errado. por favor, tente novamente em alguns instantes")});
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


/* import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayData() {
  // initialize data state variable as an empty array
  const [data, setData] = useState([]);

  // make the fetch the first time your component mounts
  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login').then(response => setData(response.data));
  }, []);

  return (
    <div>
      {data.map((row) => (
        <p key={row.id}>{row.content}</p>
      ))}
    </div>
  );
} */