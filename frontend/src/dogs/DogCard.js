import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


// Card Component integrated from MUI
export default function DogCard({details}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  

  // Return card with dynamic dog state variable
  return (
    <Card id='DogCard' className={classes.root} component={'div'}>
      <CardContent id='DogCardContent' component={'div'}>
        <Typography component={'span'} className={classes.title} color="textSecondary" gutterBottom>
          Featured Dog
        </Typography>
        <Typography variant="h5" component="h2">
          Name: {details.dog.name}
        </Typography>
        <Typography component={'span'} className={classes.pos} color="textSecondary">
          Strengths: {details.dog.bred_for}
          <br/>
          Breed Family: {details.dog.breed_group}
        </Typography>
        <Typography variant="body2" component="span">
          <br/>
          Personality: {details.dog.temperament}
          <br/>
          Weight: {details.dog.weight.metric}
          <br/>
          Height: {details.dog.height.metric}
          {/* <br/>
          Life Span: {details.dog.life_span} */}
          <br/>
          Origin: {details.dog.origin}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to="/">Find New Dog</Link> </Button>
      </CardActions>
    </Card>
  );
}
