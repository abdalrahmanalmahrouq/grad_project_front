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
import ClinicRegisterPage from '../pages/RegisterPages/ClinicRegisterPage'
import ClinicLoginPage from '../pages/LoginPages/ClinicLoginPage'
import DoctorLoginPage from '../pages/LoginPages/DoctorLoginPage'
import DoctorRegisterPage from '../pages/RegisterPages/DoctorRegisterPage'
import LabLoginPage from '../pages/LoginPages/LabLoginPage'
import LabRegisterPage from '../pages/RegisterPages/LabRegisterPage'

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
          {/* for patient */}
          <Route path='/login/patient' element={ <PatientLoginPage/>}/>
          <Route path='/register/patient' element={ <PatientRegisterPage/>}/>
          {/* end patient */}

          {/* for clinic */}
          <Route path='/login/clinic' element={ <ClinicLoginPage/>}/>
          <Route path='/register/clinic' element={ <ClinicRegisterPage/>}/>
          {/* end clinic */}

           {/* for doctor */}
           <Route path='/login/doctor' element={ <DoctorLoginPage/>}/>
          <Route path='/register/doctor' element={ <DoctorRegisterPage/>}/>
          {/* end doctor */}

           {/* for lab */}
           <Route path='/login/lab' element={ <LabLoginPage/>}/>
            <Route path='/register/lab' element={ <LabRegisterPage/>}/>
          {/* end lab */}
          {/* End For Login And Register */}

          <Route path='/clinics/:directory'  element={ <AllClinicsPage/>}/>

          <Route path='/doctor/profile/:id'  element={ <DoctorProfilePage/>}/>

          <Route path='/doctor/appointment/schedule/:id'  element={ <AppointmentsSchedulePage/>}/>
      </Routes>
  </Fragment>
    )
  }
}

export default AppRouter
