import React from "react";
import styles from "./Form.css"

function Form () {
    return(
        <form >
            <div className="num-name">
                <p>NÚMERO DO CARTÃO</p>
                <input type="text" />

                <p>NOME DO TITULAR</p>
                <input type="text" />
            </div>

            <div className="exp-cvc">
            <div className="exp">
                <p>EXPIRAÇÃO</p>
                <input type="text" />
            </div>

            <div className="cvc">
                <p>CVC</p>
                <input type="text" />
            </div>
            </div>
            
            <input type="submit" value="ADICIONAR CARTÃO" id="button"/>

        </form>

    );
}

export default Form