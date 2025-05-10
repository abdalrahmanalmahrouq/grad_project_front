import React, { Component } from 'react'
import TopNav from '../../components/TopNavigation/TopNav'
import LabRegister from '../../components/Regsiter/LabRegister'

export class LabRegisterPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav/>
        <LabRegister/>
      </div>
    )
  }
}

export default LabRegisterPage
