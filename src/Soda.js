import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div className="Soda">
      <h1>Sip Ahhhhhhhh</h1>
      <img className="snack-image" src="https://images.unsplash.com/photo-1588238142232-7108fb7dcbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"></img>
      <Link exact to="/">Go back</Link>
    </div>
  )
}

export default Soda;