import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDom from "react-dom";
import {Tracker} from "meteor/tracker";
import {Links} from '../imports/api/links';
import {Session} from "meteor/session";

import { routes, onChange } from '../imports/routes/route';

import '../imports/startup/Simple-Schema-Configeration.js';



Tracker.autorun(() =>{
const authenticated= !!Meteor.userId();
onChange(authenticated);
});

Session.set("isvisible",true);
// const name=Session.get("name");
// console.log(name);
 Meteor.startup(() =>{
   url="jhdfgjf"
   Meteor.call('Links.insert',url);
   // Meteor.call('addnumbers',100,17, (err,res) => {
   //
   //   console.log('client message',err,res);
   // });

ReactDom.render(routes,document.getElementById('app'));
});
