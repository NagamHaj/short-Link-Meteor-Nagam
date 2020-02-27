import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import {Links} from '../imports/api/links';
import {WebApp} from "meteor/webapp";
import '../imports/startup/Simple-Schema-Configeration.js';
Meteor.startup(() => {
    WebApp.connectHandlers.use( (req,res,next) =>{
   const _id=req.url.slice(1);
   const link = Links.findOne({_id});
   if(link){
       res.statusCode = 302;
       res.setHeader('Location', link.url);
       res.end();
        console.log("it works");
         Meteor.call('Links.trackVisit',link._id, (err,res)=>{
        if (err){
          console.log(err);
        }

        });
   }else{
    next();
   }
    });
      });
//   WebApp.connectHandlers.use( (req,res,next) =>{
// console.log("middleware");
// // console.log(req.url,req.method, req.headers, req.query);
// // Set HTTP status code
//   // res.statusCode = 404;
//   // // Set HTTP headers
//   // res.setHeader('my-custom-header', 'Andrew was here!');
//   // // Set HTTP body
//   // res.write('<h1>This is my middleware at work!</h1>');
//   // End HTTP request
//   // res.end();
// next();
//
//   });
  // Meteor.call('greetUser',(err,res) => {
  //
  //   console.log('server message',err,res);
  // });




































  // code to run on server at startup


  // try{
  //   throw new Meteor.Error(400,'message I put about error' );}
  // catch(e){
  //   console.log(e);
  // }

// const employeeschema=new SimpleSchema({
//
// name:{
// type:String,
// min:1,
// max:200
//
// },
// hourwage:{
// type: Number,
// min: 0
//
//
// },
// email: {
// type:String,
// regEx: SimpleSchema.RegEx.Email
//
//
// }
//
// });
//
// employeeschema.validate({
// name: "Ali",
// hourwage: 200,
// email: "drfg@oiuregiuorg.diukhih"
//
// });
