import React from "react";
import "./Navbar.css"
import amazonlogo from "./amazonlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import './CartIcon.css'; // Import CSS for styling


function Navbar(){

    return(
        <>
        <div className="navbar">
            <div className="navlogo"> 
            <img src={amazonlogo} alt="logo" />
            </div>
           <div className="nav_address">
            <p>Deliver To</p>
            <div className="add_icon">
            <FontAwesomeIcon icon={faLocationDot} />
                <p>india</p>
            </div>

           </div>
           <div className="nav_search">
            <select>
                <option>
                    All
                </option>
                </select>
            <input placeholder="Search Amazon" type="text"/>
           <button> <FontAwesomeIcon icon={faSearch} /></button>

           
           

           </div>
           <div className="nav_signin">
            <p>Hello, sign in</p>
            <p className="account">Account & lists</p>
           </div>
          
           <div className="nav_signin">
            <p>Return</p>
            <p className="account">& order</p>
           </div>
           <div className="cartlogo">
           <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
           <p>cart</p>

           </div>
        </div>
        <div className="panel">
            <div className="All">
                
            </div>
        </div>

        </>
    )
}
export default Navbar;