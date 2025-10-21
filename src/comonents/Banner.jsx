import React from 'react'

export default function Banner({title,desc}) {
  return (
       <div className='h-[calc(100vh-14vh)] flex justify-start items-center' >
         <div className="text-left">
          <div className='text-[70px] font-[600] mb-5' >
              <h1 className='leading-[75px]' >{title}</h1>
          </div>
          <p className=' text-[#fff] text-[14px] mt-1 mb-5' >{desc}</p>
          <div className="flex justify-start">
            <button className='btn-primary' >Connect</button>
          </div>
        </div>
     </div>
  )
}
