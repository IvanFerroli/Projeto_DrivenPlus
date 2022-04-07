import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Subscriptions() {

    const {userData} = useContext(UserContext);
    const token = userData.token; 
    console.log(userData)
    let navigate = useNavigate();

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    console.log(config)

    /* const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       key: "value"
    };
    
    Axios.post( 
      'http://localhost:8000/api/v1/get_token_payloads',
      bodyParameters,
      config
    ).then(console.log).catch(console.log); */

    const [id1, setId1] = useState("");
    const [image1, setImage1] = useState("");
    const [price1, setPrice1] = useState("");
    const [id2, setId2] = useState("");
    const [image2, setImage2] = useState("");
    const [price2, setPrice2] = useState("");
    const [id3, setId3] = useState("");
    const [image3, setImage3] = useState("");
    const [price3, setPrice3] = useState("");

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config);

		requisicao.then(res => {
            console.log(res.data);
			setId1(res.data[0].id)
            setImage1(res.data[0].image)
            setPrice1(res.data[0].price)
            setId2(res.data[1].id)
            setImage2(res.data[1].image)
            setPrice2(res.data[1].price)
            setId3(res.data[2].id)
            setImage3(res.data[2].image)
            setPrice3(res.data[2].price)
		});
	}, []);

    let { id1 } = useParams

  return (
        <>
            <main>
                <span className="section-title-span">Escolha seu plano</span>
                <section className="subscriptions-container">
                    <div className="subscription" id={id1} onClick={() => {
            navigate(`/subscriptions/${id1}`);
          }}>
                        <img className="short-logo" src ={image1}/>
                        <span className="price">R${price1}</span>
                    </div>
                    <div className="subscription" id={id2} onClick={() => {
            navigate(`/subscriptions/2`);
          }}>
                        <img className="short-logo" src ={image2}/>
                        <span className="price">R${price2}</span>
                    </div>
                    <div className="subscription" id={id3} onClick={() => {
            navigate(`/subscriptions/3`);
          }}>
                        <img className="short-logo" src ={image3}/>
                        <span className="price">R${price3}</span>
                    </div>
                </section>
            </main>
        </>
    )
}

/* import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles/style.css";

function App() {
  const [image, setImage] = useState("");

	useEffect(() => {
		const requisicao = axios.get("https://dog.ceo/api/breeds/image/random");

		requisicao.then(res => {
			setImage(res.data.message);
		});
	}, []);

  return (
    <div className="view">
      <div className="image">
        {image ? (
          <img src={image} alt="Catioro fofíneo" />
        ) : (
          "Carregando imagem..."
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root")); */