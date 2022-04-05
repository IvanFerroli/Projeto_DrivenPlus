import axios from "axios";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

import shortLogo1 from "../assets/img/shortLogo1.svg";
import shortLogo2 from "../assets/img/shortLogo2.svg";
import shortLogo3 from "../assets/img/shortLogo3.svg";

export default function Subscriptions() {
    return(
        <>
            <main>
                <span className="section-title-span">Escolha seu plano</span>
                <section className="subscriptions-container">
                    <div className="subscription">
                        <img className="short-logo" src ={shortLogo1}/>
                        <span className="price">R$39,90</span>
                    </div>
                    <div className="subscription">
                        <img className="short-logo" src ={shortLogo2}/>
                        <span className="price">R$69,90</span>
                    </div>
                    <div className="subscription">
                        <img className="short-logo" src ={shortLogo3}/>
                        <span className="price">R$99,90</span>
                    </div>
                </section>
            </main>
        </>
    )
}