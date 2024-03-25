import "./index.css"
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="one">
            <img src="https://res.cloudinary.com/dafmi9027/image/upload/v1711279544/Food%20Express/food-express-high-resolution-logo-transparent_hiwz2a.png" className="logo" alt="logo"/>
            </div>
            <div className="two">
                <p>Home</p>
                <p>Menu</p>
                <p>Services</p>
                <p>Mobile App</p>
                
            </div>
            <div className="three">
                <div className="search-style">
                <BsSearch className="search-height"/>
                <input type="text" placeholder="Search" className="searh-input"/>
                </div>
                <BsCart3 className="search-height"/>
                <button className="signbtnStyle">Sign In</button>
            </div>
            
        </div>
    )
}
export default NavBar