import React, { useState } from "react"
import CreditCard from "./CreditCard";
import Form from "./Form";
import Tittle from "./Tittle";
import styles from "./App.css"


function App() {

  const [resultCard, setResultCard] = useState('')
  const [resultName, setResultName] = useState('')
  const [resultExp, setResultExp] = useState('')
  const [resultCvc, setResultCvc] = useState('')

  const updateResultCard = r => {
    setResultCard(r)
  }
  const updateResultName = r => {
    setResultName(r)
  }
  const updateResultExp = r => {
    setResultExp(r)
  }
  const updateResultCvc = r => {
    setResultCvc(r)
  }



  return (
    <div className="body">
      <div className="container">
        <div id="left">
          <Tittle/>
          <Form handleResultCard={updateResultCard} handleResultName={updateResultName} handleResultExp={updateResultExp} handleResultCvc={updateResultCvc} />
        </div>

        <div id="right">
          <CreditCard cardNumber={resultCard} name={resultName} exp={resultExp} cvc={resultCvc}/>
        </div>
        
      </div>
    </div>

  );
}

export default App
