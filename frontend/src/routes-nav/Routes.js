import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import DogCard from "../dogs/DogCard";
import TranslationTabs from "../dogs/TranslationTab";
// import BasicContainer from "../containers/BasicContainer";
import Home from "../homepage/Home";
import LanguageSelection from "../preferences/LanguageSelection";
import PageNotFound from "../errors/PageNotFound";



function Routes(){

    // Visit the path specified in the url via react-router
    // If path not found, redirect to the 404 not found path
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/dogs">
                    <TranslationTabs/>
                </Route>
                <Route exact path="/preferences">
                    <LanguageSelection/>
                </Route>
                <Route exact path="/pageNotFound">
                    <PageNotFound/>
                </Route>

                <Redirect to='/pageNotFound'/>
                
            </Switch>
        </div>
    );

}

export default Routes;