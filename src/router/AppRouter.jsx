import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ServicesPage from '../pages/ServicesPage'
import ClinicsPage from '../pages/ClinicsPage'
import PatientRegister from '../pages/RegisterPages/PatientRegister'

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
      
      <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>}/>
          {/* <Route path='/services' element={ <ServicesPage/>}/> */}
          <Route path='/clinics' element={ <ClinicsPage/>}/>


          <Route path='/register/patient' element={ <PatientRegister/>}/>
        
          
      </Routes>
  </Fragment>
    )
  }
}

export default AppRouter
