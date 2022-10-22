import React from "react";
import styles from "./CreditCard.css"

function CreditCard () {
    return(
        <div className="card">
            <div className="icons">
                <img src="././public/cc-icon.svg" alt="" />   

                <img src="././public/cc-visa.svg" alt="" id="bandeira" />

            </div>
            <div className="card-number">
                <h1>1234 5678 9012 3456</h1>
            </div>
            <div className="people-name">
                <p>Nome do titular</p>
                <h3>MATEUS KRUPA</h3>
            </div>
            <div className="data">
                <div id="1">
                    <p>Expiração</p>
                    <h3>02/30</h3>
                </div>
                <div id="2">
                    <p>CVC</p>
                    <h3>230</h3>
                </div>
                <div id="3">
                <img src="././public/cc-chip.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CreditCard