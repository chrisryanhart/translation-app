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

 
// Standard Tab component functionality from MUI
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


// Tab Component integrated with the translate app
export default function TranslationTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // event handler from MUI for changing the tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // target language variable declared in the <App/> component
  const {language} = useContext(CountContext);

  // Initial state of the dog variable
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

  // set initial state for all variables
  const [dog, setDog] = useState(INITIAL_STATE);
  const [translatedText, setTranslatedText] = useState([]);
  const [hasError, sethasError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('Heres my error');


  // call dog api one time after the page loads
  useEffect(function fetchDog(){
    async function callDogApi(id){

      try{
        let res = await getDog(id);
        
        // throw error if one is found
        if(res.isAxiosError){
          throw new Error('BadRequest Error 400: Server unable to process request');
        }
        // set dog variable after data retrieved from the api
        setDog({...dog, ...res.data});

      }catch(error){
        // set error variables if detected
        sethasError(true);
        setErrorMessage(error.message);
      }

    }

    // execute after the page is loaded
    callDogApi(1);

  },[]);


  // create function expression for click handler on the translate tab button
  const getTranslation = async () => {
    
    try{
      // format input text
      const keys = 'name. featured dog. strengths. breed family. personality. weight. height. origin. find new dog. ';
      
      // make all data lowercase to prevent errors with translate api
      // the api is sensitive and causes errors if not lowercase
      const dogInfoText = `${dog.name.toLowerCase()}. ${dog.bred_for.toLowerCase()}. ${dog.breed_group.toLowerCase()}. ${dog.temperament.toLowerCase()}. ${dog.weight.metric.toLowerCase()} kilograms. ${dog.height.metric.toLowerCase()} centimeters. ${dog.life_span.toLowerCase()}. ${dog.origin.toLowerCase()}.`;

      // create 2 api calls to comply with api limit rules
      let keysRes = await translateText(keys, language);
      let dogInfoRes = await translateText(dogInfoText, language);

      // combine the text data
      const combinedRes = keysRes.data.translatedText + dogInfoRes.data.translatedText;

      // format output text into an array
      let translationOutput = combinedRes.split('.');

      // update the translated text for the translationComponent
      setTranslatedText([...translationOutput]);
    }catch(error){

      // handle any errors from the api call
      // Error message customized to help users better understand any issues
      sethasError(true);
      setErrorMessage('BadRequest Status 400: Server unable to process request');
    }
  }

  // function to be called in a 'find new dog' button
  const findNewDog = () => {
    return (<Redirect to="/"/>);
  }

  // set state
  
  // pass translate text into 

  // If an error occurs, pass page refresh function to event listener in a button
  function refreshPage() {
    window.location.reload(false);
  }

  // only render the error if one occurred
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
  // if no error found, show the tab component
  // State variables automatically updated in child components
  // show either the DogCard or the TranslatedDogCard, depending on tab selected
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
        <TranslatedDogCard details={{translatedText,findNewDog}}/>
      </TabPanel>
    </div>
  )};
};
