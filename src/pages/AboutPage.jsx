import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'

import AboutDetails from '../components/About/AboutDetails'
import Footer from '../components/Footer/Footer'
import TopPageDetails from '../components/TopPageDetails/TopPageDetails'
import AboutHome from '../components/About/AboutHome'

export class AboutPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div dir='rtl'>
        <TopNav />
        <TopPageDetails pageTitle="من نحن"/>
        {/* <AboutHome/>    */}
        <AboutDetails/>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage
