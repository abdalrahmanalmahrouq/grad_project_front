import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import PatientLogin from '../../components/Login/PatientLogin'

export class PatientLoginPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div>
        <TopNav/>
        <PatientLogin/>

      </div>
    )
  }
}

export default PatientLoginPage
