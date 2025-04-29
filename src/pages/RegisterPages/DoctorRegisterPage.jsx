import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import DoctorRegister from '../../components/Regsiter/DoctorRegister'

export class DoctorRegisterPage extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <DoctorRegister/>
      </div>
    )
  }
}

export default DoctorRegisterPage
