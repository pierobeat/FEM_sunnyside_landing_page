import React from 'react';
import "../../assets/styles/footer.css"

import Logo from "../../assets/images/logo.svg"

import Facebook from "../../assets/images/icon-facebook.svg"
import Instagram from "../../assets/images/icon-instagram.svg"
import Twitter from "../../assets/images/icon-twitter.svg"
import Pinterest from "../../assets/images/icon-pinterest.svg"

const Footer = () => {
  return(
  <div id="footer">
    <div className="footer-content">
      <div className="title">
        <img src={Logo} alt="Sunnyside Logo" />
      </div>
      <div className="footer-menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">About</a>
                <a className="nav-link" href="#">Services</a>
                <a className="nav-link" href="#">Projects</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="social-media">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={Instagram} alt="instagram" />
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={Pinterest} alt="pinterest" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  ) 
};

export default Footer;


