import React, { Component } from 'react'

import imghero1 from '../../assets/img/hero-carousel/hero-carousel-1.jpg'
import imghero2 from '../../assets/img/hero-carousel/hero-carousel-2.jpg'
import imghero3 from '../../assets/img/hero-carousel/hero-carousel-3.jpg'

 class TopBanner extends Component {
  
  render() {
    return (
      <div>
   
    <section id="hero" className="hero section">

      <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <div className="carousel-item active">
          <img src={imghero1} alt="" />
          <div className="container">
            <h2>Welcome to Medicio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#about" className="btn-get-started">Read More</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src={imghero3} alt="" />
          <div className="container">
            <h2>At vero eos et accusamus</h2>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
            <a href="#about" className="btn-get-started">Read More</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src={imghero3} alt="" />
          <div className="container">
            <h2>Temporibus autem quibusdam</h2>
            <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
            <a href="#about" className="btn-get-started">Read More</a>
          </div>
        </div>

        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

        <ol className="carousel-indicators"></ol>

      </div>

    </section>
    

  
    <section id="featured-services" className="featured-services section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-heartbeat icon"></i></div>
              <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-pills icon"></i></div>
              <h4><a href="" className="stretched-link">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-thermometer icon"></i></div>
              <h4><a href="" className="stretched-link">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-dna icon"></i></div>
              <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>

    </section>
      </div>
    )
  }
}

export default TopBanner
