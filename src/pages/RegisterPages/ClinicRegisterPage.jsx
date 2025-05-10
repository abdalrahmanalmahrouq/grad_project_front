import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import ClinicRegister from '../../components/Regsiter/ClinicRegister'

export class ClinicRegisterPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav/>
        <ClinicRegister/>
      </div>
    )
  }
}

export default ClinicRegisterPage
