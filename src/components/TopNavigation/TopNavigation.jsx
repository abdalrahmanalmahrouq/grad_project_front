import React, { Component } from 'react'

import logo from '../../assets/img/logo.png'
 class TopNavigation extends Component {
  render() {
    return (
      <div>
        <main>
         <header id="header" className="header sticky-top">

<div className="topbar d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="d-none d-md-flex align-items-center">
      <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
    </div>
    <div className="d-flex align-items-center">
      <i className="bi bi-phone me-1"></i> Call us now +1 5589 55488 55
    </div>
  </div>
</div>

<div className="branding d-flex align-items-center">

  <div className="container position-relative d-flex align-items-center justify-content-end">
    <a href="index.html" className="logo d-flex align-items-center me-auto">
      <img src={logo} alt=""/>
    
      <h1 className="sitename">Medicio</h1>
    </a>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#departments">Departments</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <a className="cta-btn" href="index.html#appointment">Make an Appointment</a>

  </div>

</div>

</header>
</main>
      </div>
    )
  }
}

export default TopNavigation
