import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import TopPageDetails from '../components/TopPageDetails/TopPageDetails';
 class ServicesPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div>
        <TopNav button="ابدأ الآن"/>
        <TopPageDetails pageTitle="خدماتنا"/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}

export default ServicesPage
