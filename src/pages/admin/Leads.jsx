import React from 'react'
import Banner from '../admin/../../comonents/Banner'

export default function Leads() {
  const data = {
    title : 'Leads Agents Non Top Makers Georgia Makers With Unlimited Setups',
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi blanditiis consequatur, sint, excepturi ipsa harum sunt fugiat iste nesciunt voluptates! Labore tempore, quod debitis itaque consequuntur culpa quis alias vero nemo fuga blanditiis perspiciatis sed libero placeat corrupti, dignissimos minus velit odio at ad maiores modi dolorem hic est?',
  }
  return (
    <>
      <Banner title={data.title} desc={data.desc}  />
    </>
  )
}
