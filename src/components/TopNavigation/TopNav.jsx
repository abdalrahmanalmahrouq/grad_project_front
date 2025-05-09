import React, { Component } from 'react';
import logo2 from '../../assets/img/mid1.png'
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
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)} >
              <img src={logo2} alt="ميديسينا" className="logo d-flex align-items-center me-auto" style={{height:"90px",width:"100px"}} />
             
            </NavLink>

            {/* Nav */}
            <nav id="navmenu" className="navmenu me-auto">
              <ul onClick={this.handleNavClick}>
                <li><NavLink to="/" onClick={() => window.scrollTo(0, 0)} >الصفحة الرئيسية</NavLink></li>
                <li><NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>من نحن</NavLink></li>
                <li><NavLink to="/clinics" onClick={() => window.scrollTo(0, 0)}>العيادات</NavLink></li>
                <li><NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>اتصل بنا</NavLink></li>
                <li class="dropdown" dir='rtl'  > <NavLink ><span>تسجيل الدخول </span> <i class="bi bi-chevron-down toggle-dropdown "></i></NavLink>
                  <ul class="dropdown-active" >
                    <li> <NavLink  to="/login/patient">مريض</NavLink></li>
                    <li> <NavLink  to="/login/clinic">عيادة</NavLink></li>
                    <li> <NavLink  to="/login/doctor">طبيب</NavLink></li>
                    <li> <NavLink  to="/login/lab">مختبر</NavLink></li>
                 
                  </ul>
                </li>
            
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
