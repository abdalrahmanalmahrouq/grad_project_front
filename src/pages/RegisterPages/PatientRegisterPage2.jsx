import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import Footer from '../../components/Footer/Footer'
import PatientRegisterStep2 from '../../components/Regsiter/PatientRegisterStep2'

export class PatienRegisterPage2 extends Component {
  render() {
    return (
      <div>
        <TopNav button="تسجيل دخول"/>
        <PatientRegisterStep2/>
        <Footer/>
      </div>
    )
  }
}

export default PatienRegisterPage2
