import React, {useState, useEffect} from 'react';
import { BrowserRouter, useHistory } from "react-router-dom";
import Routes from './routes-nav/Routes';
import CountContext from './UserContext';
import NavBar from './routes-nav/NavBar';
import BasicContainer from './containers/BasicContainer';


function App() {

  const test = 'this is a test'

  return (
    <div className="App">
      <BrowserRouter>
        <CountContext.Provider value={test}>
          <NavBar/>
          <BasicContainer/>
          {/* <Routes/> */}
          {/* <NewContainer/> */}
        </CountContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
