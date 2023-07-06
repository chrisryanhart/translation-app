import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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



export default function TranslatedDogCard({details}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Perro destacado
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre: {details.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Fortalezas: {details.bred_for}
          <br/>
          Familia de Raza: {details.breed_group}
        </Typography>
        <Typography variant="body2" component="p">
          Personalidad: {details.temperament}
          <br/>
          Peso: {details.weight.metric}
          <br/>
          Altura: {details.height.metric}
          <br/>
          Esperanza de Vida: {details.life_span}
          <br/>
          Origen: {details.origin}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Encontra Perro Nuevo</Button>
      </CardActions>
    </Card>
  );
}