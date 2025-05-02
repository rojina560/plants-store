import React from 'react';
import { FaAd, FaHome } from "react-icons/fa";
import {  FaCalendar, FaCartShopping, FaList } from 'react-icons/fa6';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const DashBoard = () => {
    const [cart] = useCart()
    // TODO: get isAdmin value from the database
    const isAdmin = true;
    return (
        <div className='flex'>
           <div className='bg-[#31572c] w-64 h-screen mx-auto'>
            <ul className=' menu p-4 uppercase  font-sans font-semibold text-xl'>
                {
                    isAdmin ? <> <li>
                    <NavLink to={'/dashboard/adminHome'}> <FaHome></FaHome> admin Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/addItems'}> <GiForkKnifeSpoon />add items</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/manageItems'}> <FaList />manage items</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/allUsers'}> <FaAd> </FaAd>all user</NavLink>
                    </li>
                    </>: <>
                    <li>
                    <NavLink to={'/dashboard/userHome'}> <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/revervation'}> <FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/cart'}> <FaCartShopping />my cart {cart.length}</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/reveiw'}> <FaAd> </FaAd>add reveiw</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/booking'}> <FaList></FaList>booking</NavLink>
                    </li></>
                    
                }
                <div className='divider'></div>
                <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                <li><NavLink><FaHome></FaHome> items</NavLink></li>
                <li><NavLink><FaHome></FaHome> shop</NavLink></li>
                <li><NavLink><FaHome></FaHome> contact</NavLink></li>
               
               
                
            </ul>
          

           </div>
           <div className='flex-1'>
            <Outlet></Outlet>

           </div>
        </div>
    );
};

export default DashBoard;