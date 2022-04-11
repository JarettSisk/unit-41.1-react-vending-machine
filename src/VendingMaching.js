import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMaching = () => {
  return (
    <div className="VendingMachine">
      <h1>Pick your favorite snack!</h1>
      <img className="VendingMachine-image" src="https://images.unsplash.com/photo-1585341840941-98553e474d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"></img>
      <div className="VendingMachine-options">
        <ul className="VendingMachine-options-list">
          <Link className="option" exact to="/chips">Chips</Link>
          <Link className="option" exact to="/soda">Soda</Link>
          <Link className="option" exact to="/candy-bar">Candy Bar</Link>
        </ul>
      </div>
      
    </div>
  )
}

export default VendingMaching;