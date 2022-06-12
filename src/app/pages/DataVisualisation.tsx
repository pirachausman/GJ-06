import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import {ChartsWidget9} from '../../_metronic/partials/widgets/charts/ChartsWidget9'

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
    <div className='row gy-5 card pb-7 pe-lg-3 d-flex flex-lg-row'>
      <div className='col-lg-4'>
        <div className='card d-flex d-column p-5 card-stretch h-100'>
          <div className='d-flex flex-row'>
            <button className='btn btn-danger flex-grow-1'>Lok Sabha</button>
            <button className='btn flex-grow-1'>Vidhan Sabha</button>
          </div>
          <div className='d-flex flex-row pt-15 border-bottom border-gray-800 pb-6'>
            <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
              <label className='form-label text-gray-500 fs-4'>State</label>
            </div>

            <select
              className='form-select form-select-solid flex-grow-1 border-0'
              data-control='select2'
              data-placeholder='select'
            >
              <option value='1'>select</option>
              <option value='2'>Option 1</option>
              <option value='3'>Option 2</option>
            </select>
          </div>
          <div className='d-flex flex-row pt-4 border-bottom border-gray-800 pb-6'>
            <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
              <label className='form-label text-gray-500 fs-4'>Variable</label>
            </div>

            <select
              className='form-select form-select-solid flex-grow-1 border-0'
              data-control='select2'
              data-placeholder='select'
            >
              <option value='1'>select</option>
              <option value='2'>Option 1</option>
              <option value='3'>Option 2</option>
            </select>
          </div>
          <div className='d-flex flex-row pt-4 border-bottom border-gray-800 pb-6'>
            <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
              <label className='form-label text-gray-500 fs-4'>Visualization</label>
            </div>

            <select
              className='form-select form-select-solid flex-grow-1 border-0'
              data-control='select2'
              data-placeholder='select'
            >
              <option value='1'>select</option>
              <option value='2'>Option 1</option>
              <option value='3'>Option 2</option>
            </select>
          </div>
          <div className='form-check form-check-custom form-check-solid pt-4'>
            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
            <label className='form-check-label text-gray-500 fs-6'>Show AC Segments</label>
          </div>
        </div>
      </div>
      <div className='col-lg-8 ps-3 px-lg-0'>
        <div className='card'>
          <ChartsWidget9 className={''} />
        </div>
      </div>
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
