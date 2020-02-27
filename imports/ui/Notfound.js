import React from "react";
import {Link } from 'react-router-dom';

 export default ()=>{

 return (
    <div className="boxed-view">
    <div className="boxed-view__box">
<h1>Not found page</h1>
<p>please go to home </p>
<Link to="/">homepage</Link>
    </div>
    </div>
  );


};
