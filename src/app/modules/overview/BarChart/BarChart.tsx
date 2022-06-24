/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../../_metronic/assets/ts/_utils'

type Props = {
  className: string
  title: string
  options: any
}

const BarChart: React.FC<Props> = ({className, title, options}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chartOptions = getChartOptions(height)
    chartOptions.series = options.series
    chartOptions.xaxis!.categories = options.xaxis?.categories
    chartOptions.colors = options.colors
    chartOptions.legend!.show = options.legend
    chartOptions.chart!.stacked = options.stacked

    //console.log(chartOptions, options)
    const chart = new ApexCharts(chartRef.current, chartOptions)
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, options])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1 text-white'>{title}</span>
        </h3>

        {/* begin::Toolbar */}
        {/* <div className='card-toolbar' data-kt-buttons='true'>
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
        </div> */}
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

export {BarChart}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-700')
  const borderColor = getCSSVariableValue('--bs-gray-200')

  const baseColor = getCSSVariableValue('--bs-primary')
  // const baseLightColor = getCSSVariableValue('--bs-light-primary')
  //const secondaryColor = getCSSVariableValue('--bs-info')

  return {
    series: [],
    chart: {
      type: 'bar',
      fontFamily: 'inherit',
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
      colors: ['transparent', 'transparent'],
    },
    xaxis: {
      categories: [],
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
