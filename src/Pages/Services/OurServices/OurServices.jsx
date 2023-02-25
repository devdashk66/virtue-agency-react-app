import React from "react";
import "./OurServices.css";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CompressIcon from "@mui/icons-material/Compress";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PanoramaIcon from "@mui/icons-material/Panorama";
import AndroidIcon from "@mui/icons-material/Android";
import CellWifiIcon from "@mui/icons-material/CellWifi";

import Fade from "react-reveal/Fade";
function OurServices() {
  return (
    <div className="container">
      <div className="services">
        <Fade right>
          <div className="singleService">
            <AspectRatioIcon />
            <h3>Wordpress theme</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleService">
            <CompressIcon />
            <h3>RESPONSIVE DESIGN</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleService">
            <OndemandVideoIcon />
            <h3>MEDIA & ADs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleService">
            <PanoramaIcon />
            <h3>GRAPHIC DESIGN</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleService">
            <AndroidIcon />
            <h3>APPS DEVELOPMENT</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="singleService">
            <CellWifiIcon />
            <h3>NETWORKING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci
              dictum facilisis vel id tellus. Nullam iaculis arcu at mauris
              dapibus consectetur.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default OurServices;
