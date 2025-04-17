import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Layouts = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('/plants/')
    return (
        <div>
          {noHeaderFooter || <Navbar></Navbar>}
            <div className='min-h-[calc(100vh-300px)]'><Outlet></Outlet></div>
           {noHeaderFooter ||  <Footer></Footer>
           }
        </div>
    );
};

export default Layouts;