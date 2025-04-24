import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import TopBanner from '../components/TopBanner/TopBanner'
import FeatureBanner from '../components/TopBanner/FeatureBanner'
import AboutHome from '../components/About/AboutHome'
import States from '../components/About/States'
import Features from '../components/About/Features'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import ContactHome from '../components/Contact/ContactHome'
import HeroCarousel from '../components/TopBanner/HeroCarousel'
 class HomePage extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
}
  render() {
    return (
      <div>
        <TopNav />
        <TopBanner/>
        {/* <HeroCarousel/> */}
        <FeatureBanner/>
        <AboutHome/>
        <States/>
        <Features/>
        <Services/>
        <ContactHome/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
