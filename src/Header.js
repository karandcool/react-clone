import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            {/* logo on the top*/}
            <Link to="/">
                
            <img className="header__logo" src="images/logo1.png" alt=""/>
            
            </Link>
            {/* search box*/}
            <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello,</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">&orders</span>
                    </div>
                
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />                       
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                
                </Link>

            
            
            
            
            
            </div>


            {/* cart icons with a number */}
            
        </nav>
    )
}

export default Header
