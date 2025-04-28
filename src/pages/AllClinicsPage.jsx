import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import AllClinics from '../components/Clinics/AllClinics'

export class AllClinicsPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav/>
        <AllClinics/>
      </div>
    )
  }
}

export default AllClinicsPage
