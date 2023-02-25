import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common_Components/Button/Button";
import "./Error.css";

const Error = () => {
  return (
    <>
      <section class="error-body">
        <div class="message">
          <h1 t="404">404</h1>
          <div class="bottom">
            <p>You have lost your way</p>
            <Link to="/">
              <Button title="Back to Home" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
