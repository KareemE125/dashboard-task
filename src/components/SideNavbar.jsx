import { Sidebar } from 'flowbite-react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import * as icons from '../assets/icons.js'
import ProfilePic from '../assets/images/woman-pp.jpg'
import { AppContext } from '../context/AppContext.js'


export default function SideNavbar() {

  const { isSideOpen } = useContext(AppContext)

  return <aside className={`min-w-[260px]  shadow-md fixed top-0 bottom-0 bg-white overflow-x-hidden z-50 h-full ${!isSideOpen && 'hidden'}`}>

    <header className="w-full flex justify-center items-center p-4">
      <NavLink to='/'>
        <icons.Home className='text-[28px] text-gray-500 cursor-pointer' />
      </NavLink>
    </header>

    <TopSection />
    <MiddleSection />
    <BottomSection />
  </aside>
}

function TopSection() {
  return <section className="w-full flex flex-col justify-center items-center border-t-2 p-4">

    <div className='relative'>
      <img className='rounded-full w-32' src={ProfilePic} alt='profile pic' />
      <div className='absolute bottom-0 right-0 bg-white p-2 rounded-full' >
        <icons.Sun className='text-xl text-gray-500 font-bold' />
      </div>
    </div>

    <div className='relative mt-3'>
      <p className='text-gray-800 font-bold'>Martha Blair</p>
      <div className='absolute right-[-14px] top-0 bg-green-400 p-1 rounded-full w-1 mt-2.5'></div>
    </div>

    <p className='text-gray-500'>Developer</p>

  </section>
}

function MiddleSection() {
  return <section className="w-full border-t-2 px-2 pb-6">
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup >

          <Sidebar.Collapse icon={icons.Dashboard} label="Dashboard" style={{ fontWeight: '500' }}>
            <Sidebar.Item href="#"> Page Visitors </Sidebar.Item>
            <Sidebar.Item href="#"> Post Performance </Sidebar.Item>
            <Sidebar.Item href="#"> Team Overall </Sidebar.Item>
          </Sidebar.Collapse>
          <div className='border-b-1'></div>

          <Sidebar.Item href="#" icon={icons.Calender}>
            <p className='font-medium'>Calender</p>
          </Sidebar.Item>
          <div className='border-b-1'></div>

          <Sidebar.Item href="#" icon={icons.Inbox}>
            <div className='flex justify-between font-medium'>
              Inbox
              <div className='flex flex-col'>
                <icons.ArrowHeadUp className='text-xs text-gray-500' />
                <icons.ArrowHeadDown className='text-xs text-gray-500' />
              </div>
            </div>
          </Sidebar.Item>
          <div className='border-b-1'></div>

          <Sidebar.Item href="#" icon={icons.Money} >
            <p className='font-medium'>Invoicing</p>
          </Sidebar.Item>
          <div className='border-b-1'></div>

          <Sidebar.Item href="#" icon={icons.Tube}>
            <p className='font-medium'>Lab / Experimental</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <div className='border-b-1'></div>

      </Sidebar.Items>
    </Sidebar>

    <div className='flex flex-col gap-3 px-5 mt-3 mb-10 text-14 text-gray-700 font-medium'>
      <p className='uppercase text-gray-400'>Recently Viewed</p>
      <div className='flex justify-between items-center'>
        Overall Performance
        <icons.ArrowRight />
      </div>
      <div className='flex justify-between items-center'>
        Invoice #940
        <icons.ArrowRight />
      </div>
      <div className='flex justify-between items-center'>
        Customer: John Doe
        <icons.ArrowRight />
      </div>
    </div>

  </section>
}

function BottomSection() {
  return <footer className="w-full p-4 border-t-2">
    <p className='text-sm'>
      Eng: <span className='font-medium'>Kareem Ezzat</span>
      <br />
      +20 111 8008 160
    </p>
  </footer>
}