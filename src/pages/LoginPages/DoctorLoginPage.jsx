import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import DoctorLogin from '../../components/Login/DoctorLogin'

export class DoctorLoginPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav/>
        <DoctorLogin/>
      </div>
    )
  }
}

export default DoctorLoginPage
