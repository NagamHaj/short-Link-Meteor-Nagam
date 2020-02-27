import {Meteor} from "meteor/meteor";
import React from "react";
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";


import Signup from "../ui/Signup";
import Link from "../ui/Link";
import Notfound from "../ui/Notfound";
import Login from "../ui/Login";


const unauthenticatedpages=["/","/signup"];
const authenticatedpages=["/link"];
const history = createBrowserHistory();


const privatepages = () => {
if (!Meteor.userId){
  console.log("!Meteor.userId",!Meteor.userId);
  history.replace("/");
}
};

const puplicpages=() => {
if (Meteor.userId){
    console.log("Meteor.userId",Meteor.userId);

  history.replace("/link");
}
};


export const onChange = (auth) => {
const pathname= location.pathname;
const isunauthenticated=unauthenticatedpages.includes(pathname);
const isauthenticated=authenticatedpages.includes(pathname);
if (auth && isunauthenticated){
history.replace('/link');
}
else if(!auth && authenticatedpages){
  history.replace('/');
}};


export const routes= (

<Router   history={history} >
<Switch>
<Route exact path="/signup" component={Signup} onEnter={puplicpages}/>
<Route exact path="/"  component={Login} onEnter={puplicpages}/>
<Route exact path="/link" component={Link} onEnter={privatepages}/>
<Route component={Notfound}/>
</Switch>
</Router>

);
