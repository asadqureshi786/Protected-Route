import React from 'react'
import bg from '../assets/img/login_bg.jpg'
export default function Login() {
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
                <input type="email" id='email' className='w-full p-3 rounded-[10px] bg-[#1e1e1e] border border-[#333]' />
              </div>
              <p className="text-end text-[13px]">Forgot Password</p>
              <button className='bg-primary' >Login</button>
            </form>
           </div>

          </div>
        </div>
      </div>
    </>
  )
}
