import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import DoctorRegister from '../../components/Regsiter/DoctorRegister'

export class DoctorRegisterPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
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
