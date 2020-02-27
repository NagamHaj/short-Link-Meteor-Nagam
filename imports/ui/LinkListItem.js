import React from "react";
import {Meteor} from "meteor/meteor";
import propTypes from "prop-types";
import Clipboard from 'clipboard';
import moment from "moment";



export default class LinkListItem extends React.Component{

    constructor(props){

  super(props);
  this.state={
  iscopied:false

  };

    }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({iscopied: true});
       setTimeout(() => { this.setState({iscopied: false})  } , 1000);
      // alert('It worked!');
    }).on('error', () => {
     alert('Unable to copy. Please manually copy the link.');
    })
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }

renderStates(){
  const timesofvisit=this.props.visitedcount==1?"visit":"visits";
  let messagevisit =null;
if (typeof this.props.lastvisitedat === "number"){
  messagevisit=`from ( ${moment(this.props.lastvisitedat).fromNow()})`;

}
return <p className="element-italic"> {this.props.visitedcount} {timesofvisit} {messagevisit} </p>
}




render() {

return(

<div className="element">
<h2>{this.props.url}</h2>
<p className="element-message">{this.props.shortlink}</p>


{this.renderStates()}

<div className="elemet-button">
<a  className="button button--pill button--link"  href={this.props.shortlink} target="_blank">
visit
</a>

     <button className="button button--pill " ref="copy"
    data-clipboard-text={this.props.shortlink}>
     {this.state.iscopied? "copied": "copy" }
     </button>
     <button className="button button--pill " onClick={()=>{
      Meteor.call("Links.setvisibility",this.props._id, !this.props.visible);
     }}>
     {this.props.visible? "visible": "Hindden"}
     </button>


</div>
</div>


);

}



};
LinkListItem.propTypes = {
  _id: propTypes.string.isRequired,
  url:propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
shortlink: propTypes.string.isRequired,
visible:propTypes.bool.isRequired,
visitedcount:propTypes.number.isRequired ,
lastvisitedat:propTypes.number

};
