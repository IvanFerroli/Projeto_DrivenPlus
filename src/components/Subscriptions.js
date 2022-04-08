import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Subscriptions() {

    const {userData} = useContext(UserContext);
    const token = userData.token; 
    let navigate = useNavigate();

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };


    const [membership, setMembership] = useState([])
    

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            .then(res => {
                setMembership(res.data)
                console.log()
            }).catch( err => console.log(err.res));
        }, []);
        
    function  renderMembership() {
        if(membership.length > 0) {
            return membership.map(membership => {
                const {id, image, price} = membership;
                return (
                    <div className="subscription" id={id} onClick={() => {navigate(`/subscriptions/${id}`)}}>
                        <img className="short-logo" src ={image}/>
                        <span className="price">R${price}</span>
                    </div>
                )
            })
        }
    }
  return (
        <>
            <main>
                <span className="section-title-span">Escolha seu plano</span>
                <section className="subscriptions-container">
                    {renderMembership()}
                </section>
            </main>
        </>
    )
}
