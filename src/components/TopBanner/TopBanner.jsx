import React, { Component } from 'react';

import imghero1 from '../../assets/img/hero-carousel/hero-carousel-1.jpg';
import imghero2 from '../../assets/img/hero-carousel/hero-carousel-2.jpg';
import imghero3 from '../../assets/img/hero-carousel/hero-carousel-3.jpg';

class TopBanner extends Component {
  render() {
    return (
      <div>
        <section id="hero" className="hero section">
          <div
            id="hero-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-item active">
              <img src={imghero1} alt="" />
              <div className="container">
                <h2>مرحبًا بكم في موقعنا</h2>
                <p>
                  نحن نوفر منصة متكاملة لربط المرضى بالعيادات، حيث يمكنكم حجز
                  المواعيد بسهولة والتواصل مع الأطباء بكل يسر.
                </p>
                <a href="#about" className="btn-get-started">
                  للمزيد
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img src={imghero2} alt="" />
              <div className="container">
                <h2>سهولة حجز المواعيد</h2>
                <p>
                  من خلال منصتنا، يمكنكم اختيار العيادة المناسبة وحجز موعدكم
                  بضغطة زر.
                </p>
                <a href="#about" className="btn-get-started">
                  اقرأ المزيد
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img src={imghero3} alt="" />
              <div className="container">
                <h2>تواصل مباشر مع الأطباء</h2>
                <p>
                  نوفر لكم وسيلة للتواصل المباشر مع الأطباء للحصول على
                  الاستشارات الطبية بسهولة.
                </p>
                <a href="#about" className="btn-get-started">
                  اقرأ المزيد
                </a>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>

            <ol className="carousel-indicators"></ol>
          </div>
        </section>

        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-calendar-check icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      حجز المواعيد
                    </a>
                  </h4>
                  <p>
                    احجز موعدك بسهولة مع العيادة أو الطبيب المناسب لك عبر
                    منصتنا.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-user-md icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      استشارات طبية
                    </a>
                  </h4>
                  <p>
                    تواصل مع الأطباء للحصول على استشارات طبية دقيقة ومخصصة
                    لحالتك.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-clinic-medical icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      دليل العيادات
                    </a>
                  </h4>
                  <p>
                    استعرض قائمة العيادات المتوفرة واختر الأنسب لاحتياجاتك
                    الصحية.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-comments icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      تواصل سريع
                    </a>
                  </h4>
                  <p>
                    استخدم منصتنا للتواصل السريع مع العيادات والأطباء لتلبية
                    احتياجاتك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopBanner;
