import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import AboutHome from '../components/About/AboutHome'
import AboutDetails from '../components/About/AboutDetails'
import Footer from '../components/Footer/Footer'
import TopPageDetails from '../components/TopPageDetails/TopPageDetails'

export class AboutPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div>
        <TopNav button="ابدأ الآن"/>
        <TopPageDetails pageTitle="من نحن"/>
        <AboutHome/>
        <AboutDetails/>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage
