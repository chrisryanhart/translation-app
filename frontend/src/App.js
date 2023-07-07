import React, {useState, useEffect} from 'react';
import { BrowserRouter, useHistory } from "react-router-dom";
import Routes from './routes-nav/Routes';
import CountContext from './UserContext';
import NavBar from './routes-nav/NavBar';
import BasicContainer from './containers/BasicContainer';



function App() {

  const [language,setLanguage] = useState('es');

  const updateLanguage = (newLanguage) => {

    setLanguage(newLanguage);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <CountContext.Provider value={{language, updateLanguage}}>
          <NavBar/>
          <BasicContainer/>
        </CountContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
