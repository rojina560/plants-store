import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { replace, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    login(email,password)
    .then(result =>{
      console.log(result.user);
      navigate(from,{replace:(true)})
    })
    .catch(error=>{
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
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn bg-[#31572c] border-none">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;