import React, {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import CountContext from './UserContext';
import NavBar from './routes-nav/NavBar';
import BasicContainer from './containers/BasicContainer';



function App() {

  // language variable will be changed throughout the app
  // declare here and share with userContext
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
