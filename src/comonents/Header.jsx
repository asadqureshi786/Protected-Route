import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
        <header className="shadow-md border-gray-800  border-b-1" >
      <div className="container mx-auto max-w-[1200px]">
          <ul className="text-[16px] flex justify-center gap-10 py-8" >
          <li><Link to="/admin/home">Home</Link></li>
          <li><Link to="/admin/agents">Agents</Link></li>
          <li><Link to="/admin/leads">Leads</Link></li>
          <li><Link to="/admin/customization">Customization</Link></li>
          <li><Link to="/admin/policy">Add Policy</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
        </ul>
      </div>
        </header>
    </>
  )
}
