import React from 'react';
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import {Home} from '../components/Home';
import {Services} from '../components/Services';
import {Portfolio} from '../components/Portfolio';
import {Curricullum} from '../components/Curricullum';
import {Contact} from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MainRoutes = () => {
  return (
        <BrowserRouter>
          {/* Header y Navigation*/}
          <HeaderNav />

          {/* Main Content */}
          <section className='content'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/curricullum" element={<Curricullum />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
          </section>
          
          {/* Footer */}
          <Footer />

        </BrowserRouter>
  )
}
