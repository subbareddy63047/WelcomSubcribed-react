import './index.css'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

const Headers = () => (
  <div className="head-container">
    <div className="subbu">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1694492739/shopify_icon_hqdwef.png"
          alt="shopify"
          className="image"
        />
        <h1 className="company-name">Shopify</h1>
      </div>
      <nav className="options-container">
        <select className="op">
          <option className="text" id="1">
            Solution
          </option>
        </select>
        <a href="pricing" className="text1">
          Pricing
        </a>
        <select className="op">
          <option className="text" id="1">
            Resources
          </option>
        </select>
      </nav>
    </div>
    <nav className="navbar-container">
      <a href="https://www.shopify.com/" className="anchor">
        Start free trial
      </a>

      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
      >
        {close => (
          <div className="popup">
            <nav className="nav-items">
              <a href="solutions">Solutions</a>
              <a href="Pricing">Pricing</a>
              <a href="Resources">Resources</a>
            </nav>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </nav>
    <div className="login-container">
      <p className="login">Log in</p>
      <button type="button" className="start-button">
        Start free trail
      </button>
    </div>
  </div>
)

export default Headers
