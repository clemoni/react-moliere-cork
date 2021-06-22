import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => (
  <div className="error">
    <div className="error__container">
      <h1 className="error__title">404</h1>
      <p className="error__explain">
        We are just out of lines <br />
        What you're looking for will not be found here
      </p>
      <button className="error__redirect btn">
        <Link to="/">Go Back</Link>
      </button>
    </div>
    <img
      className="error__illustration"
      src="https://source.unsplash.com/f2feIgqsIXY/900x1600"
      alt="men out of words"
    />
  </div>
);
