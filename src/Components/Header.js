import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom"

const Header = () =>{
    return <div className="header">
        <div >
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"></img>
            </Link>
        </div>
        <div className="header_search">
            <input 
            type="text"
            className="header_searchInput"/>
            <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineOne">Hello Guest</span>
                <span className="header_optionLineTwo">Sign In</span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">&Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                0
                </span>
                </div>
            </Link>
        </div>
    </div>
}

export default Header