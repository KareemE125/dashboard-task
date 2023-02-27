import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.js'
import * as icons from '../assets/icons.js'
import DropDownSelect from './DropDownSelect.jsx'


export default function TopNavbar() {

    const { isSideOpen, toggleSideBar } = useContext(AppContext)

    return <nav className={`flex justify-between items-center fixed left-0 right-0 top-0 bg-white py-4 shadow-md pr-7 z-40 ${isSideOpen ? 'pl-72' : 'pl-3'}`}>
        <div className='flex justify-between items-center'>
            {
                isSideOpen
                    ? <icons.on className='text-xl text-green-400 mt-0.5' onClick={toggleSideBar} />
                    : <icons.off className='text-xl text-red-400 mt-0.5' onClick={toggleSideBar} />
            }
            <h1 className='font-bold text-xl pl-2 text-gray-700'>Dashboard</h1>
        </div>

        <DropDownSelect list={["EN","AR","FR"]}/>
    </nav>
}
