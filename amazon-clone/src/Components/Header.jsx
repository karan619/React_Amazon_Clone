import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <nav className="header">
        {/** logo on the left */}
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon_logo"
            className="header_logo"
          />
        </Link>
        {/** search box */}
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>

        {/** 3 Links */}
        <div className="header_nav">
          {/**link 1*/}
          <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_option">
              <span className="header_optionLineOne">Hello {user?.email}</span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign"}
              </span>
            </div>
          </Link>
          {/**link 2*/}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Return</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/**link 3*/}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>
          {/**link 4*/}
        </div>
        {/** Basket Icon with number */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/**Shopping basket */}
            <ShoppingBasketIcon />
            {/**Number of items in the basket */}
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
