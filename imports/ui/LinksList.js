import React from "react";
import {Meteor} from "meteor/meteor";
import {Links} from './../api/links';
import LinkListItem from "./LinkListItem";
import {Tracker} from "meteor/tracker";
import {Session} from "meteor/session";
import FlipMove from 'react-flip-move';
export default class LinksList extends React.Component{
constructor(props ){
super(props);
this.state={
  links:[]
};

}
componentDidMount(){
  console.log("statrcomponent");
  this.linkTracher=Tracker.autorun(() =>{
    Meteor.subscribe('sLinks');
  const links=Links.find({visible: Session.get("isvisible")}).fetch();
   this.setState({links})
  });
}
componentWillUnmount(){
console.log("endcomponent");
this.linkTracher.stop();
}
renderItem(){
  if (this.state.links.length==0){

    return <p className="element element-nolink">No Links </p>;
  }

  return this.state.links.map((link) => {
   const shortlink= Meteor.absoluteUrl(link._id);
  return <LinkListItem key={link._id} shortlink={shortlink} {...link} />;

   });



}


render(){


return (
<div>
<div><FlipMove  maintainContainerHeight={true}>
{this.renderItem()}
</FlipMove>
</div>
 </div>
);








}
};
