import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() {
    
    const [{basket} ] = useStateValue();
    console.log(basket);
    return (
    <nav className="header">
         {/*logo on the left */}
        <Link to="/">
            
        <img class="header__logo" src="htps://toppng.com/uploads/preview/craft-kits-and-craft-supplies-for-all-ages-craft-shop-logo-ideas-11563182234qeqqxcp8t4.png" 
        alt="logo"/>
        </Link>
        {/*search box*/}
        <div className="header__search">
            <input  type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" /> 
        </div>
        {/* 3 links */}
        <div className="header__nav">
         {/*1st link*/}
         <Link to="/login" className="header__link">
             <div className="header__option">
                <span className="header__option__line1">Hello</span>
                <span className="header__option__line2">Sign In</span>
             </div>
         
         </Link>
          
         {/*2nd link*/} 

         <Link to="/login"  className="header__link">
             <div className="header__option">
                <span className="header__option__line1">Returns</span>
                <span className="header__option__line2">& Order</span>
             </div>
         </Link>


          {/*3nd link*/} 
         <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__option__line1">Your</span>
                <span className="header__option__line2">Prime</span>
            </div>
        </Link>
         
         {/* 4th link */}
         {/* basket with number*/}
         <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* there is basket icon */}
                {/* bellow that there is number that represet no of item */}
               
                <ShoppingBasketIcon />
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
         </Link>
        </div>
            
    </nav>

    );
}

export default Header
