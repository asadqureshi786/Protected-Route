import React from 'react'
import Profile from '../../assets/img/profile.png'
export default function Settings() {
  return (
    <>
      <div className='h-[calc(100vh-14vh)]  py-[50px] ' >
        <div className='grid grid-cols-12 gap-10 h-full'>
          <div className='col-span-2' >
            <div className='porfile_show flex justify-center'>
              <img src={Profile} className="w-full object-cover rounded-2xl" ></img>
            </div>
              <button className='bg-primary w-full py-2 rounded-md mt-2  text-[13px] cursor-pointer'>Upload Image</button>
          </div>
          <div className='col-span-10 border-l-1  border-gray-800 ps-9' >
            <form className='grid grid-cols-3 gap-5' > 
                <div className='group'>
                  <label>Name</label>
                  <input type='text' placeholder='Name' />
                </div>
                <div className='group'>
                  <label>Email</label>
                  <input type='text' placeholder='Name' />
                </div>
                <div className='group'>
                  <label>Password</label>
                  <input type='text' placeholder='Name' />
                </div>
                <div className='group'>
                  <label>Confrim Password</label>
                  <input type='text' placeholder='Name' />
                </div>
            </form>
            <div className='flex justify-end' >
              <button className='bg-primary text-[13px] px-[20px] py-[8px] rounded-md'>Updae</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
