import React from "react";
import "./OurOffer.css";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";

import Fade from "react-reveal/Fade";

const OurOffer = () => {
  return (
    <div className="container">
      <div className="our_Offer">
        <Fade right>
          <div className="our_Offer_Card">
            <LockOutlinedIcon />
            <h2>Secure System</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="our_Offer_Card">
            <EmailOutlinedIcon />
            <h2>Mail Support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="our_Offer_Card">
            <OpacityOutlinedIcon />
            <h2>Marketing Ideas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="our_Offer_Card">
            <AccessAlarmOutlinedIcon />
            <h2>Time Management</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="our_Offer_Card">
            <Diversity3OutlinedIcon />
            <h2>Team Maintenance</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="our_Offer_Card">
            <AndroidOutlinedIcon />
            <h2>Android Apps</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur voluptatum. Similique, nihil explicabo.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default OurOffer;
