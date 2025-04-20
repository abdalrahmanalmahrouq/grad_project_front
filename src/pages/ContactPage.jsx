import React, { Component } from 'react'
import TopNav from '../components/TopNavigation/TopNav'
import ContactHome from '../components/Contact/ContactHome'
import Footer from '../components/Footer/Footer'
import TopPageDetails from '../components/TopPageDetails/TopPageDetails';

 class ContactPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div>
        <TopNav/>
        
        <TopPageDetails pageTitle="تواصل معنا"/>
        <ContactHome/>
        <Footer/>
      </div>
    )
  }
}

export default ContactPage
