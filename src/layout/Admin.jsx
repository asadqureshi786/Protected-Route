import React from 'react'
import Header from '../comonents/Header'
import { Outlet } from 'react-router-dom'
export default function Admin() {
  return (
    <>
        <Header name="Admin Header" />
      <div className="container">
           <Outlet/>
      </div>
    </>
  )
}
