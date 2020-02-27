import React from "react";
import{Account} from 'meteor/accounts-base';
import propTypes from "prop-types";

// export default class PrivateHeader extends React.Component{
//   goout () {
// Accounts.logout();  // this.props.history.push("/login");
//   }
// render(){
//  return(
// <div>
// <h1>{this.props.title}</h1>
// <button onClick={this.goout.bind(this)}>signout </button>
// </div>
//  );
// }
// };
const PrivateHeader = (props) =>{
  return(
  <div className="nav">
  <div className="nav--content">
  <h1 className="header__title">{props.title}</h1>
  <button  className="button button--link-text" onClick={() => {
  Accounts.logout()

}}>Logout </button>
  </div>
  </div>

  );
};

PrivateHeader.propTypes = {
title: propTypes.string.isRequired

};
export default PrivateHeader;
