import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import AppointmentsSchedule from '../components/Clinics/AppointmentsSchedule'
import Footer from '../components/Footer/Footer'

export class AppointmentsSchedulePage extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <AppointmentsSchedule/>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default AppointmentsSchedulePage
