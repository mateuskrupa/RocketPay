import React from "react";
import styles from "./CreditCard.css"


function CreditCard (props) {
    return(
        <div className="card">
            <div className="icons">
                <img src="././public/cc-icon.svg" alt="" />   

                <img src="././public/cc-visa.svg" alt="" id="bandeira" />

            </div>
            <div className="card-number">
                <h1>{props.cardNumber}</h1>
            </div>
            <div className="people-name">
                <p>Nome do titular</p>
                <h3>{props.name}</h3>
            </div>
            <div className="data">
                <div id="1">
                    <p>Expiração</p>
                    <h3>{props.exp}</h3>
                </div>
                <div id="2">
                    <p>CVC</p>
                    <h3>{props.cvc}</h3>
                </div>
                <div id="3">
                <img src="././public/cc-chip.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CreditCard