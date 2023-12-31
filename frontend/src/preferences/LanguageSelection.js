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


export default function LanguageSelection({}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const {language, updateLanguage} = useContext(CountContext);

  
  
  const languageChoices = ['en','fr','de'];

  const handleUpdate = (e) => {
    updateLanguage(e.target.value);
  }


  return (
    <form>
      <label htmlFor="language-select">Select Language: </label>
      <select  name='language-select' id='language-select' value={language} onChange={handleUpdate}>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </select>
      <button><Link to='/'>Update Language</Link></button>
    </form >
  );
}