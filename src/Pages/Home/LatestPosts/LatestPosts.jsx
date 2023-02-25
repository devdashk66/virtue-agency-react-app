import PostOne from "../../../images/post-1.jpg";
import PostTwo from "../../../images/post-2.jpg";
import PostThree from "../../../images/post-3.jpg";
import "./LatestPosts.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "../../Common_Components/Button/Button";

import Fade from "react-reveal/Fade";

const LatestPosts = () => {
  return (
    <div className="container">
      <div className="cardWrapper">
        <Fade bottom>
          <div className="cardItemmmm">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={PostOne}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reasons to Smile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non skateboard dolor brunch.
                </Typography>
              </CardContent>
              <CardActions>
                <Button title="Read More" />
              </CardActions>
            </Card>
          </div>{" "}
        </Fade>
        <Fade bottom>
          <div className="cardItemmmm">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={PostTwo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  A Few Moments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non skateboard dolor brunch.
                </Typography>
              </CardContent>
              <CardActions>
                <Button title="Read More" />
              </CardActions>
            </Card>
          </div>
        </Fade>
        <Fade bottom>
          <div className="cardItemmmm">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={PostThree}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hints for Life
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non skateboard dolor brunch.
                </Typography>
              </CardContent>
              <CardActions>
                <Button title="Read More" />
              </CardActions>
            </Card>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LatestPosts;
