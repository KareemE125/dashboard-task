import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function AreaGraph({ name, data, labels, color, strokeColor, height }) {

    const series = [{
        name: name,
        data: data
    }]

    const options = {
        chart: {
            type: 'area',
            height: 150,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        grid: {
            show: false,
            column: {
                colors: undefined,
                opacity: 0
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            colors: [strokeColor],
        },
        labels: labels,
        xaxis: {
            position: 'top',
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            opposite: true,
            show: false,
        },
        fill: {
            opacity: 1,
            colors: [color]
        },
    }

    return <main className='mx-[-10px] mb-[-20px]'>
        <ReactApexChart options={options} series={series} type="area" height={height || 150} width={height && height+60 } />
    </main>
}