import React from "react";
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom';

import style from "../style/Nav.module.css"


function Nav({onSearch}){
    return(

     <div className={style.content}>
         <Link className={style.link} to="/about"><span>About</span></Link>
         <Link className={style.link} to='/home'><span>Home</span></Link>
         <Link className={style.link} to= "/favorites"><span>Favorites</span></Link>
         <SearchBar onSearch={onSearch}></SearchBar>
     </div>
    );
};

export default Nav;