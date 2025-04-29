import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import ClinicLogin from '../../components/Login/ClinicLogin'

export class ClinicLoginPage extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <ClinicLogin/>
      </div>
    )
  }
}

export default ClinicLoginPage
