import React, { Component } from 'react'
import PatientRegsiter from '../../components/Regsiter/PatientRegsiter'
import TopNav from '../../components/TopNavigation/TopNav'


export class PatientRegisterPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        
        <TopNav />
        <PatientRegsiter/>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default PatientRegisterPage
