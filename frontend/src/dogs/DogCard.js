import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';

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

// My characteristics
//   "name": "Afghan Hound",
//   "weight": " 50 to 60 pounds",
//   "height": "25 to 27 inches at the shoulder",
//   "life_span": "10 to 13 years",
// "origin": "Germany, France",
// "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
// Bred for
// Breed family



export default function DogCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Featured Dog
        </Typography>
        <Typography variant="h5" component="h2">
          Name: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Strengths: 
          <br/>
          Breed Family
        </Typography>
        <Typography variant="body2" component="p">
          Personality: 
          <br/>
          Weight:
          <br/>
          Height: 
          <br/>
          Life Span: 
          <br/>
          Origin:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get New Dog</Button>
      </CardActions>
    </Card>
  );
}
