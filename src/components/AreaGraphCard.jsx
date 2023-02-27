import React from 'react'
import { ArrowDownLeft, ArrowUpRight } from '../assets/icons.js'
import AreaGraph from './AreaGraph.jsx'

export default function AreaGraphCard(props) {

    return <section className='col-span-12 sm:col-span-6 xl:col-span-3'>
        <div className='rounded-md shadow-md border-1 p-4 pt-6 pb-0'>

            <div className='flex flex-col justify-center items-center gap-3'>
                <p className='uppercase text-16 font-normal text-gray-400'>{props.name}</p>
                <h3 className='text-5xl font-normal'>{props.number}</h3>
                <div className={`flex justify-center items-center gap-2 ${props.percent[0] === '+'? 'text-green-500':'text-red-500'}`}>
                    <span >{props.percent}%</span>
                    {
                       props.percent[0] === '+'
                       ? <ArrowUpRight />
                       : <ArrowDownLeft />
                    }
                </div>
            </div>
            <AreaGraph {...props} />

        </div>
    </section>

}
