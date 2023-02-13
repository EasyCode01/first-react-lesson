import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)



    

 
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to='/' 
                    style={{color:'#fff', textDecoration:'none', 
                    display:'flex', gap:'10px'
                    }}>
                        <span>EasyCode</span>
                        <i className="bi bi-chat-left-text"></i>
                    </Link>  
                </div>
                <div onClick={ handleClick } className="navbar-icon">
                  <i className={ click ? "bi bi-x-lg" :"bi bi-list"}></i>
                </div>
                <ul className={ click ? "navbar-nav toggle" : "navbar-nav"}>
                    <li className="nav-item">
                        <Link to ="/" className="nav-link active" 
                        onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to ="/services" className="nav-link"
                        onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to ="/products" className="nav-link"
                        onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to ="/contact-us" className="nav-link"
                        onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;