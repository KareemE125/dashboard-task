import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../context/AppContext.js'
import SideNavbar from './SideNavbar.jsx'
import TopNavbar from './TopNavbar.jsx'



export default function RootLayout() {

  const { isSideOpen } = useContext(AppContext)

  return <>
    <SideNavbar />
    <TopNavbar />
    <div className={`${isSideOpen? 'pl-72' : 'pl-7'} pt-12 pr-7`}>
      <Outlet></Outlet>
    </div>
  </>
}
