import React, { Component } from 'react'
import PatientRegsiterStep1 from '../../components/Regsiter/PatientRegsiter'
import TopNav from '../../components/TopNavigation/TopNav'
import Footer from '../../components/Footer/Footer'
export class PatientRegisterPage1 extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        
        <TopNav />
        <PatientRegsiterStep1/>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default PatientRegisterPage1
