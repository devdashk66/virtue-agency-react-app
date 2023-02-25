import React from "react";
import "./Hero.css";
import Button from "../../Common_Components/Button/Button";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="container">
        <div className="hero">
          <Fade right>
            <h2>We combine digital and creativity</h2>
            <p>
              Create just what you need for your Perfect Webiste, Choose from a
              wide range of elements & simply put them on your Canvas.
            </p>
            <NavLink to="/about">
              <Button title="Explore Us" />
            </NavLink>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
