import React, { Component } from 'react';
import logo from '../../assets/img/logo (2).png';
import logo2 from '../../assets/img/logo(3).png'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

  constructor(){
    super();
    this.state={
        navMenu:"header d-flex align-items-center fixed-top"
    }
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navMenu: "nav-back-scroll d-flex align-items-center fixed-top header" });
    } else {
      this.setState({ navMenu: "header d-flex align-items-center fixed-top"  });
    }
  }


  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    }



  toggleMobileNav = () => {
    document.body.classList.toggle('mobile-nav-active');
  };
  handleNavClick = () => {
    document.body.classList.remove('mobile-nav-active');
  };
  render() {
    return (
      <div dir="rtl">
        <header id="header" className={this.state.navMenu}>
          <div className= "container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            {/* Logo */}
            <NavLink to="/" className="logo d-flex align-items-center">
              <img src={logo} alt="ميديسينا" />
              <h1 className="sitename ms-2">ميديسينا</h1>
            </NavLink>

            {/* Nav */}
            <nav id="navmenu" className="navmenu me-auto">
              <ul onClick={this.handleNavClick}>
                <li><NavLink to="/"  >الصفحة الرئيسية</NavLink></li>
                <li><NavLink to="/about">من نحن</NavLink></li>
                <li><NavLink to="/clinics">العيادات</NavLink></li>
                <li><NavLink to="/contact">اتصل بنا</NavLink></li>
                <NavLink className="cta-btn me-3" to="/register/patient/page1">{this.props.button}</NavLink>
              </ul>

              {/* Hamburger toggle */}
              <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={this.toggleMobileNav}></i>
            </nav>

            {/* CTA */}
          
          </div>
        </header>
      </div>
    );
  }
}
export default TopNav;
