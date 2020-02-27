import React from "react";
import Addlink from "./Addlink";
import LinksList from './LinksList';
import PrivateHeader from "./PrivateHeader";


import LinkListFilter from "./LinkListFilter";


export default () => {


   return (
     <div>



  <PrivateHeader title="Your Links"/>
<div className="content" >
  <LinkListFilter/>
  <Addlink/>
  <LinksList/>

</div>
  </div>
);
};




// export default class Link extends React.Component{
//
//
//
// render(){
//
//
//  return (
//    <div>
//
// <PrivateHeader title="Your Links"/>
// <LinksList/>
// <Addlink/>
//
// </div>
//
// );
// }
// };
