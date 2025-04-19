import React  ,{ useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Vendor CSS
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

// Your main styles
import './assets/css/main.css';
import AboutHome from './components/About-Home-Page/AboutHome';
import States from './components/About-Home-Page/States';
import Features from './components/About-Home-Page/Features';
import Services from './components/Services-Home-Page/Services';
import ContactHome from './components/Contact-Home-Page/ContactHome';
import Footer from './components/Footer/Footer';




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
     <BrowserRouter>
     <TopNavigation/>
     <TopBanner/>
     <AboutHome/>
     <States/>
     <Features/>
     <Services/>
     <ContactHome/>
     <Footer/>
        {/* <AppRouter/> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
