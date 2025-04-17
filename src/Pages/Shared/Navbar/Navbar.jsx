import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoIosSearch } from 'react-icons/io';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../../Hooks/useCart';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const [cart] = useCart()
  console.log('this is cart',cart);
  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.log(error);
    })
  }
  const navLinks = <>
  <Link> Home
  </Link>
  <Link> Pages
  </Link>
  <Link> Portfolio
  </Link>
  <Link> Blog
  </Link>
  <Link to={'/shop'}> Shop
  </Link>
  
  </>
    return (
        <div className="navbar fixed z-10 bg-[#90a955] shadow-sm p-4">
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
        <Link>
        <div className='flex items-center gap-1 p-2 '>
        <button className='text-red-500 font-bold text-2xl'>+{cart.length}</button>
        <FaCartShopping className='text-4xl'></FaCartShopping>
        </div>
        </Link>
          <IoIosSearch  className='text-4xl'></IoIosSearch>
          {user ? <button onClick={handleLogout} className="btn border-none bg-[#31572c]">logout</button>:<Link to={'/login'}>   <button className="btn border-none bg-[#31572c]">login</button></Link> }
       
        </div>
      </div>
    );
};

export default Navbar;