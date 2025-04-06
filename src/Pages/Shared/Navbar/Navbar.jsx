import React from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from 'react-icons/io';

const Navbar = () => {
  const navLinks = <>
  <Link> Home
  </Link>
  <Link> Pages
  </Link>
  <Link> Portfolio
  </Link>
  <Link> Blog
  </Link>
  <Link> Shop
  </Link>
  <Link> Contact
  </Link>
  </>
    return (
        <div className="navbar bg-[#90a955] shadow-sm p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-[#31572c] border-none lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <h1 className=" ml-2 text-2xl font-serif">Pants store</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <div className='flex gap-8 text-xl'>{navLinks}
           </div>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <HiShoppingBag className='text-4xl'></HiShoppingBag>
          <IoIosSearch  className='text-4xl'></IoIosSearch>
          <button className="btn border-none bg-[#31572c]">Login</button>
        </div>
      </div>
    );
};

export default Navbar;