/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {Chart} from 'chart.js'

type Props = {
  className: string
  title: string
  options: any
}

const PieChart: React.FC<Props> = ({className, title, options}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    //const height = parseInt(getCSS(chartRef.current, 'height'))

    new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: '# of ballets',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
    // chartOptions.series = options.series
    //chartOptions.labels = options.labels
    // chartOptions.xaxis!.categories = options.xaxis?.categories
    // chartOptions.colors = options.colors
    // chartOptions.legend!.show = options.legend
    // chartOptions.chart!.stacked = options.stacked

    // if (chart) {
    //   chart.render()
    // }

    // return () => {
    //   if (chart) {
    //     chart.destroy()
    //   }
    // }
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
        <canvas ref={chartRef} id='kt_charts_widget_6_chart' style={{height: '350px'}}></canvas>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {PieChart}
