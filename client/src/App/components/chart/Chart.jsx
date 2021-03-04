import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {options} from './options'

const Chart = ({series}) => {
  return (
    <ReactApexChart options={options} series={series} type='bar' height={350}/>
  )
}

export default Chart
