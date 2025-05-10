import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import ClinicLogin from '../../components/Login/ClinicLogin'

export class ClinicLoginPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
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
