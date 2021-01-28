import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
         <div class="navbar">
           <NavLink exact activeClassName='change_color' to="/" >i-Temp</NavLink>
           <NavLink exact activeClassName='change_color' to="/about">About</NavLink>
         </div>
        </>
    );
}

export default Navbar;