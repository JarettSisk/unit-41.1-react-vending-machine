import React from "react";
import { Link } from "react-router-dom";
const CandyBar = () => {
  return (
    <div className="CandyBar">
      <h1>Chocolatey goodness!</h1>
      <img className="snack-image" src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
      <Link exact to="/">Go back</Link>
    </div>
  )
}

export default CandyBar;
