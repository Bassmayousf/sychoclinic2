import React, { Fragment } from 'react';
import Navv from '../components/nav/Navv';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
  
  <Fragment>
<Navv/>
    <main>
      <Outlet/>      
    </main>
    <Footer/>
  </Fragment>
  );
}

export default Layout;
