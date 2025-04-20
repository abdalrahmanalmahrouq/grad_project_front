import React, { Component } from 'react'
import logo from '../../assets/img/logo (2).png'

class TopNavigation extends Component {
  render() {
    return (
      <div>
        <main>
          <header id="header" className="header sticky-top" dir="rtl">
            {/* Top Bar */}
            <div className="topbar d-flex align-items-center">
              <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="d-flex align-items-center">
                  <i className="bi bi-phone ms-1"></i> 📞 اتصل بنا الآن على +79 10 44 738
                </div>
                <div className="d-none d-md-flex align-items-center">
                  <i className="bi bi-clock ms-1"></i> الاثنين - السبت، من 8 صباحًا حتى 10 مساءً
                </div>
              </div>
            </div>

            {/* Branding and Navigation */}
            <div className="branding d-flex align-items-center">
              <div className="container position-relative d-flex align-items-center justify-content-between">
                
                {/* Logo on the right */}
                <div className="d-flex align-items-center">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <img src={logo} alt="" />
                    <h1 className="sitename ms-2">ميديسينا</h1>
                  </a>
                </div>

                {/* Navigation + CTA aligned to the far left */}
                <div className="d-flex align-items-center gap-3">
                  <nav id="navmenu" className="navmenu">
                    <ul className="d-flex mb-0">
                      <li><a href="#hero" className="active">الصفحة الرئيسية</a></li>
                      <li><a href="#about">من نحن</a></li>
                      <li><a href="#services">خدماتنا</a></li>
                      <li><a href="#contact">اتصل بنا</a></li>
                      
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                  </nav>
                  <a className="cta-btn" href="index.html#appointment">احجز موعدًا</a>
                </div>

              </div>
            </div>
          </header>
        </main>
      </div>
    )
  }
}

export default TopNavigation
