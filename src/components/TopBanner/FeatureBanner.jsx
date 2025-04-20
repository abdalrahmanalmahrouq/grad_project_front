import React, { Component, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function FeatureBanner () {

  useEffect(() => {
      AOS.init({ duration: 1000});
    }, []);
  
    return (
      <div className='App'>
        <section id="featured-services" className="featured-services section">

<div className="container">

<div className="row gy-4">

  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
  <div className="service-item position-relative">
    <div className="icon"><i className="fas fa-heartbeat icon"></i></div>
    <h4><a href="" className="stretched-link">خدمات القلب</a></h4>
    <p>نقدم خدمات متخصصة في رعاية القلب لضمان صحتكم وسلامتكم.</p>
  </div>
  </div>

  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
  <div className="service-item position-relative">
    <div className="icon"><i className="fas fa-pills icon"></i></div>
    <h4><a href="" className="stretched-link">الأدوية والعلاج</a></h4>
    <p>نوفر مجموعة واسعة من الأدوية والعلاجات لتلبية احتياجاتكم الصحية.</p>
  </div>
  </div>

  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
  <div className="service-item position-relative">
    <div className="icon"><i className="fas fa-thermometer icon"></i></div>
    <h4><a href="" className="stretched-link">الفحوصات الطبية</a></h4>
    <p>نقدم خدمات فحص دقيقة وشاملة لضمان التشخيص السليم.</p>
  </div>
  </div>

  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
  <div className="service-item position-relative">
    <div className="icon"><i className="fas fa-dna icon"></i></div>
    <h4><a href="" className="stretched-link">الاستشارات الوراثية</a></h4>
    <p>نساعدكم في فهم الجوانب الوراثية لصحتكم لتقديم رعاية مخصصة.</p>
  </div>
  </div>

</div>

</div>

</section>
      </div>
    )
 
}

export default FeatureBanner
