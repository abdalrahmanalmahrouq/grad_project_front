import React, { Component } from 'react'
import PatientRegsiterStep1 from '../../components/Regsiter/PatientRegsiterStep1'
import TopNav from '../../components/TopNavigation/TopNav'
import Footer from '../../components/Footer/Footer'
export class PatientRegisterPage1 extends Component {
  render() {
    return (
      <div>
        
        <TopNav button="تسجيل دخول"/>
        <PatientRegsiterStep1/>
        <Footer/>
      </div>
    )
  }
}

export default PatientRegisterPage1
