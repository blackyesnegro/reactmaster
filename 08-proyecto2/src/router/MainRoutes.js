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
          <Routes>
              <Route to="/" element={<Home />}/>
              <Route to="/services" element={<Services />}/>
              <Route to="/portfolio" element={<Portfolio />}/>
              <Route to="/curricullum" element={<Curricullum />}/>
              <Route to="/contact" element={<Contact />}/>
          </Routes>
          <hr />
          {/* Footer */}
          <Footer />

        </BrowserRouter>
  )
}
