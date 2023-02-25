import React from "react";
import "./Award.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";

import NumberCounter from "number-counter";

import Fade from "react-reveal/Fade";

const Award = () => {
  return (
    <div className="container">
      <div className="award">
        <Fade right>
          <div className="singleAward">
            <InsertEmoticonOutlinedIcon />
            <h1>
              <NumberCounter end={150} delay={1} />
            </h1>
            <p>Happy Cllients</p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleAward">
            <DesignServicesOutlinedIcon />
            <h1>
              <NumberCounter end={130} delay={1} />
            </h1>
            <p>Projects completed</p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleAward">
            <ThumbUpAltOutlinedIcon />
            <h1>
              <NumberCounter end={99} delay={1} />
            </h1>
            <p>Positive feedback</p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleAward">
            <CoffeeOutlinedIcon />
            <h1>
              <NumberCounter end={250} delay={1} />
            </h1>
            <p>Cups of Coffee</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Award;
