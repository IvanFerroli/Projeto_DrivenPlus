import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userData, setUserData, membership, cardData } = useContext(UserContext);
  const {
    membershipId,
    cardName,
    cardNumber,
    securityNumber,
    expirationDate,
    image,
    userName,
  } = userData.membership;
  
  const token = userData.token;
  const navigate = useNavigate();
  const { id } = useParams();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function changeSubscription() {
    const changeSubscriptionPost = {
      membershipId: membershipId,
      cardName: cardName,
      cardNumber: cardNumber,
      securityNumber: securityNumber,
      expirationDate: expirationDate,
    };
    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        changeSubscriptionPost,
        config
      )
      .then((res) => {
        navigate(`/subscriptions`);
      })
      .catch((error) => {
        alert(
          "Alguma coisa deu errado. por favor, tente novamente em alguns instantes"
        );
      });
  }
  function cancelSubscription() {
    axios
      .delete(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        config
      )
      .then((res) => {
        setUserData({ ...userData, membership: res.data });
        navigate(`/subscriptions`);
      })
      .catch((error) => {
        alert(
          "Alguma coisa deu errado. por favor, tente novamente em alguns instantes"
        );
      });
  }
  console.log(userData)
  function membershipPerks() {
    return (
      <>
        <section className="subscription-logo-container">
          <img className="home-subscription-logo" src={image} />
        </section>
        <h1>Olá {userName}</h1>
        <section className="membership-perks-container">
          <div>
            {userData.membership.perks.map((key, index) => (
              <a href="{key.link}">
                <button className="perk-button">{key.title}</button>
              </a>
            ))}
          </div>
        </section>
        <section className="membership-actions-container">
          <button className="change-button" onClick={changeSubscription}>
            Mudar plano
          </button>
          <button className="cancel-button" onClick={cancelSubscription}>
            Cancelar plano
          </button>
        </section>
      </>
    );
  }

  return (
    <>
      <main>{membershipPerks()}</main>
    </>
  );
}
