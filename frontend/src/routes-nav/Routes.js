import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import DogCard from "../dogs/DogCard";
import TranslationTabs from "../dogs/TranslationTab";
// import BasicContainer from "../containers/BasicContainer";
import Home from "../homepage/Home";
import LanguageSelection from "../preferences/LanguageSelection";



function Routes(){

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {/* <Home/> */}
                    {/* <BasicContainer/> */}
                    <Home/>
                </Route>
                <Route exact path="/dogs">
                    <TranslationTabs/>
                </Route>
                <Route exact path="/preferences">
                    <LanguageSelection/>
                </Route>
                {/* <Route exact path="/login">
                    <LoginFormCard/>
                </Route>

                <Route exact path="/users/:id">
                    <ProfileCard/>
                </Route>
                <Redirect to="/"/> */}
            </Switch>
        </div>
    );

}

export default Routes;