import { Progress } from 'flowbite-react'
import React from 'react'
import BarChartGraph from '../components/BarChartGraph.jsx'
import AreaGraph from '../components/AreaGraph.jsx'
import DropDownSelect from '../components/DropDownSelect.jsx'
import { BoxArrow } from '../assets/icons.js'
import { areaData1, areaData2, areaData3, areaData4, lables, tableOneData, tableTwoData } from '../helpers/dummyData.js'
import AreaGraphCard from '../components/AreaGraphCard.jsx'

export default function Home() {

  return <>
    <main className='pt-8 font-bold'>

      <SectionOne />

      <SectionTwo />

      <SectionThree />

    </main>
  </>
}

function SectionOne() {
  return <section className='rounded-md shadow-md border-1 mb-6'>

    <section className='p-4 flex justify-between items-center'>
      <h2 className='text-lg'>Daily Visitors</h2>
      <div className='flex gap-2'>
        <DropDownSelect list={["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]} />
        <DropDownSelect list={["2023", "2022", "2021"]} />
      </div>
    </section>

    <div className='border-b-1 mb-4'></div>

    <BarChartGraph />
  </section>
}

function SectionTwo() {

  return <section className='grid grid-cols-12 gap-8 mb-6'>
    <AreaGraphCard
      name='Realtime Users'
      number='53'
      percent='+9.8'
      data={areaData1}
      labels={lables}
      color={'#1156bd'}
      strokeColor={'#008ffb'}
    />
    <AreaGraphCard
      name='Total Visits'
      number='54,598'
      percent='-11.9'
      data={areaData2}
      labels={lables}
      color={'#56a562'}
      strokeColor={'#27a97d'}
    />
    <AreaGraphCard
      name='Realtime Users'
      number='73.67%'
      percent='+12.2'
      data={areaData3}
      labels={lables}
      color={'#1156bd'}
      strokeColor={'#008ffb'}
    />
    <AreaGraphCard
      name='Total Visits'
      number='1m 4s'
      percent='+19.6'
      data={areaData4}
      labels={lables}
      color={'#56a562'}
      strokeColor={'#27a97d'}
    />
  </section>
}

function SectionThree() {

  function RowVisited({ row }) {
    return <tr className='border-b-1'>
      <td className='pr-4'>
        <div className='flex justify-between items-center pr-2'>
          {row.pageName}
          <BoxArrow className='text-16' />
        </div>
      </td>
      <td className='pr-4'>{row.visitors}</td>
      <td className='pr-4'>{row.upv}</td>
      <td className='pr-4'>{row.rate}</td>
      <td>
        <AreaGraph
          data={areaData3}
          labels={lables}
          color={'#1156bd'}
          strokeColor={'#008ffb'}
          height={80}
        />
      </td>
    </tr>
  }

  function RowSocial({ row }) {
    return <tr className='border-b-1'>
      <td className='pr-4 py-6'>{row.network}</td>
      <td className='pr-4 py-6'>{row.visitors}</td>
      <td className=' py-2  min-w-[100px]'>
        <Progress
          progress={row.progress}
          color="blue"
          labelProgress={true}
        />
      </td>
    </tr>
  }

  return <section className='grid grid-cols-12 gap-8'>

    <section className='col-span-12 xl:col-span-8 rounded-md shadow-md border-1 mb-6'>
      <h2 className='p-4 text-lg'>Most Visited Pages</h2>
      <div className='border-b-1 mb-2'></div>
      <div className='px-4'>
        <table class="w-full text-gray-500 text-sm">
          <thead className='text-gray-400 text-left border-b-1 mb-4'>
            <tr>
              <th className='py-2'>PAGE NAME</th>
              <th className='py-2'>VISITORS</th>
              <th className='py-2'>UNIQUE PAGE VISITS</th>
              <th className='py-2'>BOUNCE RATE</th>
            </tr>
          </thead>
          <tbody>
            {
              tableOneData.map((row, index) => <RowVisited key={`${index}#${row}`} row={row} />)
            }
          </tbody>
        </table>
      </div>

    </section>

    <section className='col-span-12 xl:col-span-4 rounded-md shadow-md border-1 mb-6'>
      <h2 className='p-4 text-lg'>Social Media Traffic</h2>
      <div className='border-b-1 mb-2'></div>
      <div className='px-4'>
        <table class="w-full text-gray-500 text-sm">
          <thead className='text-gray-400 text-left border-b-1 mb-4'>
            <tr>
              <th className='py-2'>Network</th>
              <th className='py-2'>VISITORS</th>
            </tr>
          </thead>
          <tbody>
            {
              tableTwoData.map((row, index) => <RowSocial key={`${index}#${row}`} row={row} />)
            }
          </tbody>
        </table>
      </div>

    </section>

  </section>
}
