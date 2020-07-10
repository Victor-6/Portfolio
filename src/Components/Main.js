import React from "react";
import {Switch, Route} from "react-router-dom";
import LandinPage from "./LandingPage/LandingPage";
import Presentation from './A_propos/Presentation';
import Projets from "./Projets/Projets";
import Experiences from "./Experiences/Experiences";
import Contact from "./Contact/Contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandinPage}/>
        <Route path="/Presentation" component={Presentation}/>
        <Route path="/Projets" component={Projets}/>
        <Route path="/Experiences" component={Experiences}/>
        <Route path="/Contact" component={Contact}/>
    </Switch>
)

export default Main;