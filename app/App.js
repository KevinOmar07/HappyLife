import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";

import BaulRecuerdos from "./BaulRecuerdos";
import AboutUs from "./AboutUs";
import SignUp2 from "./SignUp2";
import DiarioEmocional from "./DiarioEmocional";
import RinconFelicidad from "./RinconFelicidad";
import ConsejosYTips from "./ConsejosYTips";


function App() {
    return(
        <Router>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/SignIn">
                <SignIn/>
            </Route>
            <Route path="/SignUp">
                <SignUp2/>
            </Route>
            <Route path="/dashboard">
                <RinconFelicidad/>
            </Route>
            <Route path="/BaulRecuerdos">
                <BaulRecuerdos/>
            </Route>
            <Route path="/aboutUs">
                <AboutUs/>
            </Route>
            <Route exact path="/diario">
                <DiarioEmocional/>
            </Route>
            <Route path="/prueba2">
                <SignUp2/>
            </Route>
            <Route path="/CYT">
                <ConsejosYTips/>
            </Route>
        </Router>
    )
}
export default App;