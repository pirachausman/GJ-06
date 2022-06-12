import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'

const PAGELINKS = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const DataVisualization = () => {
  return (
    <div className='row gy-5 g-xl-8 bg-black card pb-7 px-4 d-flex flex-row'>
      <div className='col-4 pe-5'>
        <div className='card bg-dark d-flex d-column p-5'>
          <div className='d-flex flex-row'>
            <a href='#' className='btn btn-danger flex-grow-1'>
              Lok Sabha
            </a>
            <a href='#' className='btn btn-dark flex-grow-1'>
              Vidhan Sabha
            </a>
          </div>
        </div>
      </div>
      <div className='card col-8 bg-dark'>hi</div>
    </div>
  )
}

export const DataVisualizationWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={PAGELINKS}>
        {intl.formatMessage({id: 'MENU.DATAVISUALIZATION'})}
      </PageTitle>
      <DataVisualization />
      {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
      {/* &nbsp; //{' '} */}
      {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
    </>
  )
}
