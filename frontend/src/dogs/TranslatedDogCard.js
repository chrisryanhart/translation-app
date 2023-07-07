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
export default function TranslatedDogCard({details}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  // 0:
  // 'Nombre'
  // 1:
  // 'Perro destacado'
  // 2:
  // 'Fortalezas'
  // 3:
  // 'Raza familia'
  // 4:
  // 'Personalidad'
  // 5:
  // 'Peso'
  // 6:
  // 'Altura'
  // 7:
  // 'Origen'
  // 8:
  // 'Encontrar nuevo perro'
  // 9:
  // 'Ffenpinscher'
  // 10:
  // 'Pequeña caza roedor, lapdog'
  // 11:
  // 'Juguete'
  // 12:
  // 'Terco, curioso, juguetón, aventurero, activo, amante de la diversión'
  // 13:
  // '3 - 6 kilogramos'
  // 14:
  // '23 - 29 centímetros'
  // 15:
  // '10 - 12 años'
  // 16:
  // 'Alemania, Francia'
  // Return card with dynamic translatedText state variable
  return (
    <Card className={classes.root} component={'div'} id='Card'>
        {details.translatedText.length && <CardContent component={'div'} id='CardConent'>
          
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {details.translatedText[1]}
          </Typography>
          <Typography variant="h5" component="h2">
          {details.translatedText[0]}: {details.translatedText[9]}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {details.translatedText[2]}: {details.translatedText[10]}
            <br/>
            {details.translatedText[3]}: {details.translatedText[11]}
          </Typography>
          <Typography variant="body2" component="p">
            {details.translatedText[4]}: {details.translatedText[12]}
            <br/>
            {details.translatedText[5]}: {details.translatedText[13]}
            <br/>
            {details.translatedText[6]}: {details.translatedText[14]}
            <br/>
            {details.translatedText[7]}:  {details.translatedText[15]}
          </Typography>
        </CardContent>}
        <CardActions>
          <Button size="small"><Link to='/'>{details.translatedText[8]}</Link></Button>
        </CardActions>
      </Card>

  );
}