import React, { Component } from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

 class Menu extends Component{

 render(){
 return(
  
   <div className="navstyle">
    <ul>
       <li> <Link to="/">  Login </Link> </li>
       <li> <Link to="Question"> Question</Link> </li>
       
    </ul>
  </div>
 );

}
 } 

export default Menu;