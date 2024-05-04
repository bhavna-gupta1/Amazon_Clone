import React from "react";
import "./Navbar.css"
import amazonlogo from "./amazonlogo.png"
import bgimg from "./bgimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
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
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
            <p>All</p>
            </div>
            <div className="list_item">
                
               <p>Todays Deal</p>
               <p>Customer service</p>
               <p>Registery</p>
               <p>Gift cards</p>
               <p>Sell</p>
               </div>

               <div className="electronic">
                <p>Shop Deals in Electronics</p>
               </div>
               

        </div>
        <div className=" content_img">
       <img src={bgimg} alt="bg"/>
       <div className="para"><p>Lorem, ipsum dolor sit adipisicing elit. Velit a non dolorum iure quis nemo.</p></div>
        </div>
       <div className="shop">
        <div className="shopimg">
        <img src={img1}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img2}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img3}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img4}/>
        <button>Add To Cart</button>
        </div>
       
       </div>
       <div className="shop2">
       <div className="shopimg">
        <img src={img1}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img2}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img3}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img4}/>
        <button>Add To Cart</button>
        </div>
        </div>
        <div className="shop3">
       <div className="shopimg">
        <img src={img1}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img2}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img3}/>
        <button>Add To Cart</button>
        </div>
        <div className="shopimg">
        <img src={img4}/>
        <button>Add To Cart</button>
        </div>
        
        
       </div>
       
<footer>
    <div  className="footer1">
        Back To TOP
    </div>
    <div className="foot2">
           <div className="foot2_1">
            <h3>Get to Know Us</h3>
            <p>about Us</p>
            <p>Careers</p>
            <p>Press Relepses</p>
            <p>amazon Science</p>
            </div>
            <div className="foot2_1">
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
           
            </div>
            <div className="foot2_1">
            <h3>Make Money with Us</h3>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
            <p>Amazon Pay on Merchantst thre hs</p>

            
            </div>
            <div className="foot2_1">
            <h3>Let Us Help You</h3>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
            </div>
                 
    </div>
    <div className="navlogofoot"> 
            <img src={amazonlogo} alt="logo" />
            <button>English</button>
            <button>India</button>
            </div> 

            <div className="foot_last">
                <div className="foot_last_1">
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                 

                </div>
                <div className="foot_last_1">
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
                    <div className="foot_content">
                    <h4>AbeBooks</h4>
                  <p>Books, art</p>
                  <p>& collectibles</p>
                    </div>
            
                
                </div>
                     
                <div className="last_line">
                <div className="last_line1">
                    <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads </p>
                </div>
                <div className="last_line2">
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates
 </p>
                </div>
                </div>
                
            </div>
   
</footer>


       

        </>
    )
}
export default Navbar;