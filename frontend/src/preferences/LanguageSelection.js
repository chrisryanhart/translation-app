import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountContext from "../UserContext";
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


export default function LanguageSelection({}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const {language, updateLanguage} = useContext(CountContext);

  
  
  const languageChoices = ['en','fr','de'];

  const handleUpdate = (e) => {
    updateLanguage(e.target.value);
  }

  // onClick={setLanguage}
  // onClick={handleClick}

  return (
    <form>
      <label htmlFor="language-select">Select Language: </label>
      <select  name='language-select' id='language-select' value={language} onChange={handleUpdate}>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      <button><Link to='/'>Update Language</Link></button>
    </form >
    // <Card id='DogCard' className={classes.root} component={'div'}>
    //   <CardContent id='DogCardContent' component={'div'}>
    //     <Typography component={'span'} className={classes.title} color="textSecondary" gutterBottom>
    //       Translate to a New Language:
    //     </Typography>

    //   </CardContent>
    //   <CardActions>
    //     <Button size="small"><Link to="/">Find New Dog</Link> </Button>
    //   </CardActions>
    // </Card>
  );
}