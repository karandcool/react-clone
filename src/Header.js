import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className="header">
            {/* logo on the top*/}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
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
                        <span>hello karan,</span>
                        <span>Sign In</span>
                    </div>
                
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>&orders</span>
                    </div>
                
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                
                </Link>

            
            
            
            
            
            </div>


            {/* cart icons with a number */}
            
        </nav>
    )
}

export default Header
