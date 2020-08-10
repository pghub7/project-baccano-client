import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h3>Page not found</h3>
      <img src={require('./logo/404icon.jpg')} alt="404 icon"/>
    </div>
  );
}