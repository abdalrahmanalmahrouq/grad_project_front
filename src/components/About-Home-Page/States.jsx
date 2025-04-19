import React, { Component } from 'react'
import { useEffect } from "react";
 class States extends Component {
    componentDidMount() {
        // Load the PureCounter script manually if it's not part of index.html
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js';
        script.async = true;
        script.onload = () => {
          new window.PureCounter(); // initialize it once the script is loaded
        };
        document.body.appendChild(script);
      }
    
  render() {

    
    return (
        <div>
            
        <section id="stats" class="stats section">
    
          <div class="container" data-aos="fade-up" data-aos-delay="100">
    
            <div class="row gy-4">
    
              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="fas fa-user-md flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Doctors</p>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="far fa-hospital flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Departments</p>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="fas fa-flask flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Research Labs</p>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="fas fa-award flex-shrink-0"></i>
                  <div>
                  <span
                        data-purecounter-start="0"
                        data-purecounter-end="150"
                        data-purecounter-duration="1"
                        className="purecounter"
                    ></span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
    
        </section>
          </div>
    )
  }
}

export default States
