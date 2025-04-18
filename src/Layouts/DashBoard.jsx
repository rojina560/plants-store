import React from 'react';
import { FaAd, FaHome } from "react-icons/fa";
import {  FaCalendar, FaCartShopping, FaList } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
           <div className='bg-[#31572c] w-64 h-screen mx-auto'>
            <ul className=' menu p-4 uppercase  font-sans font-semibold text-xl'>
                <li>
                <NavLink to={'/dashboard/userHome'}> <FaHome></FaHome> User Home</NavLink>
                </li>
                <li>
                <NavLink to={'/dashboard/revervation'}> <FaCalendar></FaCalendar>Reservation</NavLink>
                </li>
                <li>
                <NavLink to={'/dashboard/cart'}> <FaCartShopping />my cart</NavLink>
                </li>
                <li>
                <NavLink to={'/dashboard/reveiw'}> <FaAd> </FaAd>add reveiw</NavLink>
                </li>
                <li>
                <NavLink to={'/dashboard/booking'}> <FaList></FaList>booking</NavLink>
                </li>
            </ul>
          

           </div>
           <div className='flex-1'>
            <Outlet></Outlet>

           </div>
        </div>
    );
};

export default DashBoard;