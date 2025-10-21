  import React, { useState } from 'react'
  import bg from '../assets/img/login_bg.jpg'
  import { IoMdEye , IoMdEyeOff } from "react-icons/io";
  import { Link , useNavigate } from 'react-router-dom';
  import { useEffect } from 'react';

  export default function Login() {
    
    const navigate = useNavigate();

    useEffect(()=>{
      const token = localStorage.getItem('token');
      if(token){
        navigate('/admin')
      }
    },[navigate])

    const [show,setShow] = useState(false);

    return (
      <>
        <div className="login-page">
          <div className="grid grid-cols-2 ">
            <img src={bg} alt="" className='h-[100vh] w-full object-cover p-5 rounded-[35px] ' />
            <div className="login_content flex justify-center items-center m-5">
            <div className="w-[60%]">
              <div className="head text-center">
                  <h1 className='text-[26px] font-[700] text-white ' >Welcome Back To Space Yard</h1>
                  <p className='text-[14px]' >Enter Email Password To Continue</p>
              </div>

              <form action="" className="form_content flex flex-col gap-5 mt-10">
                <div className="input-group">
                  <label htmlFor="email" className='block text-[16px] mb-2' >Email</label>
                  <input type="email" id='email' className='w-full p-3 rounded-[10px] bg-[#1e1e1e] border border-[#333]' />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className='block text-[16px] mb-2' >Password</label>
                  <div className='relative cursor-pointer'  >
                    <input type={!show ? 'password' : 'text'} id='email' className='w-full p-3 rounded-[10px] bg-[#1e1e1e] border border-[#333]' />
                  <span className='absolute top-[50%] -translate-y-[50%] right-3' onClick={()=> setShow(!show)} >
                    {
                      show ? <IoMdEye /> : <IoMdEyeOff />
                    }
                      
                    </span>
                  </div>

                </div>
                <p className="text-end text-[13px]">Forgot Password</p>
                <Link to="/admin" onClick={()=> localStorage.setItem('token','123456789')} className='btn-primary mt-4'  >Login</Link>
              </form>
            </div>

            </div>
          </div>
        </div>
      </>
    )
  }
