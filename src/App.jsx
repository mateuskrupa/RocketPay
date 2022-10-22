import React from "react"
import CreditCard from "./CreditCard";
import Form from "./Form";
import Tittle from "./Tittle";
import styles from "./App.css"


function App() {
  return (
    <div className="container">
      <div id="left">
        <Tittle/>
        <Form/>
      </div>

      <div id="right">
        <CreditCard/>
      </div>
      
    </div>

  );
}

export default App
