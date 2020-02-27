import React from "react";
import {Meteor} from "meteor/meteor";
import Modal from "react-modal";


export default class Addlink extends React.Component{
  constructor(props){

super(props);
this.state={
url:'',
isOpen:false,
error:''

};

  }
    onSubmit(e){
      const {url} = this.state;
      e.preventDefault();
    // const url = this.state.url;

    if (url){
    Meteor.call('Links.addinsert', url, (err,res)=>{
   if (!err){
      this.handlerClose();
   }else{
     this.setState({error: err.reason});
   }

    });


  }}
  onChange(e)
  {
  this.setState({url: e.target.value});
  }
  handlerClose(){
    this.setState({isOpen:false, url:'', error:''})
  }
render(){

return(
  <div>
  <button className="button" onClick={()=>{this.setState({isOpen:true})}}>add link</button>
 <Modal
 isOpen={this.state.isOpen}
 contentLabel="add link"
 onAfterOpen={() =>{this.refs.url.focus()}}
 onRequestClose={this.handlerClose.bind(this)}
 className="boxed-view__box"
 overlayClassName="boxed-view boxed-view--modal"
 ariaHideApp={false}>
 <h1>Add a new link</h1>
 {this.state.error? <p>{this.state.error}</p>: undefined}
<form className="boxed-view__form"  >
<input type= "text" ref="url" placeholder="newlink" value={this.state.url} onChange={this.onChange.bind(this)}/>
<button className= "button" onClick={this.onSubmit.bind(this)}>add link </button>
<button className= "button"type="button"onClick={this.handlerClose.bind(this)}>cancel</button>
</form>

 </Modal>
</div>

);


}
};
