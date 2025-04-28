import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ClinicsPage from '../pages/ClinicsPage'

import AOS from 'aos';
import 'aos/dist/aos.css';

import PatientRegisterPage from '../pages/RegisterPages/PatientRegisterPage'
import PatientLoginPage from '../pages/LoginPages/PatientLoginPage'

import AllClinicsPage from '../pages/AllClinicsPage'
import DoctorProfilePage from '../pages/DoctorProfilePage'
import AppointmentsSchedulePage from '../pages/AppointmentsSchedulePage'

class AppRouter extends Component {
  
   componentDidMount() {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }
      
  render() {
    return (
      <Fragment>
      
      <Routes>

          <Route path="/" element={<HomePage  />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/clinics' element={ <ClinicsPage/>}/>

          {/* Routes For Login And Register */}
          <Route path='/login/patient' element={ <PatientLoginPage/>}/>
          <Route path='/register/patient' element={ <PatientRegisterPage/>}/>
          

          <Route path='/clinics/:directory'  element={ <AllClinicsPage/>}/>

          <Route path='/doctor/profile/:id'  element={ <DoctorProfilePage/>}/>

          <Route path='/doctor/appointment/schedule/:id'  element={ <AppointmentsSchedulePage/>}/>
      </Routes>
  </Fragment>
    )
  }
}

export default AppRouter
