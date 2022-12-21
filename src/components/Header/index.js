// Write your code here
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button className="trigger-button" type="button">
          <GiHamburgerMenu className="hamburg-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button type="button" className="trigger" onClick={() => close()}>
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ul className="unordered-list">
            <Link className="link" to="/">
              <li className="link" onClick={() => close()}>
                <div className="container">
                  <AiFillHome className="home-image" />
                  <p className="home">Home</p>
                </div>
              </li>
            </Link>
            <Link to="/about" className="link">
              <li to="/about" className="link" onClick={() => close()}>
                <div className="container">
                  <BsInfoCircleFill className="home-image" />
                  <p className="home">About</p>
                </div>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
