import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  let navigate = useNavigate();
  const { userData, setUserData, membership, setMembership } = useContext(UserContext);

  function SignUp() {
    const SignUpPostObject = {
      email: email,
      name: name,
      cpf: cpf,
      password: password,
    };

    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
        SignUpPostObject
      )
      .then((res) => {
        setUserData({...userData, membership: res.data.membership});
        setMembership({...membership,  userName: name})
        navigate(`/`);
      })
      .catch((error) => {alert("Alguma coisa deu errado. por favor, tente novamente em alguns instantes")})
  }

  return (
    <>
      <main>
        <input
          className="signup-name-input"
          type="text"
          placeholder="nome"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="signup-cpf-input"
          type="text"
          placeholder="CPF"
          onChange={(event) => setCpf(event.target.value)}
        />
        <input
          className="signup-email-input"
          type="text"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="signup-password-input"
          type="password"
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="signup-button" onClick={SignUp}>
          Cadastrar
        </button>
        <span
          className="login-link link"
          onClick={() => {
            navigate(`/`);
          }}
        >
          J?? tem uma conta? Fa??a login!
        </span>
      </main>
    </>
  );
}
