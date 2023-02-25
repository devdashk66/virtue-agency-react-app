import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './OurTeam.css'

const OurTeam = () => {
  return (
    <div className='container'>
      <div className="cardWrapper">
      <div className="cardItemmmm text_center">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      className='teamImg'
        component="img"
        height="350"
        image='https://demo.themefisher.com/bingo/images/team/member-1.jpg'
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Michael Jonson
        </Typography>
        <Typography>Head Of Marketing</Typography> <br />
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.
        </Typography>
      </CardContent>
      
    </Card>
      </div>
      <div className="cardItemmmm text_center">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      className='teamImg'
        component="img"
        height="350"
        image='https://demo.themefisher.com/bingo/images/team/member-2.jpg'
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Carrick Mollenkamp
        </Typography>
        <Typography>Web Developer</Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.
        </Typography>
      </CardContent>
      
    </Card>
      </div>
      <div className="cardItemmmm text_center">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      className='teamImg'
        component="img"
        height="350"
        image='https://demo.themefisher.com/bingo/images/team/member-3.jpg'
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">David Gauthier
        </Typography>
        <Typography>Head Of Management</Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.
        </Typography>
      </CardContent>
      
    </Card>
      </div>
      </div>
    </div>
  )
}

export default OurTeam
