import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,name);
        const userInfo = {name,email,}
        createUser(email,password)
        .then(result =>{
          axiosPublic.post('/user',userInfo)
          .then(res => {
           if(res.data.insertedId){
            form.reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/login')
           }
          })
        })
        .catch(error =>{
          console.log(error);
        })

      }
    return (
        <div>
        <div className="hero min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        
      </div>                                                                                     
      <div className="card bg-[#90a955]  w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input name='name' type="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full bg-[#31572c] border-none">register</button> 
           
          </div>
        </form>
        <span className='text-white text-center'>  already have an account <Link to={'/login'} className='text-violet-800 underline'>login</Link></span>
        <SocialLogin></SocialLogin>
        
      </div>
    </div>
  </div>
      </div>
    );
};

export default Register;