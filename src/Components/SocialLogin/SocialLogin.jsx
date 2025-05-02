import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result =>{
            const userInfo = {
                email: result?.user?.email
    
            }
            axiosPublic.post('/user', userInfo)
            .then(res =>{
                console.log(res.data);
            })
            
        })
    }
    return (
        <div>
            <div className='divider'>
                
            </div>
          <div className='flex justify-center pb-4 text-4xl font-semibold'>  <button className='btn text-red-600 ' onClick={handleGoogleLogin}><FaGoogle></FaGoogle>Google</button></div>
        </div>
    );
};

export default SocialLogin;