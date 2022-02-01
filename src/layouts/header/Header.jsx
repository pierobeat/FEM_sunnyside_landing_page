import React from 'react';
import "../../assets/styles/header.css"
// import Navbar from '../../components/Navbar';

import Logo from "../../assets/images/logo.svg"
import Arrow_down from "../../assets/images/icon-arrow-down.svg"

const Header = () => {
    return (
        <div id="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid mx-3 pt-5">
                        {/* <a className="navbar-brand" href="#">sunnyside</a> */}
                        <img src={Logo} alt="Sunnyside Logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="menu nav-link active" aria-current="page" href="#">About</a>
                            <a className="menu nav-link" href="#">Services</a>
                            <a className="menu nav-link" href="#">Projects</a>
                            <a className="menu nav-link" href="#" tabIndex="-1">Contact</a>
                        </div>
                        </div>
                    </div>
                </nav>

                <div className="card border-0 bg-transparent header-card">
                    <div className="card-body">
                        <h5 className="card-title">WE ARE CREATIVES</h5>
                        <a href="#">
                            <img className="arrow" src={Arrow_down} alt="Arrow Down" />
                        </a>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
        </div>
    )
};

export default Header;
