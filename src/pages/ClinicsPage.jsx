import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import ClinicsDetails from '../components/Clinics/ClinicsDetails'
import Footer from '../components/Footer/Footer'
import TopPageDetails from '../components/TopPageDetails/TopPageDetails'

 class ClinicsPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav />
        <TopPageDetails pageTitle="العيادات"/>
        <ClinicsDetails/>
        <Footer/>
      </div>
    )
  }
}

export default ClinicsPage
