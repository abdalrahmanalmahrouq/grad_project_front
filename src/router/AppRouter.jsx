import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ServicesPage from '../pages/ServicesPage'
import ClinicsPage from '../pages/ClinicsPage'
import PatientRegisterPage1 from '../pages/RegisterPages/PatientRegisterPage1'
import PatientRegisterPage2 from '../pages/RegisterPages/PatientRegisterPage2'
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


          <Route path='/register/patient/page1' element={ <PatientRegisterPage1/>}/>
          <Route path='/register/patient/page2' element={ <PatientRegisterPage2/>}/>
          
      </Routes>
  </Fragment>
    )
  }
}

export default AppRouter
