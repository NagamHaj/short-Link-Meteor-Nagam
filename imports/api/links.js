import {Meteor} from "meteor/meteor";
import {Mongo} from 'meteor/mongo';
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Links=new Mongo.Collection('links');


if (Meteor.isServer){
Meteor.publish('sLinks',function() {

return Links.find({userId:this.userId});
});

}

Meteor.methods({
'Links.addinsert'(url){
if (!this.userId){
throw new Meteor.Error('you did not sign in ');

}


new SimpleSchema({
url:{ type: String,
     label:'your link',
     regEx:SimpleSchema.RegEx.Url  }

}).validate({url});

Links.insert({
  _id: shortid.generate(),
  url,
  visible: true,
   userId: this.userId,
 visitedcount:0,
  lastvisitedat:null
});

},

'Links.setvisibility'(_id,visible){
if (!this.userId){
throw new Meteor.Error('not-authorized');
}
new SimpleSchema({
_id:{
   type: String,
     min:1 },
visible:{
   type: Boolean
}
}).validate({_id,visible});
Links.update({_id,userId: this.userId}, {$set:{visible}});
},

'Links.trackVisit'(_id){

  new SimpleSchema({
  _id:{
     type: String,
       min:1 }
  }).validate({_id});
  Links.update({_id}, {
    $set:{lastvisitedat: new Date().getTime()
    },
  $inc:{ visitedcount:1}

})
  }




});
//
// Meteor.methods({
// greetUser(name="unknown"){
//
// console.log("greetUser is running");
// return `hello ${name}`;
//
//
// }
// // ,
// // addnumbers(x,y){
// //
// // console.log("addnumbers is running");
// //
// // if(typeof y !=="number"|| typeof x !=="number"){
// //
// // throw new Meteor.Error("wrong not numbers", "plaese enter numbers");
// // }
// //
// // return x+y;
// //
// //
// //
// //
// // }
//
//
// });
