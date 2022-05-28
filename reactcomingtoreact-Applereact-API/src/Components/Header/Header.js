import React from 'react';
import Logo from '../images/icons/icons/logo-sm.png';
import Search from '../images/icons/icons/search-icon-sm.png';
import Cart from '../images/icons/icons/cart-sm.png';

function Header() {
  return (
  
  <div className="nav-wrapper fixed-top">
    <div className="container">
      <nav className="navbar navbar-toggleable-sm            
        navbar-expand-md">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          ☰
        </button>
          <a className="navbar-brand mx-auto" href="/apple/">
            <img src={Logo} alt="" />
          </a>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav nav-justified w-100 nav-fill">
            <li className="nav-item">
              <a className="nav-link " href="/mac/">Mac</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/apple/">iphone</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/apple/">ipad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apple/">watch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apple/">tv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/apple/">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apple/">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search/">
                <img src={Search} alt=""/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart/">
                        <img src={Cart} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)}
export default Header;