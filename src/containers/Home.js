import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <img src={require('./logo/The_Greys_Logo.png')} alt="The Greys"/>
        <p>Together as One</p>
      </div>
    </div>
  );
}