/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

const ChartsWidget9: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chart = new ApexCharts(chartRef.current, getChartOptions(height))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1 text-white'>
            Voter Turnout Statistics
          </span>
        </h3>

        {/* begin::Toolbar */}
        <div className='card-toolbar' data-kt-buttons='true'>
          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-danger active py-1 px-4 me-5 rounded-4 fs-9'
            id='kt_charts_widget_6_sales_btn'
          >
            <KTSVG
              path='/media/icons/duotune/arrows/arr091.svg'
              className='svg-icon-2 svg-icon-gray-500 mt-2 top-50'
            />
            Export
          </a>

          <KTSVG
            path='/media/icons/duotune/general/gen023.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} id='kt_charts_widget_6_chart' style={{height: '350px'}}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ChartsWidget9}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-700')
  const borderColor = getCSSVariableValue('--bs-gray-200')

  const baseColor = getCSSVariableValue('--bs-primary')
  // const baseLightColor = getCSSVariableValue('--bs-light-primary')
  //const secondaryColor = getCSSVariableValue('--bs-info')

  return {
    series: [
      {
        name: 'High - 2013',
        type: 'line',
        data: [50, 120, 180, 230, 290, 350, 410, 470, 530, 590, 750, 800],
      },
      {
        name: 'Net Profit',
        type: 'bar',
        data: [800, 700, 600, 500, 450, 400, 300, 250, 200, 150, 120, 100],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      stacked: true,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '80%',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      show: true,
      width: 1,
      colors: ['white', 'transparent'],
    },
    xaxis: {
      categories: [
        'US',
        'UK',
        'China',
        'Japan',
        'Germany',
        'France',
        'India',
        'Spain',
        'Italy',
        'Russia',
        'Norway',
        'Canada',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      max: 800,
      tickAmount: 4,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    markers: {
      size: 5,
    },
    colors: [
      baseColor,
      function ({value, seriesIndex, dataPointIndex, w}: any) {
        // console.log(value, seriesIndex, dataPointIndex, w)
        if (value > 700) {
          return 'rgba(89, 158, 190, 1)'
        } else if (value > 600) {
          return 'rgba(102, 147, 219, 1)'
        } else if (value > 500) {
          return 'rgba(100, 109, 204, 1)'
        } else if (value > 400) {
          return 'rgba(125, 101, 216, 1)'
        } else if (value > 300) {
          return 'rgba(163, 103, 220, 1)'
        } else if (value > 200) {
          return 'rgba(199, 103, 220, 1)'
        } else if (value > 100) {
          return 'rgba(220, 105, 103, 1)'
        } else {
          return 'rgba(220, 175, 103, 1)'
        }
      },
    ],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  }
}
