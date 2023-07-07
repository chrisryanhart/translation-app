import React, {useState, useEffect, useContext} from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DogCard from './DogCard';
import TranslatedDogCard from './TranslatedDogCard';
import { getDog } from '../apis/dogApi';
import { translateText } from '../apis/translateApi';
import CountContext from "../UserContext";
import {Link} from 'react-router-dom';

 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TranslationTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {language} = useContext(CountContext);

  const INITIAL_STATE = {
      "name": "",
      "bred_for": "",
      "breed_group":"",
      "temperament": "",
      "weight":"",
      "height":"",
      "origin":"",
      "life_span":""
  }

  const [dog, setDog] = useState(INITIAL_STATE);
  const [translatedText, setTranslatedText] = useState([]);
  const [hasError, sethasError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('Heres my error');

  // call dog api after the page loads

  useEffect(function fetchDog(){
    async function callDogApi(id){

      try{
        let res = await getDog(id);
        // const {name, bred_for, breed_group, temperament, }
        if(res.isAxiosError){
          throw new Error('BadRequest Error 400: Server unable to process request');
        }
        setDog({...dog, ...res.data});

      }catch(error){
        sethasError(true);
        console.log(error.message);
        setErrorMessage(error.message);
      }

    }

    callDogApi(1);

  },[]);


  // call translate api
  const getTranslation = async () => {
    
    try{
      // format input text
      const keys = 'name. featured dog. strengths. breed family. personality. weight. height. origin. find new dog. ';
      const dogInfoText = `${dog.name.toLowerCase()}. ${dog.bred_for.toLowerCase()}. ${dog.breed_group.toLowerCase()}. ${dog.temperament.toLowerCase()}. ${dog.weight.metric.toLowerCase()} kilograms. ${dog.height.metric.toLowerCase()} centimeters. ${dog.life_span.toLowerCase()}. ${dog.origin.toLowerCase()}.`;

      // call api
      // erro with keysRes

      let keysRes = await translateText(keys, language);
      let dogInfoRes = await translateText(dogInfoText, language);

      const combinedRes = keysRes.data.translatedText + dogInfoRes.data.translatedText;

      // format output text
      let translationOutput = combinedRes.split('.');

      // setTranslation
      setTranslatedText([...translationOutput]);
    }catch(error){

      sethasError(true);
      setErrorMessage('BadRequest Status 400: Server unable to process request');
    }
  }

  const findNewDog = () => {
    return (<Redirect to="/"/>);
  }

  // set state
  
  // pass translate text into 

  function refreshPage() {
    window.location.reload(false);
  }

  // only call translate api if there is no translation
  if(hasError){
    return (
      <div>
        <div style={{width: '300px',backgroundColor:'red', padding: '5px'}}>
          {errorMessage}
        </div>
        <button onClick={refreshPage}>Try Again</button>

      </div>

    )

  }else{
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs id='TabsElement' value={value} onChange={handleChange} aria-label="simple tabs example"> 
            <Tab id='DogTab' label="Dog Overview" {...a11yProps(0)} />
            <Tab onClick={getTranslation} label="Translation" {...a11yProps(1)} />
   
        </Tabs>
      </AppBar>
      <TabPanel id='DogTabPanel' value={value} index={0} component={'div'}>
          <DogCard id='DogCard' details={{dog, findNewDog}} />

      </TabPanel>
      <TabPanel  value={value} index={1}>
        {/* Show alternate content here */}
        <TranslatedDogCard details={{translatedText,findNewDog}}/>
      </TabPanel>
    </div>
  )};
};
