import React, { useState } from "react";
import styles from "./Form.css"


function Form (props) {

    const [card, setCard] = useState('1234 5678 9012 3456')
    const [name, setName] = useState('MATEUS KRUPA')
    const [exp, setExp] = useState('02/30')
    const [cvc, setCvc] = useState('230')

    const handleChangeCard = event => {
        setCard(event.target.value)};

    const handleChangeName = event => {
        setName(event.target.value)};

    const handleChangeExp = event => {
        setExp(event.target.value)};

    const handleChangeCvc = event => {
        setCvc(event.target.value)};       

    props.handleResultCard(card)
    props.handleResultName(name)
    props.handleResultExp(exp)
    props.handleResultCvc(cvc)

    return(
        <form >
            <div className="num">
                <p>NÚMERO DO CARTÃO</p>
                <input type="text" className="pad" onChange={handleChangeCard} maxLength="16"/>
            </div>
            <div className="name">
                <p>NOME DO TITULAR</p>
                <input type="text" className="pad" onChange={handleChangeName} maxLength="32" />
            </div>

            <div className="exp-cvc">
            <div className="exp">
                <p>EXPIRAÇÃO</p>
                <input type="text" onChange={handleChangeExp} maxLength="5"/>
            </div>

            <div className="cvc">
                <p>CVC</p>
                <input type="tel" onChange={handleChangeCvc} maxLength="3"/>
            </div>
            </div>
            
            <input type="submit" value="ADICIONAR CARTÃO" id="button"/>

        </form>

    );
}

export default Form