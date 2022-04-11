import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <div className="Chips">
      <h1>Crunch Crunch!</h1>
      <img className="snack-image" src="https://images.unsplash.com/photo-1633536705528-f30414bf2ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></img>
      <Link exact to="/">Go back</Link>
    </div>
  )
}

export default Chips;