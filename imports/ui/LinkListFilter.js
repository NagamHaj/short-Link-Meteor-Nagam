import React from "react";
import {Session} from "meteor/session";

export default class LinkListFilter extends React.Component {
  constructor(props ){
  super(props);
  this.state={
    isvisible:Session.get("isvisible")
  };
  }

  componentDidMount(){
    console.log("statrcomponent");
    this.linkTracher=Tracker.autorun(() =>{
     this.setState({isvisible: Session.get("isvisible")});
    });
  }
  componentWillUnmount(){
  console.log("endcomponent");
  this.linkTracher.stop();
  }
  render (){
return (
  <div>
  <label className="check-box">
  <input className="check-box__box" type="checkbox" checked={!this.state.isvisible} onChange={(e)=>{

    Session.set("isvisible",!e.target.checked);
  }}/>
  show hidden values
  </label>

  </div>
);
}

};
