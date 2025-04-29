import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import LabLogin from '../../components/Login/LabLogin'

export class LabLoginPage extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <LabLogin/>
        
      </div>
    )
  }
}

export default LabLoginPage
