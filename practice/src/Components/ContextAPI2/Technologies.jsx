import React from 'react'
import './style.css'
import {Link,Outlet} from 'react-router-dom';

export default function () {
 
   return (
 <div className="mainTech">
    <div className="left">
<Link to="html">HTML</Link>
<Link to="css">CSS</Link>
<Link to="js">JS</Link>
<Link to="react">React</Link>

    </div>
    <div className="right">
        <Outlet/>

    </div>
 </div>
  )
}
