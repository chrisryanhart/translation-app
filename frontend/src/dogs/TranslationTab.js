import React, {useState, useEffect} from 'react';
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
          <Typography>{children}</Typography>
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


  // call dog api after the page loads

  useEffect(function fetchDog(){
    async function callDogApi(id){
      
      let res = await getDog(id);
      // const {name, bred_for, breed_group, temperament, }
      setDog({...dog, ...res.data});
    }

    callDogApi(1);

  },[]);

  // extract the dog data and pass into dog component
  let arr = [];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Dog Overview" {...a11yProps(0)} />
          <Tab label="Translation" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DogCard details={dog} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Show alternate content here */}
        <TranslatedDogCard details={dog}/>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}
