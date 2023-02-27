import React from "react";
import ReactApexChart from "react-apexcharts";
import { barChartData, categories } from "../helpers/dummyData.js";

export default function BarChartGraph() {

    const series = [{
        name: 'Visitors',
        data: barChartData
    }]

    const options = {
        chart: {
            type: 'bar',
            height: 200,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadiusApplication: 'around',
                borderRadius: 2,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            opposite: true
        },
        fill: {
            opacity: 1,
            colors: ['#1156bd']
        },
        tooltip: {
            x: {
                formatter: (val) => "Visitor ID: " + val
                
            },
            y: {
                formatter: (val) => "Number of visits = " + val  
            }
        }
    }

    return <main className="px-3">
        < ReactApexChart options={options} series={series} type="bar" height={200} />
    </main >

}
