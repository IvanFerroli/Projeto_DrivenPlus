import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Subscription() {
  const { userData, setUserData } = useContext(UserContext);
  const token = userData.token;
  const navigate = useNavigate();
  const { id } = useParams();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [chosenMembership, setChosenMembership] = useState({ perks: [] });
  const { name, image, perks, price } = chosenMembership;
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardSecurity, setCardSecurity] = useState("");
  const [cardDate, setCardDate] = useState("");

  useEffect(() => {
    const getMembershipData = axios
      .get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`,
        config
      )
      .then((res) => {
        setChosenMembership(res.data);
      });
  }, []);

  function purchaseConfirmation() {
    const winConfirm = window.confirm(
      `Tem certeza que deseja assinar o plano ${name} por ${price}?`
    );
    const purchaseConfirmationPost = {
      membershipId: id,
      cardName: cardName,
      cardNumber: cardNumber,
      securityNumber: cardSecurity,
      expirationDate: cardDate,
    };

    if (winConfirm === true) {
      axios
        .post(
          "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
          purchaseConfirmationPost, config
        )
        .then((res) => {
            setUserData({...userData, membership: res.data, cardData: purchaseConfirmationPost});
            navigate(`/home`);
        })
        .catch((error) => {alert("Alguma coisa deu errado. por favor, tente novamente em alguns instantes")});
    }
  }

  function renderChosenMembership() {
    return (
      <>
        <ion-icon name="arrow-back" className="back-arrow" onClick={() => {
            navigate(`/subscriptions`);
          }}></ion-icon>
        <section className="subscription-logo-container">
          <img className="subscription-logo" src={image} />
          <span className="subscription-logo-span">{name}</span>
        </section>
        <section className="subscription-info-container">
          <div className="benefits-span-container">
            <ion-icon name="list-circle-outline"></ion-icon>
            <span className="benefits-span">Benefícios:</span>
            <ol>
              {perks.map((key, index) => (
                <li key={index}>{key.title}</li>
              ))}
            </ol>
          </div>
          <div className="price-container">
            <ion-icon name="cash"></ion-icon>
            <span className="price-span">Preço:</span>
            <span className="subscription-price">{price}</span>
          </div>
        </section>
        <section className="purchase-form-container">
          <input
            className="subscriptions-card-name-input"
            placeholder="Nome impresso no cartão"
            onChange={(event) => setCardName(event.target.value)}
          />
          <input
            className="subscriptions-card-number-input"
            placeholder="Dígitos do cartão"
            onChange={(event) => setCardNumber(event.target.value)}
          />
          <div className="half-input-container">
            <input
              className="subscriptions-card-security-code-input"
              placeholder="Código de segurança"
              onChange={(event) => setCardSecurity(event.target.value)}
            />
            <input
              className="subscriptions-card-expiring-date-input"
              placeholder="Validade"
              onChange={(event) => setCardDate(event.target.value)}
            />
          </div>
          <button className="purchase-button" onClick={purchaseConfirmation}>
            ASSINAR
          </button>
        </section>
      </>
    );
  }

  return (
    <>
      <main>{renderChosenMembership()}</main>
    </>
  );
}
