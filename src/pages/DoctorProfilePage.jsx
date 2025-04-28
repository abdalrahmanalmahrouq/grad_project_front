import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import DoctorProfile from '../components/Clinics/DoctorProfile'
import Footer from '../components/Footer/Footer'

export class DoctorProfilePage extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <DoctorProfile/>
        <Footer/>
      </div>
    )
  }
}

export default DoctorProfilePage
